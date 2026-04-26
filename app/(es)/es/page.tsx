import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";
import FortuneRankingTeaser from "@/components/FortuneRankingTeaser";

export const metadata: Metadata = {
  title: "Cuenta Regresiva de Cumpleaños — Calculadora de Edad Gratis | BirthFacts",
  description: "¿Cuántos días faltan para tu cumpleaños? Cuenta regresiva en vivo, calculadora de edad exacta, signo zodiacal, número de sendero de vida y más. Gratis.",
  keywords: [
    "días para mi cumpleaños",
    "cuenta regresiva cumpleaños",
    "calculadora de edad",
    "cuántos días faltan para mi cumpleaños",
    "signo zodiacal",
    "numerología fecha de nacimiento",
  ],
  alternates: {
    canonical: "https://birthfacts.net/es/",
    languages: {
      en: "https://birthfacts.net/",
      es: "https://birthfacts.net/es/",
      ja: "https://birthfacts.net/ja/",
      "x-default": "https://birthfacts.net/",
    },
  },
  openGraph: {
    title: "Cuenta Regresiva de Cumpleaños & Calculadora de Edad | BirthFacts",
    description: "¿Cuántos días faltan para tu cumpleaños? Cuenta regresiva en vivo, edad exacta, signo zodiacal y perfil de cumpleaños completo. Gratis.",
    url: "https://birthfacts.net/es/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "BirthFacts – Cuenta Regresiva de Cumpleaños" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuenta Regresiva de Cumpleaños & Calculadora de Edad | BirthFacts",
    description: "¿Cuántos días faltan para tu cumpleaños? Cuenta regresiva en vivo, edad exacta, signo zodiacal y perfil completo.",
    images: ["https://birthfacts.net/og-image.png"],
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
          <span className="gradient-text">Cuenta Regresiva</span><br />
          <span className="text-3xl sm:text-4xl">de Cumpleaños</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
          ¿Cuántos días faltan para tu cumpleaños? Ingresa tu fecha de nacimiento para una
          cuenta regresiva en vivo, edad exacta, signo zodiacal y tu perfil completo. Gratis.
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
            { href: "/es/horoscopo-ranking/",   emoji: "🏆", title: "Ranking del Horóscopo",  desc: "Los 12 signos clasificados por suerte hoy" },
            { href: "/es/compatibilidad/",      emoji: "💞", title: "Compatibilidad",          desc: "¿Qué tan compatibles son tus signos?" },
            { href: "/es/signos-del-zodiaco/",  emoji: "♈", title: "Signos del Zodiaco",      desc: "Fechas, elementos y características de los 12 signos" },
            { href: "/es/dog-age-calculator/",  emoji: "🐶", title: "Edad del Perro",          desc: "¿Cuántos años tiene tu perro en humanos?" },
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

      {/* FAQ */}
      <section className="mt-12 space-y-4">
        <h2 className="text-xl font-bold gradient-text">Preguntas Frecuentes</h2>
        {[
          {
            q: "¿Cuántos días faltan para mi cumpleaños?",
            a: "Ingresa tu fecha de nacimiento en la calculadora de arriba. BirthFacts muestra al instante una cuenta regresiva en vivo con los días, horas, minutos y segundos exactos que faltan para tu próximo cumpleaños.",
          },
          {
            q: "¿Cómo calculo mi edad exacta?",
            a: "Ingresa tu fecha de nacimiento arriba. BirthFacts calcula tu edad exacta en años, meses, semanas, días, horas y minutos — actualizada en tiempo real.",
          },
          {
            q: "¿Cuál es mi signo zodiacal?",
            a: "Tu signo zodiacal occidental se determina por tu mes y día de nacimiento. Aries va del 21 de marzo al 19 de abril, Tauro del 20 de abril al 20 de mayo, y así sucesivamente. Ingresa tu fecha de nacimiento arriba para ver tu signo al instante.",
          },
          {
            q: "¿BirthFacts es gratis?",
            a: "Sí, completamente gratis. BirthFacts no requiere registro ni pago. Ingresa tu fecha de nacimiento y accede instantáneamente a tu perfil completo de cumpleaños.",
          },
        ].map(({ q, a }) => (
          <details key={q} className="card p-4 group">
            <summary className="font-semibold cursor-pointer text-base list-none flex justify-between items-center">
              {q}
              <span className="text-[var(--muted)] group-open:rotate-180 transition-transform">▾</span>
            </summary>
            <p className="mt-3 text-base text-[var(--muted)] leading-relaxed">{a}</p>
          </details>
        ))}
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "¿Cuántos días faltan para mi cumpleaños?", acceptedAnswer: { "@type": "Answer", text: "Ingresa tu fecha de nacimiento en la calculadora. BirthFacts muestra una cuenta regresiva en vivo con los días, horas, minutos y segundos exactos que faltan para tu próximo cumpleaños." } },
              { "@type": "Question", name: "¿Cómo calculo mi edad exacta?", acceptedAnswer: { "@type": "Answer", text: "Ingresa tu fecha de nacimiento. BirthFacts calcula tu edad exacta en años, meses, semanas, días, horas y minutos — actualizada en tiempo real." } },
              { "@type": "Question", name: "¿Cuál es mi signo zodiacal?", acceptedAnswer: { "@type": "Answer", text: "Tu signo zodiacal occidental se determina por tu mes y día de nacimiento. Ingresa tu fecha de nacimiento arriba para ver tu signo al instante." } },
              { "@type": "Question", name: "¿BirthFacts es gratis?", acceptedAnswer: { "@type": "Answer", text: "Sí, completamente gratis. BirthFacts no requiere registro ni pago. Ingresa tu fecha de nacimiento y accede instantáneamente a tu perfil completo." } },
            ],
          }),
        }}
      />
    </div>
  );
}
