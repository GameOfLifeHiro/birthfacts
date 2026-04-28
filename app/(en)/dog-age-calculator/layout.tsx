import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Age Calculator — How Old Is Your Dog in Human Years? | BirthFacts",
  description:
    "How old is your dog in human years? Free dog age calculator with size adjustment for small, medium & large breeds. A 7-year-old medium dog = 47 human years. Instant results.",
  keywords: [
    "dog age calculator",
    "dog years to human years",
    "how old is my dog in human years",
    "dog years calculator",
    "dog age in human years",
    "how old is my dog",
    "my dog was born on",
  ],
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
    title: "Dog Age Calculator — How Old Is Your Dog in Human Years? | BirthFacts",
    description: "Free dog years calculator with size adjustment. A 7-year-old medium dog = 47 human years. Instant, accurate results.",
    url: "https://birthfacts.net/dog-age-calculator/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Dog Age Calculator – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Age Calculator — How Old Is Your Dog in Human Years? | BirthFacts",
    description: "Free dog years calculator with size adjustment. A 7-year-old medium dog = 47 human years. Instant, accurate results.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
