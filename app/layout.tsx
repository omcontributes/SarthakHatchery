import type { Metadata } from "next";
import { Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

import WhatsAppButton from "@/components/WhatsAppButton";
import { EMAIL, PHONE_PRIMARY } from "@/lib/contact";

const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

const SITE_URL = "https://sarthak-hatchery-web.vercel.app"; // change if you buy a custom domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Sarthak Hatchery | Healthy Poultry & Chicks",
  description:
    "Trusted poultry farm providing healthy chicks, hens, and eggs. Contact us for bulk orders.",
  openGraph: {
    title: "Sarthak Hatchery | Healthy Poultry & Chicks",
    description:
      "Vaccinated day-old chicks, feed and eggs from Manmad, Maharashtra. Call or WhatsApp us for bulk orders.",
    url: SITE_URL,
    siteName: "Sarthak Hatchery",
    images: [{ url: "/images/hero.jpg", alt: "Sarthak Hatchery poultry farm" }],
    locale: "en_IN",
    type: "website",
  },
};

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sarthak Hatchery",
  url: SITE_URL,
  image: `${SITE_URL}/images/hero.jpg`,
  description:
    "Poultry farm providing vaccinated chicks, feed and eggs in Manmad, Maharashtra.",
  telephone: `+${PHONE_PRIMARY}`,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camp no. 2, Katkade wasti, Yeola road, Near Kendriya Vidyalaya",
    addressLocality: "Manmad",
    addressRegion: "Maharashtra",
    postalCode: "423104",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${devanagari.variable}`}>
        <LanguageProvider>
          {children}

          <WhatsAppButton />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}