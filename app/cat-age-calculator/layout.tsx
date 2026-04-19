import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cat Age Calculator – Cat Years to Human Years | BirthFacts",
  description:
    "Convert your cat's age to human years instantly. Uses the International Cat Care formula. Free and accurate cat age calculator.",
  alternates: { canonical: "https://birthfacts.net/cat-age-calculator/" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
