import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chinese Zodiac Calculator — Find Your Animal Sign | BirthFacts",
  description:
    "What is your Chinese Zodiac animal? Enter your birth year to find your sign, traits, lucky numbers, and compatibility. Free Chinese astrology calculator.",
  keywords: [
    "chinese zodiac calculator",
    "what is my chinese zodiac",
    "chinese zodiac sign by year",
    "chinese animal sign",
    "chinese horoscope",
    "chinese zodiac year",
    "zodiac animal sign birthday",
  ],
  alternates: {
    canonical: "https://birthfacts.net/chinese-zodiac/",
  },
  openGraph: {
    title: "Chinese Zodiac Calculator — Find Your Animal Sign | BirthFacts",
    description: "Enter your birth year to discover your Chinese Zodiac animal, traits, and lucky numbers.",
    url: "https://birthfacts.net/chinese-zodiac/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Chinese Zodiac Calculator – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chinese Zodiac Calculator — Find Your Animal Sign | BirthFacts",
    description: "Enter your birth year to discover your Chinese Zodiac animal, traits, and lucky numbers.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function ChineseZodiacLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
