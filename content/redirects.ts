/**
 * Omdirigeringar från den gamla Google Sites-webbplatsen.
 * GitHub Pages kan inte göra riktiga 301-omdirigeringar, så varje gammal URL
 * får en liten sida med meta-refresh + canonical (Google behandlar en
 * omedelbar meta-refresh som en permanent omdirigering).
 *
 * VIKTIGT: Sökvägarna nedan är kvalificerade gissningar utifrån menyn på
 * lhls.se (Google Sites gör om "Planering av tomt" till /planering-av-tomt osv).
 * Kontrollera mot de verkliga adresserna innan DNS flyttas, och lägg till
 * fler här. `from` utan avslutande snedstreck.
 */
export type Redirect = { from: string; to: string };

export const redirects: Redirect[] = [
  { from: "/home", to: "/" },
  { from: "/anlaggningsjobb", to: "/mark-och-anlaggning/" },
  { from: "/anlaggningsjobb/planering-av-tomt", to: "/mark-och-anlaggning/#finplanering" },
  { from: "/anlaggningsjobb/el-belysning", to: "/mark-och-anlaggning/#el" },
  { from: "/anlaggningsjobb/plattlaggning", to: "/mark-och-anlaggning/#finplanering" },
  { from: "/anlaggningsjobb/grunder", to: "/mark-och-anlaggning/#grunder" },
  { from: "/anlaggningsjobb/utgravning-av-garage", to: "/mark-och-anlaggning/#grunder" },
  { from: "/planering-av-tomt", to: "/mark-och-anlaggning/#finplanering" },
  { from: "/el-belysning", to: "/mark-och-anlaggning/#el" },
  { from: "/plattlaggning", to: "/mark-och-anlaggning/#finplanering" },
  { from: "/grunder", to: "/mark-och-anlaggning/#grunder" },
  { from: "/utgravning-av-garage", to: "/mark-och-anlaggning/#grunder" },
  { from: "/vara-projekt", to: "/referenser/" },
  { from: "/kontakta-oss", to: "/kontakt/" },
  { from: "/allmanna-villkor", to: "/" },
  { from: "/integritetspolicy", to: "/" },
];
