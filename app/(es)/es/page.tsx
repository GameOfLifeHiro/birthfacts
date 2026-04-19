import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "Calculadora de Edad y Perfil de Cumpleaños | BirthFacts",
  description: "Ingresa tu fecha de nacimiento y descubre tu edad exacta, signo zodiacal, fase lunar, número Kin maya, número de camino de vida, zodiaco chino y mucho más. Gratis.",
  alternates: { canonical: "https://birthfacts.net/es/" },
};

export default function EsHomePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <span className="gradient-text">Calculadora de Edad</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto leading-relaxed">
          Ingresa tu fecha de nacimiento para obtener tu edad exacta en años, meses, semanas, días,
          horas y minutos, más tu zodiaco, fase lunar, calendario maya y mucho más.
        </p>
      </div>

      <AgeCalculator basePath="/es/" />

      {/* More tools */}
      <div className="mt-12 card p-6">
        <h2 className="font-semibold text-lg text-[var(--accent)] mb-4">Más herramientas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { href: "/es/dog-age-calculator/", emoji: "🐶", title: "Edad del Perro", desc: "¿Cuántos años tiene tu perro en humanos?" },
            { href: "/es/cat-age-calculator/", emoji: "🐱", title: "Edad del Gato", desc: "¿Cuántos años tiene tu gato en humanos?" },
            { href: "/es/days-between/", emoji: "📅", title: "Días Entre Fechas", desc: "Calcula días entre dos fechas" },
            { href: "/es/faq/", emoji: "❓", title: "Preguntas Frecuentes", desc: "Sobre cómo funciona la calculadora" },
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
