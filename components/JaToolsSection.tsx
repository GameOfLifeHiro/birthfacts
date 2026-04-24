/**
 * Standard "その他のツール" grid used on all Japanese sub-pages.
 * Always renders the same 8 links in the same order.
 */
export default function JaToolsSection() {
  const tools = [
    { href: "/ja/seiza-hayamihyo/",    emoji: "♈",  title: "星座 早見表",   desc: "12星座の誕生日と特徴一覧" },
    { href: "/ja/nenrei-hayamihyo/",   emoji: "📅",  title: "年齢 早見表",   desc: "生まれ年から満年齢・数え年・和暦" },
    { href: "/ja/gaju/",               emoji: "🎊",  title: "賀寿 早見表",   desc: "還暦・古希・喜寿・米寿の年齢" },
    { href: "/ja/yakudoshi/",          emoji: "⚠️",  title: "厄年 早見表",   desc: "前厄・本厄・後厄の年齢一覧" },
    { href: "/ja/dog-age-calculator/", emoji: "🐶",  title: "犬の年齢計算",  desc: "愛犬の年齢を人間換算" },
    { href: "/ja/cat-age-calculator/", emoji: "🐱",  title: "猫の年齢計算",  desc: "愛猫の年齢を人間換算" },
    { href: "/ja/days-between/",       emoji: "🗓️",  title: "日数計算",      desc: "2つの日付の間の日数" },
    { href: "/ja/faq/",                emoji: "❓",  title: "よくある質問",  desc: "厄年・賀寿・占いの疑問" },
  ];

  return (
    <div className="card p-5 mt-8">
      <h2 className="text-lg font-bold text-[var(--accent)] mb-3">その他のツール</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map(({ href, emoji, title, desc }) => (
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
  );
}
