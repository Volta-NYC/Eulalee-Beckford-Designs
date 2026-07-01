type BrimDividerProps = {
  flip?: boolean;
  className?: string;
};

export function BrimDivider({ flip = false, className = "" }: BrimDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        preserveAspectRatio="none"
        className={`w-full h-[40px] text-brass ${flip ? "-scale-y-100" : ""}`}
      >
        <path d="M0 12 Q600 68 1200 12" stroke="currentColor" strokeWidth="1.5" fill="none" />
      </svg>
    </div>
  );
}