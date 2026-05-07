"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SpendPillCarousel from "./SpendPillCarousel";

/**
 * SpendCard
 * ---------
 * 1062 × 560 card. Layout mirrors GrowCard:
 *   - LEFT: heading + copy
 *   - RIGHT: 494×496 purple-gradient container holding 3 floating images
 *     (golden card top-right, purple card behind it, hand-with-card image bottom)
 *   - BOTTOM-CENTRE: stacked pill carousel with vertical cycling animation
 *   - TOP-LEFT: same diagonal light rays as GrowCard
 *   - BOTTOM-LEFT: same pattern SVG as GrowCard
 *
 * The two top-right cards (golden and purple) float with a continuous
 * GSAP yoyo timeline — different speeds and rotations so they don't sync.
 */
export default function SpendCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const goldenRef = useRef<HTMLDivElement>(null);
  const purpleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const golden = goldenRef.current;
      const purple = purpleRef.current;
      if (!golden || !purple) return;

      // Golden card — bigger, slower float, slight tilt
      gsap.to(golden, {
        y: -14,
        rotation: -2,
        duration: 3.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Purple card — smaller movement, faster, opposite phase
      gsap.to(purple, {
        y: 10,
        rotation: 3,
        duration: 4.2,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: -1, // start out of sync
      });
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      data-card="spend"
      className="absolute inset-x-0 top-0 mx-auto h-[560px] w-full max-w-[1062px] overflow-hidden rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
      style={{
        zIndex: 2,
        transformOrigin: "top center",
        backgroundColor: "#280137",
      }}
    >
      {/* TOP-LEFT LIGHT RAYS — same recipe as GrowCard */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden"
        style={{ borderTopLeftRadius: "28px", borderTopRightRadius: "28px" }}
      >
        <div
          className="absolute"
          style={{
            top: "-420px",
            left: "120px",
            width: "700px",
            height: "10px",
            transform: "rotate(60deg)",
            transformOrigin: "top left",
          }}
        >
          <div
            className="absolute animate-ray-shimmer-1"
            style={{
              top: "200px",
              left: "10px",
              width: "500px",
              height: "40px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 95%)",
              filter: "blur(8px)",
            }}
          />
          <div
            className="absolute animate-ray-shimmer-2"
            style={{
              top: "130px",
              left: "20px",
              width: "560px",
              height: "40px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 95%)",
              filter: "blur(8px)",
            }}
          />
          <div
            className="absolute animate-ray-shimmer-3"
            style={{
              top: "80px",
              left: "20px",
              width: "620px",
              height: "40px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 80%)",
              filter: "blur(5px)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{
            top: "-60px",
            left: "-10px",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 35%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />
      </div>

      {/* BOTTOM-LEFT PATTERN */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[280px] w-[320px]">
        <Image
          src="/assets/section3/grow-bottom-left-pattern.svg"
          alt=""
          fill
          className="object-contain object-left-bottom opacity-40"
          aria-hidden
        />
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 grid h-full grid-cols-2">
        {/* LEFT — text */}
        <div className="flex flex-col justify-center px-12 py-12 lg:px-16">
          <h3
            className="font-bold leading-[1] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.6rem, 4.4vw, 4rem)" }}
          >
            SPEND
          </h3>
          <p className="mt-5 max-w-[400px] text-[14px] leading-[1.65] text-white/85 md:text-[16px]">
            Buy coffee, groceries, or commute as you normally would. Mizan
            rounds up the spare change from each purchase automatically.
          </p>
        </div>

        {/* RIGHT — purple gradient container with floating images */}
        <div className="relative h-full w-full p-8 pr-10">
          <div
            className="relative h-full w-full overflow-hidden rounded-[20px]"
            style={{
              background:
                "linear-gradient(135deg, #D155FF 0%, #B532F2 14%, #A016E8 28%, #9406E2 41%, #8F00E0 50%, #921BE6 60%, #A08CFF 100%)",
              maxWidth: "494px",
              maxHeight: "496px",
              marginLeft: "auto",
              marginTop: "auto",
            }}
          >
            {/* Purple card — sits behind the golden one, top-right */}
            <div
              ref={purpleRef}
              className="absolute"
              style={{
                top: "30px",
                right: "-2px",
                width: "154px",
                height: "auto",
                willChange: "transform",
              }}
            >
              <Image
                src="/assets/section3/purple-card.png"
                alt=""
                width={180}
                height={162}
                className="h-auto w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]"
              />
            </div>

            {/* Golden card — sits in front of purple, slightly offset */}
            <div
              ref={goldenRef}
              className="absolute"
              style={{
                top: "60px",
                right: "80px",
                width: "180px",
                height: "auto",
                willChange: "transform",
                zIndex: 2,
              }}
            >
              <Image
                src="/assets/section3/golden-card.png"
                alt=""
                width={180}
                height={162}
                className="h-auto w-full drop-shadow-[0_16px_32px_rgba(0,0,0,0.4)]"
              />
            </div>

            {/* Hand-with-card image — anchored bottom, fills width */}
            <div className="absolute bottom-0 left-0 right-0 h-[60%]">
              <Image
                src="/assets/section3/pay-with-credit-card.png"
                alt="Hand paying with Mizan card on POS terminal"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM-CENTRE PILL CAROUSEL */}
      <div
        className="absolute z-20"
        style={{
          bottom: "30px",
          left: "calc(55% - 40px)",
          transform: "translateX(-50%)",
        }}
      >
        <SpendPillCarousel />
      </div>
    </div>
  );
}