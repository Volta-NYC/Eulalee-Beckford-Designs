type RibbonTrimProps = {
  className?: string;
};

export function RibbonTrim({ className = "" }: RibbonTrimProps) {
  return (
    <div
      className={className}
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #6B2E28 0 24px, #33472E 24px 48px, #B8863E 48px 64px, #1E1712 64px 80px)",
      }}
    />
  );
}