import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator in Months – How Many Months Old Am I? | BirthFacts",
  description:
    "Calculate your exact age in months. Find out how many months old you are instantly with our free age in months calculator.",
  alternates: { canonical: "https://birthfacts.net/age-in-months/" },
};

export default function AgeInMonthsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Age Calculator in Months</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          Find out exactly how many months old you are. Enter your date of birth below.
        </p>
      </div>

      <AgeCalculator />

      <div className="mt-12 card p-6 max-w-2xl mx-auto">
        <h2 className="font-semibold text-lg mb-3">How to calculate age in months</h2>
        <p className="text-[var(--muted)] text-sm leading-relaxed mb-3">
          To calculate your age in months, multiply your completed years of age by 12,
          then add the number of additional months since your last birthday.
        </p>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          For example, if you are 25 years and 3 months old, your total age in months is
          (25 × 12) + 3 = <span className="text-[var(--accent)] font-semibold">303 months</span>.
          Our calculator does this instantly and also shows total weeks, days, hours, and minutes.
        </p>
      </div>
    </div>
  );
}
