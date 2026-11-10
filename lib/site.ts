/**
 * Företagsuppgifter på ett ställe. Ändra här så uppdateras hela sidan.
 * Personliga nummer/mejl för Linus och Hampus kan läggas till under `people`
 * – tills dess används företagets gemensamma uppgifter.
 */
/** Prefix för /public-filer när sidan ligger under en undersökväg (förhandsvisning). */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (path: string) => `${basePath}${path}`;

/** Sant först när NEXT_PUBLIC_SITE_URL är satt, dvs. i produktionsbygget. */
export const isProduction = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

/**
 * Google Search Console: klistra in verifieringskoden (bara värdet i
 * content="…") här, eller sätt repo-variabeln GOOGLE_SITE_VERIFICATION.
 * Behövs inte om ni verifierar via DNS (Domain-egenskap).
 */
export const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const site = {
  name: "LHLS AB",
  legalName: "LHLS Aktiebolag",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gabrielsoors-cmd.github.io/lhls",
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
  /** Länk till företagets Google-profil (för "Se alla omdömen"). Fylls i när den finns. */
  googleProfileUrl: "https://www.google.com/search?sca_esv=f6888a27e4d63945&sxsrf=AKL5yDjMxm9D7f1C7IGRS25wvcJiXiuy3w:1794335316909&q=lhls&si=AE1YtOqiKPb2pdLXAi8quZ9vbH4aVq_aX8-3H9iFBLpRNK95c2YHbh8G9YfNNDM_e9eGbVTefFT1_Yx4C8zE6riZAOyC3MAFg3omfzdZsIfRBTFz52UXLMA%3D&uds=AE2AFgbdUIomBHReBXf94JbCmZ2SBEa1YmqlrGpuUBQH2NdoIX8zVQ8xjLwf2RlKCU6TXz19aACyN_D_PAB43IaNR6-I1HjDzRSaSm-hjRU084aEeI6cuiE&sa=X&ved=2ahUKEwiihbD5g_6XAxXcKhAIHSWrOesQ3PALegQILBAF&biw=1440&bih=812&dpr=2#sv=CAESzQEKuQEStgEKd0FERGJXZWE3Y1ExdEdWb3NjQ3EwUTVxWnpaQ1djbHdsbjJrQUs0SzA5WC1MVDJSLW11Q1pEVHgxQU5vSTlRTXFmOFdkd1hUZjItOVppQWJFU2d6SFdEYzdvMnQxUHFTVWhFaUpiOGpRT0RySWhzOGtxaHF2bHhZEhdlR0x6YXJqWU9ycTR3UEFQd3VqemdBcxoiQUhOMEU3SEVnVTJla2thb0IwREROV25rRXRBMkF3UzllURIEODA1MRoBMyoAMAA4AUAAGAAg_a_fugpKAhAB",
} as const;

export type Person = {
  name: string;
  fullName: string;
  role: string;
  responsibility: string;
  phone: string;
  phoneHref: string;
  email: string;
  /** Porträtt i /public (t.ex. "/people/linus.jpg"). Visas när det är satt. */
  photo?: string;
};

export const people: Person[] = [
  {
    name: "Linus",
    fullName: "Linus Sjödén",
    role: "Projektansvarig & personalansvarig",
    responsibility: "Jobb, offerter och personal",
    phone: "079-358 54 55",
    phoneHref: "+46793585455",
    email: "linus@lhls.se",
  },
  {
    name: "Hampus",
    fullName: "Hampus Lagerberg",
    role: "Ekonomiansvarig",
    responsibility: "Ekonomi och fakturafrågor",
    phone: "070-381 52 51",
    phoneHref: "+46703815251",
    email: "hampus@lhls.se",
  },
];

export const nav = [
  { href: "/entreprenad/", label: "Entreprenad" },
  { href: "/lokalvard-stugservice/", label: "Lokalvård & Stugservice" },
  { href: "/projekt/", label: "Projekt" },
  { href: "/referenser/", label: "Referenser" },
  { href: "/om-oss/", label: "Om oss" },
] as const;

/** Färdigt mejl med ämnesrad – används på kontaktsidan. */
export const mailtoTo = (email: string) =>
  `mailto:${email}?subject=${encodeURIComponent("Förfrågan via lhls.se")}`;

/** Mejl med eget ämne, t.ex. "Förfrågan: Flyttstädning". */
export const mailtoSubject = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Förfrågan: ${subject}`)}&body=${encodeURIComponent(
    `Hej!\n\nJag vill gärna veta mer om: ${subject}.\n\nVar ligger jobbet:\nÖnskad tidpunkt:\n\nMitt namn och telefonnummer:\n`,
  )}`;

export const mailtoProject = `mailto:${site.email}?subject=${encodeURIComponent(
  "Förfrågan via lhls.se",
)}&body=${encodeURIComponent(
  "Hej!\n\nJag vill be om ett prisestimat.\n\nVad gäller det:\nVar ligger jobbet:\nÖnskad tidpunkt:\n\nMitt namn och telefonnummer:\n",
)}`;
