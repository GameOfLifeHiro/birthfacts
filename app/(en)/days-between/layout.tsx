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
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
