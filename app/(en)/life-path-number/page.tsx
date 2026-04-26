"use client";

import { useState } from "react";
import { getLifePathNumber } from "@/lib/birthProfile";
import type { LifePathNumber } from "@/lib/birthProfile";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EnToolsSection from "@/components/EnToolsSection";

const LIFE_PATH_EMOJIS: Record<number, string> = {
  1: "👑", 2: "☮️", 3: "🎨", 4: "🏗️", 5: "🌍", 6: "💖", 7: "🔮",
  8: "💎", 9: "🌟", 11: "⚡", 22: "🏛️", 33: "🕊️",
};

const FAMOUS_BY_NUMBER: Record<number, string[]> = {
  1: ["Steve Jobs", "Martin Luther King Jr.", "Lady Gaga"],
  2: ["Barack Obama", "Jennifer Aniston", "Bill Clinton"],
  3: ["Taylor Swift", "David Bowie", "Celine Dion"],
  4: ["Bill Gates", "Oprah Winfrey", "Arnold Schwarzenegger"],
  5: ["Abraham Lincoln", "Angelina Jolie", "Mick Jagger"],
  6: ["Michael Jackson", "John Lennon", "Albert Einstein"],
  7: ["Elon Musk", "Marilyn Monroe", "Freddie Mercury"],
  8: ["Pablo Picasso", "Nelson Mandela", "50 Cent"],
  9: ["Mahatma Gandhi", "Jimi Hendrix", "Elvis Presley"],
  11: ["Edgar Allan Poe", "Barack Obama (Master)", "Lionel Messi"],
  22: ["Paul McCartney", "Tina Turner", "Bryan Adams"],
  33: ["Meryl Streep", "Stephen King", "John Lennon (alt)"],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Life Path Number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your Life Path Number is the most important number in numerology. It's calculated from your full birthdate and reveals your core personality, life purpose, and the path you are meant to walk in this lifetime.",
      },
    },
    {
      "@type": "Question",
      name: "How is a Life Path Number calculated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Add the digits of your birth month, birth day, and birth year separately, reduce each to a single digit, then add those together and reduce to a single digit (unless the result is 11, 22, or 33 — the master numbers, which are not reduced).",
      },
    },
    {
      "@type": "Question",
      name: "What are master numbers in numerology?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Master numbers are 11, 22, and 33. They are not reduced further because they carry amplified spiritual significance. Life Path 11 is the Visionary, 22 is the Master Builder, and 33 is the Master Teacher.",
      },
    },
    {
      "@type": "Question",
      name: "Is my Life Path Number the same as my destiny number?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your Life Path Number is derived from your birthdate and represents your innate traits and life journey. Your Destiny (or Expression) Number comes from the letters in your full birth name and represents your life's goals.",
      },
    },
    {
      "@type": "Question",
      name: "Can my Life Path Number change?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Your Life Path Number is fixed because it is derived from your date of birth, which never changes. It reflects permanent energies that influence your entire life.",
      },
    },
  ],
};

export default function LifePathNumberPage() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [result, setResult] = useState<LifePathNumber | null>(null);
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
    setResult(getLifePathNumber(dob));
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
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Life Path Number", href: "/life-path-number/" }]} />

      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">Life Path Number Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          Discover your numerology Life Path Number — the key to understanding your core personality and life purpose.
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
              <select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                <option value="">—</option>
                {Array.from({ length: 102 }, (_, i) => 2025 - i).map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-purple-500 hover:opacity-90 transition-opacity"
          >
            Calculate My Life Path Number
          </button>
        </form>
      )}

      {result && (
        <div className="space-y-5">
          <div className="card p-6 text-center space-y-3">
            <div className="text-5xl">{LIFE_PATH_EMOJIS[result.number] ?? "✨"}</div>
            <div>
              <span className="text-sm text-[var(--muted)]">Your Life Path Number</span>
              <div className="text-6xl font-bold gradient-text mt-1">{result.number}</div>
              {result.isMaster && (
                <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-400">
                  Master Number
                </span>
              )}
            </div>
          </div>

          <div className="card p-5 space-y-3">
            <h2 className="font-bold text-lg gradient-text">{result.meaning.split(" — ")[0]}</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{result.meaning.split(" — ").slice(1).join(" — ")}</p>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Core Strengths</span>
              <p className="text-sm mt-1 text-[var(--text)]">{result.strengths}</p>
            </div>
          </div>

          {FAMOUS_BY_NUMBER[result.number] && (
            <div className="card p-5">
              <h3 className="font-semibold text-sm text-[var(--muted)] mb-2 uppercase tracking-wide">Famous Life Path {result.number}s</h3>
              <div className="flex flex-wrap gap-2">
                {FAMOUS_BY_NUMBER[result.number].map((name) => (
                  <span key={name} className="px-3 py-1 rounded-full text-xs border border-[var(--card-border)] text-[var(--muted)]">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          )}

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

      {/* All 9 Life Path Numbers reference */}
      <section className="mt-12">
        <h2 className="text-xl font-bold gradient-text mb-4">All Life Path Numbers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { n: 1, title: "The Leader", short: "Independent, ambitious, pioneering" },
            { n: 2, title: "The Diplomat", short: "Cooperative, empathic, peacemaking" },
            { n: 3, title: "The Creative", short: "Expressive, artistic, joyful" },
            { n: 4, title: "The Builder", short: "Practical, hardworking, reliable" },
            { n: 5, title: "The Freedom Seeker", short: "Adventurous, adaptable, magnetic" },
            { n: 6, title: "The Nurturer", short: "Loving, responsible, devoted" },
            { n: 7, title: "The Seeker", short: "Introspective, spiritual, wise" },
            { n: 8, title: "The Powerhouse", short: "Driven, authoritative, masterful" },
            { n: 9, title: "The Humanitarian", short: "Compassionate, selfless, idealistic" },
            { n: 11, title: "Master 11: The Visionary", short: "Intuitive, inspirational, enlightened" },
            { n: 22, title: "Master 22: The Builder", short: "Visionary, practical, transformational" },
            { n: 33, title: "Master 33: The Teacher", short: "Compassionate, healing, selfless" },
          ].map(({ n, title, short }) => (
            <div key={n} className="flex items-center gap-3 card p-3">
              <span className="text-2xl font-bold gradient-text w-8 text-center flex-shrink-0">{n}</span>
              <div>
                <div className="font-medium text-sm">{title}</div>
                <div className="text-xs text-[var(--muted)]">{short}</div>
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
