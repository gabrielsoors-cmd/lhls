import { PageHeader } from "@/components/Sections";
import { buildMetadata } from "@/lib/seo";
import { mailtoProject, people, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Kontakta oss",
  description:
    "Kontakta LHLS AB i Älvdalen. Ring 079-358 54 55 eller mejla info@lhls.se. Beskriv ditt projekt så återkommer vi snabbt med ett prisestimat.",
  path: "/kontakt",
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
        <div className="md:col-span-7">
          <h2 className="eyebrow text-steel">Vem ska du kontakta?</h2>
          <ul className="mt-6 border-t border-ink">
            {people.map((p) => {
              const phone = p.phone ?? site.phone;
              const phoneHref = p.phoneHref ?? site.phoneHref;
              const email = p.email ?? site.email;
              return (
                <li key={p.name} className="grid gap-6 border-b border-line py-8 sm:grid-cols-2">
                  <div>
                    <p className="display text-3xl md:text-4xl">{p.name}</p>
                    <p className="mt-2 text-steel">{p.role}</p>
                    <p className="mt-4">{p.responsibility}</p>
                  </div>
                  <div className="space-y-2 sm:text-right">
                    <p>
                      <a href={`tel:${phoneHref}`} className="underline-offset-4 hover:underline">
                        {phone}
                      </a>
                    </p>
                    <p>
                      <a href={`mailto:${email}`} className="underline-offset-4 hover:underline">
                        {email}
                      </a>
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <a
            href={mailtoProject}
            className="block bg-ink px-6 py-6 text-paper transition-opacity hover:opacity-85"
          >
            <span className="display block text-2xl">Be om prisestimat</span>
            <span className="mt-2 block text-sm text-paper/70">Öppnar ett färdigt mejl till {site.email}</span>
          </a>
          <dl className="mt-10 space-y-6 text-base">
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
              <dd className="mt-2">{site.region}</dd>
            </div>
          </dl>
        </aside>
      </section>
    </>
  );
}
