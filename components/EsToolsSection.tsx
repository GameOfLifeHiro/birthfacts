/**
 * Standard "Más herramientas" grid used on all Spanish sub-pages.
 */
export default function EsToolsSection() {
  const tools = [
    { href: "/es/horoscopo-ranking/",    emoji: "🏆", title: "Ranking del Horóscopo",  desc: "Los 12 signos clasificados por suerte hoy" },
    { href: "/es/compatibilidad/",        emoji: "💞", title: "Compatibilidad",          desc: "¿Qué tan compatibles son tus signos?" },
    { href: "/es/signos-del-zodiaco/",    emoji: "♈", title: "Signos del Zodiaco",      desc: "Fechas, elementos y características de los 12 signos" },
    { href: "/es/dog-age-calculator/",    emoji: "🐶", title: "Edad del Perro",          desc: "¿Cuántos años tiene tu perro en humanos?" },
    { href: "/es/cat-age-calculator/",    emoji: "🐱", title: "Edad del Gato",           desc: "¿Cuántos años tiene tu gato en humanos?" },
    { href: "/es/days-between/",          emoji: "📅", title: "Días Entre Fechas",       desc: "Calcula días entre dos fechas" },
    { href: "/es/faq/",                   emoji: "❓", title: "Preguntas Frecuentes",    desc: "Dudas sobre edad, astrología y más" },
  ];

  return (
    <div className="card p-5 mt-8">
      <h2 className="text-lg font-bold text-[var(--accent)] mb-3">Más herramientas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {tools.map(({ href, emoji, title, desc }) => (
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
  );
}
