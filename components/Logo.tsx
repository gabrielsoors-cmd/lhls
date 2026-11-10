import Link from "next/link";

/**
 * Typografisk logotyp. Byt ut mot riktig logotyp (SVG) när den finns:
 * lägg filen i /public och rendera den här i stället för texten.
 */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`display inline-block uppercase ${className}`}
      style={{ fontVariationSettings: '"wdth" 125', letterSpacing: "-0.01em" }}
    >
      LHLS
    </span>
  );
}

export function LogoLink({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link
      href="/"
      aria-label="LHLS AB, startsida"
      className={`flex items-baseline gap-2 ${tone === "light" ? "text-paper" : "text-ink"}`}
    >
      <Wordmark className="text-2xl" />
      <span className="eyebrow hidden opacity-70 sm:inline">AB</span>
    </Link>
  );
}
