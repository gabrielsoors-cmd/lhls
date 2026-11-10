"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LogoLink } from "./Logo";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const home = pathname === "/";
  // Menyn räknas som öppen bara på den sida där den öppnades, så den
  // stängs automatiskt vid sidbyte.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const setOpen = (v: boolean | ((o: boolean) => boolean)) => {
    const next = typeof v === "function" ? v(open) : v;
    setOpenPath(next ? pathname : null);
  };

  // Stäng med Escape; lås scroll när menyn är öppen.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenPath(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkBase =
    "relative py-1 text-[0.9rem] font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100";

  return (
    <header
      className={
        home
          ? "absolute inset-x-0 top-0 z-40 text-paper"
          : "sticky top-0 z-40 border-b border-line bg-paper/95 text-ink backdrop-blur"
      }
    >
      <div className="wrap flex h-16 items-center justify-between md:h-20">
        {/* På startsidan ligger den stora logotypen i hero-sektionen. */}
        <div className={home ? "invisible" : ""}>
          <LogoLink tone={home ? "light" : "dark"} />
        </div>

        <nav aria-label="Huvudmeny" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname.startsWith(item.href) ? "page" : undefined}
              className={`${linkBase} ${pathname.startsWith(item.href) ? "after:scale-x-100" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className={`ml-2 border px-5 py-2.5 text-[0.9rem] font-medium transition-colors ${
              home
                ? "border-paper hover:bg-paper hover:text-ink"
                : "border-ink bg-ink text-paper hover:bg-paper hover:text-ink"
            }`}
          >
            Kontakt
          </Link>
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobilmeny"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-6 bg-current transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobilmeny"
          className="fixed inset-0 z-50 flex flex-col bg-ink px-5 pb-8 pt-4 text-paper md:hidden"
        >
          <div className="flex h-12 items-center justify-between">
            <LogoLink tone="light" />
            <button
              type="button"
              className="-mr-2 flex h-11 w-11 items-center justify-center"
              aria-label="Stäng meny"
              onClick={() => setOpen(false)}
            >
              <span className="relative block h-6 w-6">
                <span className="absolute left-0 top-3 h-0.5 w-6 rotate-45 bg-current" />
                <span className="absolute left-0 top-3 h-0.5 w-6 -rotate-45 bg-current" />
              </span>
            </button>
          </div>
          <nav aria-label="Mobilmeny" className="mt-10 flex flex-1 flex-col">
            {[...nav, { href: "/kontakt", label: "Kontakt" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="display border-b border-paper/20 py-5 text-3xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
