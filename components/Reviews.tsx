import { getReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

function Stars({ n }: { n: number }) {
  return (
    <span aria-label={`${n} av 5 stjärnor`} className="tracking-[0.2em]">
      {"★".repeat(Math.round(n))}
      <span className="text-line">{"★".repeat(5 - Math.round(n))}</span>
    </span>
  );
}

export function Reviews() {
  const data = getReviews();
  const profileUrl = data?.url || site.googleProfileUrl;
  if (!data && !profileUrl) return null;

  // Utan hämtade omdömen: en enkel länk till Google-profilen.
  if (!data) {
    return (
      <section className="border-t border-line" aria-label="Omdömen">
        <div className="wrap flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between md:py-16">
          <p className="display text-2xl md:text-3xl">Vad säger våra kunder?</p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start border border-ink px-6 py-4 text-sm font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Läs omdömen på Google →
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-line" aria-labelledby="omdomen">
      <div className="wrap py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 id="omdomen" className="display text-4xl md:text-6xl">
              Omdömen
            </h2>
            {data?.rating != null && (
              <p className="mt-5 flex items-center gap-3 text-lg">
                <Stars n={data.rating} />
                <span>
                  {data.rating.toLocaleString("sv-SE", { minimumFractionDigits: 1 })}
                  {data.count ? ` · ${data.count} omdömen på Google` : " på Google"}
                </span>
              </p>
            )}
          </div>
          {profileUrl && (
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start border-b border-ink pb-1 text-sm font-medium hover:opacity-60 md:self-auto"
            >
              Se alla omdömen på Google →
            </a>
          )}
        </div>

        {data && (
          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {data.items.slice(0, 3).map((r) => (
              <li key={r.author + r.text.slice(0, 12)} className="border-t border-ink pt-6">
                {r.rating != null && (
                  <p className="mb-4 text-sm">
                    <Stars n={r.rating} />
                  </p>
                )}
                <blockquote className="text-lg leading-relaxed">{r.text}</blockquote>
                <p className="mt-4 text-sm text-steel">
                  {r.authorUrl ? (
                    <a href={r.authorUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">
                      {r.author}
                    </a>
                  ) : (
                    r.author
                  )}
                  {r.when ? ` · ${r.when}` : ""} · Google
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
