import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EnToolsSection from "@/components/EnToolsSection";

export const metadata: Metadata = {
  title: "Zodiac Sign Dates & Traits — All 12 Signs | BirthFacts",
  description:
    "Find dates, elements, qualities, ruling planets, and personality traits for all 12 zodiac signs at a glance. From Aries to Pisces — your complete zodiac reference.",
  keywords: [
    "zodiac sign dates", "zodiac signs dates chart", "all 12 zodiac signs",
    "zodiac sign date ranges", "what zodiac sign am I", "zodiac elements",
    "aries dates", "taurus dates", "gemini dates", "cancer dates",
    "zodiac signs traits", "western astrology signs",
  ],
  alternates: {
    canonical: "https://birthfacts.net/zodiac-signs/",
    languages: {
      en: "https://birthfacts.net/zodiac-signs/",
      es: "https://birthfacts.net/es/signos-del-zodiaco/",
      ja: "https://birthfacts.net/ja/seiza-hayamihyo/",
      "x-default": "https://birthfacts.net/zodiac-signs/",
    },
  },
};

interface Sign {
  name: string;
  symbol: string;
  period: string;
  element: string;
  quality: string;
  ruler: string;
  traits: string[];
  description: string;
}

const SIGNS: Sign[] = [
  {
    name: "Aries",
    symbol: "♈",
    period: "Mar 21 – Apr 19",
    element: "Fire",
    quality: "Cardinal",
    ruler: "Mars",
    traits: ["Passionate", "Bold", "Leader", "Direct", "Independent"],
    description:
      "The trailblazer of the zodiac. Driven by passion and action, Aries charges ahead without fear. A natural leader who inspires with boundless energy — though their directness can sometimes read as impatience.",
  },
  {
    name: "Taurus",
    symbol: "♉",
    period: "Apr 20 – May 20",
    element: "Earth",
    quality: "Fixed",
    ruler: "Venus",
    traits: ["Patient", "Stable", "Sensual", "Loyal", "Stubborn"],
    description:
      "Steady and sensual, Taurus cherishes beauty, comfort, and the pleasures of the physical world. Loyal and patient, they build lasting foundations — though once they've made up their mind, they rarely budge.",
  },
  {
    name: "Gemini",
    symbol: "♊",
    period: "May 21 – Jun 21",
    element: "Air",
    quality: "Mutable",
    ruler: "Mercury",
    traits: ["Curious", "Adaptable", "Witty", "Communicative", "Dual-natured"],
    description:
      "Quick-witted and curious, Gemini thrives on ideas and connection. A natural communicator with a wide social circle, they adapt easily to any situation — though they can struggle to stay focused for long.",
  },
  {
    name: "Cancer",
    symbol: "♋",
    period: "Jun 22 – Jul 22",
    element: "Water",
    quality: "Cardinal",
    ruler: "Moon",
    traits: ["Intuitive", "Nurturing", "Empathetic", "Family-oriented", "Sensitive"],
    description:
      "Deeply intuitive and emotionally aware, Cancer is the nurturer of the zodiac. They treasure family, home, and memory. Their sensitivity makes them easily hurt, but their warmth creates lifelong bonds.",
  },
  {
    name: "Leo",
    symbol: "♌",
    period: "Jul 23 – Aug 22",
    element: "Fire",
    quality: "Fixed",
    ruler: "Sun",
    traits: ["Charismatic", "Creative", "Generous", "Expressive", "Proud"],
    description:
      "Bold and radiant, Leo commands attention with natural charisma. Creative and generous, they love to lead and inspire. Their need for recognition is matched only by their big-hearted loyalty.",
  },
  {
    name: "Virgo",
    symbol: "♍",
    period: "Aug 23 – Sep 22",
    element: "Earth",
    quality: "Mutable",
    ruler: "Mercury",
    traits: ["Analytical", "Meticulous", "Helpful", "Perfectionist", "Humble"],
    description:
      "Precise and analytical, Virgo excels at finding practical solutions. A dedicated helper with an eye for detail, they can be hard on themselves in pursuit of perfection — but their reliability is unmatched.",
  },
  {
    name: "Libra",
    symbol: "♎",
    period: "Sep 23 – Oct 23",
    element: "Air",
    quality: "Cardinal",
    ruler: "Venus",
    traits: ["Harmonious", "Fair", "Social", "Indecisive", "Aesthetic"],
    description:
      "The diplomat of the zodiac, Libra seeks harmony and fairness in all things. Charming and socially gifted, they weigh every option carefully — which can lead to indecision, but also to thoughtful, balanced choices.",
  },
  {
    name: "Scorpio",
    symbol: "♏",
    period: "Oct 24 – Nov 22",
    element: "Water",
    quality: "Fixed",
    ruler: "Pluto",
    traits: ["Perceptive", "Passionate", "Willful", "Secretive", "Transformative"],
    description:
      "Intense and perceptive, Scorpio dives beneath the surface to uncover the truth. Their willpower and emotional depth are formidable. They guard their inner world carefully, but when they trust, their loyalty runs deep.",
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    period: "Nov 23 – Dec 21",
    element: "Fire",
    quality: "Mutable",
    ruler: "Jupiter",
    traits: ["Optimistic", "Adventurous", "Philosophical", "Free-spirited", "Direct"],
    description:
      "The eternal optimist and adventurer, Sagittarius chases wisdom, freedom, and new horizons. Philosophical and direct, their candour can occasionally sting — but their expansive spirit lights up every room.",
  },
  {
    name: "Capricorn",
    symbol: "♑",
    period: "Dec 22 – Jan 19",
    element: "Earth",
    quality: "Cardinal",
    ruler: "Saturn",
    traits: ["Ambitious", "Disciplined", "Responsible", "Patient", "Pragmatic"],
    description:
      "Disciplined and ambitious, Capricorn climbs toward their goals with steady resolve. They take responsibility seriously and value practical achievement. Warm beneath a reserved exterior, their dedication inspires deep trust.",
  },
  {
    name: "Aquarius",
    symbol: "♒",
    period: "Jan 20 – Feb 18",
    element: "Air",
    quality: "Fixed",
    ruler: "Uranus",
    traits: ["Original", "Humanitarian", "Innovative", "Independent", "Idealistic"],
    description:
      "The visionary of the zodiac, Aquarius marches to their own drummer. Idealistic and inventive, they think in terms of humanity's future. They may seem detached, but their unconventional perspective is a gift ahead of its time.",
  },
  {
    name: "Pisces",
    symbol: "♓",
    period: "Feb 19 – Mar 20",
    element: "Water",
    quality: "Mutable",
    ruler: "Neptune",
    traits: ["Empathetic", "Intuitive", "Artistic", "Dreamy", "Compassionate"],
    description:
      "The dreamer and empath of the zodiac, Pisces absorbs the feelings of those around them. Imaginative and compassionate, they can lose themselves in fantasy — but their creativity and spiritual depth are boundless.",
  },
];

