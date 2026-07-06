import { customOrderSteps, contact } from "@/lib/site-data";
import { TextureOverlay } from "./TextureOverlay";
import { RibbonTrim } from "./RibbonTrim";

export function CustomOrders() {
  return (
    <section id="custom" className="relative bg-espresso text-cream overflow-hidden">
      <TextureOverlay opacity={0.07} />
      <RibbonTrim className="absolute top-0 left-0 w-full h-2 opacity-90" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-14 items-start">
        <div>
          <p className="text-xs font-medium tracking-widest2 uppercase text-camel mb-4">
            Made to Order
          </p>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight">
            Design a Hat That&rsquo;s Made for You
          </h2>
          <p className="mt-5 text-cream/75 leading-relaxed max-w-md">
            Can&rsquo;t find your fit off the rack? Every custom hat starts
            with a conversation — color, crown height, brim width, and trim —
            then it&rsquo;s hand-blocked in fur felt to your size.
          </p>
          <a
            href={contact.emailHref}
            className="mt-8 inline-block bg-oxblood text-cream px-6 py-3 rounded-sm text-sm font-medium shadow-[0_6px_20px_-4px_rgba(107,30,40,0.5)] hover:bg-camel hover:text-espresso transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-camel focus-visible:ring-offset-2 focus-visible:ring-offset-espresso"
          >
            Start a Custom Order
          </a>
        </div>

        <ol className="space-y-8">
          {customOrderSteps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-display text-2xl text-camel/80 leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-medium text-cream">{step.title}</h3>
                <p className="mt-1 text-sm text-cream/65">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <RibbonTrim className="absolute bottom-0 left-0 w-full h-2 opacity-90" />
    </section>
  );
}