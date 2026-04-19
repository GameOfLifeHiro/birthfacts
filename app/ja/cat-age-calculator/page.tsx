"use client";

import { useState } from "react";

const CAT_STAGES = [
  { max: 1, label: "子猫", emoji: "🐱", desc: "急速な成長・発達期" },
  { max: 2, label: "少年期", emoji: "🐈", desc: "社会的・性的成熟期" },
  { max: 6, label: "壮年期", emoji: "😺", desc: "最も健康で活発な時期" },
  { max: 10, label: "熟年期", emoji: "🐾", desc: "人間の40〜50代相当" },
  { max: 14, label: "シニア", emoji: "🌿", desc: "定期的な健康チェックが推奨" },
  { max: Infinity, label: "超高齢", emoji: "⭐", desc: "特別なケアと定期通院が必要" },
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

export default function JaCatAgeCalculatorPage() {
  const [catYears, setCatYears] = useState("");
  const [result, setResult] = useState<{ humanAge: number; stage: typeof CAT_STAGES[0] } | null>(null);

  const calculate = () => {
    const years = parseFloat(catYears);
    if (isNaN(years) || years < 0 || years > 30) return;
    setResult({ humanAge: calcCatAge(years), stage: getCatStage(years) });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">猫の年齢計算</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          愛猫の年齢を人間の年齢に換算します。猫の年齢を入力してください。
        </p>
      </div>

      <div className="card p-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">猫の年齢（年）</label>
            <input
              type="number" min="0" max="30" step="0.5"
              value={catYears}
              onChange={(e) => setCatYears(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="例：5"
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>
          <button onClick={calculate} className="btn-primary w-full">人間年齢を計算する</button>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="card p-6 text-center">
            <p className="text-[var(--muted)] text-sm mb-2">あなたの愛猫の人間換算年齢は約</p>
            <p className="text-5xl font-bold gradient-text mb-2">{result.humanAge}</p>
            <p className="text-lg text-[var(--muted)]">歳です</p>
            <div className="mt-3 flex items-center justify-center gap-2">
              <span className="text-2xl">{result.stage.emoji}</span>
              <span className="text-sm font-semibold text-[var(--accent)]">{result.stage.label}</span>
            </div>
            <p className="text-xs text-[var(--muted)] mt-1">{result.stage.desc}</p>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wider mb-3">猫のライフステージ</h3>
            <div className="space-y-2">
              {CAT_STAGES.filter((s) => s.max !== Infinity).concat([CAT_STAGES[CAT_STAGES.length - 1]]).map((s) => (
                <div key={s.label} className={`flex items-center gap-3 p-2 rounded-lg border transition-colors ${s.label === result.stage.label ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--card-border)]"}`}>
                  <span className="text-xl">{s.emoji}</span>
                  <div className="flex-1">
                    <span className="font-semibold text-sm text-[var(--text)]">{s.label}</span>
                    <span className="text-xs text-[var(--muted)] ml-2">{s.desc}</span>
                  </div>
                  <span className="text-xs text-[var(--muted)]">
                    {s.max !== Infinity ? `〜${s.max}歳` : "15歳〜"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 card p-5">
        <h2 className="font-semibold mb-2">猫の年齢換算の仕組み</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed mb-3">
          猫は最初の2年間で急速に成長します。1年目は約15人間年、2年目はさらに9年（合計24年）、それ以降は毎年約4人間年として計算します。犬と異なり、猫の老化速度に体格差はほとんどありません。
        </p>
        <p className="text-base text-[var(--muted)] leading-relaxed">
          この計算式は国際猫ケア機構（International Cat Care）のガイドラインに基づいており、世界中の獣医師に広く使用されています。
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/ja/" className="btn-primary text-center">🎂 誕生日・年齢計算</a>
        <a href="/ja/dog-age-calculator/" className="text-center px-5 py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors font-semibold">
          🐶 犬の年齢計算
        </a>
      </div>
    </div>
  );
}
