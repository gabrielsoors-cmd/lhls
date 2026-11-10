import data from "@/content/gallery.json";

export type Category = "mark" | "finplanering" | "grunder" | "va" | "el" | "vag";

export type Photo = {
  src: string;
  cat: Category;
  alt: string;
  w: number;
  h: number;
};

export const categoryLabels: Record<Category, string> = {
  mark: "Markarbete",
  finplanering: "Finplanering",
  grunder: "Grunder",
  va: "Vatten & avlopp",
  el: "El & belysning",
  vag: "Väg",
};

export const photos = data as Photo[];

const bySrc = new Map(photos.map((p) => [p.src, p]));

/** Hämta en bild via sökväg – kastar fel vid stavfel så att bygget fallerar. */
export function photo(src: string): Photo {
  const p = bySrc.get(src);
  if (!p) throw new Error(`Okänd bild: ${src}`);
  return p;
}

/** Blandar kategorierna turvis så att "Alla" inte blir block av samma sort. */
export function interleaved(): Photo[] {
  const groups = (Object.keys(categoryLabels) as Category[]).map((c) =>
    photos.filter((p) => p.cat === c),
  );
  const out: Photo[] = [];
  const max = Math.max(...groups.map((g) => g.length));
  for (let i = 0; i < max; i++) {
    for (const g of groups) if (g[i]) out.push(g[i]);
  }
  return out;
}
