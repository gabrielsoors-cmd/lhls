/**
 * Tjänsterna under "Mark & anläggning". Texterna bygger på den gamla
 * webbplatsen (lhls.se) men är omformulerade. Bilderna hämtas ur galleriet.
 */
export type Service = {
  id: string;
  title: string;
  short: string;
  text: string;
  /** Första bilden används som omslag i listor. */
  images: string[];
};

export const services: Service[] = [
  {
    id: "finplanering",
    title: "Finplanering & plattläggning",
    short: "Tomtplanering, infarter, uteplatser och marksten.",
    text: "Komplett tomtplanering med schaktning och markförberedelse. Vi bygger infarter och uteplatser och lägger marksten med raka linjer och ordentlig finish.",
    images: [
      "/images/finplanering-2829.jpg",
      "/images/finplanering-1958.jpg",
      "/images/finplanering-1959.jpg",
      "/images/finplanering-2623.jpg",
    ],
  },
  {
    id: "grunder",
    title: "Husgrunder & utbyggnationer",
    short: "Grunder med 10 års garanti. Vi gör allt inom grunder.",
    text: "Professionella husgrunder med 10 års garanti. Vi gör allt inom grunder: utgrävning, dränering och markförberedelse för hus, garage och utbyggnationer.",
    images: [
      "/images/grunder-3158.jpg",
      "/images/grunder-4257.jpg",
      "/images/grunder-6454.jpg",
      "/images/grunder-7933.jpg",
    ],
  },
  {
    id: "va",
    title: "Vatten & avlopp",
    short: "Ledningsgravar, avlopp, vattenledningar och PE-svetsning.",
    text: "Ledningsgravar för vatten och avlopp, brunnar och anslutningar. Bland våra projekt finns en 7 km lång snökanonledning, och vi stumsvetsar PE-rör.",
    images: [
      "/images/va-2231.jpg",
      "/images/va-4757.jpg",
      "/images/va-4788.jpg",
      "/images/va-7815.jpg",
    ],
  },
  {
    id: "el",
    title: "El & belysning",
    short: "Schaktning för elkablar och elanslutning.",
    text: "Schaktning för elkablar och elanslutning. Vi gräver och förbereder för kabelskyddsrör, belysning och anslutningar.",
    images: [
      "/images/el-0059.jpg",
      "/images/el-2150.jpg",
      "/images/el-5752.jpg",
      "/images/el-7069.jpg",
    ],
  },
  {
    id: "vag",
    title: "Vägbyggnation",
    short: "Schakt längs vägar och nyanläggning av grusvägar.",
    text: "Schaktarbeten längs vägar och nyanläggning av grusvägar, med egna maskiner och egen personal.",
    images: [
      "/images/vag-3155.jpg",
      "/images/vag-3137.jpg",
      "/images/vag-7028.jpg",
      "/images/vag-4225.jpg",
    ],
  },
];
