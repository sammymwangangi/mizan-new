"use client";

/**
 * AuroraLights
 * ------------
 * Left-side atmospheric glow matching the Figma design:
 *   - Cool periwinkle/violet halo at the top-left (behind Hero headline)
 *   - Teal/cyan wash trailing down into FindsSection
 *
 * Sits in page.tsx as an absolute layer (z-index 1) so it bleeds across
 * both sections. PageBackground owns everything from Tier 2 downward.
 */
export default function AuroraLights() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute"
      style={{
        top: 0,
        left: 0,
        width: "900px",
        height: "1560px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* PRIMARY HALO — large, soft periwinkle bloom at top-left corner */}
      <div
        className="aurora-blob"
        style={{
          width: "860px",
          height: "860px",
          top: "-260px",
          left: "-280px",
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(110,85,240,0.50) 0%, rgba(124,92,255,0.22) 42%, transparent 70%)",
          animation:
            "aurora-drift-1 16s ease-in-out infinite, aurora-pulse 8s ease-in-out infinite",
        }}
      />

      {/* INNER CORE — tighter, slightly brighter cool-violet centre */}
      <div
        className="aurora-blob"
        style={{
          width: "420px",
          height: "420px",
          top: "20px",
          left: "-120px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(150,120,255,0.42) 0%, rgba(124,92,255,0.16) 38%, transparent 70%)",
          animation:
            "aurora-drift-3 12s ease-in-out infinite, aurora-pulse 7s ease-in-out infinite 1s",
        }}
      />

      {/* TEAL TRANSITION — bleeds from the base of the Hero into FindsSection */}
      <div
        className="aurora-blob"
        style={{
          width: "680px",
          height: "680px",
          top: "620px",
          left: "-200px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(92,225,255,0.38) 0%, rgba(80,190,220,0.15) 45%, transparent 70%)",
          animation:
            "aurora-drift-2 20s ease-in-out infinite, aurora-pulse 10s ease-in-out infinite 3s",
        }}
      />

      {/* VIOLET BRIDGE — links the violet halo to the teal bloom below */}
      <div
        className="aurora-blob"
        style={{
          width: "500px",
          height: "500px",
          top: "380px",
          left: "-140px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,92,255,0.22) 0%, rgba(92,225,255,0.10) 50%, transparent 70%)",
          animation:
            "aurora-drift-3 18s ease-in-out infinite, aurora-pulse 9s ease-in-out infinite 2s",
        }}
      />
    </div>
  );
}
