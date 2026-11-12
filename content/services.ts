/**
 * Tjänsterna under Entreprenad. Texterna kommer från Linus och Hampus
 * (nov 2026), lätt språkgranskade. Bilderna hämtas ur galleriet.
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
    title: "Finplanering",
    short: "Återställning och förbättring av din gård.",
    text: "Återställning och förbättring av din gård, med allt från planering av ytor, jämn och fin gräsmatta och planteringar till stentrappor, stenläggning, L-stöd och asfaltsjusteringar.",
    images: [
      "/images/finplanering-2829.jpg",
      "/images/finplanering-2141.jpg",
      "/images/finplanering-1959.jpg",
      "/images/finplanering-2623.jpg",
    ],
  },
  {
    id: "grunder",
    title: "Husgrunder & utbyggnationer",
    short: "Från orörd tomt till färdig gjuten platta.",
    text: "Från orörd tomt till färdig gjuten platta. Stora nybyggen och små utbyggnationer av din villa.",
    images: [
      "/images/grunder-3158.jpg",
      "/images/grunder-4257.jpg",
      "/images/grunder-2367.jpg",
      "/images/grunder-7933.jpg",
    ],
  },
  {
    id: "va",
    title: "Vatten & avlopp",
    short: "Nya VA-stammar, ingrävning och vattenläckor.",
    text: "Allt från nya VA-stammar till ingrävning av VA till din befintliga bostad. Vi hjälper dig även vid vattenläckor.",
    images: [
      "/images/va-2231.jpg",
      "/images/va-7815.jpg",
      "/images/va-4672.jpg",
    ],
  },
  {
    id: "el",
    title: "El & belysning",
    short: "Grävning för elkablar och belysningsfundament.",
    text: "Stora som små projekt. Vi gräver för elkablar och sätter belysningsfundament, alltid med ett fint och snyggt resultat efter oss.",
    images: [
      "/images/el-0059.jpg",
      "/images/el-2150.jpg",
      "/images/el-5752.jpg",
      "/images/el-7069.jpg",
    ],
  },
  {
    id: "dranering",
    title: "Dränering",
    short: "Fukt i källaren eller en blöt trädgård?",
    text: "Problem med fukt i källaren? Eller en väldigt blöt trädgård? Vi utför dräneringar på stora som små hus och även i din trädgård.",
    images: [
      "/images/grunder-7917.jpg",
      "/images/grunder-6454.jpg",
      "/images/mark-1902.jpg",
      "/images/finplanering-1908.jpg",
    ],
  },
  {
    id: "vag",
    title: "Vägbyggnation",
    short: "Ny väg, dikning, trumbyten och grusning.",
    text: "Brytning av ny väg och underhåll av vägar, till exempel dikning, trumbyten, grusning och byte av material i vägbanken.",
    images: [
      "/images/vag-3155.jpg",
      "/images/vag-3137.jpg",
      "/images/vag-7028.jpg",
      "/images/vag-4225.jpg",
    ],
  },
];
