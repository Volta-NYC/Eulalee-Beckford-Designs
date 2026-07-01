"use client";

import { useState } from "react";
import { contact } from "@/lib/site-data";

const links = [
  { href: "/#shop", label: "Shop" },
  { href: "/#custom", label: "Custom Orders" },
  { href: "/pages/about", label: "Our Story" },
  { href: "/pages/contact", label: "Visit" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-brass/20">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-display font-semibold text-espresso text-sm tracking-widest2 uppercase">
          Eulalee Beckford Designs
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-ink hover:text-oxblood transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href={contact.emailHref}
            className="text-sm font-medium bg-oxblood text-cream px-4 py-2 rounded-sm hover:bg-espresso transition-colors"
          >
            Inquire About a Custom Hat
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-ink"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-brass/20 bg-cream px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-ink">
              {link.label}
            </a>
          ))}
          <a
            href={contact.emailHref}
            className="text-sm font-medium bg-oxblood text-cream px-4 py-2 rounded-sm text-center"
          >
            Inquire About a Custom Hat
          </a>
        </nav>
      )}
    </header>
  );
}