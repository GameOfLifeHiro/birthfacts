import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Birthday Countdown — Days Until Your Next Birthday | BirthFacts",
  description:
    "How many days until your birthday? Enter your birth month and day for a live countdown in days, hours, minutes, and seconds. Free birthday countdown timer.",
  keywords: [
    "days until my birthday",
    "how many days until my birthday",
    "birthday countdown",
    "birthday countdown timer",
    "days until birthday",
    "next birthday calculator",
    "when is my birthday",
  ],
  alternates: {
    canonical: "https://birthfacts.net/birthday-countdown/",
  },
  openGraph: {
    title: "Birthday Countdown — Days Until Your Next Birthday | BirthFacts",
    description:
      "Live countdown timer showing exactly how many days, hours, minutes and seconds until your next birthday.",
    url: "https://birthfacts.net/birthday-countdown/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Birthday Countdown – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Countdown — Days Until Your Next Birthday | BirthFacts",
    description: "Live countdown timer showing exactly how many days, hours, minutes and seconds until your next birthday.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function BirthdayCountdownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
