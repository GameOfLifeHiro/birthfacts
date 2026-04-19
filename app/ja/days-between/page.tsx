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

export default function JaDaysBetweenPage() {
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
          <span className="gradient-text">日数計算</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          2つの日付の間の日数・週数・月数・年数を正確に計算します。
        </p>
      </div>

      <div className="card p-6 max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">開始日</label>
            <input
              type="date"
              value={dateA}
              onChange={(e) => setDateA(e.target.value)}
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">終了日</label>
            <input
              type="date"
              value={dateB}
              onChange={(e) => setDateB(e.target.value)}
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] focus:outline-none focus:border-[var(--accent)]"
            />
          </div>
          <button onClick={calculate} className="btn-primary w-full">
            計算する
          </button>
        </div>

        {result !== null && (
          <div className="mt-6 text-center card p-5">
            <div className="text-4xl font-bold gradient-text">{result.toLocaleString("ja-JP")}</div>
            <div className="text-[var(--muted)] text-sm mt-1">日間</div>
            <div className="text-[var(--muted)] text-xs mt-2">
              約 {Math.floor(result / 7).toLocaleString("ja-JP")} 週間 &nbsp;·&nbsp;
              約 {Math.floor(result / 30).toLocaleString("ja-JP")} ヶ月 &nbsp;·&nbsp;
              約 {(result / 365.25).toFixed(1)} 年
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <a href="/ja/" className="btn-primary inline-block">🎂 誕生日・年齢計算に戻る</a>
      </div>
    </div>
  );
}
