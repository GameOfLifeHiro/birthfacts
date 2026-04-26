import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact | BirthFacts",
  description: "Get in touch with the BirthFacts team for questions, feedback, or partnership inquiries.",
  alternates: { canonical: "https://birthfacts.net/contact/" },
  openGraph: {
    title: "Contact BirthFacts",
    description: "Questions, feedback, or partnership inquiries — get in touch with the BirthFacts team.",
    url: "https://birthfacts.net/contact/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Contact BirthFacts" }],
  },
};

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <BreadcrumbSchema items={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact/" }]} />
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Contact</span>
        </h1>
        <p className="text-[var(--muted)] text-lg">
          We&apos;d love to hear from you.
        </p>
      </div>

      <div className="space-y-4">
        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] mb-2">General Inquiries</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            For questions, feedback, or bug reports, please email us at:{" "}
            <a
              href="mailto:hello@birthfacts.net"
              className="text-[var(--accent)] hover:underline"
            >
              hello@birthfacts.net
            </a>
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] mb-2">Advertising & Partnerships</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            For advertising inquiries or partnership opportunities, please contact:{" "}
            <a
              href="mailto:hello@birthfacts.net"
              className="text-[var(--accent)] hover:underline"
            >
              hello@birthfacts.net
            </a>
          </p>
        </div>

        <div className="card p-6">
          <h2 className="font-semibold text-[var(--accent)] mb-2">Data & Privacy</h2>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            For privacy-related requests or concerns, please review our{" "}
            <a href="/privacy/" className="text-[var(--accent)] hover:underline">
              Privacy Policy
            </a>{" "}
            first. Most questions are answered there, as BirthFacts does not store any
            personal data. For further inquiries, email us at{" "}
            <a
              href="mailto:hello@birthfacts.net"
              className="text-[var(--accent)] hover:underline"
            >
              hello@birthfacts.net
            </a>
            .
          </p>
        </div>

        <div className="card p-5 text-center">
          <p className="text-sm text-[var(--muted)]">
            We typically respond within 1–3 business days.
          </p>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact BirthFacts",
            url: "https://birthfacts.net/contact/",
            mainEntity: {
              "@type": "Organization",
              "@id": "https://birthfacts.net/#organization",
              name: "Ascent Leadership Institute Inc",
              url: "https://birthfacts.net",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer support",
                  email: "hello@birthfacts.net",
                  availableLanguage: ["English", "Spanish", "Japanese"],
                },
                {
                  "@type": "ContactPoint",
                  contactType: "sales",
                  email: "hello@birthfacts.net",
                  availableLanguage: ["English"],
                },
              ],
            },
          }),
        }}
      />
    </div>
  );
}
