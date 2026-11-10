/**
 * Manuella omdömen – reserv om Google-hämtningen inte är uppsatt.
 * Använd bara exakt text från företagets Google-profil. Hitta aldrig på omdömen.
 * Med scripts/fetch-reviews.mjs aktivt används Googles data i stället.
 */
export type Review = { author: string; text: string };

export const reviews: Review[] = [];
