"use client";

import { useLanguage } from "@/components/LanguageProvider";
import {
  EMAIL,
  PHONE_PRIMARY,
  PHONE_SECONDARY,
  formatPhone,
  telLink,
  whatsappLink,
} from "@/lib/contact";

export default function Contact() {
  const { t, lang } = useLanguage();

  // Year updates itself; shown with Marathi digits when Marathi is selected
  const year = new Date().getFullYear().toLocaleString(
    lang === "mr" ? "mr-IN" : "en-IN",
    { useGrouping: false }
  );

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <p className="text-green-600 font-semibold tracking-widest uppercase text-sm mb-2">
          {t.contact.label}
        </p>
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          {t.contact.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left */}
          <div className="space-y-8">

            <div className="space-y-1">
              <a href={telLink(PHONE_PRIMARY)} className="block text-lg">
                {t.contact.mobile} {formatPhone(PHONE_PRIMARY)}
              </a>
              <a href={telLink(PHONE_SECONDARY)} className="block text-lg">
                {t.contact.mobile} {formatPhone(PHONE_SECONDARY)}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                {t.contact.email}
              </p>
              <a href={`mailto:${EMAIL}`} className="text-xl font-medium text-gray-900 hover:underline">
                {EMAIL}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-1">
                {t.contact.location}
              </p>
              <p className="text-xl font-medium text-gray-900">
                {t.contact.city}
              </p>
              <p className="text-gray-500">
                {t.contact.state}
              </p>
            </div>

            <hr className="border-gray-200" />

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a href={telLink(PHONE_PRIMARY)} className="border border-gray-900 text-gray-900 font-semibold px-6 py-3 rounded-md hover:bg-gray-900 hover:text-white transition">
                {t.contact.callNow}
              </a>

              <a href={whatsappLink(t.whatsapp.greeting)} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-gray-700 transition">
                {t.contact.whatsapp}
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="border border-gray-200 rounded-sm overflow-hidden">

            <div className="p-6 border-b border-gray-200">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3">
                {t.contact.address}
              </p>

              <p className="text-xl font-semibold text-gray-900 leading-relaxed">
                {t.contact.addressLine1} <br />
                {t.contact.addressLine2}
              </p>

              <p className="text-gray-500 mt-2">
                {t.contact.pin}
              </p>
            </div>

            {/* Map */}
            <iframe
              title="Sarthak Hatchery location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2002.7367683091747!2d74.44638661162531!3d20.23507286797175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdc25001913ad73%3A0x7206484c0751e952!2sSarthak%20Hatchery%2CManmad!5e0!3m2!1sen!2sin!4v1776954545524!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-400 text-sm mt-16">
          © {year} {t.footer.rights}
        </p>

      </div>
    </section>
  );
}