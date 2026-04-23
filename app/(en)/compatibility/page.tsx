"use client";

import { useState, useEffect } from "react";
import { ALL_SIGNS, SIGN_NAMES_ES } from "@/lib/dailyFortune";
import { getCompatibility, SIGN_ORDER } from "@/lib/compatibility";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const ELEMENTS: Record<string, { label: string; color: string }> = {
  Aries:       { label: "Fire ♈",        color: "#ef4444" },
  Leo:         { label: "Fire ♌",        color: "#ef4444" },
  Sagittarius: { label: "Fire ♐",        color: "#ef4444" },
  Taurus:      { label: "Earth ♉",       color: "#84cc16" },
  Virgo:       { label: "Earth ♍",       color: "#84cc16" },
  Capricorn:   { label: "Earth ♑",       color: "#84cc16" },
  Gemini:      { label: "Air ♊",         color: "#38bdf8" },
  Libra:       { label: "Air ♎",         color: "#38bdf8" },
  Aquarius:    { label: "Air ♒",         color: "#38bdf8" },
  Cancer:      { label: "Water ♋",       color: "#818cf8" },
  Scorpio:     { label: "Water ♏",       color: "#818cf8" },
  Pisces:      { label: "Water ♓",       color: "#818cf8" },
};

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100;
  const color = score >= 8 ? "#a78bfa" : score >= 6 ? "#f59e0b" : "#ef4444";
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--muted)]">Compatibility Score</span>
        <span className="font-bold text-lg" style={{ color }}>{score} / 10</span>
      </div>
      <div className="h-3 rounded-full bg-[var(--card-border)] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

const SIGN_SELECT_CLASS =
  "w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-base text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer";

const FAQ_ITEMS = [
  {
    q: "How is zodiac compatibility calculated?",
    a: "Compatibility is based on classical Western astrology: elemental affinity (Fire, Earth, Air, Water), modality pairing (Cardinal, Fixed, Mutable), and historical interpretations of each sign combination. Opposite signs often share strong attraction; same-element signs share natural understanding.",
  },
  {
    q: "Does zodiac compatibility determine relationship success?",
    a: "Astrology offers one lens for self-reflection, not a deterministic verdict. Many long-term couples have so-called incompatible signs. Use these readings as conversation starters and prompts for self-awareness, not as final judgments.",
  },
  {
    q: "What does the compatibility score mean?",
    a: "The score (1–10) reflects the general ease and natural resonance between two signs based on astrological tradition. A high score suggests natural harmony; a lower score often means more conscious effort is needed — which can itself deepen a relationship.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function getUrlParams(): { a: string; b: string } {
  if (typeof window === "undefined") return { a: "", b: "" };
  const p = new URLSearchParams(window.location.search);
  return { a: p.get("a") ?? "", b: p.get("b") ?? "" };
}

export default function CompatibilityPage() {
  const [signA, setSignA] = useState("");
  const [signB, setSignB] = useState("");

  useEffect(() => {
    const { a, b } = getUrlParams();
    if (SIGN_ORDER.includes(a)) setSignA(a);
    if (SIGN_ORDER.includes(b)) setSignB(b);
  }, []);

  const pair = signA && signB ? getCompatibility(signA, signB) : null;
  const elemA = signA ? ELEMENTS[signA] : null;
  const elemB = signB ? ELEMENTS[signB] : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Zodiac Compatibility", href: "/compatibility/" },
        ]}
      />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">💞 Zodiac Compatibility</h1>
        <p className="text-[var(--muted)] text-base">
          Discover how your sign connects with any other — personality, love, and energy.
        </p>
      </div>

      {/* Sign selectors */}
      <div className="card p-6 mb-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Your Sign</label>
            <select value={signA} onChange={(e) => setSignA(e.target.value)} className={SIGN_SELECT_CLASS} aria-label="Your Sign">
              <option value="">Choose a sign…</option>
              {ALL_SIGNS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Their Sign</label>
            <select value={signB} onChange={(e) => setSignB(e.target.value)} className={SIGN_SELECT_CLASS} aria-label="Their Sign">
              <option value="">Choose a sign…</option>
              {ALL_SIGNS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {signA && signB && elemA && elemB && (
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: elemA.color }}>{elemA.label}</span>
            <span className="text-2xl">×</span>
            <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: elemB.color }}>{elemB.label}</span>
          </div>
        )}
      </div>

      {/* Result */}
      {pair && signA && signB && (
        <div className="card p-6 space-y-5 mb-6">
          <ScoreBar score={pair.score} />
          <div>
            <p className="text-xl font-bold text-[var(--accent)] mb-2">{signA} × {signB}</p>
            <p className="text-base font-semibold mb-3 text-[var(--text)]">"{pair.summary}"</p>
            <p className="text-base text-[var(--muted)] leading-relaxed">{pair.description}</p>
          </div>
        </div>
      )}

      {!signA && !signB && (
        <div className="text-center py-12 text-[var(--muted)]">
          <p className="text-4xl mb-3">♈ × ♓</p>
          <p className="text-base">Select two signs above to see their compatibility reading.</p>
        </div>
      )}

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-bold gradient-text">Frequently Asked Questions</h2>
        {FAQ_ITEMS.map(({ q, a }) => (
          <details key={q} className="card p-4 group">
            <summary className="font-semibold cursor-pointer text-base list-none flex justify-between items-center">
              {q}
              <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{a}</p>
          </details>
        ))}
      </section>

      <div className="text-center mt-8">
        <a href="/" className="text-base text-[var(--accent)] hover:underline">← Back to Birthday Calculator</a>
      </div>
    </div>
  );
}
