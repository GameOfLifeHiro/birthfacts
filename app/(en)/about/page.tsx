import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About BirthFacts – Your Complete Birthday Profile Tool",
  description:
    "Learn about BirthFacts.net — a free tool that calculates your exact age, zodiac sign, Life Path Number, generational identity, historical facts, and more from your birthday.",
  alternates: { canonical: "https://birthfacts.net/about/" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "About", href: "/about/" }]} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">About BirthFacts</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">
          More than just an age calculator.
        </p>
      </div>

      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">What is BirthFacts?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            BirthFacts is a free birthday profile tool that goes far beyond a simple age calculator.
            Enter your date of birth and instantly discover your exact age in years, months, weeks,
            days, hours, and minutes — along with a rich profile of who you are based on when you
            were born.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">What can BirthFacts tell me?</h2>
          <ul className="space-y-2 text-sm text-[var(--muted)]">
            {[
              "Your exact age down to minutes, and a live countdown to your next birthday",
              "Your Western zodiac sign, element, and personality traits",
              "Your Chinese zodiac animal and its lucky numbers",
              "Your moon phase at birth and its spiritual meaning",
              "Your Mayan Dreamspell profile — Kin number, Day Sign, Galactic Tone, and Wavespell",
              "Your Life Path Number and its numerological meaning",
              "Your birthstone and birth flower",
              "The planetary and spiritual meaning of the day of the week you were born",
              "Your generational identity — both mainstream (Millennial, Gen Z…) and spiritual (Indigo Child, Crystal Child, Rainbow Child)",
              "Famous people born on your birthday",
              "What was happening in the world the year you were born — world events, tech breakthroughs, music, movies, and pop culture",
              "A visual life timeline showing your key milestones alongside world history",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[var(--accent)] mt-0.5 flex-shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">Is BirthFacts free?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Yes — completely free, forever. No account required, no email needed, no data stored.
            Simply enter your birthdate and get your full profile instantly.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">How accurate is it?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Age calculations are precise to the day using your local date. Zodiac, numerology,
            and cultural data follow widely accepted systems. The Mayan Dreamspell calendar uses
            the José Argüelles correlation verified against known Kin dates. Historical facts
            are curated from reliable sources.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">Is my data private?</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            Your birthdate is processed entirely in your browser — it is never sent to our servers
            or stored anywhere. See our{" "}
            <a href="/privacy/" className="text-[var(--accent)] hover:underline">
              Privacy Policy
            </a>{" "}
            for full details.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">About the team</h2>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            BirthFacts is operated by{" "}
            <strong className="text-[var(--text)]">Ascent Leadership Institute Inc</strong>,
            based in <strong className="text-[var(--text)]">Las Vegas, NV, USA</strong>.
            Our mission is to make self-discovery accessible, meaningful, and free for everyone.
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a href="/" className="btn-primary inline-block">
          Try BirthFacts Now
        </a>
      </div>
    </div>
  );
}