const ELEMENT_COLOR: Record<string, string> = {
  Fire:  "text-orange-400",
  Earth: "text-green-400",
  Air:   "text-sky-400",
  Water: "text-blue-400",
};

export default function ZodiacSignsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Zodiac Sign Dates", href: "/zodiac-signs/" },
        ]}
      />

      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">Zodiac Sign Dates & Traits</span>
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto">
          Dates, elements, qualities, and personality traits for all 12 zodiac signs — at a glance.
        </p>
      </div>

      {/* Quick reference table */}
      <div className="card overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead className="bg-[var(--card-border)]/30">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">Sign</th>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">Dates</th>
                <th className="text-center px-4 py-3 font-semibold text-[var(--text)]">Element</th>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)] hidden sm:table-cell">Key Traits</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {SIGNS.map((s) => (
                <tr key={s.name} className="hover:bg-[var(--card-border)]/10 transition-colors">
                  <td className="px-4 py-2.5">
                    <span className="text-xl mr-2">{s.symbol}</span>
                    <span className="font-semibold text-[var(--text)]">{s.name}</span>
                  </td>
                  <td className="px-4 py-2.5 text-[var(--muted)] whitespace-nowrap">{s.period}</td>
                  <td className={`px-4 py-2.5 text-center font-bold ${ELEMENT_COLOR[s.element]}`}>
                    {s.element}
                  </td>
                  <td className="px-4 py-2.5 text-[var(--muted)] hidden sm:table-cell">
                    {s.traits.slice(0, 3).join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed cards */}
      <div className="space-y-4 mb-10">
        {SIGNS.map((s) => (
          <div key={s.name} className="card p-5">
            <div className="flex items-start gap-4 mb-3">
              <div className="text-4xl shrink-0">{s.symbol}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="text-xl font-bold text-[var(--text)]">{s.name}</h2>
                </div>
                <div className="text-sm text-[var(--muted)]">{s.period}</div>
                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                  <span className={`font-semibold ${ELEMENT_COLOR[s.element]}`}>
                    {s.element}
                  </span>
                  <span className="text-[var(--muted)]">· {s.quality}</span>
                  <span className="text-[var(--muted)]">· Ruled by {s.ruler}</span>
                </div>
              </div>
            </div>
            <p className="text-base text-[var(--muted)] leading-relaxed mb-3">{s.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {s.traits.map((tr) => (
                <span
                  key={tr}
                  className="inline-block px-2 py-0.5 rounded-full text-xs border border-[var(--accent)] text-[var(--accent)]"
                >
                  {tr}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Four elements explanation */}
      <div className="card p-6 mb-8">
        <h2 className="text-xl font-bold text-[var(--accent)] mb-4">The Four Elements</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { el: "Fire",  color: "text-orange-400", signs: "Aries · Leo · Sagittarius",        desc: "Passion, action, intuition" },
            { el: "Earth", color: "text-green-400",  signs: "Taurus · Virgo · Capricorn",       desc: "Stability, practicality, patience" },
            { el: "Air",   color: "text-sky-400",    signs: "Gemini · Libra · Aquarius",        desc: "Intellect, communication, ideas" },
            { el: "Water", color: "text-blue-400",   signs: "Cancer · Scorpio · Pisces",        desc: "Emotion, empathy, intuition" },
          ].map(({ el, color, signs, desc }) => (
            <div key={el} className="text-center p-3 rounded-xl border border-[var(--card-border)]">
              <div className={`text-2xl font-bold mb-1 ${color}`}>{el}</div>
              <div className="text-xs text-[var(--muted)] mb-1">{signs}</div>
              <div className="text-xs text-[var(--muted)]">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <EnToolsSection />

      {/* CTA */}
      <div className="text-center card p-8 mt-8">
        <p className="text-[var(--muted)] text-base mb-4">
          Enter your birth date to discover your zodiac sign, daily fortune, and full spiritual profile — free.
        </p>
        <a href="/" className="btn-primary inline-block">Try the Age Calculator</a>
      </div>

      {/* Schema — FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              ...SIGNS.map((s) => ({
                "@type": "Question",
                name: `What are the dates for ${s.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${s.name} (${s.symbol}) runs from ${s.period}. Element: ${s.element}. Ruled by ${s.ruler}. Key traits: ${s.traits.join(", ")}.`,
                },
              })),
              {
                "@type": "Question",
                name: "What are all 12 zodiac sign date ranges?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: SIGNS.map((s) => `${s.name}: ${s.period}`).join("; "),
                },
              },
              {
                "@type": "Question",
                name: "What are the four elements in astrology?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Western astrology divides the 12 signs into four elements. Fire (Aries, Leo, Sagittarius) represents passion and action. Earth (Taurus, Virgo, Capricorn) represents stability and practicality. Air (Gemini, Libra, Aquarius) represents intellect and communication. Water (Cancer, Scorpio, Pisces) represents emotion and empathy.",
                },
              },
              {
                "@type": "Question",
                name: "What happens if I was born on a cusp?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The exact day the Sun moves from one sign to the next varies by 1–2 days each year. If you were born near a sign boundary, enter your full birth date in BirthFacts to get your precise zodiac sign based on the Sun's actual position that year.",
                },
              },
            ],
          }),
        }}
      />
      {/* Schema — ItemList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "All 12 Zodiac Signs",
            description: "Dates, elements, and traits for all 12 western zodiac signs",
            numberOfItems: SIGNS.length,
            itemListElement: SIGNS.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${s.symbol} ${s.name}`,
              description: `${s.period}. Element: ${s.element}. ${s.description}`,
            })),
          }),
        }}
      />
    </div>
  );
}
