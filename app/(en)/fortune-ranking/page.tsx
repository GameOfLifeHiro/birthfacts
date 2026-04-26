import type { Metadata } from "next";
import DailyFortuneRanking from "@/components/DailyFortuneRanking";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EnToolsSection from "@/components/EnToolsSection";

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
      es: "https://birthfacts.net/es/horoscopo-ranking/",
      ja: "https://birthfacts.net/ja/uranai-ranking/",
      "x-default": "https://birthfacts.net/fortune-ranking/",
    },
  },
  openGraph: {
    title: "Today's Horoscope Ranking — All 12 Zodiac Signs | BirthFacts",
    description: "See which zodiac sign is luckiest today. All 12 signs ranked by fortune, updated daily at midnight. Free.",
    url: "https://birthfacts.net/fortune-ranking/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Daily Fortune Ranking – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Today's Horoscope Ranking — All 12 Zodiac Signs | BirthFacts",
    description: "Which zodiac sign is luckiest today? All 12 signs ranked, updated daily.",
    images: ["https://birthfacts.net/og-image.png"],
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

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-bold gradient-text">Frequently Asked Questions</h2>
        {[
          { q: "How is the daily fortune ranking calculated?", a: "Each sign's fortune is generated from a deterministic daily rotation based on the date. The ranking cycles through all 12 signs so every sign gets top placement regularly — it's designed for daily entertainment and self-reflection, not prediction." },
          { q: "Does the ranking change every day?", a: "Yes. The fortune ranking updates automatically at midnight and is the same for all visitors on a given day. Refresh after midnight to see the new day's ranking." },
          { q: "What does the fortune score mean?", a: "Each sign receives a fortune reading with a lucky number, lucky color, and a brief outlook. The rank (1st through 12th) reflects the overall energy of that sign for the day." },
          { q: "Can I see my specific zodiac fortune?", a: "Yes — enter your birth date on the home page and your sign's fortune card will appear in your personal reading, along with your rank among all 12 signs." },
        ].map(({ q, a }) => (
          <details key={q} className="card p-4 group">
            <summary className="font-semibold cursor-pointer text-base list-none flex justify-between items-center">
              {q}
              <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{a}</p>
          </details>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "How is the daily fortune ranking calculated?", acceptedAnswer: { "@type": "Answer", text: "Each sign's fortune is generated from a deterministic daily rotation based on the date. The ranking cycles through all 12 signs so every sign gets top placement regularly — it's designed for daily entertainment and self-reflection, not prediction." } },
              { "@type": "Question", name: "Does the ranking change every day?", acceptedAnswer: { "@type": "Answer", text: "Yes. The fortune ranking updates automatically at midnight and is the same for all visitors on a given day." } },
              { "@type": "Question", name: "What does the fortune score mean?", acceptedAnswer: { "@type": "Answer", text: "Each sign receives a fortune reading with a lucky number, lucky color, and a brief outlook. The rank (1st through 12th) reflects the overall energy of that sign for the day." } },
              { "@type": "Question", name: "Can I see my specific zodiac fortune?", acceptedAnswer: { "@type": "Answer", text: "Yes — enter your birth date on the BirthFacts home page and your sign's fortune card will appear in your personal reading, along with your rank among all 12 signs." } },
            ],
          }),
        }}
      />

      <EnToolsSection />
    </div>
  );
}
