"use client";

import { useState } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const SIZE_MODIFIERS: Record<string, number> = { small: 0.85, medium: 1.0, large: 1.2 };

const DOG_STAGES = [
  { max: 1, label: "Cachorro", color: "text-pink-400" },
  { max: 2, label: "Juvenil", color: "text-purple-400" },
  { max: 7, label: "Adulto", color: "text-[var(--accent)]" },
  { max: 10, label: "Maduro", color: "text-yellow-400" },
  { max: 13, label: "Senior", color: "text-orange-400" },
  { max: Infinity, label: "Geriátrico", color: "text-red-400" },
];

function getDogStage(dogYears: number) {
  return DOG_STAGES.find((s) => dogYears <= s.max) ?? DOG_STAGES[DOG_STAGES.length - 1];
}

function calcDogAge(dogYears: number, size: string): number {
  let humanAge = 0;
  const mod = SIZE_MODIFIERS[size] ?? 1;
  const full = Math.floor(dogYears);
  for (let y = 1; y <= full; y++) {
    if (y === 1) humanAge += 15;
    else if (y === 2) humanAge += 9;
    else humanAge += 4;
  }
  const fractional = dogYears - full;
  if (fractional > 0) {
    const inc = dogYears >= 2 ? 4 : dogYears >= 1 ? 9 : 15;
    humanAge += fractional * inc;
  }
  return Math.round(humanAge * mod);
}

export default function EsDogAgeCalculatorPage() {
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
      <BreadcrumbSchema items={[{ name: "Inicio", href: "/es/" }, { name: "Calculadora de Edad del Perro", href: "/es/dog-age-calculator/" }]} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Calculadora de Edad del Perro</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          ¿Cuántos años tiene tu perro en años humanos? Ingresa su edad y tamaño para una conversión precisa.
        </p>
      </div>

      <div className="card p-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">Edad del perro (en años)</label>
            <input
              type="number" min="0" max="30" step="0.5"
              value={dogYears}
              onChange={(e) => setDogYears(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="ej. 7"
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--muted)] mb-2">Tamaño del perro</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: "small", label: "Pequeño", sub: "< 9 kg" },
                { key: "medium", label: "Mediano", sub: "9–23 kg" },
                { key: "large", label: "Grande", sub: "23+ kg" },
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
            Calcular Edad Humana
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="card p-6 text-center">
            <p className="text-[var(--muted)] text-sm mb-2">Tu perro tiene aproximadamente</p>
            <p className="text-5xl font-bold gradient-text mb-2">{result.humanAge}</p>
            <p className="text-lg text-[var(--muted)]">años en términos humanos</p>
            <div className={`mt-3 text-sm font-semibold ${result.stage.color}`}>
              Etapa de vida: {result.stage.label}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wider mb-3">Etapas de vida del perro</h3>
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
                  <div className="text-xs text-[var(--muted)]">≤ {s.max} año{s.max !== 1 ? "s" : ""}</div>
                </div>
              ))}
              <div
                className={`text-center p-2 rounded-lg border ${
                  result.stage.label === "Geriátrico"
                    ? "border-[var(--accent)] bg-[var(--accent)]/10"
                    : "border-[var(--card-border)]"
                }`}
              >
                <div className="text-sm font-semibold text-red-400">Geriátrico</div>
                <div className="text-xs text-[var(--muted)]">13+ años</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 card p-5">
        <h2 className="font-semibold mb-2">¿Cómo se calcula la edad del perro?</h2>
        <p className="text-sm text-[var(--muted)] leading-relaxed">
          La vieja regla de &quot;1 año de perro = 7 años humanos&quot; es un mito. La ciencia veterinaria moderna
          usa un modelo más preciso: el primer año equivale a ~15 años humanos, el segundo agrega ~9 más
          (24 en total), y cada año posterior agrega ~4 años humanos. Los perros grandes envejecen más
          rápido que los pequeños, por lo que aplicamos un modificador de tamaño.
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/es/" className="btn-primary text-center">🎂 Calculadora de Edad por Cumpleaños</a>
        <a href="/es/cat-age-calculator/" className="text-center px-5 py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors font-semibold">
          🐱 Calculadora de Edad del Gato
        </a>
      </div>
    </div>
  );
}
