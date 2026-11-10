import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { reviews as manual } from "@/content/reviews";

export type ReviewData = {
  rating: number | null;
  count: number | null;
  url: string | null;
  items: { author: string; authorUrl?: string | null; rating?: number | null; text: string; when?: string | null }[];
  source: "google-api" | "manual";
};

/** Läses vid bygget (server-side). Google-API-data har företräde framför manuella omdömen. */
export function getReviews(): ReviewData | null {
  const file = join(process.cwd(), "content", "reviews.generated.json");
  if (existsSync(file)) {
    const d = JSON.parse(readFileSync(file, "utf8"));
    if (d.items?.length) return { ...d, source: "google-api" };
  }
  if (manual.length) {
    return { rating: null, count: null, url: null, items: manual, source: "manual" };
  }
  return null;
}
