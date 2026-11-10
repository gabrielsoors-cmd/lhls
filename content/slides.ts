import type { Slide } from "@/components/HeroSlideshow";

/** Bilderna i bildspelen (startsidan och Entreprenad). `position` styr beskärningen på breda skärmar. */
export const heroSlides: Slide[] = [
  { src: "/hero/hero-1968.jpg", alt: "", position: "50% 38%" },
  { src: "/hero/hero-2231.jpg", alt: "", position: "50% 72%" },
  { src: "/hero/hero-4221.jpg", alt: "", position: "50% 34%" },
  { src: "/hero/hero-3155.jpg", alt: "", position: "50% 66%" },
  { src: "/hero/hero-3222.jpg", alt: "", position: "50% 42%" },
  { src: "/hero/hero-4665.jpg", alt: "", position: "50% 36%" },
];

/** Samma bilder i annan ordning så att Entreprenad inte börjar med startsidans första bild. */
export const entreprenadSlides: Slide[] = [3, 1, 2, 4, 0, 5].map((i) => heroSlides[i]);
