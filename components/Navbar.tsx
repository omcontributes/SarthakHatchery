"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import LanguageToggle from "@/components/LanguageToggle";

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "#about", label: t.nav.about },
    { href: "#products", label: t.nav.products },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

        {/* Logo */}
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/sathak_logo.png"
            alt="Sarthak Hatchery"
            width={120}
            height={50}
          />
        </Link>

        <div className="flex items-center gap-3 sm:gap-6">
          {/* Menu (desktop) */}
          <nav className="hidden md:flex space-x-6 text-white">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Language toggle */}
          <LanguageToggle />

          {/* Menu button (phones) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="md:hidden text-white text-2xl leading-none px-1"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Menu (phones) */}
      {open && (
        <nav className="md:hidden flex flex-col space-y-3 px-6 pb-4 pt-1 text-white border-t border-white/10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}