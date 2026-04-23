import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Política de Privacidad | BirthFacts",
  alternates: { canonical: "https://birthfacts.net/es/privacy/" },
};

export default function EsPrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Inicio", href: "/es/" }, { name: "Política de Privacidad", href: "/es/privacy/" }]} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Política de Privacidad</span>
        </h1>
      </div>

      <div className="space-y-6 text-[var(--muted)] text-base leading-relaxed">
        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">1. Información que recopilamos</h2>
          <p>BirthFacts (birthfacts.net) solicita tu fecha de nacimiento para calcular tu edad y perfil de cumpleaños. Esta información se procesa únicamente en tu navegador y nunca se envía ni almacena en nuestros servidores.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">2. Uso de los datos</h2>
          <p>La fecha de nacimiento ingresada se procesa en tiempo real en tu navegador. No recopilamos, guardamos ni compartimos ninguna información personal con terceros.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">3. Analíticas</h2>
          <p>Usamos Google Analytics 4 (ID de medición: <code className="text-[var(--accent)]">G-4ETJP01VCC</code>) para analizar el tráfico del sitio de forma agregada. No se recopila información de identificación personal. Política de privacidad de Google: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:underline">policies.google.com/privacy</a></p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">4. Enlaces para compartir</h2>
          <p>Si usas la función "Compartir resultado", tu fecha de nacimiento se incluirá como parámetro en la URL. Ten en cuenta esto al compartir el enlace con otras personas.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">5. Cookies</h2>
          <p>Este sitio no establece cookies propias. Google Analytics puede usar cookies de origen para medir el uso del sitio.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">6. Cambios a esta política</h2>
          <p>Podemos actualizar esta política ocasionalmente. Los cambios se publicarán en esta página. El uso continuado del sitio implica la aceptación de la política vigente.</p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-lg text-[var(--accent)] mb-3">7. Contacto</h2>
          <p>Para preguntas sobre privacidad, contáctanos en: <a href="mailto:hello@birthfacts.net" className="text-[var(--accent)] hover:underline">hello@birthfacts.net</a></p>
        </div>
      </div>
    </div>
  );
}
