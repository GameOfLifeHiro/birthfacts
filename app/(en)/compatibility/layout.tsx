import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zodiac Compatibility — BirthFacts",
  description: "Find out how compatible your zodiac sign is with any other. Free Western astrology compatibility reading for all 12 sign combinations.",
  keywords: ["zodiac compatibility", "astrology compatibility", "zodiac signs compatibility", "horoscope compatibility", "love compatibility astrology", "star sign compatibility"],
  alternates: {
    canonical: "https://birthfacts.net/compatibility/",
    languages: {
      en: "https://birthfacts.net/compatibility/",
      es: "https://birthfacts.net/es/compatibilidad/",
      ja: "https://birthfacts.net/ja/aisho/",
      "x-default": "https://birthfacts.net/compatibility/",
    },
  },
  openGraph: {
    title: "Zodiac Compatibility — BirthFacts",
    description: "Free Western astrology compatibility reading for all 12 zodiac sign combinations.",
    url: "https://birthfacts.net/compatibility/",
  },
};

export default function CompatibilityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
