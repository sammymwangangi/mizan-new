"use client";

import RoundUpsCard from "./RoundUpsCard";
import PaymentLinkCard from "./PaymentLinkCard";
import ChangeGrowsCard from "./ChangeGrowsCard";

/**
 * FindsSection — "Mizan finds what you won't miss"
 * -------------------------------------------------
 * Layout (Figma 1294 × 1160):
 *   - Heading block centred at top (738 wide)
 *   - Below: 12-col grid where left card spans 7 cols (706/1361)
 *     and right column (5 cols, 625/1361) stacks two cards vertically
 *
 * Aurora lights:
 *   - Two large blobs flanking the headline (left: cyan/teal, right: pink)
 *   - Softer trailing wash extending behind the cards
 *   - Same hue-pulse + drift pattern as the hero so it feels consistent
 */
export default function FindsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[--color-bg] py-24 md:py-32">
      {/* === AURORA LIGHTS === */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Left flank — cyan/teal */}
        <div
          className="aurora-blob"
          style={{
            width: "640px",
            height: "640px",
            top: "-100px",
            left: "-180px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(92,225,255,0.55) 0%, rgba(124,92,255,0.22) 40%, transparent 70%)",
            animation:
              "aurora-drift-1 16s ease-in-out infinite, aurora-pulse 9s ease-in-out infinite",
          }}
        />

        {/* Right flank — magenta/pink */}
        <div
          className="aurora-blob"
          style={{
            width: "640px",
            height: "640px",
            top: "-100px",
            right: "-180px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,107,184,0.55) 0%, rgba(186,133,255,0.22) 40%, transparent 70%)",
            animation:
              "aurora-drift-2 18s ease-in-out infinite, aurora-pulse 11s ease-in-out infinite 2s",
          }}
        />

        {/* Mid-left wash — supports the cooking-card area */}
        <div
          className="aurora-blob"
          style={{
            width: "560px",
            height: "560px",
            top: "40%",
            left: "-120px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(167,139,250,0.45) 0%, rgba(124,92,255,0.18) 45%, transparent 70%)",
            animation:
              "aurora-drift-3 19s ease-in-out infinite, aurora-pulse 8s ease-in-out infinite 1s",
          }}
        />

        {/* Mid-right wash — supports the right-column cards */}
        <div
          className="aurora-blob"
          style={{
            width: "560px",
            height: "560px",
            top: "45%",
            right: "-120px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,138,200,0.45) 0%, rgba(186,133,255,0.18) 45%, transparent 70%)",
            animation:
              "aurora-drift-4 21s ease-in-out infinite, aurora-pulse 10s ease-in-out infinite 3s",
          }}
        />
      </div>

      {/* === CONTENT === */}
      <div className="relative z-10 mx-auto w-full max-w-[1376px] px-6 md:px-0 lg:px-2">
        {/* Heading block */}
        <header className="mx-auto max-w-[760px] text-center">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Mizan finds what you
            <br />
            won&rsquo;t miss.
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[15px] leading-[1.7] text-white/65 md:text-[16px]">
            Tiny everyday spend can quietly become halal saving, investing, and
            giving. Your future self will thank you.
          </p>
        </header>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-16 lg:grid-cols-12 lg:gap-6">
          {/* Left: big card (7/12 cols) */}
          <div className="lg:col-span-7">
            <RoundUpsCard />
          </div>

          {/* Right column: two stacked cards (5/12 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="h-[420px] lg:h-[429px]">
              <PaymentLinkCard />
            </div>
            <div className="h-[420px] lg:h-[450px]">
              <ChangeGrowsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
