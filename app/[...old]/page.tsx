import type { Metadata } from "next";
import { redirects } from "@/content/redirects";
import { asset, site } from "@/lib/site";

type Props = { params: Promise<{ old: string[] }> };

const find = (segments: string[]) => redirects.find((r) => r.from === `/${segments.join("/")}`);

export function generateStaticParams() {
  return redirects.map((r) => ({ old: r.from.split("/").filter(Boolean) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { old } = await params;
  const target = find(old)!.to.split("#")[0];
  return {
    title: "Sidan har flyttat",
    alternates: { canonical: `${site.url}${target}` },
  };
}

export default async function Moved({ params }: Props) {
  const { old } = await params;
  const to = find(old)!.to;
  const href = asset(to);
  return (
    <section className="wrap py-28 md:py-40">
      <meta httpEquiv="refresh" content={`0;url=${href}`} />
      <script dangerouslySetInnerHTML={{ __html: `location.replace(${JSON.stringify(href)})` }} />
      <h1 className="display text-4xl md:text-6xl">Sidan har flyttat.</h1>
      <p className="mt-6 text-lg text-steel">
        Du skickas vidare automatiskt. Fungerar det inte, <a className="underline underline-offset-4" href={href}>klicka här</a>.
      </p>
    </section>
  );
}
