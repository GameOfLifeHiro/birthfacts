import fortunesEn from "./fortunes/en";
import fortunesJa from "./fortunes/ja";
import fortunesEs from "./fortunes/es";

const FORTUNES_BY_LOCALE: Record<string, Record<string, string[]>> = {
  en: fortunesEn,
  ja: fortunesJa,
  es: fortunesEs,
};

/** Day-of-year (1–366) for a given date, defaulting to today. */
function dayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/**
 * Returns a deterministic daily fortune string for the given Western zodiac sign
 * and locale. Same sign + same calendar day = same fortune; rotates every 30 days.
 */
export function getDailyFortune(
  sign: string,
  locale: string = "en",
  date: Date = new Date()
): string {
  const localeMap = FORTUNES_BY_LOCALE[locale] ?? FORTUNES_BY_LOCALE.en;
  const fortunes = localeMap[sign] ?? localeMap["Aries"];
  const index = dayOfYear(date) % fortunes.length;
  return fortunes[index];
}
