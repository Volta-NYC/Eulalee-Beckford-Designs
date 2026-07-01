type IconProps = {
  className?: string;
};

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M14.5 21v-7.2h2.4l.36-2.8h-2.76V9.1c0-.81.22-1.36 1.39-1.36h1.48V5.2c-.26-.03-1.14-.11-2.17-.11-2.15 0-3.62 1.31-3.62 3.72v2.08H9.2v2.8h2.38V21h2.92Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function YouTubeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="6" width="19" height="12" rx="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.5v5l4.3-2.5-4.3-2.5Z" fill="currentColor" />
    </svg>
  );
}