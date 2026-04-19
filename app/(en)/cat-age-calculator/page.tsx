"use client";

import { useState } from "react";

// Cat age formula:
// Year 1 = 15 human years, Year 2 = +9 (24 total), Year 3+ = +4/yr
const CAT_STAGES = [
  { max: 1, label: "Kitten", emoji: "🐱", desc: "Rapid growth and development" },
  { max: 2, label: "Junior", emoji: "🐈", desc: "Reaching social and sexual maturity" },
  { max: 6, label: "Prime", emoji: "😺", desc: "At the peak of health and activity" },
  { max: 10, label: "Mature", emoji: "🐾", desc: "Equivalent to a person in their 40s–50s" },
  { max: 14, label: "Senior", emoji: "🌿", desc: "Extra health monitoring recommended" },
  { max: Infinity, label: "Super Senior", emoji: "⭐", desc: "Special care and regular vet visits" },
];

function getCatStage(catYears: number) {
  return CAT_STAGES.find((s) => catYears <= s.max) ?? CAT_STAGES[CAT_STAGES.length - 1];
}

function calcCatAge(catYears: number): number {
  let humanAge = 0;
  const full = Math.floor(catYears);
  for (let y = 1; y <= full; y++) {
    if (y === 1) humanAge += 15;
    else if (y === 2) humanAge += 9;
    else humanAge += 4;
  }
  const fractional = catYears - full;
  if (fractional > 0) {
    const increment = catYears >= 2 ? 4 : catYears >= 1 ? 9 : 15;
    humanAge += fractional * increment;
  }
  return Math.round(humanAge);
}

export default function CatAgeCalculatorPage() {
  const [catYears, setCatYears] = useState("");
  const [result, setResult] = useState<{ humanAge: number; stage: typeof CAT_STAGES[0] } | null>(null);

  const calculate = () => {
    const years = parseFloat(catYears);
    if (isNaN(years) || years < 0 || years > 30) return;
    const humanAge = calcCatAge(years);
    const stage = getCatStage(years);
    setResult({ humanAge, stage });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Cat Age Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          How old is your cat in human years? Enter your cat&apos;s age for an accurate conversion.
        </p>
      </div>

      <div className="card p-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">Cat&apos;s age (in years)</label>
            <input
              type="number"
              min="0"
              max="30"
              step="0.5"
              value={catYears}
              onChange={(e) => setCatYears(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="e.g. 5"
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <button onClick={calculate} className="btn-primary w-full">
            Calculate Human Age
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="card p-6 text-center">
            <p className="text-[var(--muted)] text-sm mb-2">Your cat is approximately</p>
            <p className="text-5xl font-bold gradient-text mb-2">{result.humanAge}</p>
            <p className="text-lg text-[var(--muted)]">years old in human terms</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-2xl">{result.stage.emoji}</span>
              <span className="text-sm font-semibold text-[var(--accent)]">{result.stage.label}</span>
            </div>
            <p className="text-xs text-[var(--muted)] mt-1">{result.stage.desc}</p>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wider mb-3">Cat life stages</h3>
            <div className="space-y-2">
              {CAT_STAGES.filter((s) => s.max !== Infinity).concat([CAT_STAGES[CAT_STAGES.length - 1]]).map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-3 p-2 rounded-lg border transition-colors ${
                    s.label === result.stage.label
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--card-border)]"
                  }`}
                >
                  <span className="text-xl">{s.emoji}</span>
                  <div className="flex-1">
                    <span className="font-semibold text-sm text-[var(--text)]">{s.label}</span>
                    <span className="text-xs text-[var(--muted)] ml-2">{s.desc}</span>
                  </div>
                  <span className="text-xs text-[var(--muted)]">
                    {s.max !== Infinity ? `≤ ${s.max} yr${s.max !== 1 ? "s" : ""}` : "15+ yrs"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 card p-5">
        <h2 className="font-semibold mb-2">How is cat age calculated?</h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
          Cats mature very rapidly in their first two years. Year 1 is equivalent to approximately
          15 human years, year 2 adds 9 more (24 total), and each year after that equals about
          4 human years. Unlike dogs, there is no significant size variation in cat aging.
        </p>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          This formula is based on guidelines from the International Cat Care organization and
          is widely used by veterinarians worldwide.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/" className="btn-primary text-center">
          🎂 Birthday Age Calculator
        </a>
        <a
          href="/dog-age-calculator/"
          className="text-center px-5 py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors font-semibold"
        >
          🐶 Dog Age Calculator
        </a>
      </div>
    </div>
  );
}
