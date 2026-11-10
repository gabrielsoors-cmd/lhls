import { ContactBand, PageHeader, Pic } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Lokalvård & Stugservice i Älvdalen",
  description:
    "Lokalvård och stugservice i Älvdalen med omnejd från LHLS AB. Beskriv vad du behöver hjälp med så återkommer vi med ett förslag.",
  path: "/lokalvard-stugservice",
});

export default function LokalvardStugservice() {
  return (
    <>
      <PageHeader
        eyebrow="Verksamhetsområde 02"
        title="Lokalvård & Stugservice"
        lead="Vid sidan av markarbetet hjälper vi till med lokalvård och stugservice i Älvdalen med omnejd."
      />

      <section className="wrap grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-5">
          <h2 className="display text-3xl sm:text-4xl">Skräddarsytt efter behov</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-steel">
            Vad som ingår beror på ditt uppdrag. Berätta vad du behöver hjälp med och var det
            ligger, så återkommer vi med ett förslag och ett pris.
          </p>
        </div>
        <Pic
          src="/images/finplanering-2838.jpg"
          sizes="(min-width:768px) 58vw, 100vw"
          className="aspect-[4/3] md:col-span-7"
          position="50% 60%"
        />
      </section>

      <ContactBand heading="Berätta vad du behöver hjälp med." />
    </>
  );
}
