"use client";

import Navbar from "./Navbar";
import AuroraLights from "./AuroraLights";
import PhoneStage from "./PhoneStage";
import GlassCTA from "./GlassCTA";
import DecorPattern from "./DecorPattern";
import { useHeroEntrance } from "@/lib/useGsapEntrance";

/**
 * Hero — v4
 * ---------
 * Restructured so the phone is positioned ABSOLUTELY against the glass card
 * itself, with bottom-right anchor. This lets it:
 *   - Sit just below the navbar (top of phone near top of card)
 *   - Bleed off the bottom-right corner (cropped by the rounded border)
 *   - Be wider than its grid column would otherwise allow
 *
 * The text content (heading/copy/CTA) lives in a normal flex column on the
 * left and reserves only its own width — no grid contention with the phone.
 */
export default function Hero() {
  const sectionRef = useHeroEntrance<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8"
    >
      {/* THE HERO GLASS CARD.
          Has a fixed height on lg+ so the phone has a known canvas to bleed against.
          overflow-hidden clips the phone's bottom-right neatly along the rounded corner. */}
      <div className="glass-card glass-card--hero relative mx-auto w-full max-w-[1376px] overflow-hidden rounded-[36px] min-h-[814px] lg:h-[814px]">
        {/* Backdrop layer: pattern + aurora lights inside the glass */}
        <DecorPattern />

        {/* Navbar — top of card */}
        <Navbar />

        {/* PHONE STAGE — absolutely positioned, bleeds bottom-right.
            On lg+ it anchors right:0 bottom:0 with negative offsets so the
            wrist clips off the card edge. The container is sized to fit the
            full 587×735 phone plus parallax breathing room.

            top: ~80px so the phone's top edge sits just below the navbar
            height/width chosen so the phone sits naturally with the bottom
            cropped by the card's rounded corner. */}
        <div className="absolute -right-25 -top-14 hidden h-[1040px] w-[750px] lg:block">
          <PhoneStage />
        </div>

        {/* Mobile/tablet fallback phone — flows after content rather than absolute */}
        <div className="relative h-130 w-full sm:h-150 lg:hidden">
          <PhoneStage />
        </div>

        {/* TEXT CONTENT — left side, padded.
            Width capped so it never collides with the phone area on the right. */}
        <div className="relative z-10 px-8 pb-16 pt-14 md:px-14 md:pb-20 md:pt-16 lg:px-20 lg:pb-24 lg:pt-28">
          <div className="max-w-250">
            <h1
              data-anim="heading"
              className="font-light leading-[1.08] tracking-tight text-white"
              style={{ fontSize: "43px" }}
            >
              From spare change to big change.
            </h1>

            <h2
              data-anim="subheading"
              className="mt-1 font-bold leading-[1.08] tracking-tight text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              Wealth on autopilot.
            </h2>

            <p
              data-anim="copy"
              className="mt-17 max-w-120 text-[18px] leading-[1.7] text-white md:text-[16px]"
            >
              Mizan turns everyday spend into automated investments, helping you
              grow consistently through screened, values-aligned portfolios.
            </p>

            <div className="mt-24.5">
              <GlassCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
