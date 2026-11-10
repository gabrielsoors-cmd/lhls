import Image from "next/image";
import { ContactBand, PageHeader, Pic } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";
import { asset, people, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Om oss – Linus & Hampus",
  description:
    "LHLS AB drivs av Linus Sjödén och Hampus Lagerberg i Älvdalen – lokala grävmaskinister och entreprenörer som brinner för det de gör.",
  path: "/om-oss/",
});

export default function OmOss() {
  return (
    <>
      <PageHeader
        eyebrow="Om oss"
        title="Två lokala företagare som brinner för det de gör."
        lead="LHLS drivs av Linus Sjödén och Hampus Lagerberg i Älvdalen."
      />

      <section className="wrap grid gap-10 py-16 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="space-y-6 text-lg leading-relaxed md:col-span-6">
          <p>
            Linus och Hampus brinner för det de gör, och det syns i resultatet. Vi är ett litet
            lokalt företag med korta beslutsvägar: du pratar direkt med oss som driver företaget,
            och vi ser till att jobbet blir gjort ordentligt, från första spadtaget till ett fint
            och snyggt resultat.
          </p>
          <p className="text-steel">
            Vi är lokala grävmaskinister i Älvdalen och arbetar i hela norra Dalarna. Med ett
            växande rykte och fler kontakter i branschen tar vi uppdrag både som entreprenör och
            som underleverantör, och vi växer i takt med att uppdragen blir fler.
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
          <ul className="mt-12 grid gap-8 md:grid-cols-2">
            {people.map((p) => (
              <li key={p.name} className="border-t border-ink pt-6">
                {p.photo && (
                  <Image
                    src={asset(p.photo)}
                    alt={p.fullName}
                    width={800}
                    height={1000}
                    unoptimized
                    className="mb-6 aspect-[4/5] w-full max-w-xs object-cover"
                  />
                )}
                <p className="eyebrow text-steel">{p.role}</p>
                <p className="display mt-5 text-4xl md:text-5xl">{p.fullName}</p>
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
