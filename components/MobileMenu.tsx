"use client";

import { useState, useEffect, useRef } from "react";

interface NavLink {
  href: string;
  label: string;
}

interface Props {
  links: NavLink[];
}

export default function MobileMenu({ links }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [open]);

  return (
    <div className="sm:hidden relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--accent)] hover:bg-[var(--card)] transition-colors text-xl leading-none"
      >
        {open ? "✕" : "☰"}
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-52 bg-[var(--card)] border border-[var(--card-border)] rounded-2xl shadow-xl z-50 py-2 overflow-hidden">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block px-4 py-3 text-sm text-[var(--text)] hover:bg-[var(--bg)] hover:text-[var(--accent)] transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
