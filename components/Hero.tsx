"use client";

import Navbar from "./Navbar";
import PhoneStage from "./PhoneStage";
import GlassCTA from "./GlassCTA";
import DecorPattern from "./DecorPattern";
import { useHeroEntrance } from "@/lib/useGsapEntrance";

export default function Hero() {
  const sectionRef = useHeroEntrance<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8"
    >
      <div className="glass-card glass-card--hero relative mx-auto w-full max-w-[1376px] overflow-hidden rounded-[36px] min-h-[680px] lg:h-[720px] xl:h-[814px]">
        <DecorPattern />
        <Navbar />

        {/* PHONE STAGE — responsive sizing across laptop sizes
            lg (1024-1279px): smaller container, phone scaled down
            xl (1280px+):     standard 750px container as Figma intends
            2xl (1536px+):    same as xl */}
        <div
          className="
            absolute hidden lg:block
            lg:-right-16 lg:-top-8 lg:h-[860px] lg:w-[600px]
            xl:-right-25 xl:-top-14 xl:h-[1040px] xl:w-[750px]
          "
        >
          <PhoneStage />
        </div>

        {/* Mobile/tablet phone */}
        <div className="relative h-130 w-full sm:h-150 lg:hidden">
          <PhoneStage />
        </div>

        {/* TEXT CONTENT */}
        <div className="relative z-10 px-8 pb-12 pt-12 md:px-14 md:pb-16 md:pt-14 lg:px-16 lg:pb-20 lg:pt-20 xl:px-20 xl:pb-24 xl:pt-28">
          <div className="max-w-[700px] xl:max-w-[900px]">
            <h1
              data-anim="heading"
              className="font-light leading-[1.08] tracking-tight text-white"
              style={{ fontSize: "clamp(1.85rem, 3vw, 40px)" }}
            >
              From spare change to big change.
            </h1>

            <h2
              data-anim="subheading"
              className="mt-2 font-bold leading-[1.08] tracking-tight text-white"
              style={{ fontSize: "clamp(1.85rem, 4vw, 3.4rem)" }}
            >
              Halal wealth on autopilot.
            </h2>

            <p
              data-anim="copy"
              className="mt-10 max-w-[440px] text-[15px] leading-[1.7] text-white md:text-[16px] xl:mt-17 xl:max-w-[480px] xl:text-[18px]"
            >
              Mizan turns everyday spend into automated investments, helping you
              grow consistently through screened, values-aligned portfolios.
            </p>

            <div className="mt-12 xl:mt-24.5">
              <GlassCTA />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}