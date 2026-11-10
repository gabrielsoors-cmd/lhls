import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sidan hittades inte",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="wrap py-28 md:py-40">
      <p className="eyebrow text-steel">404</p>
      <h1 className="display mt-6 text-5xl md:text-7xl">Sidan hittades inte.</h1>
      <p className="mt-6 max-w-md text-lg text-steel">
        Länken kan vara gammal. Gå tillbaka till startsidan så hittar du rätt.
      </p>
      <Link href="/" className="mt-10 inline-block bg-ink px-6 py-4 text-sm font-medium text-paper">
        Till startsidan →
      </Link>
    </section>
  );
}
