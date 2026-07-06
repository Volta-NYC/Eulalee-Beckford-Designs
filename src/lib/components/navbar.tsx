"use client";

import { useState } from "react";
import { contact } from "@/lib/site-data";

const links = [
  { href: "/#shop", label: "Shop" },
  { href: "/#custom", label: "Custom Orders" },
  { href: "/pages/about", label: "Our Story" },
  { href: "/pages/contact", label: "Visit" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso rounded-sm";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-espresso/95 backdrop-blur border-b border-gold/20">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className={`font-display font-semibold text-cream text-sm tracking-widest2 uppercase ${focusRing}`}
        >
          Eulalee Beckford Designs
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm text-cream/80 hover:text-gold transition-colors ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={contact.emailHref}
            className={`text-sm font-medium bg-gold text-espresso px-4 py-2 rounded-sm hover:bg-cream transition-colors ${focusRing}`}
          >
            Inquire About a Custom Hat
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden text-cream p-1 ${focusRing}`}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-cream mb-1.5" />
          <span className="block w-6 h-px bg-cream mb-1.5" />
          <span className="block w-6 h-px bg-cream" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gold/20 bg-espresso px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-sm text-cream/85 ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={contact.emailHref}
            className={`text-sm font-medium bg-gold text-espresso px-4 py-2 rounded-sm text-center ${focusRing}`}
          >
            Inquire About a Custom Hat
          </a>
        </nav>
      )}
    </header>
  );
}