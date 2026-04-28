import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Age Calculator — How Old Is Your Cat in Human Years? | BirthFacts",
  description:
    "How old is your cat in human years? Free cat years calculator — a 1-year-old cat equals 15 human years, a 5-year-old equals 36. Instant results, no sign-up.",
  keywords: [
    "cat age calculator",
    "cat years calculator",
    "cat year calculator",
    "how old is my cat in human years",
    "cat age in human years",
    "cat years to human years",
  ],
  alternates: {
    canonical: "https://birthfacts.net/cat-age-calculator/",
    languages: {
      en: "https://birthfacts.net/cat-age-calculator/",
      es: "https://birthfacts.net/es/cat-age-calculator/",
      ja: "https://birthfacts.net/ja/cat-age-calculator/",
      "x-default": "https://birthfacts.net/cat-age-calculator/",
    },
  },
  openGraph: {
    title: "Cat Age Calculator — How Old Is Your Cat in Human Years? | BirthFacts",
    description: "Free cat years calculator. A 1-year-old cat = 15 human years, a 5-year-old = 36. Instant, accurate, no sign-up.",
    url: "https://birthfacts.net/cat-age-calculator/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Cat Age Calculator – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Age Calculator — How Old Is Your Cat in Human Years? | BirthFacts",
    description: "Free cat years calculator. A 1-year-old cat = 15 human years, a 5-year-old = 36. Instant, accurate, no sign-up.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
