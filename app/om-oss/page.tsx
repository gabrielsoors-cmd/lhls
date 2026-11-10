import { ContactBand, PageHeader, Pic } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";
import { people, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Om oss",
  description:
    "LHLS AB är ett lokalt entreprenadföretag i Älvdalen som drivs av Linus (projektledare) och Hampus (ekonomiansvarig).",
  path: "/om-oss",
});

export default function OmOss() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title="Lokalt, direkt och med egna maskiner."
        lead="LHLS är ett lokalt entreprenadföretag i Älvdalen som drivs av Linus och Hampus."
      />

      <section className="wrap grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="space-y-6 text-lg leading-relaxed md:col-span-6">
          <p>
            Vi utför allt inom markarbete, dränering, schaktning och grävning i norra Dalarna. Det
            kan vara en tomt, en grund, en ledningsgrav eller en väg.
          </p>
          <p className="text-steel">
            Inget jobb är för stort eller för litet. Du pratar direkt med oss som driver företaget
            och ser till att jobbet blir gjort.
          </p>
          <dl className="grid grid-cols-2 gap-6 border-t border-ink pt-8 text-base">
            <div>
              <dt className="eyebrow text-steel">Hemort</dt>
              <dd className="mt-2">{site.address.locality}</dd>
            </div>
            <div>
              <dt className="eyebrow text-steel">Verksamhetsområde</dt>
              <dd className="mt-2">{site.region}</dd>
            </div>
            <div>
              <dt className="eyebrow text-steel">Organisationsnummer</dt>
              <dd className="mt-2">{site.orgNr}</dd>
            </div>
          </dl>
        </div>
        <Pic
          src="/images/mark-3121.jpg"
          sizes="(min-width:768px) 45vw, 100vw"
          className="aspect-[4/5] md:col-span-6 md:col-start-7"
          position="50% 40%"
        />
      </section>

      <section className="border-t border-line bg-mist">
        <div className="wrap py-16 md:py-24">
          <h2 className="display text-3xl md:text-5xl">Vi som driver LHLS</h2>
          <ul className="mt-12 grid gap-px bg-line md:grid-cols-2">
            {people.map((p) => (
              <li key={p.name} className="bg-mist p-8 md:p-10">
                <p className="eyebrow text-steel">{p.role}</p>
                <p className="display mt-5 text-4xl md:text-5xl">{p.name}</p>
                <p className="mt-5 text-steel">Ansvarar för: {p.responsibility.toLowerCase()}.</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
