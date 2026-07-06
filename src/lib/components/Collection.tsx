"use client";

import { collections, social } from "@/lib/site-data";
import { useRevealOnScroll } from "@/lib/hooks/useRevealOnScroll";
import { ExternalLinkIcon } from "./ExternalLinkIcon";

function CollectionCard({
  item,
  tilt,
}: {
  item: (typeof collections)[number];
  tilt: string;
}) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      {/* TODO: replace with real product photography from Eulalee once available */}
      <div
        className={`aspect-[4/5] bg-camel/15 rounded-md shadow-[0_10px_30px_-8px_rgba(43,29,20,0.35)] flex items-center justify-center ${tilt}`}
      >
        <div className="w-16 h-16 rounded-full border border-brass/50" />
      </div>
      <h3 className="mt-5 font-display text-xl text-espresso">
        {item.title}
      </h3>
      <p className="mt-2 text-sm text-ink/75 leading-relaxed">
        {item.description}
      </p>
      {item.priceRange && (
        <p className="mt-2 text-sm font-medium text-oxblood">
          {item.priceRange}
        </p>
      )}
      <a
        href={social.shop}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-espresso underline underline-offset-4 decoration-brass hover:text-oxblood"
      >
        {item.ctaLabel}
        <ExternalLinkIcon className="w-3.5 h-3.5" />
      </a>
    </div>
  );
}

const tilts = ["rotate-[-0.6deg]", "rotate-0", "rotate-[0.6deg]"];

export function Collection() {
  return (
    <section id="shop" className="bg-cream">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-xs font-medium tracking-widest2 uppercase text-oxblood mb-4">
          The Collection
        </p>
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-espresso max-w-xl">
          Fur Felt Hats, Kimonos &amp; Jewelry
        </h2>
        <p className="mt-4 text-ink/75 max-w-xl leading-relaxed">
          Each hat is shaped from 100% fur felt in fedora and open-crown
          silhouettes — ready to wear or made to order. The collection also
          includes kimonos and jewelry.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {collections.map((item, i) => (
            <CollectionCard key={item.id} item={item} tilt={tilts[i % tilts.length]} />
          ))}
        </div>

        <a
          href={social.shop}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-14 inline-flex items-center gap-2 border border-espresso text-espresso px-6 py-3 rounded-sm text-sm font-medium hover:bg-espresso hover:text-cream transition-colors"
        >
          View Full Collection &amp; Checkout
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}