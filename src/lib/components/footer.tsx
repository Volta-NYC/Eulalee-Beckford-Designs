import { social } from "@/lib/site-data";
import { InstagramIcon, FacebookIcon, YouTubeIcon } from "./SocialIcons";
import { RibbonTrim } from "./RibbonTrim";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-espresso text-cream/70">
      <RibbonTrim className="absolute top-0 left-0 w-full h-1.5 opacity-90" />

      <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm tracking-widest2 uppercase text-cream">
          Eulalee Beckford Designs
        </p>
        <nav className="flex gap-6 text-sm">
          <a href="/#shop" className="hover:text-camel">Shop</a>
          <a href="/#custom" className="hover:text-camel">Custom Orders</a>
          <a href="/pages/about" className="hover:text-camel">Our Story</a>
          <a href="/pages/contact" className="hover:text-camel">Visit</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-cream/70 hover:text-camel transition-colors">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-cream/70 hover:text-camel transition-colors">
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-cream/70 hover:text-camel transition-colors">
            <YouTubeIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      <p className="text-center text-xs pb-6 text-cream/40">© {year} Eulalee Beckford Designs</p>
    </footer>
  );
}