import { Gallery } from "@/components/Gallery";
import { ContactBand, PageHeader } from "@/components/Sections";
import { interleaved } from "@/lib/gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Referenser – bilder från våra jobb",
  description:
    "Bilder från tidigare uppdrag: grunder, vatten och avlopp, finplanering, el, väg och markarbete i Älvdalen och norra Dalarna.",
  path: "/referenser",
});

const projects = [
  {
    title: "Älvrestaurering i Älvdalen",
    text: "I samarbete med Länsstyrelsen fick vi möjlighet att restaurera älven i Älvdalen. Ett mycket intressant projekt där resultatet talar för sig själv.",
  },
  {
    title: "Snökanonledning, 7 km",
    text: "Långa ledningsgravar med rör och kablar genom skogsterräng, inklusive stumsvetsning av PE-rör på plats.",
  },
];

export default function Referenser() {
  return (
    <>
      <PageHeader
        eyebrow="Referenser"
        title="Bilder från våra jobb"
        lead="Ett urval från tidigare uppdrag, tagna ute på arbetsplatserna."
      />

      <section className="wrap grid gap-10 border-b border-line py-14 md:grid-cols-2 md:gap-16 md:py-20">
        {projects.map((p) => (
          <article key={p.title} className="border-t border-ink pt-6">
            <h2 className="display text-2xl md:text-3xl">{p.title}</h2>
            <p className="mt-4 max-w-md leading-relaxed text-steel">{p.text}</p>
          </article>
        ))}
      </section>

      <section className="wrap py-14 md:py-20">
        <Gallery photos={interleaved()} />
      </section>

      <ContactBand />
    </>
  );
}
