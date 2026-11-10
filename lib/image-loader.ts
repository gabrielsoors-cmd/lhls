import sizes from "./image-sizes.generated.json";

/**
 * Egen bildladdare för statisk export (GitHub Pages har ingen bildoptimerare).
 * Pekar på de förgenererade varianterna från scripts/optimize-images.mjs.
 * Behåll WIDTHS synkade med skriptet och med images.deviceSizes i next.config.ts.
 */
const WIDTHS = [480, 960, 1440, 1920, 2560];
const max = sizes as Record<string, number>;

export default function imageLoader({ src, width }: { src: string; width: number }) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const wanted = WIDTHS.find((x) => x >= width) ?? WIDTHS[WIDTHS.length - 1];
  const w = Math.min(wanted, max[src] ?? wanted);
  return `${base}/img${src.replace(/\.(jpe?g|png)$/i, "")}-${w}.webp`;
}
