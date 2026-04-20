import fortunesEn from "./fortunes/en";
import fortunesJa from "./fortunes/ja";
import fortunesEs from "./fortunes/es";

const FORTUNES_BY_LOCALE: Record<string, Record<string, string[]>> = {
  en: fortunesEn,
  ja: fortunesJa,
  es: fortunesEs,
};

export const ALL_SIGNS = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
];

/** Localized sign names for display (hiragana for Japanese, Spanish for ES) */
export const SIGN_NAMES_JA: Record<string, string> = {
  Aries: "おひつじ座", Taurus: "おうし座", Gemini: "ふたご座",
  Cancer: "かに座",   Leo: "しし座",      Virgo: "おとめ座",
  Libra: "てんびん座", Scorpio: "さそり座", Sagittarius: "いて座",
  Capricorn: "やぎ座", Aquarius: "みずがめ座", Pisces: "うお座",
};

export const SIGN_NAMES_ES: Record<string, string> = {
  Aries: "Aries",     Taurus: "Tauro",    Gemini: "Géminis",
  Cancer: "Cáncer",   Leo: "Leo",         Virgo: "Virgo",
  Libra: "Libra",     Scorpio: "Escorpio", Sagittarius: "Sagitario",
  Capricorn: "Capricornio", Aquarius: "Acuario", Pisces: "Piscis",
};

/** Day-of-year (1–366) for a given date, defaulting to today. */
function dayOfYear(date: Date = new Date()): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

/** Simple seeded PRNG (LCG) — deterministic per seed value. */
function seededRandom(seed: number) {
  let s = seed | 0;
  return () => {
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
    return (s >>> 0) / 0x100000000;
  };
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

/**
 * Returns all 12 zodiac signs in a deterministic daily lucky order.
 * Index 0 = #1 (luckiest), index 11 = #12.
 * Same calendar day always produces the same ranking.
 */
export function getDailyRanking(date: Date = new Date()): string[] {
  const arr = [...ALL_SIGNS];
  const rng = seededRandom(dayOfYear(date));
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Returns localized sign name for the given locale. Falls back to English. */
export function getLocalizedSignName(sign: string, locale: string): string {
  if (locale === "ja") return SIGN_NAMES_JA[sign] ?? sign;
  if (locale === "es") return SIGN_NAMES_ES[sign] ?? sign;
  return sign;
}
