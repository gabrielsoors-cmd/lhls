/**
 * Företagsuppgifter på ett ställe. Ändra här så uppdateras hela sidan.
 * Personliga nummer/mejl för Linus och Hampus kan läggas till under `people`
 * – tills dess används företagets gemensamma uppgifter.
 */
export const site = {
  name: "LHLS AB",
  legalName: "LHLS Aktiebolag",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.lhls.se",
  tagline: "Inget jobb är för stort eller för litet.",
  description:
    "Lokalt entreprenadföretag i Älvdalen. Markarbete, dränering, schaktning, grunder och grävning i norra Dalarna.",
  phone: "079-358 54 55",
  phoneHref: "+46793585455",
  email: "info@lhls.se",
  orgNr: "559525-3823",
  address: {
    locality: "Älvdalen",
    postalCode: "796 90",
    country: "SE",
  },
  region: "Norra Dalarna",
} as const;

export type Person = {
  name: string;
  role: string;
  responsibility: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
};

export const people: Person[] = [
  {
    name: "Linus",
    role: "Projektledare",
    responsibility: "Jobb, offerter och personal",
  },
  {
    name: "Hampus",
    role: "Ekonomiansvarig",
    responsibility: "Ekonomi och fakturor",
  },
];

export const nav = [
  { href: "/mark-och-anlaggning", label: "Mark & anläggning" },
  { href: "/lokalvard-stugservice", label: "Lokalvård & Stugservice" },
  { href: "/referenser", label: "Referenser" },
  { href: "/om-oss", label: "Om oss" },
] as const;

export const mailtoProject = `mailto:${site.email}?subject=${encodeURIComponent(
  "Förfrågan via lhls.se",
)}&body=${encodeURIComponent(
  "Hej!\n\nJag vill be om ett prisestimat.\n\nVad gäller det:\nVar ligger jobbet:\nÖnskad tidpunkt:\n\nMitt namn och telefonnummer:\n",
)}`;
