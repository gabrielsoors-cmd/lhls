import Link from "next/link";
import { ContactBand, Pic } from "@/components/Sections";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { entreprenadSlides } from "@/content/slides";
import { services } from "@/content/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Entreprenad & Markarbeten i Älvdalen",
  description:
    "Lokal grävmaskinist i Älvdalen: finplanering, husgrunder, el och belysning, dränering, vägbyggnation samt VA. Stora som små uppdrag i norra Dalarna.",
  path: "/entreprenad/",
});

export default function Entreprenad() {
  return (
    <>
      <section
        aria-labelledby="entreprenad-rubrik"
        className="relative flex min-h-[72svh] flex-col overflow-hidden bg-ink text-paper"
      >
        <HeroSlideshow slides={entreprenadSlides} />
        <div className="absolute inset-0 z-20 bg-black/35" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-2/3 bg-linear-to-t from-black/75 to-transparent" />
        <div className="wrap relative z-30 flex flex-1 flex-col justify-end pb-10 pt-28 md:pb-16">
          <p className="eyebrow text-paper/80">Verksamhetsområde 01</p>
          <h1 id="entreprenad-rubrik" className="display mt-4 max-w-4xl text-[2rem] leading-[1.08] sm:text-6xl md:mt-5 md:text-7xl">
            Entreprenad &amp; markarbeten
          </h1>
          <p className="mt-4 max-w-xl text-base text-paper/85 md:text-lg">
            Lokal grävmaskinist och entreprenör i Älvdalen. Inget jobb är för stort eller för litet.
          </p>
        </div>
      </section>

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
                <Pic key={src} src={src} sizes="(min-width:768px) 29vw, 50vw" className="aspect-[4/5]" />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="wrap py-16 md:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="display text-2xl md:text-3xl">Se fler bilder från våra jobb.</p>
          <Link
            href="/projekt/"
            className="self-start border border-ink px-6 py-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Projekt →
          </Link>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
