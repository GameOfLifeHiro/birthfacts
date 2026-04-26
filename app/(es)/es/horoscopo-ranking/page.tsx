import type { Metadata } from "next";
import DailyFortuneRanking from "@/components/DailyFortuneRanking";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EsToolsSection from "@/components/EsToolsSection";

export const metadata: Metadata = {
  title: "Horóscopo de Hoy — Ranking de los 12 Signos | BirthFacts",
  description:
    "Descubre el ranking de suerte de hoy para los 12 signos del zodiaco: Aries, Tauro, Géminis, Cáncer, Leo, Virgo, Libra, Escorpio, Sagitario, Capricornio, Acuario y Piscis. Gratis, actualizado a medianoche.",
  keywords: [
    "horóscopo de hoy todos los signos",
    "ranking horóscopo hoy",
    "los 12 signos hoy",
    "horóscopo gratis todos los signos",
    "ranking de suerte zodiacal",
    "cuál es el signo más afortunado hoy",
  ],
  alternates: {
    canonical: "https://birthfacts.net/es/horoscopo-ranking/",
    languages: {
      en: "https://birthfacts.net/fortune-ranking/",
      es: "https://birthfacts.net/es/horoscopo-ranking/",
      ja: "https://birthfacts.net/ja/uranai-ranking/",
      "x-default": "https://birthfacts.net/fortune-ranking/",
    },
  },
  openGraph: {
    title: "Horóscopo de Hoy — Ranking de los 12 Signos | BirthFacts",
    description: "¿Qué signo del zodiaco tiene más suerte hoy? Los 12 signos clasificados por fortuna, actualizados cada medianoche. Gratis.",
    url: "https://birthfacts.net/es/horoscopo-ranking/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Ranking del Horóscopo – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horóscopo de Hoy — Ranking de los 12 Signos | BirthFacts",
    description: "¿Qué signo tiene más suerte hoy? Los 12 signos clasificados, actualizados cada día.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function HoroscopoRankingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Inicio", href: "/es/" }, { name: "Ranking del Horóscopo", href: "/es/horoscopo-ranking/" }]} />
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          <span className="gradient-text">Ranking del Horóscopo de Hoy</span>
        </h1>
        <p className="text-[var(--muted)] text-base max-w-lg mx-auto">
          Los 12 signos del zodiaco clasificados por suerte hoy. ¿En qué posición está tu signo?
        </p>
      </div>

      <DailyFortuneRanking />

      <div className="mt-10 text-center">
        <a
          href="/es/"
          className="text-base text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          ← Ingresa tu fecha de nacimiento para tu lectura personal
        </a>
      </div>

      {/* FAQ */}
      <section className="mt-10 space-y-4">
        <h2 className="text-xl font-bold gradient-text">Preguntas Frecuentes</h2>
        {[
          { q: "¿Cómo se calcula el ranking de horóscopo diario?", a: "La fortuna de cada signo se genera a partir de una rotación diaria determinista basada en la fecha. El ranking rota entre los 12 signos para que todos lleguen al primer puesto regularmente — está diseñado para el entretenimiento diario y la reflexión personal, no para la predicción." },
          { q: "¿El ranking cambia todos los días?", a: "Sí. El ranking del horóscopo se actualiza automáticamente a medianoche y es el mismo para todos los visitantes en un día determinado. Recarga la página después de medianoche para ver el nuevo ranking." },
          { q: "¿Qué significa la puntuación de fortuna?", a: "Cada signo recibe una lectura de fortuna con número de la suerte, color de la suerte y un breve pronóstico. El rango (del 1.º al 12.º) refleja la energía general de ese signo durante el día." },
          { q: "¿Puedo ver la fortuna específica de mi signo?", a: "Sí — ingresa tu fecha de nacimiento en la página principal y la tarjeta de fortuna de tu signo aparecerá en tu lectura personal, junto con tu posición entre los 12 signos." },
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
              { "@type": "Question", name: "¿Cómo se calcula el ranking de horóscopo diario?", acceptedAnswer: { "@type": "Answer", text: "La fortuna de cada signo se genera a partir de una rotación diaria determinista basada en la fecha. El ranking rota entre los 12 signos para que todos lleguen al primer puesto regularmente." } },
              { "@type": "Question", name: "¿El ranking cambia todos los días?", acceptedAnswer: { "@type": "Answer", text: "Sí. El ranking del horóscopo se actualiza automáticamente a medianoche y es el mismo para todos los visitantes en un día determinado." } },
              { "@type": "Question", name: "¿Qué significa la puntuación de fortuna?", acceptedAnswer: { "@type": "Answer", text: "Cada signo recibe una lectura de fortuna con número de la suerte, color de la suerte y un breve pronóstico. El rango (del 1.º al 12.º) refleja la energía general de ese signo durante el día." } },
              { "@type": "Question", name: "¿Puedo ver la fortuna específica de mi signo?", acceptedAnswer: { "@type": "Answer", text: "Sí — ingresa tu fecha de nacimiento en la página principal de BirthFacts y la tarjeta de fortuna de tu signo aparecerá en tu lectura personal, junto con tu posición entre los 12 signos." } },
            ],
          }),
        }}
      />

      <EsToolsSection />
    </div>
  );
}
