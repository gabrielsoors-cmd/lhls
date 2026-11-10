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
      className="relative flex min-h-svh flex-col overflow-hidden bg-ink text-paper"
    >
      <HeroSlideshow slides={heroSlides} />
      {/* Mörkt skikt för läsbarhet över bilderna. */}
      <div className="absolute inset-0 z-20 bg-black/40" />
      <div className="absolute inset-x-0 bottom-0 z-20 h-2/3 bg-linear-to-t from-black/75 to-transparent" />

      <div className="wrap relative z-30 flex flex-1 flex-col justify-end pb-6 pt-24 md:pb-14 md:pt-28">
        <div className="rise max-w-3xl">
          <Logo tone="light" className="h-auto w-36 sm:w-64 md:w-96" />
          <div className="mt-6 hidden items-center gap-4 md:flex">
            <span className="h-px w-12 bg-paper" />
            <span className="eyebrow">{site.address.locality} · {site.region}</span>
          </div>
          <h1
            id="hero-rubrik"
            className="display mt-6 text-[1.65rem] leading-[1.12] sm:text-4xl md:mt-8 md:text-6xl"
          >
            {site.tagline}
          </h1>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/75 md:mt-5 md:text-lg md:text-paper/80">
            Lokal grävmaskinist och entreprenör i Älvdalen. Markarbete, dränering, schaktning och
            grävning i norra Dalarna.
          </p>
        </div>
      </div>

      <div className="relative z-30 pb-5 md:pb-0">
        <p className="eyebrow wrap hidden pb-3 text-paper/70 md:block">Vad behöver du hjälp med?</p>
        <div className="grid gap-2.5 px-5 md:grid-cols-2 md:gap-0 md:border-t md:border-paper/35 md:px-0">
          {choices.map((c, i) => (
            <Link
              key={c.href}
              href={c.href}
              className={`group flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-300 md:px-10 md:py-8 ${
                i === 0
                  ? "bg-paper text-ink md:bg-transparent md:text-paper md:hover:bg-paper md:hover:text-ink md:border-r md:border-paper/35"
                  : "border border-paper/70 text-paper hover:bg-paper hover:text-ink md:border-0"
              }`}
            >
              <span className="flex items-baseline gap-4 md:gap-5">
                <span className="eyebrow hidden opacity-60 md:inline">{c.n}</span>
                <span>
                  <span className="display block text-[1.05rem] leading-tight sm:text-xl md:text-3xl">{c.title}</span>
                  <span className="mt-1 hidden text-sm opacity-70 sm:block">{c.text}</span>
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-2xl transition-transform duration-300 group-hover:translate-x-2 md:text-3xl"
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
