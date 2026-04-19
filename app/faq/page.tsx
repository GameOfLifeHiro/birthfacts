import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Calculator FAQ – Common Questions Answered | BirthFacts",
  description:
    "Answers to frequently asked questions about calculating age: how to find your age in months, days, weeks, and more.",
  alternates: { canonical: "https://birthfacts.net/faq/" },
};

const faqs = [
  {
    q: "How do I calculate my exact age?",
    a: "Enter your date of birth in the calculator above. BirthFacts instantly calculates your exact age in years, months, days, hours, and minutes based on today's date.",
  },
  {
    q: "How old am I if I was born in 1990?",
    a: "If you were born in 1990, you are 35 years old in 2025 (or 36 if your birthday has passed). Use the calculator for your exact age including months and days.",
  },
  {
    q: "How do I calculate my age in months?",
    a: "Multiply your complete years by 12, then add the remaining months since your last birthday. Our calculator shows this automatically under 'Total Months'.",
  },
  {
    q: "How many days old am I?",
    a: "The number of days you have lived equals the difference between today's date and your birth date. For example, someone born on January 1, 1990 is over 12,000 days old today.",
  },
  {
    q: "What day of the week was I born on?",
    a: "BirthFacts calculates the exact day of the week (and its Japanese name) for any date of birth using the Zeller or Tomohiko Sakamoto algorithm.",
  },
  {
    q: "How many days until my next birthday?",
    a: "Our birthday countdown shows the exact number of days, hours, minutes, and seconds until your next birthday, updating live in real time.",
  },
  {
    q: "What is a Life Path Number?",
    a: "In numerology, your Life Path Number is calculated by summing all the digits in your full birth date (day + month + year) and reducing to a single digit (1–9) or a master number (11, 22, 33).",
  },
  {
    q: "What is the difference between Chinese zodiac and western zodiac?",
    a: "Western zodiac (e.g. Aries, Taurus) is based on your birth month and changes every ~30 days. Chinese zodiac (十二支) runs on a 12-year cycle, with each year represented by an animal like Rat, Ox, Tiger, etc.",
  },
  {
    q: "What is an Indigo Child?",
    a: "Indigo Children is a spiritual concept describing people born approximately between 1970 and 1990, believed to possess heightened intuition, a strong sense of purpose, and a drive to challenge existing systems.",
  },
  {
    q: "What generation am I?",
    a: "Generations are defined by birth year ranges: Baby Boomers (1946–1964), Gen X (1965–1980), Millennials (1981–1996), Gen Z (1997–2012), Gen Alpha (2013–2025). Enter your birthdate to see your generational identity.",
  },
  {
    q: "What is a Japanese imperial era year?",
    a: "Japan uses era names (元号/gengō) tied to the reigning emperor. For example, 1985 is Shōwa 60 (昭和60年), 2000 is Heisei 12 (平成12年), and 2024 is Reiwa 6 (令和6年).",
  },
];

export default function FaqPage() {
  const schemaFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }}
      />

      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">Frequently Asked Questions</span>
        </h1>
        <p className="text-[var(--muted)]">
          Everything you need to know about calculating your age and birthday.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map(({ q, a }) => (
          <div key={q} className="card p-5">
            <h2 className="font-semibold text-[var(--accent)] mb-2">{q}</h2>
            <p className="text-[var(--muted)] text-sm leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="/" className="btn-primary inline-block">
          Try the Age Calculator
        </a>
      </div>
    </div>
  );
}
