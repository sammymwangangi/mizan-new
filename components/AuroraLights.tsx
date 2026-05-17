"use client";

/**
 * AuroraLights
 * ------------
 * Left-side atmospheric glow. Strong violet bloom at top-left,
 * transitioning to teal/cyan as it bleeds into FindsSection.
 *
 * Intentionally vivid — this is the primary "wow effect" light source.
 * Lives in page.tsx so it passes behind the glass card and bleeds
 * across both Hero and FindsSection.
 */
export default function AuroraLights() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        top: 0,
        left: 0,
        width: "1000px",
        height: "1600px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* PRIMARY HALO — big violet bloom anchored at top-left */}
      <div
        className="aurora-blob"
        style={{
          width: "1000px",
          height: "1000px",
          top: "-300px",
          left: "-320px",
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(124,92,255,0.78) 0%, rgba(110,80,240,0.38) 38%, transparent 68%)",
          animation:
            "aurora-drift-1 16s ease-in-out infinite, aurora-pulse 8s ease-in-out infinite",
        }}
      />

      {/* INNER CORE — tighter, brighter burst at the light origin */}
      <div
        className="aurora-blob"
        style={{
          width: "520px",
          height: "520px",
          top: "10px",
          left: "-140px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.65) 0%, rgba(124,92,255,0.28) 36%, transparent 68%)",
          animation:
            "aurora-drift-3 12s ease-in-out infinite, aurora-pulse 7s ease-in-out infinite 1s",
        }}
      />

      {/* VIOLET BRIDGE — mid-section connector so there's no gap */}
      <div
        className="aurora-blob"
        style={{
          width: "580px",
          height: "580px",
          top: "360px",
          left: "-160px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,92,255,0.32) 0%, rgba(92,225,255,0.14) 50%, transparent 70%)",
          animation:
            "aurora-drift-3 18s ease-in-out infinite, aurora-pulse 9s ease-in-out infinite 2s",
        }}
      />

      {/* TEAL BLOOM — bleed into FindsSection, matches Figma bottom-left */}
      <div
        className="aurora-blob"
        style={{
          width: "800px",
          height: "800px",
          top: "600px",
          left: "-240px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(92,225,255,0.48) 0%, rgba(80,190,220,0.20) 44%, transparent 70%)",
          animation:
            "aurora-drift-2 20s ease-in-out infinite, aurora-pulse 10s ease-in-out infinite 3s",
        }}
      />
    </div>
  );
}
