"use client";

import { whatsappLink } from "@/lib/contact";
import { useLanguage } from "./LanguageProvider";

export default function OrderButton({ productName }: { productName: string }) {
  const { t } = useLanguage();
  return (
    <a href={whatsappLink(t.whatsapp.orderMessage(productName))} target="_blank" rel="noopener noreferrer" className="inline-block rounded-lg bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700">
      {t.products.orderNow}
    </a>
  );
}