"use client";

import { useState, useEffect, useCallback } from "react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EnToolsSection from "@/components/EnToolsSection";

// ─── Metadata can't be exported from "use client" — use a separate layout or
//     a static metadata file. We inline the JSON-LD here and rely on the root
//     layout for the og/twitter/canonical tags set in the parallel route below.
// ─── We render everything client-side so the countdown ticks live.

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function getDaysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate();
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isToday: boolean;
  nextBirthday: Date;
}

function calcCountdown(month: number, day: number): Countdown {
  const now = new Date();
  const thisYear = now.getFullYear();
  let next = new Date(thisYear, month - 1, day, 0, 0, 0, 0);
  if (next < now) next = new Date(thisYear + 1, month - 1, day, 0, 0, 0, 0);

  const diffMs = next.getTime() - now.getTime();
  const isToday = diffMs < 86_400_000 && next.getDate() === now.getDate() && next.getMonth() === now.getMonth();

  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds, isToday, nextBirthday: next };
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How many days until my birthday?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Enter your birth month and day into the Birthday Countdown Calculator above. It instantly shows the exact number of days, hours, minutes, and seconds until your next birthday.",
      },
    },
    {
      "@type": "Question",
      name: "Does the birthday countdown update in real time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The countdown ticks every second, so you always see the precise time remaining down to the second.",
      },
    },
    {
      "@type": "Question",
      name: "What if my birthday is today?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The calculator detects when your birthday falls on today's date and shows a special happy birthday message instead of a countdown.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to enter my birth year?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The countdown only needs your birth month and day — it automatically counts down to your next upcoming birthday, regardless of the year you were born.",
      },
    },
    {
      "@type": "Question",
      name: "Can I bookmark this page to check my countdown daily?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Bookmark this page and visit anytime to see an up-to-date live countdown to your next birthday.",
      },
    },
  ],
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://birthfacts.net/" },
    { "@type": "ListItem", position: 2, name: "Birthday Countdown", item: "https://birthfacts.net/birthday-countdown/" },
  ],
};

export default function BirthdayCountdownPage() {
  const [month, setMonth] = useState(1);
  const [day, setDay] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  const tick = useCallback(() => {
    if (submitted) setCountdown(calcCountdown(month, day));
  }, [submitted, month, day]);

  useEffect(() => {
    if (!submitted) return;
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [submitted, tick]);

  const daysInMonth = getDaysInMonth(month, new Date().getFullYear());

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setCountdown(calcCountdown(month, day));
    setSubmitted(true);
  }

  function handleReset() {
    setSubmitted(false);
    setCountdown(null);
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Birthday Countdown", href: "/birthday-countdown/" }]} />

      {/* Hero */}
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">Birthday Countdown</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          How many days until your next birthday? Enter your birth month and day for a live countdown.
        </p>
      </div>

      {/* Form */}
      {!submitted && (
        <form onSubmit={handleSubmit} className="card p-6 space-y-5">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--muted)]">Birth Month</label>
              <select
                value={month}
                onChange={(e) => {
                  const m = Number(e.target.value);
                  setMonth(m);
                  if (day > getDaysInMonth(m, new Date().getFullYear())) setDay(1);
                }}
                className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                {MONTHS.map((name, i) => (
                  <option key={name} value={i + 1}>{name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 text-[var(--muted)]">Birth Day</label>
              <select
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
                className="w-full rounded-lg border border-[var(--card-border)] bg-[var(--card-bg)] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
              >
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-[var(--accent)] to-purple-500 hover:opacity-90 transition-opacity"
          >
            Start Countdown 🎂
          </button>
        </form>
      )}

      {/* Countdown display */}
      {submitted && countdown && (
        <div className="space-y-5">
          {countdown.isToday ? (
            <div className="card p-8 text-center space-y-3">
              <div className="text-6xl">🎂</div>
              <h2 className="text-2xl font-bold gradient-text">Happy Birthday!</h2>
              <p className="text-[var(--muted)]">Wishing you an amazing {countdown.nextBirthday.getFullYear()} birthday!</p>
            </div>
          ) : (
            <>
              <div className="card p-6 text-center">
                <p className="text-sm text-[var(--muted)] mb-4">
                  Your next birthday — <strong>{MONTHS[month - 1]} {day}</strong> — is in:
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {[
                    { value: countdown.days, label: "Days" },
                    { value: countdown.hours, label: "Hours" },
                    { value: countdown.minutes, label: "Min" },
                    { value: countdown.seconds, label: "Sec" },
                  ].map(({ value, label }) => (
                    <div key={label} className="flex flex-col items-center bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl py-4">
                      <span className="text-3xl font-bold gradient-text tabular-nums">{pad(value)}</span>
                      <span className="text-xs text-[var(--muted)] mt-1">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-5 text-center">
                <p className="text-[var(--muted)] text-sm">
                  That&apos;s <strong className="text-[var(--text)]">{countdown.days} day{countdown.days !== 1 ? "s" : ""}</strong> away.
                  Your birthday falls on a{" "}
                  <strong className="text-[var(--text)]">
                    {countdown.nextBirthday.toLocaleDateString("en-US", { weekday: "long" })}
                  </strong>{" "}
                  in {countdown.nextBirthday.getFullYear()}.
                </p>
              </div>
            </>
          )}

          <div className="text-center">
            <button
              onClick={handleReset}
              className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity"
            >
              ← Try a different date
            </button>
          </div>

          <div className="text-center mt-2">
            <a
              href="/"
              className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity"
            >
              Enter your full birth date to see your complete birthday profile →
            </a>
          </div>
        </div>
      )}

      {/* FAQ */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-bold gradient-text">Frequently Asked Questions</h2>
        {FAQ_SCHEMA.mainEntity.map(({ name, acceptedAnswer }) => (
          <details key={name} className="card p-4 group">
            <summary className="font-semibold cursor-pointer text-base list-none flex justify-between items-center">
              {name}
              <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{acceptedAnswer.text}</p>
          </details>
        ))}
      </section>

      <EnToolsSection />
    </div>
  );
}
