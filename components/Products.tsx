"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { telLink, whatsappLink, PHONE_PRIMARY } from "@/lib/contact";

type Bi = { en: string; mr: string };

const text = {
  title: { en: "Products", mr: "उत्पादने" },
  subtitle: { en: "Our poultry offerings", mr: "आमची कुक्कुटपालन उत्पादने" },
  feedTitle: { en: "Feed Products", mr: "खाद्य उत्पादने" },
  cancel: { en: "Cancel", mr: "रद्द करा" },
};

const chicks: { name: Bi; description: Bi; images: string[] }[] = [
  {
    name: { en: "Kaveri Chicks", mr: "कावेरी पिल्ले" },
    description: {
      en: "Strong dual-purpose breed (eggs & meat).",
      mr: "अंडी व मांस दोन्हीसाठी उपयुक्त मजबूत जात.",
    },
    images: ["/images/kaveri1.jpg", "/images/kaveri2.jpg", "/images/kaveri3.jpg"],
  },
  {
    name: { en: "Gavran Chicks", mr: "गावरान पिल्ले" },
    description: {
      en: "Desi breed with high immunity and natural growth.",
      mr: "जास्त रोगप्रतिकारशक्ती व नैसर्गिक वाढ असलेली देशी जात.",
    },
    images: ["/images/gavran1.jpg", "/images/gavran2.jpg", "/images/gavran3.jpg"],
  },
  {
    name: { en: "Broiler Chicks", mr: "ब्रॉयलर पिल्ले" },
    description: {
      en: "Fast-growing birds for meat production.",
      mr: "मांस उत्पादनासाठी झपाट्याने वाढणारी पिल्ले.",
    },
    images: ["/images/broiler1.jpg", "/images/broiler2.jpg", "/images/broiler3.jpg"],
  },
];

const feedProducts: { name: Bi; description: Bi; image: string }[] = [
  {
    name: { en: "Pre Starter Feed", mr: "प्री स्टार्टर खाद्य" },
    description: {
      en: "High-protein feed for chicks (0–10 days).",
      mr: "पिल्लांसाठी (०–१० दिवस) जास्त प्रथिनांचे खाद्य.",
    },
    image: "/images/prestarter.jpg",
  },
  {
    name: { en: "Starter Feed", mr: "स्टार्टर खाद्य" },
    description: {
      en: "Balanced feed for growing chicks.",
      mr: "वाढणाऱ्या पिल्लांसाठी संतुलित खाद्य.",
    },
    image: "/images/starter.jpg",
  },
  {
    name: { en: "Layer Feed", mr: "लेयर खाद्य" },
    description: {
      en: "Feed for egg-laying hens.",
      mr: "अंडी देणाऱ्या कोंबड्यांसाठी खाद्य.",
    },
    image: "/images/Layer.jpg",
  },
  {
    name: { en: "Broiler Feed", mr: "ब्रॉयलर खाद्य" },
    description: {
      en: "Fast-growth feed for broilers.",
      mr: "ब्रॉयलरच्या जलद वाढीसाठी खाद्य.",
    },
    image: "/images/broiler-feed.jpg",
  },
  {
    name: { en: "Country Feed", mr: "कंट्री खाद्य" },
    description: {
      en: "Natural feed for desi chickens.",
      mr: "देशी कोंबड्यांसाठी नैसर्गिक खाद्य.",
    },
    image: "/images/country.jpg",
  },
];

export default function Products() {
  const { t, lang } = useLanguage();
  // Keep both languages so the modal updates if the language is switched while it is open
  const [selectedProduct, setSelectedProduct] = useState<Bi | null>(null);

  const selectedName = selectedProduct ? selectedProduct[lang] : "";
  const modalTitle = lang === "mr" ? `${selectedName} ऑर्डर करा` : `Order ${selectedName}`;

  return (
    <section id="products" className="py-20 px-6">
      {/* MAIN HEADING */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-green-600">{text.title[lang]}</h2>
        <p className="text-gray-500 mt-2">{text.subtitle[lang]}</p>
      </div>

      {/* CHICKS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 gap-10 mb-16">
        {chicks.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg">
            <div className="grid grid-cols-3 gap-2 p-3">
              {product.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt={product.name[lang]}
                  width={300}
                  height={200}
                  className="object-cover w-full h-40 rounded-lg"
                />
              ))}
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold">{product.name[lang]}</h3>
              <p className="text-gray-600 mb-4">{product.description[lang]}</p>

              <button
                onClick={() => setSelectedProduct(product.name)}
                className="w-full bg-green-500 text-white py-2 rounded-lg"
              >
                {t.products.orderNow}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* FEED HEADING */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-600">{text.feedTitle[lang]}</h2>
      </div>

      {/* FEED GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {feedProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name[lang]}
              width={400}
              height={250}
              className="object-cover w-full h-48"
            />

            <div className="p-5">
              <h3 className="text-lg font-bold">{product.name[lang]}</h3>
              <p className="text-gray-600 mb-4">{product.description[lang]}</p>

              <button
                onClick={() => setSelectedProduct(product.name)}
                className="w-full bg-green-500 text-white py-2 rounded-lg"
              >
                {t.products.orderNow}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white p-6 rounded-xl w-[90%] max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">{modalTitle}</h3>

            <div className="flex flex-col gap-3">
              <a href={telLink(PHONE_PRIMARY)} className="bg-green-500 text-white py-2 rounded-lg text-center">
                📞 {t.contact.callNow}
              </a>

              <a href={whatsappLink(t.whatsapp.orderMessage(selectedName))} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white py-2 rounded-lg text-center">
                💬 {t.contact.whatsapp}
              </a>

              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-400 text-sm"
              >
                {text.cancel[lang]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}