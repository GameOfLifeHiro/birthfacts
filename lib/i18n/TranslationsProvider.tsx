"use client";

import { TranslationsContext } from "./index";
import type { Translations } from "./types";

export default function TranslationsProvider({
  translations,
  children,
}: {
  translations: Translations;
  children: React.ReactNode;
}) {
  return (
    <TranslationsContext.Provider value={translations}>
      {children}
    </TranslationsContext.Provider>
  );
}
