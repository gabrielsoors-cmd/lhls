// Skapar responsiva WebP-varianter av bilderna i assets/ → public/img/.
// GitHub Pages har ingen bildoptimerare, så det görs här vid bygget.
// Skriver även lib/image-sizes.generated.json (största tillgängliga storlek
// per bild) som bildladdaren använder.
import sharp from "sharp";
import { readdir, mkdir, stat, writeFile } from "node:fs/promises";
import { join, parse } from "node:path";

const WIDTHS = [480, 960, 1440, 1920, 2560]; // synka med lib/image-loader.ts
const DIRS = ["images", "hero"];
const QUALITY = 76;

const exists = async (p) => stat(p).catch(() => null);
const sizes = {};
let made = 0;

for (const dir of DIRS) {
  const srcDir = join("assets", dir);
  const outDir = join("public", "img", dir);
  await mkdir(outDir, { recursive: true });
  for (const file of await readdir(srcDir)) {
    if (!/\.(jpe?g|png)$/i.test(file)) continue;
    const src = join(srcDir, file);
    const srcStat = await stat(src);
    const { name } = parse(file);
    const { width: origW } = await sharp(src).metadata();

    // Alla storlekar under originalet + första storleken som täcker det (i originalbredd).
    const first = WIDTHS.find((w) => w >= origW) ?? WIDTHS.at(-1);
    const wanted = [...WIDTHS.filter((w) => w < origW), first];
    sizes[`/${dir}/${file}`] = first;

    for (const w of wanted) {
      const out = join(outDir, `${name}-${w}.webp`);
      const o = await exists(out);
      if (o && o.mtimeMs > srcStat.mtimeMs) continue;
      await sharp(src).rotate().resize({ width: Math.min(w, origW), withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(out);
      made++;
    }
  }
}
await writeFile("lib/image-sizes.generated.json", JSON.stringify(sizes, null, 1));
console.log(`optimize-images: ${made} filer skapade`);
