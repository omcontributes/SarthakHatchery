"use client";

import { whatsappLink } from "@/lib/contact";
import { useLanguage } from "./LanguageProvider";

export default function WhatsAppButton() {
  const { t } = useLanguage();
  return (
    <a href={whatsappLink(t.whatsapp.greeting)} target="_blank" rel="noopener noreferrer" aria-label={t.whatsapp.aria} className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg transition hover:bg-green-600">
      <span aria-hidden="true">💬</span>
      <span className="hidden sm:inline">{t.whatsapp.label}</span>
    </a>
  );
}