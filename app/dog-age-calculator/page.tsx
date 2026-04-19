"use client";

import { useState } from "react";
import type { Metadata } from "next";

// Dog age formula (AVMA-based):
// Year 1 = 15 human years, Year 2 = +9 (24 total), Year 3+ = +4/yr
// Size modifier: small dogs age slightly slower, large dogs slightly faster
const SIZE_MODIFIERS: Record<string, number> = {
  small: 0.85,   // < 20 lbs
  medium: 1.0,   // 20–50 lbs
  large: 1.2,    // 50+ lbs
};

const DOG_STAGES = [
  { max: 1, label: "Puppy", color: "text-pink-400" },
  { max: 2, label: "Junior", color: "text-purple-400" },
  { max: 7, label: "Adult", color: "text-[var(--accent)]" },
  { max: 10, label: "Mature", color: "text-yellow-400" },
  { max: 13, label: "Senior", color: "text-orange-400" },
  { max: Infinity, label: "Geriatric", color: "text-red-400" },
];

function getDogStage(dogYears: number) {
  return DOG_STAGES.find((s) => dogYears <= s.max) ?? DOG_STAGES[DOG_STAGES.length - 1];
}

function calcDogAge(dogYears: number, size: string): number {
  let humanAge = 0;
  const mod = SIZE_MODIFIERS[size] ?? 1;
  for (let y = 1; y <= dogYears; y++) {
    if (y === 1) humanAge += 15;
    else if (y === 2) humanAge += 9;
    else humanAge += 4;
  }
  // Apply partial year
  const fractional = dogYears - Math.floor(dogYears);
  if (fractional > 0) {
    const fullYearIncrement = dogYears >= 2 ? 4 : dogYears >= 1 ? 9 : 15;
    humanAge += fractional * fullYearIncrement;
  }
  return Math.round(humanAge * mod);
}

export default function DogAgeCalculatorPage() {
  const [dogYears, setDogYears] = useState("");
  const [size, setSize] = useState("medium");
  const [result, setResult] = useState<{ humanAge: number; stage: typeof DOG_STAGES[0] } | null>(null);

  const calculate = () => {
    const years = parseFloat(dogYears);
    if (isNaN(years) || years < 0 || years > 30) return;
    const humanAge = calcDogAge(years, size);
    const stage = getDogStage(years);
    setResult({ humanAge, stage });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Dog Age Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          How old is your dog in human years? Enter your dog&apos;s age and size for an accurate conversion.
        </p>
      </div>

      <div className="card p-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">Dog&apos;s age (in years)</label>
            <input
              type="number"
              min="0"
              max="30"
              step="0.5"
              value={dogYears}
              onChange={(e) => setDogYears(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="e.g. 7"
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--muted)] mb-2">Dog&apos;s size</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: "small", label: "Small", sub: "< 20 lbs" },
                { key: "medium", label: "Medium", sub: "20–50 lbs" },
                { key: "large", label: "Large", sub: "50+ lbs" },
              ].map(({ key, label, sub }) => (
                <button
                  key={key}
                  onClick={() => setSize(key)}
                  className={`p-3 rounded-xl border text-sm transition-colors ${
                    size === key
                      ? "border-[var(--accent)] bg-[var(--accent)]/10 text-[var(--accent)]"
                      : "border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--accent)]"
                  }`}
                >
                  <div className="font-semibold">{label}</div>
                  <div className="text-xs mt-0.5 opacity-70">{sub}</div>
                </button>
              ))}
            </div>
          </div>

          <button onClick={calculate} className="btn-primary w-full">
            Calculate Human Age
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="card p-6 text-center">
            <p className="text-[var(--muted)] text-sm mb-2">Your dog is approximately</p>
            <p className="text-5xl font-bold gradient-text mb-2">{result.humanAge}</p>
            <p className="text-lg text-[var(--muted)]">years old in human terms</p>
            <div className={`mt-3 text-sm font-semibold ${result.stage.color}`}>
              Life stage: {result.stage.label}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wider mb-3">Dog life stages</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {DOG_STAGES.filter((s) => s.max !== Infinity).map((s) => (
                <div
                  key={s.label}
                  className={`text-center p-2 rounded-lg border ${
                    s.label === result.stage.label
                      ? "border-[var(--accent)] bg-[var(--accent)]/10"
                      : "border-[var(--card-border)]"
                  }`}
                >
                  <div className={`text-sm font-semibold ${s.color}`}>{s.label}</div>
                  <div className="text-xs text-[var(--muted)]">≤ {s.max} yr{s.max !== 1 ? "s" : ""}</div>
                </div>
              ))}
              <div
                className={`text-center p-2 rounded-lg border ${
                  result.stage.label === "Geriatric"
                    ? "border-[var(--accent)] bg-[var(--accent)]/10"
                    : "border-[var(--card-border)]"
                }`}
              >
                <div className="text-sm font-semibold text-red-400">Geriatric</div>
                <div className="text-xs text-[var(--muted)]">13+ yrs</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 card p-5">
        <h2 className="font-semibold mb-2">How is dog age calculated?</h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          The old &quot;1 dog year = 7 human years&quot; rule is a myth. Modern veterinary science uses a more
          accurate model: the first year equals ~15 human years (rapid development), the second year
          adds ~9 more (24 total), and each subsequent year adds ~4 human years. Large dogs age
          faster than small dogs, so we apply a size modifier to reflect this difference.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/" className="btn-primary text-center">
          🎂 Birthday Age Calculator
        </a>
        <a
          href="/cat-age-calculator/"
          className="text-center px-5 py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors font-semibold"
        >
          🐱 Cat Age Calculator
        </a>
      </div>
    </div>
  );
}
