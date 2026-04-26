import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";
import FortuneRankingTeaser from "@/components/FortuneRankingTeaser";

export const metadata: Metadata = {
  title: "Lectura de Cumpleaños Gratis | BirthFacts",
  description: "Descubre tu horóscopo de hoy, signo zodiacal, fase lunar, número Kin maya, numerología y más — todo desde tu fecha de nacimiento. Gratis e instantáneo.",
  alternates: {
    canonical: "https://birthfacts.net/es/",
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
  "@id": "https://birthfacts.net/es/#webapp",
  name: "BirthFacts — Lectura de Cumpleaños Gratis",
  url: "https://birthfacts.net/es/",
  description: "Descubre tu horóscopo de hoy, signo zodiacal, fase lunar, número Kin maya, numerología y más desde tu fecha de nacimiento. Gratis.",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "Web Browser",
  browserRequirements: "Requiere JavaScript",
  inLanguage: "es",
  isAccessibleForFree: true,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "MXN",
    availability: "https://schema.org/OnlineOnly",
  },
  featureList: [
    "Lectura de cumpleaños", "Horóscopo diario", "Signo zodiacal",
    "Zodiaco chino", "Número de Sendero de Vida", "Fase lunar",
    "Calendario maya Kin", "Edad del perro", "Edad del gato",
    "Compatibilidad zodiacal",
  ],
  publisher: {
    "@type": "Organization",
    name: "Ascent Leadership Institute Inc",
    url: "https://birthfacts.net",
  },
};

export default function EsHomePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEB_APP_SCHEMA) }} />
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">Lectura de Cumpleaños Gratis</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
          Ingresa tu fecha de nacimiento y descubre tu horóscopo de hoy, signo zodiacal,
          fase lunar, calendario maya, numerología y mucho más. Gratis e instantáneo.
        </p>
      </div>

      <AgeCalculator basePath="/es/" />

      {/* Fortune ranking teaser */}
      <FortuneRankingTeaser locale="es" rankingHref="/es/horoscopo-ranking/" />

      {/* More tools */}
      <div className="mt-12 card p-6">
        <h2 className="font-semibold text-lg text-[var(--accent)] mb-4">Más herramientas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/es/horoscopo-ranking/",      emoji: "🏆", title: "Ranking del Horóscopo",  desc: "Los 12 signos clasificados por suerte hoy" },
            { href: "/es/compatibilidad/",        emoji: "💞", title: "Compatibilidad",          desc: "¿Qué tan compatibles son tus signos?" },
            { href: "/es/signos-del-zodiaco/",    emoji: "♈", title: "Signos del Zodiaco",      desc: "Fechas, elementos y características de los 12 signos" },
            { href: "/es/dog-age-calculator/",    emoji: "🐶", title: "Edad del Perro",          desc: "¿Cuántos años tiene tu perro en humanos?" },
            { href: "/es/cat-age-calculator/",  emoji: "🐱", title: "Edad del Gato",           desc: "¿Cuántos años tiene tu gato en humanos?" },
            { href: "/es/days-between/",        emoji: "📅", title: "Días Entre Fechas",       desc: "Calcula días entre dos fechas" },
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
