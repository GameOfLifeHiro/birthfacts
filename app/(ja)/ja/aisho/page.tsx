"use client";

import { useState, useEffect } from "react";
import { ALL_SIGNS, SIGN_NAMES_JA } from "@/lib/dailyFortune";
import { getCompatibility, SIGN_ORDER } from "@/lib/compatibility";
import COMPAT_JA from "@/lib/compatibility-ja";
import { getBloodTypeCompat, BLOOD_TYPES, type BloodType } from "@/lib/bloodTypeCompat";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

type Tab = "zodiac" | "blood";

const ELEMENTS: Record<string, { label: string; color: string }> = {
  Aries:       { label: "火 ♈ おひつじ座",   color: "#ef4444" },
  Leo:         { label: "火 ♌ しし座",       color: "#ef4444" },
  Sagittarius: { label: "火 ♐ いて座",       color: "#ef4444" },
  Taurus:      { label: "地 ♉ おうし座",     color: "#84cc16" },
  Virgo:       { label: "地 ♍ おとめ座",     color: "#84cc16" },
  Capricorn:   { label: "地 ♑ やぎ座",       color: "#84cc16" },
  Gemini:      { label: "風 ♊ ふたご座",     color: "#38bdf8" },
  Libra:       { label: "風 ♎ てんびん座",   color: "#38bdf8" },
  Aquarius:    { label: "風 ♒ みずがめ座",   color: "#38bdf8" },
  Cancer:      { label: "水 ♋ かに座",       color: "#818cf8" },
  Scorpio:     { label: "水 ♏ さそり座",     color: "#818cf8" },
  Pisces:      { label: "水 ♓ うお座",       color: "#818cf8" },
};

