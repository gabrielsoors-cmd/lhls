import Link from "next/link";
import { asset } from "@/lib/site";

/**
 * Företagets logotyp (SVG i /public). Två varianter: mörk för ljus bakgrund,
 * ljus för mörk bakgrund. Vanlig <img> eftersom SVG inte behöver optimeras.
 */
export function Logo({ tone = "dark", className = "" }: { tone?: "dark" | "light"; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(tone === "light" ? "/logo-light.svg" : "/logo-dark.svg")}
      alt="LHLS AB Entreprenad"
      width={371}
      height={99}
      className={className}
    />
  );
}

export function LogoLink({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <Link href="/" aria-label="LHLS AB, startsida" className="block">
      <Logo tone={tone} className="h-9 w-auto md:h-10" />
    </Link>
  );
}
