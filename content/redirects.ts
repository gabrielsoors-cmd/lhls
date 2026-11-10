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
  { from: "/anlaggningsjobb", to: "/entreprenad/" },
  { from: "/anlaggningsjobb/planering-av-tomt", to: "/entreprenad/#finplanering" },
  { from: "/anlaggningsjobb/el-belysning", to: "/entreprenad/#el" },
  { from: "/anlaggningsjobb/plattlaggning", to: "/entreprenad/#finplanering" },
  { from: "/anlaggningsjobb/grunder", to: "/entreprenad/#grunder" },
  { from: "/anlaggningsjobb/utgravning-av-garage", to: "/entreprenad/#grunder" },
  { from: "/planering-av-tomt", to: "/entreprenad/#finplanering" },
  { from: "/el-belysning", to: "/entreprenad/#el" },
  { from: "/plattlaggning", to: "/entreprenad/#finplanering" },
  { from: "/grunder", to: "/entreprenad/#grunder" },
  { from: "/utgravning-av-garage", to: "/entreprenad/#grunder" },
  { from: "/vara-projekt", to: "/projekt/" },
  { from: "/kontakta-oss", to: "/kontakt/" },
];
