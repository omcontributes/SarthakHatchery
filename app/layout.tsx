import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarthak Hatchery | Healthy Poultry & Chicks",
  description: "Trusted poultry farm providing healthy chicks, hens, and eggs. Contact us for bulk orders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}