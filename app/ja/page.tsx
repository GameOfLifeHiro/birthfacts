import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "年齢計算・誕生日プロフィール | BirthFacts",
  description: "生年月日を入力するだけ。正確な年齢に加え、干支・星座・マヤ暦・元号・四柱推命・九星気学・月相など誕生日のすべてを無料で表示します。",
  alternates: { canonical: "https://birthfacts.net/ja/" },
};

export default function JaHomePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">年齢計算</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
          生年月日を入力すると、正確な年齢（年・月・週・日・時間・分）に加え、
          干支・星座・月相・マヤ暦・四柱推命・九星気学など、
          あなたの誕生日にまつわるすべてのプロフィールを表示します。
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
