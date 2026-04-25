import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";
import FortuneRankingTeaser from "@/components/FortuneRankingTeaser";

export const metadata: Metadata = {
  title: "誕生日占い 無料 | BirthFacts",
  description: "生年月日を入力するだけで、今日の運勢・星座占い・マヤ暦・月相・数秘術など、あなただけの誕生日占いを無料で鑑定します。",
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
          生年月日を入力するだけで、今日の運勢・星座占い・マヤ暦・月相・数秘術など、
          あなただけの誕生日占いを無料で鑑定します。
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
    </div>
  );
}
