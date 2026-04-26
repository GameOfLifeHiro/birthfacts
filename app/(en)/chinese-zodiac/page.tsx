"use client";

import { useState } from "react";
import { getChineseZodiac } from "@/lib/birthProfile";
import type { ChineseZodiac } from "@/lib/birthProfile";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EnToolsSection from "@/components/EnToolsSection";

const ZODIAC_EMOJIS: Record<string, string> = {
  Rat: "🐭", Ox: "🐂", Tiger: "🐯", Rabbit: "🐰", Dragon: "🐉", Snake: "🐍",
  Horse: "🐴", Goat: "🐐", Monkey: "🐵", Rooster: "🐓", Dog: "🐕", Pig: "🐖",
};

// 12-year cycle starting from Rat = 2020
const ALL_ANIMALS = [
  { animal: "Rat", kanji: "子", years: "…2008, 2020, 2032…", traits: "Quick-witted, resourceful, adaptable", lucky: "2, 3" },
  { animal: "Ox", kanji: "丑", years: "…2009, 2021, 2033…", traits: "Diligent, dependable, determined", lucky: "1, 4" },
  { animal: "Tiger", kanji: "寅", years: "…2010, 2022, 2034…", traits: "Brave, confident, charismatic", lucky: "1, 3, 4" },
  { animal: "Rabbit", kanji: "卯", years: "…2011, 2023, 2035…", traits: "Gentle, elegant, kind", lucky: "3, 4, 6" },
  { animal: "Dragon", kanji: "辰", years: "…2012, 2024, 2036…", traits: "Confident, intelligent, enthusiastic", lucky: "1, 6, 7" },
  { animal: "Snake", kanji: "巳", years: "…2013, 2025, 2037…", traits: "Enigmatic, wise, intuitive", lucky: "2, 8, 9" },
  { animal: "Horse", kanji: "午", years: "…2014, 2026, 2038…", traits: "Animated, energetic, warm-hearted", lucky: "2, 3, 7" },
  { animal: "Goat", kanji: "未", years: "…2015, 2027, 2039…", traits: "Calm, gentle, creative", lucky: "2, 7" },
  { animal: "Monkey", kanji: "申", years: "…2016, 2028, 2040…", traits: "Clever, mischievous, curious", lucky: "4, 9" },
  { animal: "Rooster", kanji: "酉", years: "…2017, 2029, 2041…", traits: "Observant, hardworking, courageous", lucky: "5, 7, 8" },
  { animal: "Dog", kanji: "戌", years: "…2018, 2030, 2042…", traits: "Loyal, honest, kind", lucky: "3, 4, 9" },
  { animal: "Pig", kanji: "亥", years: "…2019, 2031, 2043…", traits: "Compassionate, generous, diligent", lucky: "2, 5, 8" },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is my Chinese Zodiac sign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Chinese Zodiac sign is determined by your birth year. The cycle repeats every 12 years, cycling through 12 animals: Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, and Pig. Enter your birth year above to find your animal.",
      },
    },
    {
      "@type": "Question",
      name: "Does the Chinese New Year affect my zodiac sign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The Chinese New Year falls between late January and mid-February each year, so if you were born in January or early February, your Chinese Zodiac year may be the previous year. For precise results, check the exact Chinese New Year date for your birth year.",
      },
    },
    {
      "@type": "Question",
      name: "What Chinese Zodiac signs are compatible?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Compatible pairings in Chinese astrology include Rat–Ox, Tiger–Horse–Dog (Fire triangle), Rabbit–Goat–Pig (Wood triangle), Dragon–Monkey–Rat (Water triangle), and Snake–Rooster–Ox (Metal triangle). Incompatible pairs are often opposite signs on the 12-year wheel.",
      },
    },
    {
      "@type": "Question",
      name: "What is the rarest Chinese Zodiac sign?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All 12 Chinese Zodiac signs occur with roughly equal frequency (every 12 years), so none is technically rarer than another. However, Dragon years often see spikes in births in East Asia due to the sign's association with luck and prosperity.",
      },
    },
  ],
};

export default function ChineseZodiacPage() {
  const [year, setYear] = useState("");
  const [result, setResult] = useState<ChineseZodiac | null>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const y = parseInt(year);
    if (!y || y < 1900 || y > 2100) {
      setError("Please enter a valid year between 1900 and 2100.");
      return;
    }
    setError("");
    setResult(getChineseZodiac(y));
  }

  function handleReset() {
    setResult(null);
    setYear("");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Chinese Zodiac", href: "/chinese-zodiac/" }]} />

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">Chinese Zodiac Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          Enter your birth year to discover your Chinese Zodiac animal sign, traits, and lucky numbers.
        </p>
      </div>

      {!result && (
        <form onSubmit={handleCalculate} className="card p-6 space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-[var(--muted)]">Birth Year</label>
            <input
              type="number"
              placeholder="e.g. 1990"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              min={1900}
              max={2100}
              className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-purple-500 hover:opacity-90 transition-opacity"
          >
            Find My Chinese Zodiac 🐉
          </button>
        </form>
      )}

      {result && (
        <div className="space-y-5">
          <div className="card p-6 text-center space-y-3">
            <div className="text-7xl">{ZODIAC_EMOJIS[result.animal] ?? "🐉"}</div>
            <div>
              <span className="text-sm text-[var(--muted)]">Your Chinese Zodiac</span>
              <h2 className="text-3xl font-bold gradient-text mt-1">
                {result.animal} <span className="text-2xl">{result.kanji}</span>
              </h2>
            </div>
          </div>

          <div className="card p-5 space-y-3">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Personality Traits</span>
              <p className="text-sm mt-1 text-[var(--text)]">{result.traits}</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Lucky Numbers</span>
              <p className="text-sm mt-1 text-[var(--text)]">{result.luckyNumbers}</p>
            </div>
          </div>

          <div className="text-center space-y-2">
            <button onClick={handleReset} className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity block mx-auto">
              ← Try a different year
            </button>
            <a href="/" className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity block">
              Get your full birthday profile →
            </a>
          </div>
        </div>
      )}

      {/* All 12 animals reference */}
      <section className="mt-12">
        <h2 className="text-xl font-bold gradient-text mb-4">All 12 Chinese Zodiac Animals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ALL_ANIMALS.map(({ animal, kanji, years, traits, lucky }) => (
            <div key={animal} className="card p-4 flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{ZODIAC_EMOJIS[animal]}</span>
              <div>
                <div className="font-semibold text-sm">{animal} {kanji}</div>
                <div className="text-xs text-[var(--muted)]">{years}</div>
                <div className="text-xs text-[var(--muted)] mt-1">{traits}</div>
                <div className="text-xs text-[var(--muted)]">Lucky: {lucky}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-bold gradient-text">FAQ</h2>
        {FAQ_SCHEMA.mainEntity.map(({ name, acceptedAnswer }) => (
          <details key={name} className="card p-4 group">
            <summary className="font-semibold cursor-pointer text-base list-none flex justify-between items-center">
              {name}
              <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <EnToolsSection />
    </div>
  );
}
