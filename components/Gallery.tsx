"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

const images = [
  {
    src: "/images/hero.jpg",
    alt: { en: "Poultry Farm Interior", mr: "कुक्कुटपालन फार्मचा आतील भाग" },
  },
  {
    src: "/images/chicks.jpg",
    alt: { en: "Day-old Chicks", mr: "एक दिवसाची पिल्ले" },
  },
  {
    src: "/images/farm.jpg",
    alt: { en: "Farm Aerial View", mr: "फार्मचे हवाई दृश्य" },
  },
  {
    src: "/images/eggs.jpg",
    alt: { en: "Fresh Eggs", mr: "ताजी अंडी" },
  },
];

const text = {
  label: { en: "Take a Look", mr: "एक नजर टाका" },
  title: { en: "Our Farm", mr: "आमचा फार्म" },
};

export default function Gallery() {
  const { lang } = useLanguage();

  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-green-600 font-semibold tracking-widest uppercase text-sm text-center mb-3">
          {text.label[lang]}
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          {text.title[lang]}
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "md:col-span-2 md:row-span-2 h-64 md:h-full" : "h-48"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt[lang]}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end">
                <span className="text-white text-sm font-medium px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {img.alt[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}