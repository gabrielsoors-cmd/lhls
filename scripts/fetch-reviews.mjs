// Hämtar företagets Google-omdömen (Places API) vid varje bygge.
// Körs i GitHub Actions med hemligheten GOOGLE_PLACES_API_KEY och variabeln
// GOOGLE_PLACE_ID. Saknas någon av dem hoppar skriptet över steget och sidan
// byggs utan omdömen (eller med de manuella i content/reviews.ts).
//
// Resultatet skrivs till content/reviews.generated.json (ligger i .gitignore:
// Googles villkor tillåter inte att man lagrar innehållet långvarigt, så det
// hämtas färskt vid varje bygge, och bygget körs dagligen).
import { writeFile, rm } from "node:fs/promises";

const key = process.env.GOOGLE_PLACES_API_KEY;
const placeId = process.env.GOOGLE_PLACE_ID;
const out = "content/reviews.generated.json";

if (!key || !placeId) {
  await rm(out, { force: true });
  console.log("fetch-reviews: ingen nyckel/Place ID – hoppar över.");
  process.exit(0);
}

try {
  const res = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=sv`, {
    headers: {
      "X-Goog-Api-Key": key,
      "X-Goog-FieldMask": "rating,userRatingCount,googleMapsUri,reviews",
    },
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);
  const d = await res.json();
  const data = {
    rating: d.rating ?? null,
    count: d.userRatingCount ?? null,
    url: d.googleMapsUri ?? null,
    items: (d.reviews ?? [])
      .filter((r) => r.text?.text)
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? "Google-användare",
        authorUrl: r.authorAttribution?.uri ?? null,
        rating: r.rating ?? null,
        text: r.text.text,
        when: r.relativePublishTimeDescription ?? null,
      })),
  };
  await writeFile(out, JSON.stringify(data, null, 1));
  console.log(`fetch-reviews: ${data.items.length} omdömen, snitt ${data.rating} (${data.count} st)`);
} catch (e) {
  // Ett API-fel ska aldrig stoppa en publicering.
  await rm(out, { force: true });
  console.warn("fetch-reviews: misslyckades, bygger utan omdömen:", e.message);
}
