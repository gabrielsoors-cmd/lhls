import Link from "next/link";
import { HeroSlideshow } from "./HeroSlideshow";
import { heroSlides } from "@/content/slides";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const choices = [
  {
    href: "/entreprenad/",
    n: "01",
    title: "Entreprenad & markarbeten",
    text: "Finplanering, grunder, el, dränering, väg och VA",
  },
  {
    href: "/lokalvard-stugservice/",
    n: "02",
    title: "Lokalvård & Stugservice",
    text: "Städning för företag och privatpersoner",
  },
];

export function Hero() {
  return (
    <section
      aria-labelledby="hero-rubrik"
      className="relative flex min-h-[640px] h-svh flex-col overflow-hidden bg-ink text-paper"
    >
      <HeroSlideshow slides={heroSlides} />
      {/* Mörkt skikt för läsbarhet över bilderna. */}
      <div className="absolute inset-0 z-20 bg-black/40" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-2/3 bg-linear-to-t from-black/75 to-transparent" />

      <div className="wrap relative z-30 flex flex-1 flex-col justify-end pb-10 pt-28 md:pb-14">
        <div className="rise max-w-3xl">
          <Logo tone="light" className="h-auto w-56 sm:w-72 md:w-96" />
          <div className="mt-5 flex items-center gap-4">
            <span className="h-px w-12 bg-paper" />
            <span className="eyebrow">{site.address.locality} · {site.region}</span>
          </div>
          <h1
            id="hero-rubrik"
            className="display mt-8 text-[2.1rem] sm:text-5xl md:text-6xl"
          >
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-md text-base text-paper/80 md:text-lg">
            Lokal grävmaskinist och entreprenör i Älvdalen. Vi utför allt inom markarbete,
            dränering, schaktning och grävning i norra Dalarna.
          </p>
        </div>
      </div>

      <div className="relative z-30">
        <div className="wrap">
          <p className="eyebrow pb-3 text-paper/70">Vad behöver du hjälp med?</p>
        </div>
        <div className="grid border-t border-paper/35 md:grid-cols-2">
          {choices.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group flex items-center justify-between gap-6 px-5 py-6 transition-colors duration-300 hover:bg-paper hover:text-ink md:px-10 md:py-8 ${
                i === 0 ? "border-b border-paper/35 md:border-b-0 md:border-r" : ""
              }`}
            >
              <span className="flex items-baseline gap-5">
                <span className="eyebrow opacity-60">{c.n}</span>
                <span>
                  <span className="display block text-xl sm:text-2xl md:text-3xl">{c.title}</span>
                  <span className="mt-1.5 block text-sm opacity-70">{c.text}</span>
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-3xl transition-transform duration-300 group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
