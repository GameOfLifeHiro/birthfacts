import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Path Number Calculator — Free Numerology Reading | BirthFacts",
  description:
    "Calculate your Life Path Number from your birthdate. Free numerology reading with meanings, strengths, and famous people who share your number.",
  keywords: [
    "life path number calculator",
    "life path number",
    "numerology calculator",
    "numerology birth date",
    "calculate life path number",
    "life path number meaning",
    "master number numerology",
  ],
  alternates: {
    canonical: "https://birthfacts.net/life-path-number/",
  },
  openGraph: {
    title: "Life Path Number Calculator — Free Numerology Reading | BirthFacts",
    description: "Discover your Life Path Number and its meaning with our free numerology calculator.",
    url: "https://birthfacts.net/life-path-number/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Life Path Number Calculator – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Path Number Calculator — Free Numerology Reading | BirthFacts",
    description: "Discover your Life Path Number and its meaning with our free numerology calculator.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function LifePathNumberLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
