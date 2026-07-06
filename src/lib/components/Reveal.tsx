"use client";

import { ReactNode } from "react";
import { useRevealOnScroll } from "@/lib/hooks/useRevealOnScroll";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Wraps any block in the same fade/rise-on-scroll treatment used by
 * CollectionCard, so every section reveals consistently instead of just
 * popping in. `delay` (ms) staggers multiple Reveal siblings.
 */
export function Reveal({ children, className = "", delay = 0 }: RevealProps) {
  const { ref, isVisible } = useRevealOnScroll<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}