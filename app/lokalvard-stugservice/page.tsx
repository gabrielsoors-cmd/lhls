import { ContactBand, PageHeader } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Lokalvård & Stugservice i Idre, Särna, Älvdalen",
  description:
    "Städning och stugservice i Idre, Särna och Älvdalen: företags-, bygg-, flytt-, stor- och avresestädning samt fönsterputs för företag och privatpersoner.",
  path: "/lokalvard-stugservice/",
});

const services = [
  { title: "Företagsstädning", text: "Vi hjälper dig med städning av era lokaler efter era önskemål." },
  { title: "Byggstädning", text: "Vi utför byggstädning på både stora och små byggnader." },
  { title: "Flyttstädning", text: "Vi ser till att bostaden är nystädad och fräsch inför utflytt." },
  { title: "Storstädning", text: "Vi utför en djupare städning av ditt boende." },
  { title: "Avresestädning", text: "Vi ser till att boendet är nystädat och fräscht tills nästa gäster kommer." },
  { title: "Fönsterputs", text: "Vi löser så att dina fönster är rentvättade och fina." },
];

export default function LokalvardStugservice() {
  return (
    <>
      <PageHeader
        eyebrow="Verksamhetsområde 02"
        title="Lokalvård & Stugservice"
        lead="Vi är stationerade i Idre, Särna och Älvdalen och hjälper dig som företag och privatperson med det mesta."
      />

      <section className="wrap py-16 md:py-24">
        <ol className="border-t border-ink">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 border-b border-line py-7 md:grid-cols-[4rem_1fr_1fr] md:items-baseline md:gap-x-8 md:py-9"
            >
              <span className="eyebrow text-steel">{String(i + 1).padStart(2, "0")}</span>
              <h2 className="display text-2xl md:text-4xl">{s.title}</h2>
              <p className="col-start-2 text-steel md:col-start-3">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <ContactBand heading="Berätta vad du behöver hjälp med." />
    </>
  );
}
