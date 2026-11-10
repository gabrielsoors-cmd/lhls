import { Gallery } from "@/components/Gallery";
import { ContactBand, PageHeader } from "@/components/Sections";
import { interleaved } from "@/lib/gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Projekt – bilder från våra jobb",
  description:
    "Bilder från tidigare projekt: grunder, vatten och avlopp, finplanering, el, väg och markarbete i Älvdalen och norra Dalarna.",
  path: "/projekt/",
});

export default function Projekt() {
  return (
    <>
      <PageHeader
        eyebrow="Projekt"
        title="Bilder från våra jobb"
        lead="Ett urval från tidigare projekt, tagna ute på arbetsplatserna."
      />

      <section className="wrap py-14 md:py-20">
        <Gallery photos={interleaved()} />
      </section>

      <ContactBand />
    </>
  );
}
