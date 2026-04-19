import TranslationsProvider from "@/lib/i18n/TranslationsProvider";
import en from "@/lib/i18n/en";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <TranslationsProvider translations={en}>
      <header className="border-b border-[var(--card-border)] px-6 py-4 flex items-center justify-between">
        <a href="/" className="font-bold text-xl gradient-text">BirthFacts</a>
        <nav className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="/" className="hover:text-[var(--accent)] transition-colors">Calculator</a>
          <a href="/faq/" className="hover:text-[var(--accent)] transition-colors">FAQ</a>
          <a href="/about/" className="hover:text-[var(--accent)] transition-colors">About</a>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="border-t border-[var(--card-border)] px-6 py-8 mt-16 text-center text-sm text-[var(--muted)]">
        <p>© {new Date().getFullYear()} BirthFacts.net — Your complete birthday profile</p>
        <p className="mt-2">
          <a href="/about/" className="hover:text-[var(--accent)]">About</a>
          {" · "}
          <a href="/privacy/" className="hover:text-[var(--accent)]">Privacy Policy</a>
          {" · "}
          <a href="/contact/" className="hover:text-[var(--accent)]">Contact</a>
          {" · "}
          <a href="/faq/" className="hover:text-[var(--accent)]">FAQ</a>
          {" · "}
          <a href="/days-between/" className="hover:text-[var(--accent)]">Days Between Dates</a>
          {" · "}
          <a href="/dog-age-calculator/" className="hover:text-[var(--accent)]">Dog Age Calculator</a>
          {" · "}
          <a href="/cat-age-calculator/" className="hover:text-[var(--accent)]">Cat Age Calculator</a>
          {" · "}
          <a href="/ja/" className="hover:text-[var(--accent)]">日本語</a>
        </p>
      </footer>
    </TranslationsProvider>
  );
}