function ScoreBar({ score }: { score: number }) {
  const pct = (score / 10) * 100;
  const color = score >= 8 ? "#a78bfa" : score >= 6 ? "#f59e0b" : "#ef4444";
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span className="text-[var(--muted)]">相性スコア</span>
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

const SELECT_CLASS =
  "w-full bg-[var(--bg)] border border-[var(--card-border)] rounded-xl px-4 py-3 text-base text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer";

const FAQ_ITEMS = [
  {
    q: "星座の相性はどのように計算されますか？",
    a: "西洋占星術の伝統に基づき、エレメント（火・地・風・水）の相性、クオリティ（活動・不動・柔軟）の組み合わせ、そして各星座の組み合わせに対する歴史的な解釈をもとにスコアを算出しています。対極の星座同士は強い引力が働き、同じエレメント同士は自然な理解が生まれやすい傾向があります。",
  },
  {
    q: "血液型の相性占いは信頼できますか？",
    a: "血液型性格診断は日本独自の文化的占いです。科学的な根拠はありませんが、自己理解やコミュニケーションのきっかけとして多くの人に親しまれています。相性の結果は一つの参考として楽しんでいただき、最終的な判断の基準にはしないようにしましょう。",
  },
  {
    q: "相性スコアの意味を教えてください。",
    a: "スコア（1〜10）は占星術の伝統に基づく二つの星座の自然な共鳴と調和の度合いを示します。スコアが高いほど自然な相性が良い傾向を示し、スコアが低い組み合わせは意識的な努力がより必要なことを示します。低スコアの組み合わせでも、意識的に向き合うことで深い絆が生まれることも多いです。",
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

function pairKey(a: string, b: string): string {
  const ia = SIGN_ORDER.indexOf(a);
  const ib = SIGN_ORDER.indexOf(b);
  return ia <= ib ? `${a}-${b}` : `${b}-${a}`;
}

function getUrlParams(): { a: string; b: string; tab: string } {
  if (typeof window === "undefined") return { a: "", b: "", tab: "zodiac" };
  const p = new URLSearchParams(window.location.search);
  return { a: p.get("a") ?? "", b: p.get("b") ?? "", tab: p.get("tab") ?? "zodiac" };
}

export default function AishoPage() {
  const [tab, setTab] = useState<Tab>("zodiac");

  // Zodiac state
  const [signA, setSignA] = useState("");
  const [signB, setSignB] = useState("");

  // Blood type state
  const [btA, setBtA] = useState<BloodType | "">("");
  const [btB, setBtB] = useState<BloodType | "">("");

  useEffect(() => {
    const { a, b, tab: t } = getUrlParams();
    if (SIGN_ORDER.includes(a)) setSignA(a);
    if (SIGN_ORDER.includes(b)) setSignB(b);
    if (t === "blood") setTab("blood");
  }, []);

  const zodiacPair = signA && signB ? getCompatibility(signA, signB) : null;
  const jaDesc = signA && signB ? COMPAT_JA[pairKey(signA, signB)] : null;
  const elemA = signA ? ELEMENTS[signA] : null;
  const elemB = signB ? ELEMENTS[signB] : null;

  const bloodPair = btA && btB ? getBloodTypeCompat(btA as BloodType, btB as BloodType) : null;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "ホーム", href: "/ja/" },
          { name: "星座・血液型 相性占い", href: "/ja/aisho/" },
        ]}
      />

      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">💞 星座・血液型 相性占い</h1>
        <p className="text-[var(--muted)] text-base">
          あなたの星座と血液型から、相手との相性を無料で鑑定します。
        </p>
      </div>

      {/* Tabs */}
      <div className="flex rounded-xl overflow-hidden border border-[var(--card-border)] mb-6">
        <button
          onClick={() => setTab("zodiac")}
          className={`flex-1 py-3 text-base font-semibold transition-colors ${tab === "zodiac" ? "bg-[var(--accent)] text-white" : "bg-[var(--card)] text-[var(--muted)] hover:text-[var(--text)]"}`}
        >
          ♈ 星座相性
        </button>
        <button
          onClick={() => setTab("blood")}
          className={`flex-1 py-3 text-base font-semibold transition-colors ${tab === "blood" ? "bg-[var(--accent)] text-white" : "bg-[var(--card)] text-[var(--muted)] hover:text-[var(--text)]"}`}
        >
          🩸 血液型相性
        </button>
      </div>

      {/* ── ZODIAC TAB ─────────────────────────────────────────── */}
      {tab === "zodiac" && (
        <>
          <div className="card p-6 mb-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--muted)]">あなたの星座</label>
                <select value={signA} onChange={(e) => setSignA(e.target.value)} className={SELECT_CLASS} aria-label="あなたの星座">
                  <option value="">星座を選択…</option>
                  {ALL_SIGNS.map((s) => (
                    <option key={s} value={s}>{SIGN_NAMES_JA[s] ?? s}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--muted)]">相手の星座</label>
                <select value={signB} onChange={(e) => setSignB(e.target.value)} className={SELECT_CLASS} aria-label="相手の星座">
                  <option value="">星座を選択…</option>
                  {ALL_SIGNS.map((s) => (
                    <option key={s} value={s}>{SIGN_NAMES_JA[s] ?? s}</option>
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

          {zodiacPair && signA && signB && (
            <div className="card p-6 space-y-5 mb-6">
              <ScoreBar score={zodiacPair.score} />
              <div>
                <p className="text-xl font-bold text-[var(--accent)] mb-2">
                  {SIGN_NAMES_JA[signA] ?? signA} × {SIGN_NAMES_JA[signB] ?? signB}
                </p>
                <p className="text-base font-semibold mb-3 text-[var(--text)]">「{zodiacPair.summary}」</p>
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {jaDesc ?? zodiacPair.description}
                </p>
              </div>
            </div>
          )}

          {!signA && !signB && (
            <div className="text-center py-12 text-[var(--muted)]">
              <p className="text-4xl mb-3">♈ × ♓</p>
              <p className="text-base">上の選択肢から2つの星座を選んで相性を確認しましょう。</p>
            </div>
          )}
        </>
      )}

      {/* ── BLOOD TYPE TAB ─────────────────────────────────────── */}
      {tab === "blood" && (
        <>
          <div className="card p-6 mb-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--muted)]">あなたの血液型</label>
                <select value={btA} onChange={(e) => setBtA(e.target.value as BloodType)} className={SELECT_CLASS} aria-label="あなたの血液型">
                  <option value="">血液型を選択…</option>
                  {BLOOD_TYPES.map((bt) => (
                    <option key={bt} value={bt}>{bt}型</option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-[var(--muted)]">相手の血液型</label>
                <select value={btB} onChange={(e) => setBtB(e.target.value as BloodType)} className={SELECT_CLASS} aria-label="相手の血液型">
                  <option value="">血液型を選択…</option>
                  {BLOOD_TYPES.map((bt) => (
                    <option key={bt} value={bt}>{bt}型</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {bloodPair && btA && btB && (
            <div className="card p-6 space-y-5 mb-6">
              <ScoreBar score={bloodPair.score} />
              <div>
                <p className="text-xl font-bold text-[var(--accent)] mb-2">
                  {btA}型 × {btB}型
                </p>
                <p className="text-base font-semibold mb-3 text-[var(--text)]">「{bloodPair.summary}」</p>
                <p className="text-base text-[var(--muted)] leading-relaxed">
                  {bloodPair.description}
                </p>
              </div>
            </div>
          )}

          {!btA && !btB && (
            <div className="text-center py-12 text-[var(--muted)]">
              <p className="text-4xl mb-3">🩸</p>
              <p className="text-base">上の選択肢から2つの血液型を選んで相性を確認しましょう。</p>
            </div>
          )}
        </>
      )}

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-bold gradient-text">よくある質問</h2>
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
        <a href="/ja/" className="text-base text-[var(--accent)] hover:underline">← 誕生日占いに戻る</a>
      </div>
    </div>
  );
}
