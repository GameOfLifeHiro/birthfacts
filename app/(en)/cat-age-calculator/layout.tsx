import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Age Calculator – Cat Years to Human Years | BirthFacts",
  description:
    "Convert your cat's age to human years instantly. Uses the International Cat Care formula. Free and accurate cat age calculator.",
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
    title: "Cat Age Calculator – Cat Years to Human Years | BirthFacts",
    description: "Convert your cat's age to human years instantly. Based on International Cat Care guidelines. Free and accurate.",
    url: "https://birthfacts.net/cat-age-calculator/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Cat Age Calculator – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cat Age Calculator – Cat Years to Human Years | BirthFacts",
    description: "Convert your cat's age to human years instantly. Based on International Cat Care guidelines.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
