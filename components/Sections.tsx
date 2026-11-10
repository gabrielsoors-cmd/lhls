import Image from "next/image";
import Link from "next/link";
import { mailtoProject, site } from "@/lib/site";
import { photo } from "@/lib/gallery";

export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-line">
      <div className="wrap py-16 md:py-24">
        <p className="eyebrow text-steel">{eyebrow}</p>
        <h1 className="display mt-6 max-w-4xl text-4xl sm:text-5xl md:text-7xl">{title}</h1>
        {lead && <p className="mt-8 max-w-2xl text-lg leading-relaxed text-steel">{lead}</p>}
      </div>
    </section>
  );
}

/** Foto från galleriet med beskärning – bredd/höjd kommer från bildfilen. */
export function Pic({
  src,
  className = "",
  sizes,
  priority,
  position,
}: {
  src: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  position?: string;
}) {
  const p = photo(src);
  return (
    <div className={`relative overflow-hidden bg-mist ${className}`}>
      <Image
        src={p.src}
        alt={p.alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}

export function ContactBand({ heading = "Beskriv ditt projekt." }: { heading?: string }) {
  return (
    <section className="bg-ink text-paper">
      <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="eyebrow text-paper/50">Offert</p>
          <h2 className="display mt-6 text-4xl sm:text-5xl md:text-6xl">{heading}</h2>
          <p className="mt-6 max-w-lg text-lg text-paper/70">
            Vi återkommer snabbt med ett prisestimat.
          </p>
        </div>
        <div className="flex flex-col justify-end gap-3 md:col-span-5">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center justify-between border border-paper px-6 py-5 text-lg transition-colors hover:bg-paper hover:text-ink"
          >
            <span>{site.phone}</span>
            <span aria-hidden="true">→</span>
          </a>
          <a
            href={mailtoProject}
            className="flex items-center justify-between border border-paper/40 px-6 py-5 text-lg transition-colors hover:border-paper hover:bg-paper hover:text-ink"
          >
            <span>{site.email}</span>
            <span aria-hidden="true">→</span>
          </a>
          <Link href="/kontakt/" className="mt-2 text-sm text-paper/60 underline underline-offset-4 hover:text-paper">
            Alla kontaktuppgifter
          </Link>
        </div>
      </div>
    </section>
  );
}
