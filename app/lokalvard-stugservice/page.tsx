import { ContactBand, PageHeader } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Lokalvård & Stugservice i Älvdalen",
  description:
    "Lokalvård och stugservice i Älvdalen med omnejd från LHLS AB. Tillsyn, städning och praktisk hjälp – beskriv ditt behov så återkommer vi med ett förslag.",
  path: "/lokalvard-stugservice/",
});

const areas = [
  {
    title: "Lokalvård",
    text: "Städning av lokaler, verkstäder och gemensamma utrymmen – regelbundet eller vid enstaka tillfällen.",
  },
  {
    title: "Stugservice",
    text: "Tillsyn och praktisk hjälp för fritidshus och stugor, så att allt är i ordning när du kommer.",
  },
];

const steps = [
  "Du berättar vad du behöver hjälp med och var.",
  "Vi återkommer med ett förslag och ett pris.",
  "Vi utför arbetet, när det passar dig.",
];

export default function LokalvardStugservice() {
  return (
    <>
      <PageHeader
        eyebrow="Verksamhetsområde 02"
        title="Lokalvård & Stugservice"
        lead="Vid sidan av markarbetet hjälper vi till med lokalvård och stugservice i Älvdalen med omnejd."
      />

      <section className="wrap py-16 md:py-24">
        <ul className="grid gap-px bg-line md:grid-cols-2">
          {areas.map((a) => (
            <li key={a.title} className="bg-paper py-8 md:p-10 md:first:pl-0 md:last:pr-0">
              <h2 className="display text-3xl md:text-4xl">{a.title}</h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-steel">{a.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line bg-mist">
        <div className="wrap py-16 md:py-24">
          <h2 className="display text-3xl md:text-5xl">Så fungerar det</h2>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s} className="border-t border-ink pt-6">
                <span className="eyebrow text-steel">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-lg leading-relaxed">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactBand heading="Berätta vad du behöver hjälp med." />
    </>
  );
}
