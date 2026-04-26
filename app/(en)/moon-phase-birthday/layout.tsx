import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moon Phase Birthday Calculator — What Moon Were You Born Under? | BirthFacts",
  description:
    "Discover what moon phase you were born under. Enter your birthdate for your moon phase meaning, illumination, and spiritual significance. Free calculator.",
  keywords: [
    "moon phase birthday",
    "what moon phase was i born under",
    "moon phase calculator birthday",
    "birth moon phase meaning",
    "moon phase at birth",
    "natal moon phase",
  ],
  alternates: {
    canonical: "https://birthfacts.net/moon-phase-birthday/",
  },
  openGraph: {
    title: "Moon Phase Birthday Calculator — What Moon Were You Born Under? | BirthFacts",
    description: "Find out what moon phase you were born under and what it means for your personality.",
    url: "https://birthfacts.net/moon-phase-birthday/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Moon Phase Birthday – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Moon Phase Birthday Calculator — What Moon Were You Born Under? | BirthFacts",
    description: "Find out what moon phase you were born under and what it means for your personality.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function MoonPhaseBirthdayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
