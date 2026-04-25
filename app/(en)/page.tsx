import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";
import FortuneRankingTeaser from "@/components/FortuneRankingTeaser";

export const metadata: Metadata = {
  title: "Age Calculator – Exact Age in Years, Months, Days & Seconds | BirthFacts",
  description:
    "Calculate your exact age in years, months, weeks, days, hours and minutes instantly. Free age calculator with zodiac sign, birth flower, Life Path Number, generational identity, and more.",
  alternates: {
    canonical: "https://birthfacts.net/",
    languages: {
      en: "https://birthfacts.net/",
      es: "https://birthfacts.net/es/",
      ja: "https://birthfacts.net/ja/",
      "x-default": "https://birthfacts.net/",
    },
  },
};

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://birthfacts.net/#webapp",
  name: "BirthFacts — Age Calculator & Birthday Reading",
  url: "https://birthfacts.net/",
  description: "Free age calculator with zodiac sign, daily fortune, birth flower, Life Path Number, Mayan calendar, generational identity, and more.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web Browser",
  browserRequirements: "Requires JavaScript",
  inLanguage: "en",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/OnlineOnly",
  },
  featureList: [
    "Exact age calculator", "Daily horoscope fortune", "Western zodiac sign",
    "Chinese zodiac", "Life Path Number", "Moon phase", "Mayan calendar Kin",
    "Historical timeline", "Dog age calculator", "Cat age calculator",
    "Zodiac compatibility reading",
  ],
  publisher: {
    "@type": "Organization",
    name: "Ascent Leadership Institute Inc",
    url: "https://birthfacts.net",
  },
};

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          <span className="gradient-text">Age Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          Discover your exact age in years, months, weeks, days, hours & minutes —
          plus your zodiac sign, generational identity, and more.
        </p>
      </div>

      {/* Calculator */}
      <AgeCalculator />

      {/* Fortune ranking teaser */}
      <FortuneRankingTeaser locale="en" rankingHref="/fortune-ranking/" />

      {/* Feature highlights */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          {
            icon: "⚡",
            title: "Instant & Exact",
            desc: "See your age down to minutes and seconds, calculated live.",
          },
          {
            icon: "🔮",
            title: "Spiritual Profile",
            desc: "Zodiac, Chinese zodiac, Life Path Number, and your spiritual generation.",
          },
          {
            icon: "📅",
            title: "Historical Facts",
            desc: "Discover what the world looked like the year you were born.",
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="card p-5">
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-[var(--muted)]">{desc}</p>
          </div>
        ))}
      </div>

      {/* Related tools */}
      <div className="mt-12 card p-6">
        <h2 className="font-semibold text-lg text-[var(--accent)] mb-4">More tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/fortune-ranking/",      emoji: "🏆", title: "Fortune Ranking",     desc: "All 12 signs ranked by luck today" },
            { href: "/compatibility/",         emoji: "💞", title: "Compatibility",        desc: "See how your sign connects with any other" },
            { href: "/dog-age-calculator/",    emoji: "🐶", title: "Dog Age Calculator",   desc: "How old is your dog in human years?" },
            { href: "/cat-age-calculator/",    emoji: "🐱", title: "Cat Age Calculator",   desc: "How old is your cat in human years?" },
            { href: "/days-between/",          emoji: "📅", title: "Days Between Dates",   desc: "Calculate days, weeks, months between dates" },
          ].map(({ href, emoji, title, desc }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-3 p-3 rounded-xl border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
            >
              <span className="text-2xl">{emoji}</span>
              <div>
                <div className="font-medium text-sm text-[var(--text)]">{title}</div>
                <div className="text-xs text-[var(--muted)]">{desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
