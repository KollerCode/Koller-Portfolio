interface NKLogoProps {
  className?: string;
  /** scale factor — default 1 (nav size). Use 4–6 for hero. */
  scale?: number;
}

const PINK = "#DB268D";

/** Diagonal slash mark — the geometric N / K accent from the Natasha Koller wordmark */
function SlashMark({ scale }: { scale: number }) {
  const w = 11 * scale;
  const h = 20 * scale;
  return (
    <svg width={w} height={h} viewBox="0 0 11 20" fill="none" aria-hidden>
      {/* Two parallel diagonal strokes like the N/K accent */}
      <polygon points="0,20 7,0 11,0 4,20" fill={PINK} />
      <polygon points="4,20 11,0 11,3 7,20" fill={PINK} opacity="0.55" />
    </svg>
  );
}

export function NKLogo({ className, scale = 1 }: NKLogoProps) {
  const fontSize = 18 * scale;
  const gap = 2 * scale;
  const lineHeight = 1;

  return (
    <div
      className={`font-display font-black select-none leading-none inline-flex flex-col ${className ?? ""}`}
      style={{ gap: gap * 0.5 }}
    >
      {/* Line 1: slash + NATASHA */}
      <div className="flex items-center" style={{ gap }}>
        <SlashMark scale={scale} />
        <span style={{ fontSize, lineHeight, letterSpacing: "0.04em", color: "var(--foreground)" }}>
          NATASHA
        </span>
      </div>
      {/* Line 2: slash + KOLLER */}
      <div className="flex items-center" style={{ gap }}>
        <SlashMark scale={scale} />
        <span style={{ fontSize, lineHeight, letterSpacing: "0.04em", color: "var(--foreground)" }}>
          KOLLER
        </span>
      </div>
    </div>
  );
}
