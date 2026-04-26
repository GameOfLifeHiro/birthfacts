import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import EsToolsSection from "@/components/EsToolsSection";

export const metadata: Metadata = {
  title: "Fechas de los Signos del Zodiaco — Los 12 Signos | BirthFacts",
  description:
    "Consulta las fechas exactas, elementos, cualidades, planetas rectores y características de los 12 signos del zodiaco. De Aries a Piscis — tu guía completa del zodiaco.",
  keywords: [
    "fechas signos del zodiaco", "signos zodiacales fechas", "los 12 signos del zodiaco",
    "cuál es mi signo zodiacal", "fechas zodiacales", "elementos astrología",
    "aries fechas", "tauro fechas", "géminis fechas",
    "características signos zodiacales", "astrología occidental signos",
  ],
  alternates: {
    canonical: "https://birthfacts.net/es/signos-del-zodiaco/",
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
  en: string;
  period: string;
  element: string;
  elementEs: string;
  quality: string;
  qualityEs: string;
  ruler: string;
  traits: string[];
  description: string;
}

const SIGNS: Sign[] = [
  {
    name: "Aries",
    symbol: "♈",
    en: "Aries",
    period: "21 mar – 19 abr",
    element: "Fire",
    elementEs: "Fuego",
    quality: "Cardinal",
    qualityEs: "Cardinal",
    ruler: "Marte",
    traits: ["Apasionado", "Valiente", "Líder", "Directo", "Independiente"],
    description:
      "El pionero del zodiaco. Impulsado por la pasión y la acción, Aries se lanza hacia adelante sin miedo. Líder natural que inspira con su energía — aunque su franqueza puede percibirse como impaciencia.",
  },
  {
    name: "Tauro",
    symbol: "♉",
    en: "Taurus",
    period: "20 abr – 20 may",
    element: "Earth",
    elementEs: "Tierra",
    quality: "Fixed",
    qualityEs: "Fijo",
    ruler: "Venus",
    traits: ["Paciente", "Estable", "Sensual", "Leal", "Terco"],
    description:
      "Estable y sensual, Tauro aprecia la belleza, la comodidad y los placeres del mundo físico. Leal y paciente, construye bases duraderas — aunque una vez que ha tomado una decisión, raramente cambia de rumbo.",
  },
  {
    name: "Géminis",
    symbol: "♊",
    en: "Gemini",
    period: "21 may – 21 jun",
    element: "Air",
    elementEs: "Aire",
    quality: "Mutable",
    qualityEs: "Mutable",
    ruler: "Mercurio",
    traits: ["Curioso", "Adaptable", "Ingenioso", "Comunicativo", "Dual"],
    description:
      "Ingenioso y curioso, Géminis prospera con las ideas y la comunicación. Adaptable y sociable, se desenvuelve fácilmente en cualquier situación — aunque puede tener dificultades para centrarse en una sola cosa.",
  },
  {
    name: "Cáncer",
    symbol: "♋",
    en: "Cancer",
    period: "22 jun – 22 jul",
    element: "Water",
    elementEs: "Agua",
    quality: "Cardinal",
    qualityEs: "Cardinal",
    ruler: "Luna",
    traits: ["Intuitivo", "Protector", "Empático", "Familiar", "Sensible"],
    description:
      "Profundamente intuitivo y emocionalmente sensible, Cáncer es el cuidador del zodiaco. Valora la familia, el hogar y los recuerdos. Su sensibilidad puede hacerle vulnerable, pero su calidez crea vínculos de por vida.",
  },
  {
    name: "Leo",
    symbol: "♌",
    en: "Leo",
    period: "23 jul – 22 ago",
    element: "Fire",
    elementEs: "Fuego",
    quality: "Fixed",
    qualityEs: "Fijo",
    ruler: "Sol",
    traits: ["Carismático", "Creativo", "Generoso", "Expresivo", "Orgulloso"],
    description:
      "Audaz y radiante, Leo acapara la atención con un carisma natural. Creativo y generoso, adora liderar e inspirar. Su necesidad de reconocimiento está a la altura de su lealtad incondicional hacia quienes ama.",
  },
  {
    name: "Virgo",
    symbol: "♍",
    en: "Virgo",
    period: "23 ago – 22 sep",
    element: "Earth",
    elementEs: "Tierra",
    quality: "Mutable",
    qualityEs: "Mutable",
    ruler: "Mercurio",
    traits: ["Analítico", "Meticuloso", "Servicial", "Perfeccionista", "Humilde"],
    description:
      "Preciso y analítico, Virgo destaca encontrando soluciones prácticas. Colaborador dedicado con ojo para el detalle, puede ser exigente consigo mismo en busca de la perfección — pero su fiabilidad no tiene igual.",
  },
  {
    name: "Libra",
    symbol: "♎",
    en: "Libra",
    period: "23 sep – 23 oct",
    element: "Air",
    elementEs: "Aire",
    quality: "Cardinal",
    qualityEs: "Cardinal",
    ruler: "Venus",
    traits: ["Armonioso", "Justo", "Social", "Indeciso", "Estético"],
    description:
      "El diplomático del zodiaco, Libra busca armonía y justicia en todo. Encantador y socialmente dotado, sopesa cada opción con cuidado — lo que puede llevar a la indecisión, pero también a elecciones equilibradas y reflexivas.",
  },
  {
    name: "Escorpio",
    symbol: "♏",
    en: "Scorpio",
    period: "24 oct – 22 nov",
    element: "Water",
    elementEs: "Agua",
    quality: "Fixed",
    qualityEs: "Fijo",
    ruler: "Plutón",
    traits: ["Perspicaz", "Apasionado", "Decidido", "Reservado", "Transformador"],
    description:
      "Intenso y perspicaz, Escorpio va más allá de la superficie para encontrar la verdad. Su fuerza de voluntad y profundidad emocional son formidables. Guarda bien su mundo interior, pero cuando confía, su lealtad es inquebrantable.",
  },
  {
    name: "Sagitario",
    symbol: "♐",
    en: "Sagittarius",
    period: "23 nov – 21 dic",
    element: "Fire",
    elementEs: "Fuego",
    quality: "Mutable",
    qualityEs: "Mutable",
    ruler: "Júpiter",
    traits: ["Optimista", "Aventurero", "Filosófico", "Libre", "Directo"],
    description:
      "El eterno optimista y aventurero, Sagitario persigue la sabiduría, la libertad y nuevos horizontes. Filosófico y directo, su franqueza puede herir ocasionalmente — pero su espíritu expansivo ilumina cualquier ambiente.",
  },
  {
    name: "Capricornio",
    symbol: "♑",
    en: "Capricorn",
    period: "22 dic – 19 ene",
    element: "Earth",
    elementEs: "Tierra",
    quality: "Cardinal",
    qualityEs: "Cardinal",
    ruler: "Saturno",
    traits: ["Ambicioso", "Disciplinado", "Responsable", "Paciente", "Pragmático"],
    description:
      "Disciplinado y ambicioso, Capricornio avanza hacia sus metas con constancia. Asume las responsabilidades con seriedad y valora los logros prácticos. Cálido bajo una apariencia reservada, su dedicación inspira confianza.",
  },
  {
    name: "Acuario",
    symbol: "♒",
    en: "Aquarius",
    period: "20 ene – 18 feb",
    element: "Air",
    elementEs: "Aire",
    quality: "Fixed",
    qualityEs: "Fijo",
    ruler: "Urano",
    traits: ["Original", "Humanitario", "Innovador", "Independiente", "Idealista"],
    description:
      "El visionario del zodiaco, Acuario sigue su propio camino. Idealista e inventivo, piensa en términos del futuro de la humanidad. Puede parecer distante, pero su perspectiva poco convencional está adelantada a su tiempo.",
  },
  {
    name: "Piscis",
    symbol: "♓",
    en: "Pisces",
    period: "19 feb – 20 mar",
    element: "Water",
    elementEs: "Agua",
    quality: "Mutable",
    qualityEs: "Mutable",
    ruler: "Neptuno",
    traits: ["Empático", "Intuitivo", "Artístico", "Soñador", "Altruista"],
    description:
      "El soñador y empático del zodiaco, Piscis absorbe los sentimientos de quienes le rodean. Imaginativo y compasivo, puede perderse en la fantasía — pero su creatividad y profundidad espiritual no tienen límites.",
  },
];

const ELEMENT_COLOR: Record<string, string> = {
  Fire:  "text-orange-400",
  Earth: "text-green-400",
  Air:   "text-sky-400",
  Water: "text-blue-400",
};

export default function SignosDelZodiacoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema
        items={[
          { name: "Inicio", href: "/es/" },
          { name: "Signos del Zodiaco", href: "/es/signos-del-zodiaco/" },
        ]}
      />

      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-3">
          <span className="gradient-text">Signos del Zodiaco</span>
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed max-w-xl mx-auto">
          Fechas, elementos, cualidades y características de los 12 signos del zodiaco — de un vistazo.
        </p>
      </div>

      {/* Quick reference table */}
      <div className="card overflow-hidden mb-8">
        <div className="overflow-x-auto">
          <table className="w-full text-base">
            <thead className="bg-[var(--card-border)]/30">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">Signo</th>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)]">Fechas</th>
                <th className="text-center px-4 py-3 font-semibold text-[var(--text)]">Elemento</th>
                <th className="text-left px-4 py-3 font-semibold text-[var(--text)] hidden sm:table-cell">Características</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--card-border)]">
              {SIGNS.map((s) => (
                <tr key={s.en} className="hover:bg-[var(--card-border)]/10 transition-colors">
                  <td className="px-4 py-2.5">
                    <span className="text-xl mr-2">{s.symbol}</span>
                    <span className="font-semibold text-[var(--text)]">{s.name}</span>
                  </td>
                  <td className="px-4 py-2.5 text-[var(--muted)] whitespace-nowrap">{s.period}</td>
                  <td className={`px-4 py-2.5 text-center font-bold ${ELEMENT_COLOR[s.element]}`}>
                    {s.elementEs}
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
          <div key={s.en} className="card p-5">
            <div className="flex items-start gap-4 mb-3">
              <div className="text-4xl shrink-0">{s.symbol}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <h2 className="text-xl font-bold text-[var(--text)]">{s.name}</h2>
                  <span className="text-sm text-[var(--muted)]">({s.en})</span>
                </div>
                <div className="text-sm text-[var(--muted)]">{s.period}</div>
                <div className="flex flex-wrap gap-2 mt-1 text-xs">
                  <span className={`font-semibold ${ELEMENT_COLOR[s.element]}`}>
                    {s.elementEs}
                  </span>
                  <span className="text-[var(--muted)]">· {s.qualityEs}</span>
                  <span className="text-[var(--muted)]">· Regente: {s.ruler}</span>
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
        <h2 className="text-xl font-bold text-[var(--accent)] mb-4">Los Cuatro Elementos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { el: "Fuego", color: "text-orange-400", signs: "Aries · Leo · Sagitario",       desc: "Pasión, acción, intuición" },
            { el: "Tierra", color: "text-green-400",  signs: "Tauro · Virgo · Capricornio",   desc: "Estabilidad, practicidad, paciencia" },
            { el: "Aire",   color: "text-sky-400",    signs: "Géminis · Libra · Acuario",     desc: "Intelecto, comunicación, ideas" },
            { el: "Agua",   color: "text-blue-400",   signs: "Cáncer · Escorpio · Piscis",    desc: "Emoción, empatía, intuición" },
          ].map(({ el, color, signs, desc }) => (
            <div key={el} className="text-center p-3 rounded-xl border border-[var(--card-border)]">
              <div className={`text-2xl font-bold mb-1 ${color}`}>{el}</div>
              <div className="text-xs text-[var(--muted)] mb-1">{signs}</div>
              <div className="text-xs text-[var(--muted)]">{desc}</div>
            </div>
          ))}
        </div>
      </div>

      <EsToolsSection />

      {/* CTA */}
      <div className="text-center card p-8 mt-8">
        <p className="text-[var(--muted)] text-base mb-4">
          Ingresa tu fecha de nacimiento para descubrir tu signo zodiacal, tu horóscopo de hoy y tu perfil espiritual completo — gratis.
        </p>
        <a href="/es/" className="btn-primary inline-block">Lectura de Cumpleaños Gratis</a>
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
                name: `¿Cuáles son las fechas de ${s.name}?`,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: `${s.name} (${s.symbol}) va del ${s.period}. Elemento: ${s.elementEs}. Regente: ${s.ruler}. Características: ${s.traits.join(", ")}.`,
                },
              })),
              {
                "@type": "Question",
                name: "¿Cuáles son las fechas de los 12 signos del zodiaco?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: SIGNS.map((s) => `${s.name}: ${s.period}`).join("; "),
                },
              },
              {
                "@type": "Question",
                name: "¿Qué son los cuatro elementos en astrología?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La astrología occidental divide los 12 signos en cuatro elementos. Fuego (Aries, Leo, Sagitario) representa pasión y acción. Tierra (Tauro, Virgo, Capricornio) representa estabilidad y practicidad. Aire (Géminis, Libra, Acuario) representa intelecto y comunicación. Agua (Cáncer, Escorpio, Piscis) representa emoción y empatía.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si nací en la cúspide entre dos signos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "La fecha exacta en que el Sol cambia de signo varía 1–2 días cada año. Si naciste cerca de un límite de signo, ingresa tu fecha completa de nacimiento en BirthFacts para obtener tu signo zodiacal preciso según la posición real del Sol ese año.",
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
            name: "Los 12 Signos del Zodiaco",
            description: "Fechas, elementos y características de los 12 signos del zodiaco occidental",
            numberOfItems: SIGNS.length,
            itemListElement: SIGNS.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${s.symbol} ${s.name} (${s.en})`,
              description: `${s.period}. Elemento: ${s.elementEs}. ${s.description}`,
            })),
          }),
        }}
      />
    </div>
  );
}
