"use client";

import { createContext, useContext } from "react";
import type { Translations } from "./types";
import en from "./en";
import ja from "./ja";

export const LOCALES: Record<string, Translations> = { en, ja };

export function getTranslations(locale: string): Translations {
  return LOCALES[locale] ?? en;
}

export const TranslationsContext = createContext<Translations>(en);

export function useT(): Translations {
  return useContext(TranslationsContext);
}

export type { Translations };
