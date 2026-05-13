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
    <section className="relative w-full py-24 md:py-8">

      {/* === CONTENT === */}
      <div className="relative z-10 mx-auto w-full max-w-[1376px] px-6 md:px-0 lg:px-2">
        {/* Heading block */}
        <header className="mx-auto max-w-[760px] text-center">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Built for the Day Zero investor.
            <br />
            Set and forget.
          </h2>
          <p className="mx-auto mt-5 max-w-[600px] text-[15px] leading-[1.7] text-white/65 md:text-[16px]">
            No big deposit. No market homework. Just everyday spending
            turned into steady growth — quietly in the background.
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
