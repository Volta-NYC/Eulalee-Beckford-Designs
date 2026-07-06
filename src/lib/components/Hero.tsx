import { HatMark } from "./HatMark";
import { ExternalLinkIcon } from "./ExternalLinkIcon";
import { RibbonBadge } from "./RibbonBadge";
import { FluidBackground } from "./FluidBackground";
import { Reveal } from "./Reveal";
import { social } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="relative bg-espresso overflow-hidden">
      <FluidBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <p className="text-xs font-medium tracking-widest2 uppercase text-gold mb-5">
            Jamaican Heritage · Brooklyn Craft
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-cream">
            A Legacy of Craft,
            <br />
            <span className="italic font-medium text-gold">Worn</span> With Pride.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-cream/75 max-w-md leading-relaxed">
            Fur felt hats hand-blocked in DUMBO, Brooklyn — rooted in
            Jamaican heritage and a longstanding presence in the borough&rsquo;s
            Black-owned business and cultural community, from the shop floor
            to Brooklyn&rsquo;s Kwanzaa celebrations.
          </p>

          <RibbonBadge
            title="Featured Vendor"
            subtitle="Kwanzaa Unity Marketplace, Brooklyn"
            className="mt-6 w-56 sm:w-64 drop-shadow-[0_6px_16px_rgba(0,0,0,0.4)]"
          />

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={social.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold text-espresso px-6 py-3 rounded-sm text-sm font-medium hover:bg-cream transition-colors inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              Shop the Collection
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="#custom"
              className="border border-cream/40 text-cream px-6 py-3 rounded-sm text-sm font-medium hover:bg-cream hover:text-espresso transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
            >
              Inquire About a Custom Hat
            </a>
          </div>
        </Reveal>

        <div className="flex justify-center md:justify-end">
          <HatMark className="w-64 sm:w-80 md:w-full max-w-sm text-gold" />
        </div>
      </div>
    </section>
  );
}