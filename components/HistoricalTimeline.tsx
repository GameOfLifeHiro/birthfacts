"use client";

import { useMemo, useState } from "react";
import { getYearFacts, type YearFacts } from "@/lib/historicalData";

interface Props {
  birthYear: number;
}

const CATEGORIES = [
  { key: "worldEvents", label: "🌍 World Events" },
  { key: "tech", label: "💡 Tech" },
  { key: "popCulture", label: "🎭 Pop Culture" },
  { key: "music", label: "🎵 Music" },
  { key: "movies", label: "🎬 Movies" },
] as const;

type CategoryKey = (typeof CATEGORIES)[number]["key"];

export default function HistoricalTimeline({ birthYear }: Props) {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("worldEvents");

  const facts: YearFacts | null = useMemo(() => getYearFacts(birthYear), [birthYear]);

  if (!facts) {
    return (
      <div className="card p-5 text-center text-[var(--muted)] text-sm">
        Historical data not yet available for {birthYear}.
      </div>
    );
  }

  const items = facts[activeCategory];

  return (
    <div className="card p-5">
      <h3 className="font-bold text-lg mb-1">
        <span className="gradient-text">The World in {birthYear}</span>
      </h3>
      <p className="text-base text-[var(--muted)] mb-4">
        What was happening when you were born?
      </p>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-4">
        {CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              activeCategory === key
                ? "bg-[var(--accent)] text-white"
                : "border border-[var(--card-border)] text-[var(--muted)] hover:border-[var(--accent)] hover:text-[var(--accent)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Events list */}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-[var(--accent)] flex-shrink-0" />
            <span className="text-base text-[var(--text)] leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
