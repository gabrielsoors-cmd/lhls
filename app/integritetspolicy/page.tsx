import { LegalPage, LegalSection } from "@/components/Legal";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Integritetspolicy",
  description: "Så behandlar LHLS AB personuppgifter. Webbplatsen använder inga cookies och ingen besöksspårning.",
  path: "/integritetspolicy/",
});

// OBS: utkast framtaget av webbansvarig. Uppdatera om webbplatsen får analysverktyg, formulär eller liknande.
export default function Integritet() {
  return (
    <LegalPage
      title="Integritetspolicy"
      updated="10 november 2026"
      intro="Så här behandlar vi personuppgifter när du besöker vår webbplats eller kontaktar oss."
    >
      <LegalSection n={1} title="Personuppgiftsansvarig">
        <p>
          {site.legalName} (org.nr {site.orgNr}), {site.address.locality}, {site.address.postalCode}, är
          personuppgiftsansvarig. Kontakta oss på <a href={`mailto:${site.email}`}>{site.email}</a> eller{" "}
          {site.phone} vid frågor om hur vi behandlar dina uppgifter.
        </p>
      </LegalSection>

      <LegalSection n={2} title="Vilka uppgifter vi behandlar">
        <ul>
          <li>
            <strong>Förfrågningar:</strong> namn, telefonnummer, e-postadress, plats och beskrivning av uppdraget
            när du ringer eller mejlar oss.
          </li>
          <li>
            <strong>Kunder:</strong> uppgifter som behövs för att genomföra uppdraget, fakturera och uppfylla
            bokföringskrav, till exempel namn, adress och kontaktuppgifter.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n={3} title="Varför och med vilket stöd">
        <ul>
          <li>Besvara förfrågningar och lämna offert: för att vidta åtgärder på din begäran inför ett avtal.</li>
          <li>Utföra uppdrag och fakturera: för att fullgöra avtalet med dig.</li>
          <li>Bokföring: för att uppfylla rättsliga skyldigheter enligt bokföringslagen.</li>
          <li>Uppföljning och kundrelation: vårt berättigade intresse av att kunna hjälpa dig igen.</li>
        </ul>
      </LegalSection>

      <LegalSection n={4} title="Hur länge vi sparar uppgifterna">
        <p>
          Förfrågningar som inte leder till uppdrag sparar vi normalt högst 12 månader. Räkenskapsinformation
          sparas i sju år enligt bokföringslagen. Övriga kunduppgifter sparas så länge de behövs för uppdraget
          och eventuella garantiåtaganden.
        </p>
      </LegalSection>

      <LegalSection n={5} title="Vilka vi delar uppgifter med">
        <p>
          Vi säljer aldrig personuppgifter. Uppgifter kan behandlas av leverantörer som hjälper oss med e-post,
          bokföring och ekonomisystem (personuppgiftsbiträden) och lämnas till myndigheter när lagen kräver det.
        </p>
      </LegalSection>

      <LegalSection n={6} title="Vår webbplats">
        <ul>
          <li>Webbplatsen använder inga cookies och ingen besöksstatistik eller spårning. Inga kontaktformulär.</li>
          <li>
            Webbplatsen hostas via GitHub Pages (GitHub, Inc.). Vid ditt besök kan GitHub behandla tekniska uppgifter
            som IP-adress i sina serverloggar. Det sker enligt GitHubs egen integritetspolicy.
          </li>
          <li>Typsnitt och bilder laddas från vår egen webbplats, inte från tredje part.</li>
          <li>
            Visas Google-omdömen på sidan hämtar vi dem från Google och visar dem som de publicerats offentligt av
            den som skrivit dem. Länkar till Google öppnas först när du klickar på dem.
          </li>
          <li>
            Mejlar du oss via en länk på sidan öppnas ditt eget e-postprogram. Vi får först uppgifterna när du
            skickar mejlet.
          </li>
        </ul>
      </LegalSection>

      <LegalSection n={7} title="Dina rättigheter">
        <p>
          Du har rätt att begära tillgång till, rättelse eller radering av dina uppgifter, att begära begränsning
          av behandlingen, att invända mot behandling som grundas på berättigat intresse och att få ut uppgifter
          du lämnat till oss i ett strukturerat format. Hör av dig till oss så hjälper vi dig. Du har även rätt att
          lämna klagomål till Integritetsskyddsmyndigheten (<a href="https://www.imy.se">imy.se</a>).
        </p>
      </LegalSection>

      <LegalSection n={8} title="Ändringar">
        <p>Vi kan uppdatera policyn. Aktuell version finns alltid här, med datum för senaste uppdatering överst.</p>
      </LegalSection>
    </LegalPage>
  );
}
