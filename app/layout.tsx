import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { googleSiteVerification, isProduction, site } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";

const archivo = localFont({
  src: "./fonts/Archivo-Variable.woff2",
  variable: "--font-archivo",
  weight: "100 900",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  // Bara origin: Next lägger själv till basePath på filer (ikoner, delningsbild).
  metadataBase: new URL(new URL(site.url).origin),
  title: {
    default: "Entreprenad & Markarbete i Älvdalen | Lokal Grävmaskinist",
    template: "%s | LHLS AB",
  },
  description: site.description,
  applicationName: site.name,
  // Förhandsvisningen på github.io ska aldrig indexeras.
  robots: isProduction ? undefined : { index: false, follow: false },
  verification: googleSiteVerification ? { google: googleSiteVerification } : undefined,
  openGraph: { locale: "sv_SE", siteName: site.name, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className={`${archivo.variable} ${inter.variable}`}>
      <body className="flex min-h-svh flex-col">
        <a
          href="#innehall"
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Hoppa till innehåll
        </a>
        <Header />
        <main id="innehall" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
