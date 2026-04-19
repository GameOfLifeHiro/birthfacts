"use client";

import { useState } from "react";

const SIZE_MODIFIERS: Record<string, number> = { small: 0.85, medium: 1.0, large: 1.2 };

const DOG_STAGES = [
  { max: 1, label: "子犬", color: "text-pink-400" },
  { max: 2, label: "少年期", color: "text-purple-400" },
  { max: 7, label: "成犬", color: "text-[var(--accent)]" },
  { max: 10, label: "熟年", color: "text-yellow-400" },
  { max: 13, label: "シニア", color: "text-orange-400" },
  { max: Infinity, label: "老齢", color: "text-red-400" },
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
  const fractional = dogYears - Math.floor(dogYears);
  if (fractional > 0) {
    const inc = dogYears >= 2 ? 4 : dogYears >= 1 ? 9 : 15;
    humanAge += fractional * inc;
  }
  return Math.round(humanAge * mod);
}

export default function JaDogAgeCalculatorPage() {
  const [dogYears, setDogYears] = useState("");
  const [size, setSize] = useState("medium");
  const [result, setResult] = useState<{ humanAge: number; stage: typeof DOG_STAGES[0] } | null>(null);

  const calculate = () => {
    const years = parseFloat(dogYears);
    if (isNaN(years) || years < 0 || years > 30) return;
    setResult({ humanAge: calcDogAge(years, size), stage: getDogStage(years) });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">犬の年齢計算</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          愛犬の年齢を人間の年齢に換算します。犬の年齢と大きさを入力してください。
        </p>
      </div>

      <div className="card p-6 mb-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-[var(--muted)] mb-1">犬の年齢（年）</label>
            <input
              type="number" min="0" max="30" step="0.5"
              value={dogYears}
              onChange={(e) => setDogYears(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && calculate()}
              placeholder="例：7"
              className="w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-[var(--text)] text-lg focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-[var(--muted)] mb-2">犬の大きさ</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: "small", label: "小型犬", sub: "〜9kg" },
                { key: "medium", label: "中型犬", sub: "9〜23kg" },
                { key: "large", label: "大型犬", sub: "23kg〜" },
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

          <button onClick={calculate} className="btn-primary w-full">人間年齢を計算する</button>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <div className="card p-6 text-center">
            <p className="text-[var(--muted)] text-sm mb-2">あなたの愛犬の人間換算年齢は約</p>
            <p className="text-5xl font-bold gradient-text mb-2">{result.humanAge}</p>
            <p className="text-lg text-[var(--muted)]">歳です</p>
            <div className={`mt-3 text-sm font-semibold ${result.stage.color}`}>
              ライフステージ：{result.stage.label}
            </div>
          </div>

          <div className="card p-5">
            <h3 className="font-semibold text-sm text-[var(--muted)] uppercase tracking-wider mb-3">犬のライフステージ</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {DOG_STAGES.filter((s) => s.max !== Infinity).map((s) => (
                <div key={s.label} className={`text-center p-2 rounded-lg border ${s.label === result.stage.label ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--card-border)]"}`}>
                  <div className={`text-sm font-semibold ${s.color}`}>{s.label}</div>
                  <div className="text-xs text-[var(--muted)]">〜{s.max}歳</div>
                </div>
              ))}
              <div className={`text-center p-2 rounded-lg border ${result.stage.label === "老齢" ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--card-border)]"}`}>
                <div className="text-sm font-semibold text-red-400">老齢</div>
                <div className="text-xs text-[var(--muted)]">13歳〜</div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-10 card p-5">
        <h2 className="font-semibold mb-2">犬の年齢換算の仕組み</h2>
        <p className="text-base text-[var(--muted)] leading-relaxed">
          「犬の1年＝人間の7年」という計算法は誤りです。最新の獣医学では、1年目は約15人間年（急速な成長期）、2年目はさらに約9年（合計24年）、3年目以降は毎年約4年として計算します。大型犬は小型犬より老化が早いため、サイズ係数を適用しています。
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/ja/" className="btn-primary text-center">🎂 誕生日・年齢計算</a>
        <a href="/ja/cat-age-calculator/" className="text-center px-5 py-3 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-colors font-semibold">
          🐱 猫の年齢計算
        </a>
      </div>
    </div>
  );
}
