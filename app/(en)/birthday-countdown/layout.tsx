import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Many Days Until My Birthday? — Live Countdown Timer | BirthFacts",
  description:
    "Find out exactly how many days, hours & minutes until your next birthday — live countdown updated every second. Just pick your birth month and day. Free, no sign-up.",
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
    title: "How Many Days Until My Birthday? — Live Countdown | BirthFacts",
    description:
      "See exactly how many days, hours & minutes until your next birthday — live countdown updated every second. Just pick your birth month and day.",
    url: "https://birthfacts.net/birthday-countdown/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Birthday Countdown – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Many Days Until My Birthday? — Live Countdown | BirthFacts",
    description: "See exactly how many days, hours & minutes until your next birthday — live countdown updated every second.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function BirthdayCountdownLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
