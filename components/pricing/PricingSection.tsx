// components/pricing/PricingSection.tsx
"use client";

import NoorCard from "./NoorCard";
import QamarCard from "./QamarCard";
import ShamsCard from "./ShamsCard";

/**
 * PricingSection — section 6
 * --------------------------
 * 1386 × 945. Three plan cards (Noor / Qamar / Shams) side by side.
 *
 * Background:
 *   - Section wrapper has its own gradient that fades downward
 *   - circle-shape.svg sweeps from top-left to bottom-centre as decoration
 *
 * No bg-color set — uses page bg + page-level aurora underneath.
 */
export default function PricingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Decorative circle sweep — top-left to bottom-centre */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src="/assets/section6/circle-shape.svg"
          alt=""
          className="absolute"
          style={{
            top: "-100px",
            left: "-200px",
            width: "1400px",
            height: "auto",
            opacity: 0.5,
          }}
        />
      </div>

      {/* Section content */}
      <div className="relative z-10 mx-auto max-w-[1386px] px-6 py-24 md:px-10 lg:px-12 lg:py-28">
        {/* Heading */}
        <header className="text-center">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.4rem, 4.4vw, 3.5rem)" }}
          >
            Choose your plan
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.7] text-white/75 md:text-[16px]">
            Start a new habit. Unlock your potential.
          </p>
        </header>

        {/* Cards grid */}
        <div className="mt-14 grid grid-cols-1 justify-items-center gap-6 md:mt-16 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          <NoorCard />
          <QamarCard />
          <ShamsCard />
        </div>
      </div>
    </section>
  );
}