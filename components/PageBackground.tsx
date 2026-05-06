"use client";

/**
 * PageBackground
 * --------------
 * One unified aurora layer for the entire page, sitting behind all sections.
 * Replaces the per-section aurora components.
 *
 * Architecture:
 *   - Absolutely positioned, covers the full page height
 *   - Sections above it have transparent backgrounds
 *   - The body has the solid navy bg as the bottom-most layer
 *
 * The blobs are positioned at multiple "tiers" down the page using `top: <vh>`
 * units so they stay anchored to the page, not the viewport. This means
 * different lights become visible as the user scrolls.
 *
 * If you want the lights to follow the viewport instead (fixed/sticky),
 * change `position: absolute` + `top: <vh>` values into a fixed layer with
 * scroll-driven offsets — but the page-anchored approach below is simpler
 * and matches Figma where lights belong to *places* on the page.
 */
export default function PageBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* ============================================
          TIER 1 — top of page, behind Hero
          ============================================ */}

      {/* MAIN HERO LIGHT — top-left, behind headline */}
      <div
        className="aurora-blob"
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
          top: "20%",
          left: "-100px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(167,139,250,0.55) 0%, rgba(124,92,255,0.25) 45%, transparent 70%)",
          animation:
            "aurora-drift-3 17s ease-in-out infinite, aurora-pulse 9s ease-in-out infinite 2s",
        }}
      />

      {/* ============================================
          TIER 2 — between Hero and FindsSection
          (creates the smooth bridge between sections)
          ============================================ */}

      {/* RIGHT-EDGE PINK — flows from hero bottom into next section */}
      <div
        className="aurora-blob"
        style={{
          width: "640px",
          height: "640px",
          top: "60vh",
          right: "-180px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,107,184,0.55) 0%, rgba(186,133,255,0.25) 40%, transparent 70%)",
          animation:
            "aurora-drift-2 18s ease-in-out infinite, aurora-pulse 11s ease-in-out infinite 2s",
        }}
      />

      {/* LOW-LEFT PINK WASH — bridges hero into next section */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          top: "70vh",
          left: "-80px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,107,184,0.45) 0%, rgba(186,133,255,0.20) 40%, transparent 70%)",
          animation:
            "aurora-drift-2 22s ease-in-out infinite, aurora-pulse 11s ease-in-out infinite 4s",
        }}
      />

      {/* ============================================
          TIER 3 — flanking the FindsSection heading
          ============================================ */}

      {/* CYAN LEFT — flanks "Mizan finds" headline */}
      <div
        className="aurora-blob"
        style={{
          width: "640px",
          height: "640px",
          top: "100vh",
          left: "-180px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(92,225,255,0.50) 0%, rgba(124,92,255,0.20) 40%, transparent 70%)",
          animation:
            "aurora-drift-1 16s ease-in-out infinite, aurora-pulse 9s ease-in-out infinite 1s",
        }}
      />

      {/* MAGENTA RIGHT — flanks "Mizan finds" headline */}
      <div
        className="aurora-blob"
        style={{
          width: "640px",
          height: "640px",
          top: "105vh",
          right: "-180px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,107,184,0.50) 0%, rgba(186,133,255,0.20) 40%, transparent 70%)",
          animation:
            "aurora-drift-2 18s ease-in-out infinite, aurora-pulse 11s ease-in-out infinite 3s",
        }}
      />

      {/* ============================================
          TIER 4 — behind cards in FindsSection
          ============================================ */}

      {/* MID-LEFT VIOLET — supports cooking-card area */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          top: "140vh",
          left: "-120px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(167,139,250,0.40) 0%, rgba(124,92,255,0.18) 45%, transparent 70%)",
          animation:
            "aurora-drift-3 19s ease-in-out infinite, aurora-pulse 8s ease-in-out infinite 1s",
        }}
      />

      {/* MID-RIGHT PINK — supports right-column cards */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          top: "145vh",
          right: "-120px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,138,200,0.40) 0%, rgba(186,133,255,0.18) 45%, transparent 70%)",
          animation:
            "aurora-drift-4 21s ease-in-out infinite, aurora-pulse 10s ease-in-out infinite 3s",
        }}
      />

      {/* TIER 5 — behind HowMizanWorks pinned section */}
      <div
        className="aurora-blob"
        style={{
          width: "720px",
          height: "720px",
          top: "200vh",
          left: "-220px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(177,78,255,0.45) 0%, rgba(124,92,255,0.20) 40%, transparent 70%)",
          animation:
            "aurora-drift-1 19s ease-in-out infinite, aurora-pulse 10s ease-in-out infinite 2s",
        }}
      />
      <div
        className="aurora-blob"
        style={{
          width: "640px",
          height: "640px",
          top: "230vh",
          right: "-180px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,107,184,0.40) 0%, rgba(186,133,255,0.18) 40%, transparent 70%)",
          animation:
            "aurora-drift-2 22s ease-in-out infinite, aurora-pulse 11s ease-in-out infinite 4s",
        }}
      />
    </div>
  );
}
