"use client";

import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";
import { PHONE_PRIMARY, telLink } from "@/lib/contact";

export default function Hero() {
  const { t, lang } = useLanguage();

  // Show the last word of the title in green, in either language
  const titleWords = t.hero.title.split(" ");
  const lastWord = titleWords.pop();
  const firstWords = titleWords.join(" ");

  const stats = [t.stats.years, t.stats.birds, t.stats.vaccinated];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Image
        src="/images/hero.jpg"
        alt="Sarthak Hatchery poultry farm"
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Badge */}
        <span className="inline-block bg-green-500/20 border border-green-400/40 text-green-300 text-sm font-medium tracking-widest uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
          {t.hero.est}
        </span>

        <h1
          className={`text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-lg ${
            lang === "mr" ? "leading-snug" : "leading-tight"
          }`}
        >
          {firstWords} <span className="text-green-400">{lastWord}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-xl drop-shadow">
          {t.hero.tagline}
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <a href={telLink(PHONE_PRIMARY)} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-green-500/40 hover:scale-105">
            {t.hero.callNow}
          </a>

          <a href="#products" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold px-8 py-3 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-105">
            {t.hero.ourProducts}
          </a>
        </div>

        {/* Stats */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:gap-16 text-white">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-300 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}