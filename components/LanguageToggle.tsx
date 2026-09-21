"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  const base = "rounded-full px-3 py-1 text-sm font-semibold transition";
  const active = "bg-green-600 text-white";
  const idle = "text-green-700 hover:bg-green-50";

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-green-600 bg-white p-0.5 shadow"
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`${base} ${lang === "en" ? active : idle}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("mr")}
        aria-pressed={lang === "mr"}
        className={`${base} ${lang === "mr" ? active : idle}`}
      >
        मराठी
      </button>
    </div>
  );
}