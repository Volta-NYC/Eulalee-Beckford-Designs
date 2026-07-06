"use client";

/**
 * Ambient drifting blob background — the Jamaican heritage triad
 * (forest, gold, brick) as soft blurred shapes, slowly moving.
 * Absolutely positioned; place inside a `relative` + `overflow-hidden`
 * parent, behind the actual section content (z-0, content at z-10+).
 */
export function FluidBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <style>{`
        @keyframes driftA { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(40px,-30px) scale(1.15); } }
        @keyframes driftB { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-50px,30px) scale(1.1); } }
        @keyframes driftC { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(30px,40px) scale(0.9); } }
        @media (prefers-reduced-motion: reduce) {
          .fluid-blob { animation: none !important; }
        }
      `}</style>
      <div
        className="fluid-blob absolute rounded-full blur-[70px] opacity-50"
        style={{
          width: 380,
          height: 380,
          left: -100,
          top: -80,
          background: "#33472E",
          animation: "driftA 9s ease-in-out infinite",
        }}
      />
      <div
        className="fluid-blob absolute rounded-full blur-[70px] opacity-45"
        style={{
          width: 340,
          height: 340,
          right: -80,
          top: 10,
          background: "#B8863E",
          animation: "driftB 11s ease-in-out infinite",
        }}
      />
      <div
        className="fluid-blob absolute rounded-full blur-[70px] opacity-50"
        style={{
          width: 320,
          height: 320,
          left: "35%",
          bottom: -120,
          background: "#6B2E28",
          animation: "driftC 10s ease-in-out infinite",
        }}
      />
    </div>
  );
}