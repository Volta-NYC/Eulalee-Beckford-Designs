const facts = ["Ready-to-Wear + Custom", "$150 – $350", "DUMBO, Brooklyn", "Milliner • Jewelry • Fashion"];

export function TrustBar() {
  return (
    <div className="bg-espresso text-cream">
      <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-2 text-xs sm:text-sm tracking-wide">
        {facts.map((fact) => (
          <span key={fact} className="text-cream/90">
            {fact}
          </span>
        ))}
      </div>
    </div>
  );
}