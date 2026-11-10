# Projektstatus – lhls.se (uppdaterad 2026-11-10)

**Stack:** Next.js 16 (App Router, statisk export) + Tailwind 4 → GitHub Pages via Actions.
**Design:** strikt svartvitt UI, Archivo (rubriker) + Inter (brödtext), självhostade. Logotyp: `public/logo-*.svg`.

## Sidor
Start (hero + val + maskinförare-sektion) · Entreprenad (bildspel + 6 tjänster) · Lokalvård & Stugservice (6 tjänster) · Projekt (bildgalleri) · Referenser (större uppdrag) · Om oss · Kontakt · Allmänna villkor · Integritetspolicy · 404 · omdirigeringssidor för gamla URL:er.

## Driftlägen (styrs av repo-variabeln `SITE_URL`)
- Ej satt → förhandsvisning `https://gabrielsoors-cmd.github.io/lhls/`, `noindex`, robots disallow.
- `https://www.lhls.se` → produktion, indexerbar, sitemap + robots.

## Att göra innan lansering
1. Pages: Settings → Pages → Source = GitHub Actions.
2. Bekräfta gamla URL:er i `content/redirects.ts` (nu kvalificerade gissningar).
3. Google-omdömen: skapa API-nyckel + `GOOGLE_PLACE_ID` (se README).
4. Search Console: verifiera via DNS (Domain-egenskap) eller `GOOGLE_SITE_VERIFICATION`; skicka in `/sitemap.xml`.
5. DNS-flytt + `SITE_URL` + custom domain i Pages (se README).
6. Linus/Hampus granskar texter (särskilt: "355 mm" PE-rör i Tandådalen, snökanonledning 7 km, Om oss-texten).
7. Allmänna villkor och integritetspolicy är utkast: låt jurist/branschorganisation granska. Uppdatera policyn om analys/formulär tillkommer.
8. Kontrollera att linus@lhls.se och hampus@lhls.se finns som brevlådor.
9. Porträtt av Linus/Hampus: lägg filer i `public/people/` och sätt `photo` i `lib/site.ts`.
10. Bilder till Lokalvård & Stugservice saknas ännu.
11. SEO: startsidans titel är identisk med gamla sidans ("… | Lokal Grävmaskinist") för att behålla ranking.

## Kända fallgropar
- GitHub Pages saknar bildoptimering → `scripts/optimize-images.mjs` + `lib/image-loader.ts` (synka bredder i båda + `next.config.ts`).
- `NEXT_PUBLIC_*`-variabler som är tomma strängar: använd `||`, inte `??`.
- Originalbilder ligger i `assets/` (ej `public/`); varianter genereras till `public/img/` vid bygge (git-ignorerat).
