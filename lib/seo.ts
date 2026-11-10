import type { Metadata } from "next";
import { site } from "./site";

type Input = {
  title: string;
  description: string;
  /** Sökväg som börjar med "/", t.ex. "/kontakt". */
  path: string;
};

/**
 * Alla sidors metadata går genom den här funktionen så att
 * titel-formel, canonical och delningsdata hanteras på ett ställe.
 * Titeln får suffixet " | LHLS AB" via title.template i root-layouten.
 */
export function buildMetadata({ title, description, path }: Input): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "sv_SE",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** JSON-LD för lokalt företag (visas i Googles sökresultat). */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: site.legalName,
  alternateName: site.name,
  url: site.url,
  telephone: `+${site.phoneHref.replace("+", "")}`,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.locality,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Älvdalens kommun" },
    { "@type": "AdministrativeArea", name: "Norra Dalarna" },
  ],
  knowsAbout: [
    "Markarbete",
    "Dränering",
    "Schaktning",
    "Husgrunder",
    "Vatten och avlopp",
    "Plattläggning",
    "Vägbyggnation",
  ],
};
