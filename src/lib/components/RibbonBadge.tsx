type RibbonBadgeProps = {
  title: string;
  subtitle: string;
  className?: string;
};

/**
 * Award-ribbon shaped credential badge — scalloped bottom edge like a
 * physical ribbon award, with the heritage stripe (oxblood/forest/brass)
 * as top and bottom trim. Used for the Kwanzaa Unity Marketplace vendor
 * credential, or any other earned/featured credential in the future.
 */
export function RibbonBadge({ title, subtitle, className = "" }: RibbonBadgeProps) {
  return (
    <svg
      viewBox="0 0 280 90"
      className={className}
      role="img"
      aria-label={`${title}: ${subtitle}`}
    >
      <path
        d="M8 0 H272 V60 L264 68 L272 76 L264 84 L256 76 L248 84 L240 76 L232 84 L224 76 L216 84 L208 76 L200 84 L192 76 L184 84 L176 76 L168 84 L160 76 L152 84 L144 76 L136 84 L128 76 L120 84 L112 76 L104 84 L96 76 L88 84 L80 76 L72 84 L64 76 L56 84 L48 76 L40 84 L32 76 L24 84 L16 76 L8 84 Z"
        fill="#6B1E28"
      />
      <rect x="0" y="0" width="280" height="6" fill="#38452E" />
      <rect x="0" y="54" width="280" height="4" fill="#9C7A3C" />
      <text
        x="140"
        y="35"
        textAnchor="middle"
        fontSize="12"
        fontWeight="600"
        fill="#F4EEDF"
        fontFamily="var(--font-body), sans-serif"
      >
        {title.toUpperCase()}
      </text>
      <text
        x="140"
        y="49"
        textAnchor="middle"
        fontSize="10.5"
        fill="#F4EEDF"
        opacity="0.85"
        fontFamily="var(--font-body), sans-serif"
      >
        {subtitle}
      </text>
    </svg>
  );
}