import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Age Calculator – Dog Years to Human Years | BirthFacts",
  description:
    "Convert your dog's age to human years instantly. Uses the modern AVMA formula with size adjustment (small, medium, large dogs). Free and accurate.",
  alternates: { canonical: "https://birthfacts.net/dog-age-calculator/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
