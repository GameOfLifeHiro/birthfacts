import type { Metadata } from "next";
import JaToolsSection from "@/components/JaToolsSection";
import { GAJU_EVENTS } from "@/lib/japaneseLifeEvents";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const CURRENT_YEAR = new Date().getFullYear();

export const metadata: Metadata = {
  title: `賀寿 早見表 | 還暦・古希・喜寿・米寿の年齢と象徴色 | BirthFacts`,
  description:
    "賀寿早見表。還暦（60歳）・古希（70歳）・喜寿（77歳）・傘寿（80歳）・米寿（88歳）・卒寿（90歳）・白寿（99歳）・百寿（100歳）の年齢・象徴色・お祝いの風習を一覧で解説。",
  keywords: [
    "賀寿 早見表", "賀寿 一覧", "長寿 お祝い 年齢", "還暦 何歳",
    "古希 何歳", "喜寿 何歳", "米寿 何歳", "白寿 何歳", "百寿",
    "還暦 プレゼント 色", "還暦 赤 意味", "古希 紫", "喜寿 お祝い",
    "長寿祝い 年齢 一覧", "賀寿 種類",
  ],
  alternates: { canonical: "https://birthfacts.net/ja/gaju/" },
};

const GAJU_COLORS: Record<string, { color: string; label: string }> = {
  還暦: { color: "#ef4444", label: "赤" },
  古希: { color: "#a855f7", label: "紫" },
  喜寿: { color: "#a855f7", label: "紫" },
  傘寿: { color: "#eab308", label: "黄・金" },
  米寿: { color: "#eab308", label: "黄・金" },
  卒寿: { color: "#ffffff", label: "白" },
  白寿: { color: "#ffffff", label: "白" },
  百寿: { color: "#f59e0b", label: "金" },
};

export default function GajuPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "ホーム", href: "/ja/" }, { name: "賀寿 早見表", href: "/ja/gaju/" }]} />
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">賀寿 早見表</span>
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto">
          還暦・古希・喜寿など、日本の伝統的な長寿のお祝い節目の年齢・象徴色・風習を一覧でご確認いただけます。
        </p>
      </div>

      {/* Quick table */}
      <div className="card p-5 mb-8 overflow-x-auto">
        <table className="w-full text-base">
          <thead>
            <tr className="border-b border-[var(--card-border)] text-[var(--muted)] text-sm">
              <th className="text-left pb-3">名称</th>
              <th className="text-center pb-3">年齢</th>
              <th className="text-center pb-3">象徴色</th>
              <th className="text-left pb-3 hidden sm:table-cell">由来</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--card-border)]">
            {GAJU_EVENTS.map((ev) => {
              const colorInfo = GAJU_COLORS[ev.kanji];
              return (
                <tr key={ev.kanji}>
                  <td className="py-3 font-bold text-[var(--text)]">{ev.kanji}</td>
                  <td className="py-3 text-center font-semibold gradient-text">{ev.age}歳</td>
                  <td className="py-3 text-center">
                    {colorInfo && (
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="inline-block w-3 h-3 rounded-full border border-[var(--card-border)]"
                          style={{ backgroundColor: colorInfo.color }}
                        />
                        <span className="text-sm text-[var(--muted)]">{colorInfo.label}</span>
                      </span>
                    )}
                  </td>
                  <td className="py-3 text-sm text-[var(--muted)] hidden sm:table-cell leading-relaxed">
                    {ev.description}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Detailed cards */}
      <div className="space-y-6 mb-10">
        {GAJU_EVENTS.map((ev) => {
          const colorInfo = GAJU_COLORS[ev.kanji];
          return (
            <div key={ev.kanji} className="card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-[var(--card-border)] shrink-0"
                  style={{ backgroundColor: colorInfo?.color ?? "#a78bfa" }}
                >
                  {ev.age}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text)]">{ev.kanji}</h2>
                  {colorInfo && (
                    <span className="text-sm text-[var(--muted)]">象徴色：{colorInfo.label}</span>
                  )}
                </div>
              </div>
              <p className="text-base text-[var(--muted)] leading-relaxed mb-3">{ev.description}</p>
              {ev.activities && (
                <div className="bg-[var(--card-border)]/20 rounded-xl p-3">
                  <div className="text-xs font-semibold text-[var(--muted)] uppercase tracking-wider mb-1">お祝いの風習</div>
                  <p className="text-base text-[var(--muted)] leading-relaxed">🎉 {ev.activities}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <JaToolsSection />

      {/* CTA */}
      <div className="text-center card p-8">
        <p className="text-[var(--muted)] text-base mb-4">
          生年月日を入力すると、あなたの次の賀寿・厄年・星座占いをすべて確認できます。
        </p>
        <a href="/ja/" className="btn-primary inline-block">
          誕生日占い 無料
        </a>
      </div>

      {/* Schema — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              // Per-milestone Q&As (high search volume: "還暦 何歳", "古希 何歳" etc.)
              ...GAJU_EVENTS.map((e) => ({
                "@type": "Question",
                name: `${e.kanji}は何歳ですか？`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${e.kanji}は${e.age}歳です。${e.description}お祝いの方法：${e.activities}`,
                },
              })),
              {
                "@type": "Question",
                name: "賀寿（長寿のお祝い）とは何ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "賀寿とは、長寿を祝う日本の伝統的な節目の年齢のことです。還暦（60歳）・古希（70歳）・喜寿（77歳）・傘寿（80歳）・米寿（88歳）・卒寿（90歳）・白寿（99歳）・百寿（100歳）があります。",
                },
              },
              {
                "@type": "Question",
                name: "賀寿のお祝いに象徴色があるのはなぜですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "還暦（60歳）は赤（生まれ直しの意）、古希・喜寿（70・77歳）は紫（高貴・長寿の色）、傘寿・米寿（80・88歳）は黄・金（実りの色）、卒寿・白寿（90・99歳）は白（清廉・長寿の色）が象徴色です。これらの色に合わせたプレゼントを贈るのが伝統です。",
                },
              },
              {
                "@type": "Question",
                name: "賀寿は数え年と満年齢、どちらで計算しますか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "伝統的には数え年（生まれた年を1歳、元旦に1歳加算）で計算しますが、現代では満年齢でお祝いするご家庭も多くなっています。BirthFactsでは両方の年齢を表示しています。",
                },
              },
            ],
          }),
        }}
      />
      {/* Schema — ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "賀寿 一覧",
            description: "日本の長寿祝い（賀寿）の節目年齢・象徴色・風習の早見表",
            numberOfItems: GAJU_EVENTS.length,
            itemListElement: GAJU_EVENTS.map((e, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${e.kanji}（${e.age}歳）`,
              description: e.description,
            })),
          }),
        }}
      />
    </div>
  );
}
