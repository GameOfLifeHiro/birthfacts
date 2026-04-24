import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Acerca de BirthFacts",
  description: "BirthFacts.net es una herramienta gratuita de perfil de cumpleaños: calcula edad exacta, zodiaco, fase lunar, número Kin maya, zodiaco chino y más.",
  alternates: {
    canonical: "https://birthfacts.net/es/about/",
    languages: {
      en: "https://birthfacts.net/about/",
      es: "https://birthfacts.net/es/about/",
      ja: "https://birthfacts.net/ja/about/",
      "x-default": "https://birthfacts.net/about/",
    },
  },
};

export default function EsAboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Inicio", href: "/es/" }, { name: "Acerca de BirthFacts", href: "/es/about/" }]} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Acerca de BirthFacts</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">Más que una simple calculadora de edad — un perfil completo de cumpleaños.</p>
      </div>

      <div className="space-y-6">
        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">¿Qué es BirthFacts?</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            BirthFacts es una herramienta gratuita de perfil de cumpleaños que te muestra datos fascinantes
            a partir de tu fecha de nacimiento. Además de tu edad exacta (en años, meses, semanas, días,
            horas y minutos), descubrirás tu signo zodiacal occidental y chino, la fase lunar al nacer,
            tu número Kin del calendario maya, número de Camino de Vida y mucho más.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">¿Qué puedes descubrir?</h2>
          <ul className="text-[var(--muted)] text-base leading-relaxed space-y-2">
            <li>✅ Edad exacta en años, meses, semanas, días, horas y minutos</li>
            <li>✅ Cuenta regresiva a tu próximo cumpleaños</li>
            <li>✅ Signo zodiacal occidental y chino</li>
            <li>✅ Fase lunar al momento de tu nacimiento</li>
            <li>✅ Número Kin del calendario maya Dreamspell</li>
            <li>✅ Número de Camino de Vida (numerología)</li>
            <li>✅ Piedra y flor de nacimiento</li>
            <li>✅ Identidad generacional (Millennial, Gen Z, Gen X, etc.)</li>
            <li>✅ Generación espiritual (Niño Índigo, Cristal, Arcoíris)</li>
            <li>✅ Personas famosas que comparten tu cumpleaños</li>
            <li>✅ Eventos históricos del año en que naciste</li>
            <li>✅ Calculadora de edad para perros y gatos</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">¿Es privado mi dato?</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            Sí. Tu fecha de nacimiento se procesa completamente en tu navegador. Nunca se envía ni
            almacena en ningún servidor. Todos los cálculos ocurren localmente en tu dispositivo.
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">Acerca del equipo</h2>
          <p className="text-[var(--muted)] text-base leading-relaxed">
            BirthFacts es desarrollado por <strong>Ascent Leadership Institute Inc</strong>, con sede en
            Las Vegas, NV, EE. UU. Nos apasiona crear herramientas digitales que combinen datos
            precisos con perspectivas espirituales y culturales del mundo.
          </p>
        </div>
      </div>
    </div>
  );
}
