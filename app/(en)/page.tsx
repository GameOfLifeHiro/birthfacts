import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator – Exact Age in Years, Months, Days & Seconds | BirthFacts",
  description:
    "Calculate your exact age in years, months, weeks, days, hours and minutes instantly. Free age calculator with zodiac sign, birth flower, Life Path Number, generational identity, and more.",
  alternates: { canonical: "https://birthfacts.net/" },
};

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
          <span className="gradient-text">Age Calculator</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          Discover your exact age in years, months, weeks, days, hours & minutes —
          plus your zodiac sign, generational identity, and more.
        </p>
      </div>

      {/* Calculator */}
      <AgeCalculator />

      {/* Feature highlights */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          {
            icon: "⚡",
            title: "Instant & Exact",
            desc: "See your age down to minutes and seconds, calculated live.",
          },
          {
            icon: "🔮",
            title: "Spiritual Profile",
            desc: "Zodiac, Chinese zodiac, Life Path Number, and your spiritual generation.",
          },
          {
            icon: "📅",
            title: "Historical Facts",
            desc: "Discover what the world looked like the year you were born.",
          },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="card p-5">
            <div className="text-3xl mb-3">{icon}</div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-[var(--muted)]">{desc}</p>
          </div>
        ))}
      </div>

      {/* Related tools */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-center">More tools</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { href: "/fortune-ranking/", label: "🏆 Fortune Ranking" },
            { href: "/dog-age-calculator/", label: "Dog Age Calculator" },
            { href: "/cat-age-calculator/", label: "Cat Age Calculator" },
            { href: "/days-between/", label: "Days Between Dates" },
            { href: "/faq/", label: "FAQ" },
          ].map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="card p-3 text-center text-sm text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
