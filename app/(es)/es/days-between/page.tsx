"use client";

import { useState } from "react";

function getTodayString() {
  return new Date().toISOString().split("T")[0];
}

function daysBetween(a: string, b: string) {
  const d1 = new Date(a + "T00:00:00");
  const d2 = new Date(b + "T00:00:00");
  return Math.abs(Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)));
}

export default function EsDaysBetweenPage() {
  const [dateA, setDateA] = useState("");
  const [dateB, setDateB] = useState(getTodayString());
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    if (!dateA || !dateB) return;
    setResult(daysBetween(dateA, dateB));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Días Entre Fechas</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          Calcula el número exacto de días, semanas, meses y años entre dos fechas.
        </p>
      </div>

      <div className="card p-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">Fecha de inicio</label>
            <input
              type="date"
              value={dateA}
              onChange={(e) => setDateA(e.target.value)}
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">Fecha de fin</label>
            <input
              type="date"
              value={dateB}
              onChange={(e) => setDateB(e.target.value)}
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
          <button onClick={calculate} className="btn-primary w-full">
            Calcular
          </button>
        </div>

        {result !== null && (
          <div className="mt-6 text-center card p-5">
            <div className="text-4xl font-bold gradient-text">{result.toLocaleString("es-ES")}</div>
            <div className="text-[var(--muted)] text-sm mt-1">días</div>
            <div className="text-[var(--muted)] text-xs mt-2">
              ≈ {Math.floor(result / 7).toLocaleString("es-ES")} semanas &nbsp;·&nbsp;
              ≈ {Math.floor(result / 30).toLocaleString("es-ES")} meses &nbsp;·&nbsp;
              ≈ {(result / 365.25).toFixed(1)} años
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <a href="/es/" className="btn-primary inline-block">🎂 Volver a la Calculadora de Edad</a>
      </div>
    </div>
  );
}
