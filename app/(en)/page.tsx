import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";
import FortuneRankingTeaser from "@/components/FortuneRankingTeaser";

export const metadata: Metadata = {
  title: "Birthday Countdown & Age Calculator — Days Until Your Birthday | BirthFacts",
  description:
    "How many days until your birthday? Free birthday countdown timer, exact age calculator, zodiac sign, Life Path Number, moon phase, and more — all from your birth date.",
  keywords: [
    "days until my birthday",
    "birthday countdown",
    "age calculator",
    "how many days until my birthday",
    "exact age calculator",
    "zodiac sign calculator",
    "life path number",
  ],
  alternates: {
    canonical: "https://birthfacts.net/",
    languages: {
      en: "https://birthfacts.net/",
      es: "https://birthfacts.net/es/",
      ja: "https://birthfacts.net/ja/",
      "x-default": "https://birthfacts.net/",
    },
  },
  openGraph: {
    title: "Birthday Countdown & Age Calculator | BirthFacts",
    description: "How many days until your birthday? Free birthday countdown, age calculator, zodiac sign, and full birthday profile.",
    url: "https://birthfacts.net/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "BirthFacts – Birthday Countdown & Age Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Countdown & Age Calculator | BirthFacts",
    description: "How many days until your birthday? Free birthday countdown, age calculator, zodiac sign, and full birthday profile.",
    images: ["https://birthfacts.net/og-image.png"],
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
          <span className="gradient-text">Birthday Countdown</span><br />
          <span className="text-3xl sm:text-4xl">& Age Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          How many days until your birthday? Enter your birth date for a live countdown,
          exact age, zodiac sign, Life Path Number, and your full birthday profile.
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
            { href: "/birthday-countdown/",   emoji: "🎂", title: "Birthday Countdown",  desc: "Live countdown to your next birthday" },
            { href: "/fortune-ranking/",       emoji: "🏆", title: "Fortune Ranking",     desc: "All 12 signs ranked by luck today" },
            { href: "/compatibility/",         emoji: "💞", title: "Compatibility",        desc: "See how your sign connects with any other" },
            { href: "/zodiac-signs/",          emoji: "♈", title: "Zodiac Sign Dates",    desc: "Dates, elements & traits for all 12 signs" },
            { href: "/life-path-number/",      emoji: "🔢", title: "Life Path Number",     desc: "Free numerology reading from your birthdate" },
            { href: "/moon-phase-birthday/",   emoji: "🌙", title: "Moon Phase Birthday",  desc: "What moon were you born under?" },
            { href: "/chinese-zodiac/",        emoji: "🐉", title: "Chinese Zodiac",       desc: "Find your Chinese animal sign by birth year" },
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

      {/* FAQ — targeting "days to birthday" queries */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-bold gradient-text">Frequently Asked Questions</h2>
        {[
          {
            q: "How many days until my birthday?",
            a: "Enter your birth date in the calculator above. BirthFacts instantly shows a live countdown with the exact number of days, hours, minutes, and seconds until your next birthday. You can also visit the dedicated Birthday Countdown page for a standalone timer.",
          },
          {
            q: "How do I calculate my exact age?",
            a: "Enter your date of birth above. BirthFacts calculates your exact age in years, months, weeks, days, hours, and minutes — updated live in real time.",
          },
          {
            q: "What is my zodiac sign?",
            a: "Your Western zodiac sign is determined by your birth month and day. Aries runs Mar 21–Apr 19, Taurus Apr 20–May 20, and so on. Enter your birthdate above to see your sign instantly, along with traits, element, and today's fortune.",
          },
          {
            q: "What is a Life Path Number?",
            a: "Your Life Path Number is a numerology number derived from your full date of birth. It's the most significant number in numerology and reveals your core personality, strengths, and life purpose. Try the free Life Path Number Calculator.",
          },
          {
            q: "Is BirthFacts free to use?",
            a: "Yes, completely free. BirthFacts requires no sign-up or payment. Enter your birthdate and instantly access your full birthday profile — zodiac, numerology, moon phase, Chinese zodiac, and more.",
          },
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
              { "@type": "Question", name: "How many days until my birthday?", acceptedAnswer: { "@type": "Answer", text: "Enter your birth date in the calculator. BirthFacts shows a live countdown with the exact number of days, hours, minutes, and seconds until your next birthday." } },
              { "@type": "Question", name: "How do I calculate my exact age?", acceptedAnswer: { "@type": "Answer", text: "Enter your date of birth above. BirthFacts calculates your exact age in years, months, weeks, days, hours, and minutes — updated live in real time." } },
              { "@type": "Question", name: "What is my zodiac sign?", acceptedAnswer: { "@type": "Answer", text: "Your Western zodiac sign is determined by your birth month and day. Enter your birthdate above to see your sign instantly, along with traits, element, and today's fortune." } },
              { "@type": "Question", name: "What is a Life Path Number?", acceptedAnswer: { "@type": "Answer", text: "Your Life Path Number is a numerology number derived from your full date of birth. It reveals your core personality, strengths, and life purpose." } },
              { "@type": "Question", name: "Is BirthFacts free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. BirthFacts requires no sign-up or payment. Enter your birthdate and instantly access your full birthday profile." } },
            ],
          }),
        }}
      />
    </div>
  );
}
