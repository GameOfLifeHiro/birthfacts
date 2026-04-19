import type { Metadata } from "next";
import AgeCalculator from "@/components/AgeCalculator";

export const metadata: Metadata = {
  title: "Birthday Countdown – Days Until My Next Birthday | BirthFacts",
  description:
    "Find out exactly how many days, hours, minutes and seconds until your next birthday. Free real-time birthday countdown timer.",
  alternates: { canonical: "https://birthfacts.net/birthday-countdown/" },
};

export default function BirthdayCountdownPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">
          <span className="gradient-text">Birthday Countdown</span>
        </h1>
        <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
          How many days until your next birthday? Enter your birthdate to see a live countdown.
        </p>
      </div>

      <AgeCalculator />

      <div className="mt-12 card p-6 max-w-2xl mx-auto">
        <h2 className="font-semibold text-lg mb-3">About the birthday countdown</h2>
        <p className="text-[var(--muted)] text-sm leading-relaxed">
          Our real-time birthday countdown shows exactly how many days, hours, minutes,
          and seconds remain until your next birthday. The ticker updates every second.
          If today is your birthday, you'll see a special celebration message. Share your
          countdown link with friends and family!
        </p>
      </div>
    </div>
  );
}
