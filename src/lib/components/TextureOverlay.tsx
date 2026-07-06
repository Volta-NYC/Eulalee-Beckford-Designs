type TextureOverlayProps = {
  className?: string;
  opacity?: number;
};

/**
 * Subtle fibrous grain texture, layered absolutely over a section to break
 * up flat color and suggest felt/fabric rather than a smooth digital surface.
 * Pure SVG — no external image asset needed. Place as a sibling to section
 * content with `relative` on the parent and `absolute inset-0` here.
 */
export function TextureOverlay({ className = "", opacity = 0.05 }: TextureOverlayProps) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" opacity={opacity} />
    </svg>
  );
}