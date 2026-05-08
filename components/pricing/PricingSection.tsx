"use client";

import NoorCard from "./NoorCard";
import QamarCard from "./QamarCard";
import ShamsCard from "./ShamsCard";

export default function PricingSection() {
  return (
    // Outer wrapper: provides the 26px gutter on each side. The actual section
    // sits inside this so its full visual area (backdrop included) is inset.
    <div className="w-full px-[26px]">
      <section className="relative w-full overflow-hidden rounded-[28px]">
        {/* === LAYER 1: Top glow band — extends 85% down the section === */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 z-0"
          style={{
            height: "85%",
            background: `
              linear-gradient(
                180deg,
                rgba(196, 165, 232, 0.32) 0%,
                rgba(168, 130, 220, 0.25) 20%,
                rgba(140, 100, 210, 0.18) 45%,
                rgba(100, 60, 180, 0.10) 70%,
                rgba(60, 30, 130, 0.04) 90%,
                transparent 100%
              )
            `,
          }}
        />

        {/* === LAYER 2: Diagonal arc === */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <img
            src="/assets/section6/circle-shape.svg"
            alt=""
            className="absolute"
            style={{
              top: "-10px",
              left: "-90px",
              width: "1100px",
              height: "auto",
              opacity: 0.35,
            }}
          />
        </div>

        {/* === LAYER 3: Section content === */}
        <div className="relative z-10 mx-auto max-w-[1386px] px-6 py-16 md:px-10 lg:px-12 lg:py-20">
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
          <div className="mt-12 grid grid-cols-1 justify-items-center gap-6 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            <NoorCard />
            <QamarCard />
            <ShamsCard />
          </div>
        </div>
      </section>
    </div>
  );
}
