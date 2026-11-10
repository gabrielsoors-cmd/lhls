import Link from "next/link";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo tone="light" className="h-auto w-48" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/65">
            Lokalt entreprenadföretag i {site.address.locality}. {site.tagline}
          </p>
        </div>

        <nav aria-label="Sidor" className="md:col-span-3">
          <h2 className="eyebrow text-paper/50">Sidor</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[...nav, { href: "/kontakt", label: "Kontakt" }].map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="hover:underline underline-offset-4">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <h2 className="eyebrow text-paper/50">Kontakt</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={`tel:${site.phoneHref}`} className="hover:underline underline-offset-4">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:underline underline-offset-4">
                {site.email}
              </a>
            </li>
            <li className="text-paper/65">
              {site.address.locality}, {site.address.postalCode}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="wrap flex flex-col gap-2 py-6 text-xs text-paper/50 sm:flex-row sm:justify-between">
          <span>© {site.legalName}</span>
          <span>Org.nr {site.orgNr}</span>
        </div>
      </div>
    </footer>
  );
}
