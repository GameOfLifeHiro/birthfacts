"use client";

interface LangOption {
  href: string;
  label: string;
}

interface Props {
  current: LangOption;
  others: LangOption[];
}

export default function LanguageSelect({ current, others }: Props) {
  return (
    <select
      value={current.href}
      onChange={(e) => { window.location.href = e.target.value; }}
      aria-label="Select language"
      className="bg-[var(--card)] border border-[var(--card-border)] text-[var(--muted)] text-xs rounded-lg px-2 py-1.5 cursor-pointer focus:outline-none focus:border-[var(--accent)] transition-colors"
    >
      <option value={current.href}>{current.label}</option>
      {others.map((o) => (
        <option key={o.href} value={o.href}>{o.label}</option>
      ))}
    </select>
  );
}
