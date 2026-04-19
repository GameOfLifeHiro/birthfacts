import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | BirthFacts",
  description: "Respuestas sobre cómo BirthFacts calcula tu edad, zodiaco, número Kin maya, fase lunar y más.",
  alternates: { canonical: "https://birthfacts.net/es/faq/" },
};

const FAQS = [
  {
    q: "¿Cómo se calcula la edad?",
    a: "Calculamos la diferencia exacta entre tu fecha de nacimiento y el día de hoy en años, meses y días usando el calendario gregoriano. Se tienen en cuenta los meses con diferente número de días y los años bisiestos.",
  },
  {
    q: "¿Qué es el número Kin del calendario maya?",
    a: "El número Kin del calendario maya (Dreamspell) representa tu posición en el Tzolk'in, el calendario sagrado de 260 días. Va del 1 al 260 e incluye tu Sello Solar (signo del día), Tono Galáctico y Wavespell.",
  },
  {
    q: "¿Qué es el número de Camino de Vida?",
    a: "El número de Camino de Vida proviene de la numerología. Se calcula sumando todos los dígitos de tu fecha de nacimiento hasta obtener un solo dígito (o los números maestros 11, 22, 33). Se cree que refleja tu propósito de vida y talentos naturales.",
  },
  {
    q: "¿Qué es el zodiaco chino?",
    a: "El zodiaco chino es un ciclo de 12 años donde cada año está representado por un animal: Rata, Buey, Tigre, Conejo, Dragón, Serpiente, Caballo, Cabra, Mono, Gallo, Perro y Cerdo. Se cree que el animal del año de tu nacimiento influye en tu personalidad y destino.",
  },
  {
    q: "¿Cómo se calcula la fase lunar al nacer?",
    a: "Calculamos la posición de la Luna en su ciclo sinódico de 29.53 días en tu fecha de nacimiento. Las 8 fases van desde la Luna Nueva hasta la Luna Menguante. Cada fase tiene su propia energía simbólica.",
  },
  {
    q: "¿Qué son los Niños Índigo, Cristal y Arcoíris?",
    a: "Son conceptos de la espiritualidad nueva era que describen generaciones de almas con energías y misiones especiales. Los Niños Índigo (≈1970–1994) son vistos como portadores de cambio, los Cristal (≈1990–2010) como sanadores, y los Arcoíris (≈2000–presente) como portadores de amor puro.",
  },
  {
    q: "¿Mi información personal es privada?",
    a: "Sí. Tu fecha de nacimiento se procesa completamente en tu navegador y nunca se envía ni almacena en ningún servidor. Consulta nuestra Política de Privacidad para más detalles.",
  },
  {
    q: "¿Cómo se calcula la edad de perros y gatos?",
    a: "Usamos el modelo veterinario moderno: el primer año equivale a ~15 años humanos, el segundo agrega ~9 (24 en total), y cada año posterior agrega ~4 años humanos. Para perros se aplica además un modificador por tamaño, ya que los perros grandes envejecen más rápido.",
  },
];

export default function EsFaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Preguntas Frecuentes</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">Respuestas sobre cómo funciona BirthFacts.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map(({ q, a }) => (
          <div key={q} className="card p-5">
            <h2 className="font-semibold text-base text-[var(--accent)] mb-2">{q}</h2>
            <p className="text-[var(--muted)] text-base leading-relaxed">{a}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a href="/es/" className="btn-primary inline-block">Volver a la Calculadora</a>
      </div>
    </div>
  );
}
