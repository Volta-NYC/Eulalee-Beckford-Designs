import { HatMark } from "./HatMark";
import { social } from "@/lib/site-data";

export function Hero() {
  return (
    <section id="top" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-medium tracking-widest2 uppercase text-oxblood mb-5">
            Brooklyn Millinery — DUMBO
          </p>
          <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-espresso">
            Fur Felt Hats,
            <br />
            <span className="italic font-medium">Handcrafted</span> in Brooklyn.
          </h1>
          <p className="mt-6 text-base sm:text-lg text-ink/80 max-w-md leading-relaxed">
            Ready-to-wear fedoras and open-crown styles, plus made-to-order pieces built to your fit. Milliner,
            jewelry &amp; fashion — 145 Front Street, DUMBO.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={social.shop}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-espresso text-cream px-6 py-3 rounded-sm text-sm font-medium hover:bg-oxblood transition-colors"
            >
              Shop the Collection
            </a>
            <a
              href="#custom"
              className="border border-espresso text-espresso px-6 py-3 rounded-sm text-sm font-medium hover:bg-espresso hover:text-cream transition-colors"
            >
              Inquire About a Custom Hat
            </a>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <HatMark className="w-64 sm:w-80 md:w-full max-w-sm text-camel" />
        </div>
      </div>
    </section>
  );
}