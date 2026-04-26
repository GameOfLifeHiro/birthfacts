import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";
import FortuneRankingTeaser from "@/components/FortuneRankingTeaser";

export const metadata: Metadata = {
  title: "誕生日占い 無料｜誕生日カウントダウン・年齢計算 | BirthFacts",
  description: "誕生日まで何日？カウントダウンタイマーで残り日数を表示。生年月日を入力するだけで今日の運勢・星座占い・マヤ暦・月相・数秘術など無料で鑑定。",
  alternates: {
    canonical: "https://birthfacts.net/ja/",
    languages: {
      en: "https://birthfacts.net/",
      es: "https://birthfacts.net/es/",
      ja: "https://birthfacts.net/ja/",
      "x-default": "https://birthfacts.net/",
    },
  },
};

const WEB_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "@id": "https://birthfacts.net/ja/#webapp",
  name: "BirthFacts — 誕生日占い 無料",
  url: "https://birthfacts.net/ja/",
  description: "誕生日占い無料。生年月日から今日の運勢・星座占い・マヤ暦キン数・数秘術・月の満ち欠けをすぐに鑑定。",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web Browser",
  browserRequirements: "JavaScriptが必要",
  inLanguage: "ja",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
    availability: "https://schema.org/OnlineOnly",
  },
  featureList: [
    "誕生日占い", "今日の運勢", "星座占い", "マヤ暦 キン数",
    "数秘術", "月相", "九星気学", "四柱推命", "厄年", "賀寿",
    "犬の年齢計算", "猫の年齢計算", "星座相性占い", "血液型相性占い",
  ],
  publisher: {
    "@type": "Organization",
    name: "Ascent Leadership Institute Inc",
    url: "https://birthfacts.net",
  },
};

export default function JaHomePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">誕生日占い 無料</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
          誕生日まで何日？生年月日を入力するだけで誕生日カウントダウン・今日の運勢・
          星座占い・マヤ暦・月相・数秘術など、あなただけの占いを無料で鑑定します。
        </p>
      </div>

      <AgeCalculator basePath="/ja/" showJapanFeatures={true} />

      {/* Fortune ranking teaser */}
      <FortuneRankingTeaser locale="ja" rankingHref="/ja/uranai-ranking/" />

      {/* More tools */}
      <div className="mt-12 card p-6">
        <h2 className="font-semibold text-lg text-[var(--accent)] mb-4">その他のツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/ja/uranai-ranking/",    emoji: "🏆", title: "今日の占いランキング", desc: "12星座の今日の占いを一覧表示" },
                  { href: "/ja/aisho/",             emoji: "💞", title: "相性占い",            desc: "星座・血液型の相性を無料診断" },
                  { href: "/ja/nenrei-hayamihyo/", emoji: "📅", title: "年齢 早見表",           desc: "生まれ年から満年齢・数え年・和暦" },
                  { href: "/ja/seiza-hayamihyo/",   emoji: "♈", title: "星座 早見表",         desc: "12星座の誕生日・特徴一覧" },
            { href: "/ja/gaju/",              emoji: "🎊", title: "賀寿 早見表",         desc: "還暦・古希・喜寿・米寿の年齢" },
            { href: "/ja/yakudoshi/",         emoji: "⚠️", title: "厄年 早見表",         desc: "男性・女性の前厄・本厄・後厄" },
            { href: "/ja/dog-age-calculator/",emoji: "🐶", title: "犬の年齢計算",        desc: "愛犬の年齢を人間換算" },
            { href: "/ja/cat-age-calculator/",emoji: "🐱", title: "猫の年齢計算",        desc: "愛猫の年齢を人間換算" },
            { href: "/ja/days-between/",      emoji: "📅", title: "日数計算",            desc: "2つの日付の間の日数" },
            { href: "/ja/faq/",               emoji: "❓", title: "よくある質問",        desc: "厄年・賀寿・七五三・占いの疑問" },
          ].map(({ href, emoji, title, desc }) => (
            <a
              key={href}
              href={href}
              className="flex items-center gap-3 p-3 rounded-xl border border-[var(--card-border)] hover:border-[var(--accent)] transition-colors"
            >
              <span className="text-2xl">{emoji}</span>
              <div>
                <div className="font-medium text-sm text-[var(--text)]">{title}</div>
                <div className="text-xs text-[var(--muted)]">{desc}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <section className="mt-12 space-y-4 px-4">
        <h2 className="text-xl font-bold gradient-text">よくある質問</h2>
        {[
          {
            q: "誕生日まで何日ですか？",
            a: "上の計算機に生年月日を入力してください。BirthFactsが次の誕生日まで残り何日・何時間・何分・何秒かをリアルタイムでカウントダウン表示します。",
          },
          {
            q: "自分の年齢を正確に計算するには？",
            a: "生年月日を上のフォームに入力するだけです。年・月・週・日・時間・分単位での正確な年齢をリアルタイムで表示します。",
          },
          {
            q: "自分の星座を調べるには？",
            a: "西洋占星術の星座は生まれた月日で決まります。生年月日を入力すると星座・今日の運勢・相性などが即座に表示されます。",
          },
          {
            q: "誕生日占いは無料ですか？",
            a: "はい、完全無料です。登録不要・支払い不要。生年月日を入力するだけで今日の運勢・星座・マヤ暦・月相・数秘術・九星気学など、あなただけの誕生日プロフィールをすぐに鑑定できます。",
          },
        ].map(({ q, a }) => (
          <details key={q} className="card p-4 group">
            <summary className="font-semibold cursor-pointer text-base list-none flex justify-between items-center">
              {q}
              <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{a}</p>
          </details>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "誕生日まで何日ですか？", acceptedAnswer: { "@type": "Answer", text: "生年月日を入力してください。BirthFactsが次の誕生日まで残り何日・何時間・何分・何秒かをリアルタイムでカウントダウン表示します。" } },
              { "@type": "Question", name: "自分の年齢を正確に計算するには？", acceptedAnswer: { "@type": "Answer", text: "生年月日を入力するだけです。年・月・週・日・時間・分単位での正確な年齢をリアルタイムで表示します。" } },
              { "@type": "Question", name: "自分の星座を調べるには？", acceptedAnswer: { "@type": "Answer", text: "生年月日を入力すると星座・今日の運勢・相性などが即座に表示されます。" } },
              { "@type": "Question", name: "誕生日占いは無料ですか？", acceptedAnswer: { "@type": "Answer", text: "はい、完全無料です。登録不要・支払い不要。生年月日を入力するだけで今日の運勢・星座・マヤ暦・月相・数秘術など、あなただけの誕生日プロフィールをすぐに鑑定できます。" } },
            ],
          }),
        }}
      />
    </div>
  );
}
