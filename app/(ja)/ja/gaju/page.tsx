import type { Metadata } from "next";
import { GAJU_EVENTS } from "@/lib/japaneseLifeEvents";

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

      {/* Related 早見表 */}
      <div className="card p-5 mb-8">
        <h2 className="text-lg font-bold text-[var(--accent)] mb-3">関連する早見表</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { href: "/ja/yakudoshi/", emoji: "⚠️", title: "厄年 早見表", desc: "前厄・本厄・後厄の年齢一覧" },
            { href: "/ja/nenrei-hayamihyo/", emoji: "📅", title: "年齢 早見表", desc: "生まれ年から満年齢・数え年・和暦" },
            { href: "/ja/seiza-hayamihyo/", emoji: "♈", title: "星座 早見表", desc: "12星座の誕生日と特徴" },
          ].map(({ href, emoji, title, desc }) => (
            <a key={href} href={href} className="flex items-center gap-3 p-3 rounded-xl border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors">
              <span className="text-2xl">{emoji}</span>
              <div>
                <div className="font-medium text-sm text-[var(--text)]">{title}</div>
                <div className="text-xs text-[var(--muted)]">{desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center card p-8">
        <p className="text-[var(--muted)] text-base mb-4">
          生年月日を入力すると、あなたの次の賀寿・厄年・星座占いをすべて確認できます。
        </p>
        <a href="/ja/" className="btn-primary inline-block">
          誕生日占い 無料
        </a>
      </div>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
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
                name: "還暦は何歳ですか？なぜ赤いプレゼントを贈るのですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "還暦は60歳です。60年で十二支と十干が一巡し、生まれ年の干支に「還る」ことから「生まれ直し・赤ちゃんに戻る」と捉え、赤が象徴色となっています。赤いちゃんちゃんこ・赤い座布団などを贈る慣わしがあります。",
                },
              },
              {
                "@type": "Question",
                name: "古希・喜寿・米寿・白寿は何歳ですか？",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "古希は70歳（杜甫の詩「人生七十古来稀なり」から）、喜寿は77歳（「喜」の草書体が七十七と読めることから）、米寿は88歳（「米」の字を分解すると八十八）、白寿は99歳（百から一を引くと白になることから）です。",
                },
              },
            ],
          }),
        }}
      />
    </div>
  );
}
