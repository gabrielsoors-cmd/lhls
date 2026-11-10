"use client";

import { useEffect, useState } from "react";
import { mailtoProject, site } from "@/lib/site";

/**
 * Fast kontaktfält längst ned på startsidan. Visas bara när besökaren
 * skrollar uppåt (efter att ha lämnat toppen) så att det inte ligger i vägen.
 */
export function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - last;
        if (Math.abs(delta) > 6) {
          setShow(delta < 0 && y > 500);
          last = y;
        }
        if (y <= 500) setShow(false);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-paper/20 bg-ink text-paper transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="wrap flex items-center gap-2.5 py-3 md:justify-end md:gap-3">
        <a
          href={`tel:${site.phoneHref}`}
          tabIndex={show ? 0 : -1}
          className="flex-1 border border-paper/60 px-4 py-3 text-center text-sm font-medium md:flex-none md:px-6"
        >
          Ring {site.phone}
        </a>
        <a
          href={mailtoProject}
          tabIndex={show ? 0 : -1}
          className="flex-1 bg-paper px-4 py-3 text-center text-sm font-semibold text-ink md:flex-none md:px-6"
        >
          Kontakta oss
        </a>
      </div>
    </div>
  );
}
