# LHLS AB – webbplats

Next.js 16 (App Router) + Tailwind 4. Helt statisk sida, tänkt att hostas på Vercel.

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

Sätt `NEXT_PUBLIC_SITE_URL` (t.ex. `https://www.lhls.se`) i Vercel så blir canonical-länkar och sitemap rätt.
