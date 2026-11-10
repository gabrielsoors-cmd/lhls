/**
 * Google-omdömen. Tomt tills riktiga omdömen läggs in – sektionen på
 * startsidan visas bara när listan innehåller något. Hitta aldrig på
 * omdömen här; kopiera exakt text från företagets Google-profil.
 */
export type Review = { author: string; text: string };

export const reviews: Review[] = [];
