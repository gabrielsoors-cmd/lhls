import { site } from "@/lib/site";

/** Enkel uppmaning att lämna ett omdöme på Google (ingen hämtning av omdömen). */
export function Reviews() {
  if (!site.googleProfileUrl) return null;
  return (
    <section className="border-t border-line" aria-label="Omdömen">
      <div className="wrap flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between md:py-16">
        <p className="display text-2xl md:text-3xl">Har vi gjort ett jobb åt dig?</p>
        <a
          href={site.googleProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start border border-ink px-6 py-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
        >
          Lämna en recension på Google →
        </a>
      </div>
    </section>
  );
}
