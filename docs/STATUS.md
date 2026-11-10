# Projektstatus – lhls.se (uppdaterad 2026-11-10)

**Stack:** Next.js 16 (App Router, statisk export) + Tailwind 4 → GitHub Pages via Actions.
**Design:** strikt svartvitt UI, Archivo (rubriker) + Inter (brödtext), självhostade. Logotyp: `public/logo-*.svg`.

## Sidor
Start (hero + val) · Mark & anläggning · Lokalvård & Stugservice · Referenser (galleri) · Om oss · Kontakt · 404 · omdirigeringssidor för gamla URL:er.

## Driftlägen (styrs av repo-variabeln `SITE_URL`)
- Ej satt → förhandsvisning `https://gabrielsoors-cmd.github.io/lhls/`, `noindex`, robots disallow.
- `https://www.lhls.se` → produktion, indexerbar, sitemap + robots.

## Att göra innan lansering
1. Pages: Settings → Pages → Source = GitHub Actions.
2. Bekräfta gamla URL:er i `content/redirects.ts` (nu kvalificerade gissningar).
3. Google-omdömen: skapa API-nyckel + `GOOGLE_PLACE_ID` (se README).
4. Search Console: verifiera via DNS (Domain-egenskap) eller `GOOGLE_SITE_VERIFICATION`; skicka in `/sitemap.xml`.
5. DNS-flytt + `SITE_URL` + custom domain i Pages (se README).
6. Linus/Hampus granskar texter (särskilt: 7 km snökanonledning, PE-svetsning, 10 års garanti, Lokalvård/Stugservice-copy).
7. Villkor/integritetspolicy: texter saknas (gamla sidan hade dem).

## Kända fallgropar
- GitHub Pages saknar bildoptimering → `scripts/optimize-images.mjs` + `lib/image-loader.ts` (synka bredder i båda + `next.config.ts`).
- `NEXT_PUBLIC_*`-variabler som är tomma strängar: använd `||`, inte `??`.
- Originalbilder ligger i `assets/` (ej `public/`); varianter genereras till `public/img/` vid bygge (git-ignorerat).
