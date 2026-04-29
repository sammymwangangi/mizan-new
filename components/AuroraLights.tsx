/**
 * AuroraLights — v5
 * -----------------
 * Rebalanced per Figma: the right side under the phone has NO aurora bloom
 * in the design — only the dark glass shows through there. All the colour
 * lives on the LEFT and CENTRE behind the headline.
 *
 * Changes from v4:
 *   - Removed the right-side cool-glow blob entirely (was at right:-120px)
 *   - Removed the three light rays beaming from the right (the bright streaks
 *     that were showing under the phone wrist)
 *   - Boosted the left main bloom slightly so the eye balance feels right
 *   - Added a soft secondary bloom mid-left for richness
 *   - Kept the centre indigo haze as a quiet bridge between left and phone
 */
export default function AuroraLights() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* === MAIN HERO LIGHT — top-left, behind headline === */}
      <div
        className="aurora-blob"
        style={{
          width: "820px",
          height: "820px",
          top: "-200px",
          left: "-240px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,92,255,0.70) 0%, rgba(124,92,255,0.28) 40%, transparent 70%)",
          animation: "aurora-drift-1 18s ease-in-out infinite",
        }}
      />

      {/* === MID-LEFT VIOLET BLOOM — fills left column behind copy === */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          top: "30%",
          left: "-100px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(167,139,250,0.40) 0%, rgba(124,92,255,0.18) 45%, transparent 70%)",
          animation: "aurora-drift-3 20s ease-in-out infinite",
        }}
      />

      {/* === LOW-LEFT PINK WASH — soft warmth bottom-left === */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          bottom: "-160px",
          right: "-10px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,107,184,0.40) 0%, rgba(186,133,255,0.18) 40%, transparent 70%)",
          animation: "aurora-drift-2 22s ease-in-out infinite",
        }}
      />

      {/* === CENTRE INDIGO HAZE — quiet bridge between left & phone ===
          Kept subtle so it doesn't compete with the phone area. */}
      <div
        className="aurora-blob"
        style={{
          width: "480px",
          height: "480px",
          top: "35%",
          left: "32%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(91,95,255,0.25) 0%, rgba(91,95,255,0.08) 50%, transparent 70%)",
          animation: "aurora-drift-4 20s ease-in-out infinite",
        }}
      />

      {/* NO right-side blobs. NO light rays.
          The right side stays dark glass — exactly like Figma. */}

      {/* Vignette — pulls focus to centre-left, darkens far right slightly */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 110% 80% at 35% 50%, transparent 30%, rgba(15,16,40,0.45) 100%)",
        }}
      />
    </div>
  );
}