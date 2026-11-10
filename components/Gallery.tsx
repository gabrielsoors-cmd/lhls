"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { categoryLabels, type Category, type Photo } from "@/lib/gallery";

type Filter = "alla" | Category;

export function Gallery({ photos }: { photos: Photo[] }) {
  const [filter, setFilter] = useState<Filter>("alla");
  const [current, setCurrent] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  const visible = useMemo(
    () => (filter === "alla" ? photos : photos.filter((p) => p.cat === filter)),
    [photos, filter],
  );

  const close = useCallback(() => dialog.current?.close(), []);
  const step = useCallback(
    (d: number) =>
      setCurrent((c) => (c === null ? c : (c + d + visible.length) % visible.length)),
    [visible.length],
  );

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    if (current !== null && !el.open) el.showModal();
  }, [current]);

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const active = current !== null ? visible[current] : null;

  return (
    <div>
      <div role="group" aria-label="Filtrera referenser" className="flex flex-wrap gap-2">
        {(["alla", ...Object.keys(categoryLabels)] as Filter[]).map((f) => {
          const on = f === filter;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f)}
              className={`border px-4 py-2 text-sm transition-colors ${
                on ? "border-ink bg-ink text-paper" : "border-line hover:border-ink"
              }`}
            >
              {f === "alla" ? "Alla" : categoryLabels[f]}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 columns-2 gap-3 md:columns-3 md:gap-4 xl:columns-4">
        {visible.map((p, i) => (
          <li key={p.src} className="mb-3 break-inside-avoid md:mb-4">
            <button
              type="button"
              className="group relative block w-full overflow-hidden bg-mist"
              aria-label={`Förstora bild: ${p.alt}`}
              onClick={(e) => {
                opener.current = e.currentTarget;
                setCurrent(i);
              }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                width={p.w}
                height={p.h}
                sizes="(min-width:1280px) 22vw, (min-width:768px) 31vw, 48vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        onClose={() => {
          setCurrent(null);
          opener.current?.focus();
        }}
        onKeyDown={onKey}
        onClick={(e) => e.target === dialog.current && close()}
        className="m-0 h-svh max-h-none w-screen max-w-none bg-transparent p-0 backdrop:bg-black/90"
        aria-label="Bildvisning"
      >
        {active && (
          <div className="flex h-full flex-col text-paper">
            <div className="flex items-center justify-between px-5 py-4 md:px-8">
              <p className="text-sm text-paper/70" aria-live="polite">
                {current! + 1} / {visible.length}
              </p>
              <button type="button" onClick={close} className="px-3 py-2 text-sm hover:underline">
                Stäng ✕
              </button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image
                key={active.src}
                src={active.src}
                alt={active.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Föregående bild"
                className="px-3 py-2 text-2xl hover:opacity-70"
              >
                ←
              </button>
              <p className="text-center text-sm text-paper/80">{active.alt}</p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Nästa bild"
                className="px-3 py-2 text-2xl hover:opacity-70"
              >
                →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}
