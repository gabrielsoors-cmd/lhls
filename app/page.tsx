import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ContactBand, Pic } from "@/components/Sections";
import { services } from "@/content/services";
import { Reviews } from "@/components/Reviews";
import { StickyCta } from "@/components/StickyCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  // Samma titel som den gamla webbplatsen hade, för att behålla rankingen på "grävmaskinist".
  title: "Entreprenad & Markarbete i Älvdalen | Lokal Grävmaskinist",
  absoluteTitle: true,
  description:
    "Lokal grävmaskinist och entreprenör i Älvdalen. Markarbete, dränering, schaktning, husgrunder, VA och finplanering i norra Dalarna.",
  path: "/",
});

const strip = [
  "/images/mark-1968.jpg",
  "/images/va-2231.jpg",
  "/images/finplanering-2829.jpg",
  "/images/grunder-4257.jpg",
  "/images/vag-3155.jpg",
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="border-b border-line" aria-labelledby="maskiner">
        <div className="wrap grid gap-8 py-12 md:grid-cols-12 md:items-center md:py-16">
          <div className="md:col-span-8">
            <p className="eyebrow text-steel">Maskiner &amp; maskinförare</p>
            <h2 id="maskiner" className="display mt-5 text-3xl sm:text-4xl md:text-5xl">
              Behöver ni maskiner och bra maskinförare till era större projekt?
            </h2>
            <p className="mt-5 max-w-xl text-steel">
              Vi ställer upp med erfarna grävmaskinister och maskinförare i norra Dalarna. Hör av dig
              så pratar vi om ert projekt.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/kontakt/"
              className="inline-block bg-ink px-7 py-4 text-sm font-medium text-paper transition-opacity hover:opacity-85"
            >
              Kontakta oss →
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap grid gap-10 py-20 md:grid-cols-12 md:py-32">
        <p className="eyebrow text-steel md:col-span-3">Om LHLS</p>
        <div className="md:col-span-9">
          <p className="display text-3xl sm:text-4xl md:text-5xl">
            Lokala grävmaskinister från Älvdalen som gräver, schaktar och bygger mark – från en
            enskild tomt till mångkilometerlånga ledningar.
          </p>
          <Link
            href="/om-oss/"
            className="mt-10 inline-block border-b border-ink pb-1 text-sm font-medium hover:opacity-60"
          >
            Läs mer om oss →
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="wrap py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-4xl md:text-6xl">Entreprenad &amp; markarbeten</h2>
            <Link
              href="/entreprenad/"
              className="hidden shrink-0 border-b border-ink pb-1 text-sm font-medium hover:opacity-60 sm:block"
            >
              Alla tjänster →
            </Link>
          </div>

          <ol className="mt-12 border-t border-ink">
            {services.map((s, i) => (
              <li key={s.id} className="border-b border-line">
                <Link
                  href={`/entreprenad/#${s.id}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-x-4 py-6 md:grid-cols-[4rem_1fr_16rem_auto] md:gap-x-8 md:py-8"
                >
                  <span className="eyebrow text-steel">{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <span className="display block text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-4xl">
                      {s.title}
                    </span>
                    <span className="mt-2 block text-sm text-steel md:hidden">{s.short}</span>
                  </span>
                  <span className="hidden text-sm text-steel md:block">{s.short}</span>
                  <span aria-hidden="true" className="text-2xl transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-mist">
        <div className="wrap py-16 md:py-24">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-4xl md:text-6xl">Projekt</h2>
            <Link
              href="/projekt/"
              className="shrink-0 border-b border-ink pb-1 text-sm font-medium hover:opacity-60"
            >
              Se galleriet →
            </Link>
          </div>
        </div>
        <div className="flex snap-x gap-3 overflow-x-auto px-5 pb-16 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-10 md:pb-24 [scrollbar-width:none]">
          {strip.map((src) => (
            <Pic
              key={src}
              src={src}
              sizes="(min-width:768px) 20vw, 70vw"
              className="aspect-[4/5] w-[70%] shrink-0 snap-start md:w-auto"
            />
          ))}
        </div>
      </section>

      <section className="border-b border-line">
        <div className="wrap grid gap-8 py-16 md:grid-cols-12 md:items-end md:py-24">
          <div className="md:col-span-8">
            <p className="eyebrow text-steel">Verksamhetsområde 02</p>
            <h2 className="display mt-6 text-4xl md:text-6xl">Lokalvård &amp; Stugservice</h2>
            <p className="mt-5 max-w-lg text-steel">
              Städning för företag och privatpersoner i Idre, Särna och Älvdalen.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/lokalvard-stugservice/"
              className="inline-block border border-ink px-6 py-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
            >
              Läs mer →
            </Link>
          </div>
        </div>
      </section>

      <Reviews />
      <StickyCta />

      <ContactBand />
    </>
  );
}
