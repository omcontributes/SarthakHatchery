"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Dictionary, Language } from "@/lib/translations";

const DEFAULT_LANG: Language = "en"; // change to "mr" to open in Marathi first
const STORAGE_KEY = "sarthak-hatchery-lang";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANG);

  // Restore the visitor's saved choice
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "mr") setLangState(saved);
    } catch {
      /* storage unavailable: keep the default */
    }
  }, []);

  // Keep <html lang="..."> in sync (also switches the font for Marathi)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (next: Language) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}