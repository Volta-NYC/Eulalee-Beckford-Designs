import { credentials } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { RibbonTrim } from "./RibbonTrim";

export function OurStory() {
  return (
    <section id="story" className="relative bg-cream">
      <Reveal className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
        <p className="text-xs font-medium tracking-widest2 uppercase text-oxblood mb-4">
          About
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-espresso">
          A Milliner&rsquo;s Craft, Rooted in Brooklyn
        </h2>
        <p className="mt-6 text-ink/80 leading-relaxed">
          Eulalee Beckford Designs is a Brooklyn milliner, jewelry, and
          fashion house based in DUMBO. Beyond the shop, Eulalee brings her
          hats, kimonos, and jewelry to Brooklyn&rsquo;s cultural markets and
          community celebrations.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {credentials.map((c) => (
            <span
              key={c.detail}
              className="text-xs tracking-wide text-espresso border border-forest/40 bg-forest/[0.05] rounded-full px-4 py-2"
            >
              <span className="font-medium">{c.label}</span> — {c.detail}
            </span>
          ))}
        </div>
      </Reveal>

      <RibbonTrim className="w-full h-1.5 opacity-60" />
    </section>
  );
}