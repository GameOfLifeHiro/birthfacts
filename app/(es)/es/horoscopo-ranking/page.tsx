import type { Metadata } from "next";
import DailyFortuneRanking from "@/components/DailyFortuneRanking";

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
      ja: "https://birthfacts.net/ja/uranai-ranking/",
      es: "https://birthfacts.net/es/horoscopo-ranking/",
    },
  },
};

export default function HoroscopoRankingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
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
          className="text-sm text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          ← Ingresa tu fecha de nacimiento para tu lectura personal
        </a>
      </div>
    </div>
  );
}
