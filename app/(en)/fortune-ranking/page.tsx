import type { Metadata } from "next";
import DailyFortuneRanking from "@/components/DailyFortuneRanking";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Today's Horoscope Ranking — All 12 Zodiac Signs | BirthFacts",
  description:
    "See today's fortune ranking for all 12 zodiac signs — Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn, Aquarius, Pisces. Updated daily at midnight.",
  keywords: [
    "today's horoscope all signs",
    "daily horoscope ranking",
    "zodiac lucky ranking today",
    "horoscope today all 12 signs",
    "daily fortune all zodiac signs",
    "which zodiac is luckiest today",
  ],
  alternates: {
    canonical: "https://birthfacts.net/fortune-ranking/",
    languages: {
      en: "https://birthfacts.net/fortune-ranking/",
      ja: "https://birthfacts.net/ja/uranai-ranking/",
      es: "https://birthfacts.net/es/horoscopo-ranking/",
    },
  },
};

export default function FortuneRankingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Fortune Ranking", href: "/fortune-ranking/" }]} />
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">Today&apos;s Fortune Ranking</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          All 12 zodiac signs, ranked by luck today. Check where your sign stands.
        </p>
      </div>

      <DailyFortuneRanking />

      <div className="mt-10 text-center">
        <a
          href="/"
          className="text-base text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          ← Enter your birthday for your personal reading
        </a>
      </div>
    </div>
  );
}
