# LHLS AB – webbplats

Next.js 16 (App Router) + Tailwind 4, statisk export. Hostas på GitHub Pages och publiceras av `.github/workflows/deploy.yml` vid varje push till `main` (samt dagligen för att uppdatera Google-omdömen).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produktionsbygge
```

## Var ändrar jag saker?

| Vad | Fil |
|---|---|
| Telefon, mejl, org.nr, Linus/Hampus roller | `lib/site.ts` |
| Tjänster och deras bilder (Mark & anläggning) | `content/services.ts` |
| Google-omdömen (visas på startsidan när listan inte är tom) | `content/reviews.ts` |
| Bilder i referensgalleriet (+ bildtexter) | `content/gallery.json` + `public/images/` |
| Hero-bilder (bildspelet på startsidan) | `components/Hero.tsx` + `public/hero/` |
| Färger och typsnitt | `app/globals.css` (`@theme`) |
| Titlar/beskrivningar för sökmotorer | `metadata` överst i varje `app/**/page.tsx` |

Logotypen är just nu text (`components/Logo.tsx`). Byt ut mot riktig logotyp när den finns.

Originalbilder ligger i `assets/`. Vid bygge skapas responsiva WebP-varianter i `public/img/` (GitHub Pages har ingen bildoptimerare).

## Publicering på GitHub Pages

1. **Aktivera:** Settings → Pages → *Build and deployment* → Source: **GitHub Actions**.
2. **Förhandsvisning** (standard): `https://gabrielsoors-cmd.github.io/lhls/` – `noindex`, syns inte i Google.
3. **Lansering på lhls.se:**
   1. Sänk TTL på DNS-posterna till 300 s dagen innan.
   2. Hos domänleverantören: `www` → CNAME `gabrielsoors-cmd.github.io`; apex (`lhls.se`) → A-poster `185.199.108.153`, `.109.153`, `.110.153`, `.111.153`.
   3. Settings → Pages → Custom domain: `www.lhls.se` → kryssa *Enforce HTTPS* när certifikatet är klart.
   4. Settings → Secrets and variables → Actions → *Variables*: `SITE_URL` = `https://www.lhls.se`. Kör workflowet (Actions → Run workflow).

## Google-omdömen
Hämtas vid varje bygge via Places API (inget lagras i repot). Kräver *Variable* `GOOGLE_PLACE_ID` och *Secret* `GOOGLE_PLACES_API_KEY` (Places API (New) aktiverat; begränsa nyckeln till den API:t). Utan dessa visas sektionen inte. Manuell reserv: `content/reviews.ts`. Länk till profilen: `googleProfileUrl` i `lib/site.ts`.

## Search Console
Enklast: lägg till egenskapen **Domän** `lhls.se` och verifiera med DNS TXT-post (kräver ingen kod). Alternativt URL-prefix `https://www.lhls.se/` + meta-tagg: sätt repo-variabeln `GOOGLE_SITE_VERIFICATION` (eller `googleSiteVerification` i `lib/site.ts`). Skicka sedan in `https://www.lhls.se/sitemap.xml`.

## Gamla adresser
`content/redirects.ts` styr omdirigeringssidorna för den gamla Google Sites-webbplatsen.
