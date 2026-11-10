import Link from "next/link";
import { ContactBand, PageHeader, Pic } from "@/components/Sections";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mark & anläggning i Älvdalen",
  description:
    "Finplanering, plattläggning, husgrunder med 10 års garanti, vatten och avlopp, el och belysning samt vägbyggnation i Älvdalen och norra Dalarna.",
  path: "/mark-och-anlaggning",
});

export default function MarkOchAnlaggning() {
  return (
    <>
      <PageHeader
        eyebrow="Verksamhetsområde 01"
        title="Mark & anläggning"
        lead="Lokalt företag som utför allt inom markarbete, dränering, schaktning och grävning i norra Dalarna. Inget jobb är för stort eller för litet."
      />

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className="scroll-mt-24 border-b border-line"
          aria-labelledby={`${s.id}-rubrik`}
        >
          <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
            <div className="md:col-span-5">
              <div className="md:sticky md:top-28">
                <p className="eyebrow text-steel">{String(i + 1).padStart(2, "0")}</p>
                <h2 id={`${s.id}-rubrik`} className="display mt-5 text-3xl sm:text-4xl md:text-5xl">
                  {s.title}
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">{s.text}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:col-span-7 md:gap-4">
              <Pic
                src={s.images[0]}
                sizes="(min-width:768px) 58vw, 100vw"
                className="col-span-2 aspect-[4/3]"
                position="50% 55%"
              />
              {s.images.slice(1, 3).map((src) => (
                <Pic
                  key={src}
                  src={src}
                  sizes="(min-width:768px) 29vw, 50vw"
                  className="aspect-[4/5]"
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="wrap py-16 md:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="display text-2xl md:text-3xl">Se fler bilder från våra jobb.</p>
          <Link
            href="/referenser"
            className="self-start border border-ink px-6 py-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Referenser →
          </Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
