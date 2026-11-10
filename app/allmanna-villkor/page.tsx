import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/Legal";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Allmänna villkor",
  description: "Allmänna villkor för uppdrag som utförs av LHLS AB inom entreprenad, markarbeten och lokalvård.",
  path: "/allmanna-villkor/",
});

// OBS: utkast framtaget av webbansvarig. Låt gärna en jurist/branschorganisation granska innan lansering.
export default function Villkor() {
  return (
    <LegalPage
      title="Allmänna villkor"
      updated="10 november 2026"
      intro={`Villkor för uppdrag som ${site.legalName} (org.nr ${site.orgNr}) utför inom entreprenad, markarbeten, lokalvård och stugservice.`}
    >
      <LegalSection n={1} title="Allmänt">
        <p>
          Villkoren gäller om inget annat har avtalats skriftligt i offert eller avtal. För privatpersoner
          gäller dessutom tvingande konsumentlagstiftning, bland annat konsumenttjänstlagen. Inget i dessa
          villkor inskränker dina rättigheter som konsument.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Offert och pris">
        <p>
          Prisestimat som lämnas via webbplatsen, telefon eller mejl är vägledande. Bindande pris gäller först
          när det anges i en offert eller bekräftas skriftligt. Uppdrag utförs till fast pris, ungefärligt pris
          eller på löpande räkning, enligt vad som anges i offerten. Priser anges exklusive moms till företag och
          inklusive moms till privatpersoner, om inget annat framgår.
        </p>
      </LegalSection>

      <LegalSection n={3} title="Uppdragets omfattning och ändringar">
        <p>
          Uppdraget omfattar det som anges i offerten. Ändrings- och tilläggsarbeten, till exempel om
          markförhållandena visar sig avvika från det som var känt, utförs efter överenskommelse och ersätts
          utöver ursprungligt pris. Vi meddelar dig så tidigt som möjligt om sådant uppstår.
        </p>
      </LegalSection>

      <LegalSection n={4} title="Beställarens medverkan">
        <ul>
          <li>Du ger oss tillgång till arbetsplatsen och lämnar uppgifter som behövs för uppdraget.</li>
          <li>
            Du upplyser oss i förväg om kända ledningar, kablar, dräneringar, brunnar och andra förhållanden i
            marken. Vid behov kontrollerar vi även ledningars läge före grävarbeten.
          </li>
          <li>Vid städuppdrag ser du till att lokalen eller boendet är tillgängligt vid överenskommen tid.</li>
        </ul>
      </LegalSection>

      <LegalSection n={5} title="Tid och väder">
        <p>
          Angivna tider är beräknade. Väder, tjäle, markförhållanden, maskinhaveri och sjukdom kan påverka
          tidplanen. Vi meddelar dig så snart vi ser att tiden inte håller och kommer överens om en ny.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Betalning">
        <p>
          Betalning sker mot faktura enligt de villkor som anges i offerten eller på fakturan. Vid försenad
          betalning har vi rätt till dröjsmålsränta enligt räntelagen samt lagstadgad ersättning för
          påminnelse- och inkassokostnader. Frågor om fakturor besvaras av Hampus, se{" "}
          <Link href="/kontakt/">kontaktsidan</Link>.
        </p>
      </LegalSection>

      <LegalSection n={7} title="Garanti och reklamation">
        <p>
          Garantier för särskilda arbeten, till exempel husgrunder, gäller enligt vad som anges i offert eller
          avtal. Upptäcker du ett fel ska du kontakta oss inom skälig tid. Som konsument har du rätt att
          reklamera enligt konsumenttjänstlagen. Företagskunder ska reklamera utan oskäligt dröjsmål efter att
          felet upptäckts eller borde ha upptäckts. Vi åtgärdar berättigade reklamationer utan kostnad för dig.
        </p>
      </LegalSection>

      <LegalSection n={8} title="Ansvar">
        <p>
          Vi ansvarar för skada som vi orsakar genom vårdslöshet i samband med uppdraget. Mot företagskunder
          ansvarar vi inte för indirekta skador, till exempel utebliven vinst, såvida det inte rör sig om uppsåt
          eller grov vårdslöshet. Vi ansvarar inte för skador som beror på att uppgifter om ledningar eller
          markförhållanden som du kände till inte lämnats till oss.
        </p>
      </LegalSection>

      <LegalSection n={9} title="Force majeure">
        <p>
          Ingen part är ansvarig för försening eller utebliven prestation som beror på omständighet utanför
          partens kontroll, såsom extrem väderlek, myndighetsbeslut, olyckshändelse eller allvarliga
          störningar i samhällsfunktioner.
        </p>
      </LegalSection>

      <LegalSection n={10} title="Personuppgifter">
        <p>
          Hur vi hanterar personuppgifter beskrivs i vår <Link href="/integritetspolicy/">integritetspolicy</Link>.
        </p>
      </LegalSection>

      <LegalSection n={11} title="Tvist">
        <p>
          Svensk lag gäller. Som konsument kan du vända dig till Allmänna reklamationsnämnden (arn.se) eller
          kommunens konsumentvägledning om vi inte kommer överens. Tvister i övrigt avgörs av allmän domstol.
        </p>
      </LegalSection>

      <LegalSection n={12} title="Kontakt">
        <p>
          {site.legalName}, {site.address.locality}, {site.address.postalCode}. Telefon {site.phone}, e-post{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
