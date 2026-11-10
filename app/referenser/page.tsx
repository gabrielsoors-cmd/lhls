import { ContactBand, PageHeader, Pic } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";
import { mailtoSubject } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Referenser – större markuppdrag",
  description:
    "Ett urval av våra referensuppdrag: 7 km snökanonledning, stumsvetsning av 355 mm PE-rör på dambygge i Tandådalen och älvrestaurering i Älvdalen.",
  path: "/referenser/",
});

const references = [
  {
    title: "Snökanonledning, 7 km",
    text: "Sju kilometer ledningsgrav i skogsterräng, med rör, kablar och kopplingar.",
    images: ["/images/va-4757.jpg", "/images/va-4756.jpg", "/images/va-4759.jpg"],
  },
  {
    title: "Stumsvetsning av 355 mm PE-rör",
    text: "Stumsvetsning av PE-rör med dimension 355 mm på dambygge i Tandådalen.",
    images: ["/images/va-4788.jpg", "/images/va-4787.jpg"],
  },
  {
    title: "Älvrestaurering i Älvdalen",
    text: "I samarbete med Länsstyrelsen fick vi möjlighet att restaurera älven i Älvdalen. Ett mycket intressant projekt där resultatet talar för sig själv.",
    images: [],
  },
];

export default function Referenser() {
  return (
    <>
      <PageHeader
        eyebrow="Referenser"
        title="Större uppdrag"
        lead="Ett urval av uppdrag vi är extra stolta över."
      />

      <section className="wrap">
        {references.map((r, i) => (
          <article
            key={r.title}
            className="grid gap-8 border-b border-line py-14 md:grid-cols-12 md:gap-12 md:py-20"
          >
            <div className="md:col-span-5">
              <p className="eyebrow text-steel">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="display mt-5 text-3xl md:text-5xl">{r.title}</h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">{r.text}</p>
              <a
                href={mailtoSubject(`Liknande uppdrag som ${r.title}`)}
                className="mt-8 inline-flex items-center gap-3 border-b border-ink pb-1 text-sm font-medium hover:opacity-60"
              >
                Fråga om liknande uppdrag <span aria-hidden="true">→</span>
              </a>
            </div>
            {r.images.length > 0 && (
              <div className="grid grid-cols-2 gap-3 md:col-span-7 md:gap-4">
                {r.images.map((src, j) => (
                  <Pic
                    key={src}
                    src={src}
                    sizes="(min-width:768px) 29vw, 50vw"
                    className={`aspect-[4/5] ${r.images.length === 3 && j === 0 ? "col-span-2 aspect-[4/3]" : ""}`}
                  />
                ))}
              </div>
            )}
          </article>
        ))}
      </section>

      <ContactBand />
    </>
  );
}
