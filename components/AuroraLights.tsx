/**
 * AuroraLights — v6
 * -----------------
 * True aurora effect: colour cycling, opacity breathing, larger drift movement.
 * Uses `screen` blend mode (works against any background) instead of plus-lighter.
 *
 * Each blob has TWO simultaneous animations:
 *   1. Position drift (translate3d) — slow, organic movement
 *   2. Opacity + hue pulse (filter) — faster, gives the "alive" feeling
 */
export default function AuroraLights() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* MAIN HERO LIGHT — top-left, behind headline */}
      <div
        className="aurora-blob aurora-pulse-1"
        style={{
          width: "820px",
          height: "820px",
          top: "-200px",
          left: "-240px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(124,92,255,0.85) 0%, rgba(124,92,255,0.35) 40%, transparent 70%)",
          animation:
            "aurora-drift-1 14s ease-in-out infinite, aurora-pulse 7s ease-in-out infinite",
        }}
      />

      {/* MID-LEFT VIOLET BLOOM */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          top: "30%",
          left: "-100px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(167,139,250,0.55) 0%, rgba(124,92,255,0.25) 45%, transparent 70%)",
          animation:
            "aurora-drift-3 17s ease-in-out infinite, aurora-pulse 9s ease-in-out infinite 2s",
        }}
      />

      {/* LOW-LEFT PINK WASH */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          bottom: "-160px",
          left: "-80px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,107,184,0.55) 0%, rgba(186,133,255,0.25) 40%, transparent 70%)",
          animation:
            "aurora-drift-2 19s ease-in-out infinite, aurora-pulse 11s ease-in-out infinite 4s",
        }}
      />

      {/* CENTRE INDIGO HAZE — quiet bridge */}
      <div
        className="aurora-blob"
        style={{
          width: "480px",
          height: "480px",
          top: "35%",
          left: "32%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(91,95,255,0.40) 0%, rgba(91,95,255,0.12) 50%, transparent 70%)",
          animation:
            "aurora-drift-4 21s ease-in-out infinite, aurora-pulse 8s ease-in-out infinite 1s",
        }}
      />

      {/* Vignette */}
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