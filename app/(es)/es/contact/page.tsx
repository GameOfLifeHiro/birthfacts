import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | BirthFacts",
  alternates: { canonical: "https://birthfacts.net/es/contact/" },
};

export default function EsContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Contacto</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">¿Preguntas, comentarios o reportes de errores? Escríbenos.</p>
      </div>

      <div className="card p-8 text-center">
        <p className="text-[var(--muted)] text-base mb-4">
          Puedes contactarnos por correo electrónico:
        </p>
        <a
          href="mailto:hello@birthfacts.net"
          className="text-xl font-semibold text-[var(--accent)] hover:underline"
        >
          hello@birthfacts.net
        </a>
        <p className="text-[var(--muted)] text-sm mt-4">
          Operado por: Ascent Leadership Institute Inc (Las Vegas, NV, EE. UU.)
        </p>
      </div>

      <div className="mt-10 text-center">
        <a href="/es/" className="btn-primary inline-block">Volver a la Calculadora</a>
      </div>
    </div>
  );
}
