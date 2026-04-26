"use client";

import { useState } from "react";
import { getMoonPhase } from "@/lib/birthProfile";
import type { MoonPhase } from "@/lib/birthProfile";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EnToolsSection from "@/components/EnToolsSection";

const ALL_PHASES = [
  { phase: "New Moon", emoji: "🌑", illumination: "0%", short: "New beginnings, intention-setting, inner reflection." },
  { phase: "Waxing Crescent", emoji: "🌒", illumination: "~25%", short: "Growth, hope, building energy forward." },
  { phase: "First Quarter", emoji: "🌓", illumination: "~50%", short: "Action, decisiveness, overcoming challenges." },
  { phase: "Waxing Gibbous", emoji: "🌔", illumination: "~75%", short: "Refinement, perseverance, analytical spirit." },
  { phase: "Full Moon", emoji: "🌕", illumination: "100%", short: "Culmination, heightened emotions, expressive nature." },
  { phase: "Waning Gibbous", emoji: "🌖", illumination: "~75%", short: "Gratitude, sharing, natural wisdom teacher." },
  { phase: "Last Quarter", emoji: "🌗", illumination: "~50%", short: "Release, reflection, gift of letting go." },
  { phase: "Waning Crescent", emoji: "🌘", illumination: "~25%", short: "Rest, surrender, deep psychic intuition." },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What moon phase was I born under?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your birthdate into the Moon Phase Birthday Calculator above. It calculates the exact lunar cycle on your birth date and tells you which of the 8 moon phases you were born under.",
      },
    },
    {
      "@type": "Question",
      name: "Does the moon phase at birth affect your personality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In astrology and moon lore, the phase of the moon at your birth is said to shape your emotional temperament, intuition, and life approach. For example, Full Moon births are associated with heightened emotions and expressiveness, while New Moon births are linked to fresh starts and introspection.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is the moon phase calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The calculator uses the known synodic period of the Moon (29.53 days) anchored to a verified new moon date. It accurately places your birthdate within one of the 8 traditional lunar phases.",
      },
    },
    {
      "@type": "Question",
      name: "What is the rarest moon phase to be born under?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All 8 moon phases occur with roughly equal frequency across the 29.53-day lunar cycle, so no phase is significantly rarer than others. However, many people consider the New Moon or Full Moon birth to be especially significant spiritually.",
      },
    },
  ],
};

export default function MoonPhaseBirthdayPage() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [result, setResult] = useState<MoonPhase | null>(null);
  const [error, setError] = useState("");

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const y = parseInt(year);
    const m = parseInt(month);
    const d = parseInt(day);
    if (!y || y < 1900 || y > 2025 || !m || m < 1 || m > 12 || !d || d < 1 || d > 31) {
      setError("Please enter a valid date of birth.");
      return;
    }
    setError("");
    const dob = new Date(y, m - 1, d);
    setResult(getMoonPhase(dob));
  }

  function handleReset() {
    setResult(null);
    setYear("");
    setMonth("");
    setDay("");
  }

  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Moon Phase Birthday", href: "/moon-phase-birthday/" }]} />

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">Moon Phase Birthday Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          What moon phase were you born under? Discover your natal moon and its spiritual meaning.
        </p>
      </div>

      {!result && (
        <form onSubmit={handleCalculate} className="card p-6 space-y-5">
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--muted)]">Month</label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <option value="">—</option>
                {months.map((name, i) => (
                  <option key={name} value={i + 1}>{name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--muted)]">Day</label>
              <select
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <option value="">—</option>
                {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--muted)]">Year</label>
              <input
                type="number"
                placeholder="1990"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                min={1900}
                max={2025}
                className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-purple-500 hover:opacity-90 transition-opacity"
          >
            Find My Moon Phase 🌙
          </button>
        </form>
      )}

      {result && (
        <div className="space-y-5">
          <div className="card p-6 text-center space-y-3">
            <div className="text-7xl">{result.emoji}</div>
            <div>
              <span className="text-sm text-[var(--muted)]">Your birth moon phase</span>
              <h2 className="text-2xl font-bold gradient-text mt-1">{result.phase}</h2>
              <span className="text-sm text-[var(--muted)]">Illumination: {result.illumination}</span>
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-bold text-base mb-2">What it means</h3>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{result.meaning}</p>
          </div>

          <div className="text-center space-y-2">
            <button onClick={handleReset} className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity block mx-auto">
              ← Try a different date
            </button>
            <a href="/" className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity block">
              Get your full birthday profile →
            </a>
          </div>
        </div>
      )}

      {/* All 8 phases reference */}
      <section className="mt-12">
        <h2 className="text-xl font-bold gradient-text mb-4">The 8 Lunar Phases</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ALL_PHASES.map(({ phase, emoji, illumination, short }) => (
            <div key={phase} className="card p-4 flex items-start gap-3">
              <span className="text-3xl flex-shrink-0">{emoji}</span>
              <div>
                <div className="font-semibold text-sm">{phase}</div>
                <div className="text-xs text-[var(--muted)]">{illumination} illumination</div>
                <div className="text-xs text-[var(--muted)] mt-1">{short}</div>
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
