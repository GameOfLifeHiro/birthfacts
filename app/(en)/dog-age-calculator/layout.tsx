import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Age Calculator – Dog Years to Human Years | BirthFacts",
  description:
    "Convert your dog's age to human years instantly. Uses the modern AVMA formula with size adjustment (small, medium, large dogs). Free and accurate.",
  alternates: {
    canonical: "https://birthfacts.net/dog-age-calculator/",
    languages: {
      en: "https://birthfacts.net/dog-age-calculator/",
      es: "https://birthfacts.net/es/dog-age-calculator/",
      ja: "https://birthfacts.net/ja/dog-age-calculator/",
      "x-default": "https://birthfacts.net/dog-age-calculator/",
    },
  },
  openGraph: {
    title: "Dog Age Calculator – Dog Years to Human Years | BirthFacts",
    description: "Convert your dog's age to human years instantly. Uses the modern AVMA formula with size adjustment for small, medium, and large dogs.",
    url: "https://birthfacts.net/dog-age-calculator/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Dog Age Calculator – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Age Calculator – Dog Years to Human Years | BirthFacts",
    description: "Convert your dog's age to human years instantly. AVMA formula with size adjustment.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
