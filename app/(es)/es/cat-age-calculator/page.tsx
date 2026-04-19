"use client";

import { useState } from "react";

const CAT_STAGES = [
  { max: 1, label: "Gatito", emoji: "🐱", desc: "Crecimiento y desarrollo rápido" },
  { max: 2, label: "Juvenil", emoji: "🐈", desc: "Alcanzando madurez social y sexual" },
  { max: 6, label: "Primavera", emoji: "😺", desc: "Pico de salud y actividad" },
  { max: 10, label: "Maduro", emoji: "🐾", desc: "Equivalente a persona de 40–50 años" },
  { max: 14, label: "Senior", emoji: "🌿", desc: "Se recomienda monitoreo adicional" },
  { max: Infinity, label: "Súper Senior", emoji: "⭐", desc: "Cuidados especiales y visitas regulares" },
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
    const inc = catYears >= 2 ? 4 : catYears >= 1 ? 9 : 15;
    humanAge += fractional * inc;
  }
  return Math.round(humanAge);
}

export default function EsCatAgeCalculatorPage() {
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
          <span className="gradient-text">Calculadora de Edad del Gato</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          ¿Cuántos años tiene tu gato en años humanos? Ingresa su edad para una conversión precisa.
        </p>
      </div>

      <div className="card p-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">Edad del gato (en años)</label>
            <input
              type="number" min="0" max="30" step="0.5"
              value={catYears}
              onChange={(e) => setCatYears(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="ej. 5"
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <button onClick={calculate} className="btn-primary w-full">
            Calcular Edad Humana
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="card p-6 text-center">
            <p className="text-[var(--muted)] text-sm mb-2">Tu gato tiene aproximadamente</p>
            <p className="text-5xl font-bold gradient-text mb-2">{result.humanAge}</p>
            <p className="text-lg text-[var(--muted)]">años en términos humanos</p>
            <div className="mt-3 text-2xl">{result.stage.emoji}</div>
            <div className="mt-1 text-sm font-semibold text-[var(--accent)]">{result.stage.label}</div>
            <div className="text-xs text-[var(--muted)] mt-1">{result.stage.desc}</div>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wider mb-3">Etapas de vida del gato</h3>
            <div className="space-y-2">
              {CAT_STAGES.map((s) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between p-2 rounded-lg ${
                    s.label === result.stage.label
                      ? "bg-[var(--accent)]/10 border border-[var(--accent)]"
                      : "border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span>{s.emoji}</span>
                    <span className="text-sm font-medium">{s.label}</span>
                  </div>
                  <span className="text-xs text-[var(--muted)]">{s.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 card p-5">
        <h2 className="font-semibold mb-2">¿Cómo se calcula la edad del gato?</h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
          Los gatos maduran muy rápidamente en sus primeros dos años. El primer año equivale a
          aproximadamente 15 años humanos, el segundo agrega 9 más (24 en total), y cada año
          posterior equivale a unos 4 años humanos.
        </p>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          Esta fórmula se basa en las directrices de International Cat Care y es ampliamente
          utilizada por veterinarios en todo el mundo.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/es/" className="btn-primary text-center">🎂 Calculadora de Edad por Cumpleaños</a>
        <a href="/es/dog-age-calculator/" className="text-center px-5 py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors font-semibold">
          🐶 Calculadora de Edad del Perro
        </a>
      </div>
    </div>
  );
}
