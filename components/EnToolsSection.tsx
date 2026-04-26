/**
 * Standard "More tools" grid used on all English sub-pages.
 */
export default function EnToolsSection() {
  const tools = [
    { href: "/fortune-ranking/",     emoji: "🏆", title: "Fortune Ranking",     desc: "All 12 signs ranked by luck today" },
    { href: "/compatibility/",        emoji: "💞", title: "Compatibility",        desc: "See how your sign connects with any other" },
    { href: "/zodiac-signs/",         emoji: "♈", title: "Zodiac Sign Dates",    desc: "Dates, elements & traits for all 12 signs" },
    { href: "/dog-age-calculator/",   emoji: "🐶", title: "Dog Age Calculator",   desc: "How old is your dog in human years?" },
    { href: "/cat-age-calculator/",   emoji: "🐱", title: "Cat Age Calculator",   desc: "How old is your cat in human years?" },
    { href: "/days-between/",         emoji: "📅", title: "Days Between Dates",   desc: "Calculate days, weeks, months between dates" },
    { href: "/faq/",                  emoji: "❓", title: "FAQ",                  desc: "Common questions about age & astrology" },
  ];

  return (
    <div className="card p-5 mt-8">
      <h2 className="text-lg font-bold text-[var(--accent)] mb-3">More tools</h2>
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
