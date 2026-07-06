import { credentials } from "@/lib/site-data";
import { RibbonTrim } from "./RibbonTrim";
import { Reveal } from "./Reveal";

export function OurStory() {
  return (
    <section id="story" className="relative bg-espresso">
      <Reveal className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <p className="text-xs font-medium tracking-widest2 uppercase text-gold mb-4">
          About
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-cream">
          A Milliner&rsquo;s Craft, Rooted in Brooklyn
        </h2>
        <p className="mt-6 text-cream/75 leading-relaxed">
          Eulalee Beckford Designs is a Brooklyn milliner, jewelry, and
          fashion house based in DUMBO. Beyond the shop, Eulalee brings her
          hats, kimonos, and jewelry to Brooklyn&rsquo;s cultural markets and
          community celebrations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {credentials.map((c) => (
            <span
              key={c.detail}
              className="text-xs tracking-wide text-cream border border-forest/50 bg-forest/20 rounded-full px-4 py-2"
            >
              <span className="font-medium text-gold">{c.label}</span> — {c.detail}
            </span>
          ))}
        </div>
      </Reveal>

      <RibbonTrim className="w-full h-1.5" />
    </section>
  );
}