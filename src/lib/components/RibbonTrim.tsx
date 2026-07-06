type RibbonTrimProps = {
  className?: string;
};

/**
 * Solid-color striped ribbon trim in the red/green/gold/espresso palette —
 * used for thin horizontal accent strips (section borders, footer edge)
 * where a woven plaid has no room to actually show its cross-weave.
 */
export function RibbonTrim({ className = "" }: RibbonTrimProps) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #6B1E28 0 24px, #38452E 24px 48px, #9C7A3C 48px 64px, #2B1D14 64px 80px)",
      }}
    />
  );
}