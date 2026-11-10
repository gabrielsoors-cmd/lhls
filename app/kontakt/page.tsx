import Image from "next/image";
import { PageHeader } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";
import { asset, mailtoProject, mailtoTo, people, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Kontakta oss",
  description:
    "Kontakta LHLS AB i Älvdalen. Ring Linus (projekt och personal) på 079-358 54 55 eller Hampus (ekonomi och fakturor) på 070-381 52 51. Vi återkommer snabbt med ett prisestimat.",
  path: "/kontakt/",
});

export default function Kontakt() {
  return (
    <>
      <PageHeader
        eyebrow="Kontakt"
        title="Kontakta oss"
        lead="Beskriv ditt projekt – vi återkommer snabbt med ett prisestimat."
      />

      <section className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-8">
          <h2 className="eyebrow text-steel">Vem ska du kontakta?</h2>
          <ul className="mt-6 border-t border-ink">
            {people.map((p) => (
              <li key={p.name} className="grid gap-6 border-b border-line py-8 sm:grid-cols-[1fr_auto] sm:gap-10">
                <div className="flex gap-6">
                  {p.photo && (
                    <Image
                      src={asset(p.photo)}
                      alt={p.fullName}
                      width={240}
                      height={300}
                      unoptimized
                      className="h-32 w-24 shrink-0 object-cover"
                    />
                  )}
                  <div>
                    <p className="display text-3xl md:text-4xl">{p.fullName}</p>
                    <p className="mt-2 text-steel">{p.role}</p>
                    <p className="mt-4">{p.responsibility}</p>
                  </div>
                </div>
                <div className="space-y-2 sm:text-right">
                  <p>
                    <a href={`tel:${p.phoneHref}`} className="underline-offset-4 hover:underline">
                      {p.phone}
                    </a>
                  </p>
                  <p>
                    <a href={mailtoTo(p.email)} className="underline-offset-4 hover:underline">
                      {p.email}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="md:col-span-4">
          <a
            href={mailtoProject}
            className="block bg-ink px-6 py-6 text-paper transition-opacity hover:opacity-85"
          >
            <span className="display block text-2xl">Be om prisestimat</span>
            <span className="mt-2 block text-sm text-paper/70">Öppnar ett färdigt mejl till {site.email}</span>
          </a>
          <dl className="mt-10 space-y-6 text-base">
            <div>
              <dt className="eyebrow text-steel">Allmänt</dt>
              <dd className="mt-2">
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-steel">Adress</dt>
              <dd className="mt-2">
                {site.legalName}
                <br />
                {site.address.locality}, {site.address.postalCode}
              </dd>
            </div>
            <div>
              <dt className="eyebrow text-steel">Organisationsnummer</dt>
              <dd className="mt-2">{site.orgNr}</dd>
            </div>
            <div>
              <dt className="eyebrow text-steel">Vi arbetar i</dt>
              <dd className="mt-2">Älvdalen, Idre, Särna och övriga {site.region}</dd>
            </div>
            {site.googleProfileUrl && (
              <div>
                <dt className="eyebrow text-steel">Omdömen</dt>
                <dd className="mt-2">
                  <a
                    href={site.googleProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:no-underline"
                  >
                    Se oss på Google →
                  </a>
                </dd>
              </div>
            )}
          </dl>
        </aside>
      </section>
    </>
  );
}
