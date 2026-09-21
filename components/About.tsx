"use client";

import { useLanguage } from "@/components/LanguageProvider";

const features = [
  { icon: "🐣", key: "chicks" },
  { icon: "🌿", key: "hygiene" },
  { icon: "🚚", key: "bulk" },
  { icon: "📋", key: "certified" },
] as const;

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <p className="text-green-600 font-semibold tracking-widest uppercase text-sm text-center mb-3">
          {t.about.label}
        </p>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">{t.about.title}</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t.about.introPre}
              <strong className="text-gray-900">{t.about.introBold}</strong>
              {t.about.introPost}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">{t.about.p2}</p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((item) => (
              <div
                key={item.key}
                className="bg-green-50 border border-green-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {t.about.features[item.key].title}
                </h4>
                <p className="text-sm text-gray-500">{t.about.features[item.key].text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}