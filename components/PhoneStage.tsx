"use client";

import Image from "next/image";

/**
 * PhoneStage
 * ----------
 * Hero phone with floating coin and arrow.
 * No 3D tilt or mouse parallax — float animations only.
 * Sizes scale across laptop breakpoints (lg vs xl+).
 */
export default function PhoneStage() {
  return (
    <div
      data-anim="phone"
      className="relative h-full w-full"
    >
      {/* iPhone — scales down at lg, full size at xl+ */}
      <div className="absolute right-0 top-40 lg:top-35 flex items-start justify-end lg:right-4 xl:right-10">
        <Image
          src="/assets/iphone.svg"
          alt="Mizan app on iPhone"
          width={620}
          height={1040}
          priority
          sizes="(min-width: 1280px) 620px, 620px"
          className="h-auto w-[550px] xl:w-[620px] drop-shadow-[0_50px_100px_rgba(0,0,0,0.55)]"
        />
      </div>

      {/* Floating coin — positioned relative to phone, scales down at lg */}
      <div
        data-anim="float-coin"
        className="float-slow absolute z-10 left-[20px] top-[260px] lg:top-80 xl:left-[30px] xl:top-80"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/assets/coin.png"
          alt=""
          width={170}
          height={170}
          className="h-auto w-[120px] xl:w-[150px] drop-shadow-[0_24px_50px_rgba(124,92,255,0.45)]"
        />
      </div>

      {/* Floating arrow — same scaling pattern */}
      <div
        data-anim="float-arrow"
        className="float-fast absolute z-10 left-[140px] top-[200px] lg:top-80 xl:left-[180px] xl:top-60"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/assets/arrow.png"
          alt=""
          width={140}
          height={140}
          className="h-auto w-[95px] xl:w-[120px]"
        />
      </div>
    </div>
  );
}