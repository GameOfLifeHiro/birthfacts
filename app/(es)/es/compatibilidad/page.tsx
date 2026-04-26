"use client";

import { useState, useEffect } from "react";
import { ALL_SIGNS, SIGN_NAMES_ES } from "@/lib/dailyFortune";
import { getCompatibility, SIGN_ORDER } from "@/lib/compatibility";
import COMPAT_ES from "@/lib/compatibility-es";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EsToolsSection from "@/components/EsToolsSection";

const ELEMENTS: Record<string, { label: string; color: string }> = {
  Aries:       { label: "Fuego ♈",       color: "#ef4444" },
  Leo:         { label: "Fuego ♌",       color: "#ef4444" },
  Sagittarius: { label: "Fuego ♐",       color: "#ef4444" },
  Taurus:      { label: "Tierra ♉",      color: "#84cc16" },
  Virgo:       { label: "Tierra ♍",      color: "#84cc16" },
  Capricorn:   { label: "Tierra ♑",      color: "#84cc16" },
  Gemini:      { label: "Aire ♊",        color: "#38bdf8" },
  Libra:       { label: "Aire ♎",        color: "#38bdf8" },
  Aquarius:    { label: "Aire ♒",        color: "#38bdf8" },
  Cancer:      { label: "Agua ♋",        color: "#818cf8" },
  Scorpio:     { label: "Agua ♏",        color: "#818cf8" },
  Pisces:      { label: "Agua ♓",        color: "#818cf8" },
};

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100;
  const color = score >= 8 ? "#a78bfa" : score >= 6 ? "#f59e0b" : "#ef4444";
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--muted)]">Puntuación de Compatibilidad</span>
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
    q: "¿Cómo se calcula la compatibilidad zodiacal?",
    a: "La compatibilidad se basa en la astrología occidental clásica: afinidad elemental (Fuego, Tierra, Aire, Agua), combinación de modalidad (Cardinal, Fijo, Mutable) e interpretaciones históricas de cada combinación de signos. Los signos opuestos suelen tener una fuerte atracción; los signos del mismo elemento comparten una comprensión natural.",
  },
  {
    q: "¿La compatibilidad zodiacal determina el éxito de una relación?",
    a: "La astrología ofrece una perspectiva para la reflexión, no un veredicto determinista. Muchas parejas de larga duración tienen signos llamados incompatibles. Usa estas lecturas como puntos de partida para la conversación y la autoconciencia, no como juicios definitivos.",
  },
  {
    q: "¿Qué significa la puntuación de compatibilidad?",
    a: "La puntuación (1–10) refleja la facilidad general y la resonancia natural entre dos signos según la tradición astrológica. Una puntuación alta sugiere armonía natural; una puntuación más baja significa que se necesita más esfuerzo consciente — lo cual en sí mismo puede profundizar una relación.",
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

function pairKey(a: string, b: string): string {
  const ia = SIGN_ORDER.indexOf(a);
  const ib = SIGN_ORDER.indexOf(b);
  return ia <= ib ? `${a}-${b}` : `${b}-${a}`;
}

export default function CompatibilidadPage() {
  const [signA, setSignA] = useState("");
  const [signB, setSignB] = useState("");

  useEffect(() => {
    const { a, b } = getUrlParams();
    if (SIGN_ORDER.includes(a)) setSignA(a);
    if (SIGN_ORDER.includes(b)) setSignB(b);
  }, []);

  const pair = signA && signB ? getCompatibility(signA, signB) : null;
  const esDesc = signA && signB ? COMPAT_ES[pairKey(signA, signB)] : null;
  const elemA = signA ? ELEMENTS[signA] : null;
  const elemB = signB ? ELEMENTS[signB] : null;

  const displayA = (s: string) => SIGN_NAMES_ES[s] ?? s;
  const displayB = (s: string) => SIGN_NAMES_ES[s] ?? s;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", href: "/es/" },
          { name: "Compatibilidad del Zodiaco", href: "/es/compatibilidad/" },
        ]}
      />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">💞 Compatibilidad del Zodiaco</h1>
        <p className="text-[var(--muted)] text-base">
          Descubre cómo se conecta tu signo con cualquier otro — personalidad, amor y energía.
        </p>
      </div>

      {/* Sign selectors */}
      <div className="card p-6 mb-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Tu Signo</label>
            <select value={signA} onChange={(e) => setSignA(e.target.value)} className={SIGN_SELECT_CLASS} aria-label="Tu signo zodiacal">
              <option value="">Elige un signo…</option>
              {ALL_SIGNS.map((s) => (
                <option key={s} value={s}>{displayA(s)}</option>
              ))}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-[var(--muted)] uppercase tracking-wide">Su Signo</label>
            <select value={signB} onChange={(e) => setSignB(e.target.value)} className={SIGN_SELECT_CLASS} aria-label="Signo de su pareja">
              <option value="">Elige un signo…</option>
              {ALL_SIGNS.map((s) => (
                <option key={s} value={s}>{displayB(s)}</option>
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
            <p className="text-xl font-bold text-[var(--accent)] mb-2">
              {displayA(signA)} × {displayB(signB)}
            </p>
            <p className="text-base font-semibold mb-3 text-[var(--text)]">"{pair.summary}"</p>
            <p className="text-base text-[var(--muted)] leading-relaxed">
              {esDesc ?? pair.description}
            </p>
          </div>
        </div>
      )}

      {!signA && !signB && (
        <div className="text-center py-12 text-[var(--muted)]">
          <p className="text-4xl mb-3">♈ × ♓</p>
          <p className="text-base">Selecciona dos signos arriba para ver su lectura de compatibilidad.</p>
        </div>
      )}

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-bold gradient-text">Preguntas Frecuentes</h2>
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
        <a href="/es/" className="text-base text-[var(--accent)] hover:underline">← Volver a la Calculadora</a>
      </div>

      <EsToolsSection />
    </div>
  );
}
