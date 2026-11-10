import { PageHeader } from "./Sections";

export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  updated: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader eyebrow={`Senast uppdaterad ${updated}`} title={title} lead={intro} />
      <div className="wrap py-14 md:py-20">
        <div className="max-w-3xl space-y-12">{children}</div>
      </div>
    </>
  );
}

export function LegalSection({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-ink pt-6">
      <h2 className="display text-2xl md:text-3xl">
        <span className="eyebrow mr-4 align-middle text-steel">{String(n).padStart(2, "0")}</span>
        {title}
      </h2>
      <div className="mt-5 space-y-4 leading-relaxed text-ink/85 [&_a]:underline [&_a]:underline-offset-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}
