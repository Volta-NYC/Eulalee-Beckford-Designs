type HatMarkProps = {
  className?: string;
};

export function HatMark({ className }: HatMarkProps) {
  return (
    <svg viewBox="0 0 400 280" fill="none" className={className} aria-hidden="true">
      <ellipse cx="200" cy="205" rx="185" ry="26" stroke="currentColor" strokeWidth="2.5" />
      <path d="M112 198 Q100 78 200 55 Q300 78 288 198" stroke="currentColor" strokeWidth="2.5" />
      <path d="M122 160 Q200 178 278 160" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
      <rect x="112" y="168" width="176" height="16" rx="2" className="fill-oxblood" opacity="0.9" />
    </svg>
  );
}