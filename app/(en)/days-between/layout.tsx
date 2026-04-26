import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Days Between Two Dates Calculator | BirthFacts",
  description:
    "Calculate the exact number of days between any two dates. Also shows weeks, months, and years difference. Free and instant.",
  alternates: {
    canonical: "https://birthfacts.net/days-between/",
    languages: {
      en: "https://birthfacts.net/days-between/",
      es: "https://birthfacts.net/es/days-between/",
      ja: "https://birthfacts.net/ja/days-between/",
      "x-default": "https://birthfacts.net/days-between/",
    },
  },
  openGraph: {
    title: "Days Between Two Dates Calculator | BirthFacts",
    description: "Calculate the exact number of days, weeks, months, and years between any two dates. Free and instant.",
    url: "https://birthfacts.net/days-between/",
    images: [{ url: "https://birthfacts.net/og-image.png", width: 1200, height: 630, alt: "Days Between Dates Calculator – BirthFacts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Days Between Two Dates Calculator | BirthFacts",
    description: "Calculate exact days, weeks, months, and years between any two dates. Free and instant.",
    images: ["https://birthfacts.net/og-image.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
