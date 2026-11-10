"use client";

import Image from "next/image";
import { useEffect, useReducer } from "react";

export type Slide = {
  src: string;
  alt: string;
  /** CSS object-position, t.ex. "50% 35%" – styr beskärningen på breda skärmar. */
  position: string;
};

const INTERVAL = 6500;

type State = { active: number; prev: number | null; reached: number };

/**
 * Bildspel med sakta Ken Burns-rörelse (zoom i olika riktningar).
 * Nästa bild monteras först när den behövs så att den första bilden
 * (LCP) inte konkurrerar med fem andra nedladdningar.
 */
export function HeroSlideshow({ slides }: { slides: Slide[] }) {
  const [state, advance] = useReducer(
    (s: State): State => {
      const next = (s.active + 1) % slides.length;
      return { active: next, prev: s.active, reached: Math.max(s.reached, next + 1) };
    },
    { active: 0, prev: null, reached: 1 },
  );

  useEffect(() => {
    if (slides.length < 2) return;
    const t = setInterval(advance, INTERVAL);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-ink" aria-hidden="true">
      {slides.map((slide, i) => {
        if (i > state.reached && i !== state.active) return null;
        const isActive = i === state.active;
        const isPrev = i === state.prev;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              isActive ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              sizes="100vw"
              priority={i === 0}
              loading={i === 0 ? "eager" : undefined}
              className={`object-cover ${isActive || isPrev ? `kb kb-${i % 6}` : ""}`}
              style={{ objectPosition: slide.position }}
            />
          </div>
        );
      })}
    </div>
  );
}
