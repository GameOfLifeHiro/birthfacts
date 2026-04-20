import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "誕生日占い 無料 | BirthFacts",
  description: "生年月日を入力するだけで、今日の運勢・星座占い・マヤ暦・月相・数秘術など、あなただけの誕生日占いを無料で鑑定します。",
  alternates: { canonical: "https://birthfacts.net/ja/" },
};

export default function JaHomePage() {
  return (
    <div className="max-w-2xl mx-auto">
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

      {/* More tools */}
      <div className="mt-12 card p-6">
        <h2 className="font-semibold text-lg text-[var(--accent)] mb-4">その他のツール</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/ja/dog-age-calculator/", emoji: "🐶", title: "犬の年齢計算", desc: "愛犬の年齢を人間換算" },
            { href: "/ja/cat-age-calculator/", emoji: "🐱", title: "猫の年齢計算", desc: "愛猫の年齢を人間換算" },
            { href: "/ja/days-between/", emoji: "📅", title: "日数計算", desc: "2つの日付の間の日数" },
            { href: "/ja/faq/", emoji: "❓", title: "よくある質問", desc: "計算方法について" },
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
