"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GrowCard
 * --------
 * 1062 × 560 card. Content layout:
 *   - LEFT (~50%): "Grow" heading + subtitle (vertically centred)
 *   - RIGHT: Phone mockup inside a 494×496 purple-gradient container
 *   - TOP-LEFT: glow-light.svg shining
 *   - BOTTOM-LEFT: pattern.svg decoration
 *   - BOTTOM-CENTRE: 190×202 glass card with animated bar chart
 *
 * Card background: linear gradient at 135deg with 4 stops per Figma.
 *
 * The bar chart bars animate on scroll-into-view using ScrollTrigger.
 * Each bar grows from height 0 to its target height with a stagger.
 */

// Bar specs from Figma: width 19.48 × height (px)
const BARS = [
  { month: "Jan", height: 32.32 },
  { month: "Feb", height: 70.13 },
  { month: "Mar", height: 54.61 },
  { month: "Apr", height: 62.41 },
  { month: "May", height: 50.15 },
  { month: "Jun", height: 89.72 },
];

// Bar gradient — 7-stop linear gradient from screenshot
const BAR_GRADIENT =
  "linear-gradient(180deg, #D155FF 0%, #B532F2 14%, #A016E8 28%, #9406E2 41%, #8F00E0 50%, #921BE6 60%, #A08CFF 100%)";

export default function GrowCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const card = cardRef.current;
      if (!card) return;

      // Set initial bar heights to 0
      const bars = card.querySelectorAll<HTMLElement>("[data-bar]");
      gsap.set(bars, { scaleY: 0, transformOrigin: "bottom" });

      // Animate bars on scroll-into-view
      ScrollTrigger.create({
        trigger: card,
        start: "top 70%",
        once: true,
        onEnter: () => {
          gsap.to(bars, {
            scaleY: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.08,
          });
        },
      });
    },
    { scope: cardRef },
  );

  return (
    <div
      ref={cardRef}
      data-card="grow"
      className="absolute inset-x-0 top-0 mx-auto h-[560px] w-full max-w-[1062px] overflow-hidden rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
      style={{
        zIndex: 1,
        transformOrigin: "top center",
        backgroundImage: "url('/assets/section3/grow-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* TOP-LEFT LIGHT RAYS — multiple thin parallel streaks */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden"
        style={{ borderTopLeftRadius: "28px", borderTopRightRadius: "28px" }}
      >
        {/* Wrapper rotates the entire group of rays at one angle */}
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
          
          {/* Ray 3 — thicker, softer */}
          <div
            className="absolute"
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
            className="absolute"
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
            className="absolute"
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

        {/* Soft corner bloom — anchors the rays at the source */}
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
          className="object-contain object-left-bottom"
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
            Grow
          </h3>
          <p className="mt-5 max-w-[400px] text-[14px] leading-[1.65] text-white md:text-[16px]">
            Your spare change doesn&rsquo;t just sit there. It quietly builds
            into halal saving, investing, and long-term progress.
          </p>
        </div>

        {/* RIGHT — phone mockup container */}
        <div className="relative h-full w-full p-8 pr-10">
          <div
            className="relative h-full w-full overflow-hidden rounded-[20px]"
            style={{
              background: "linear-gradient(180deg, #351043 0%, #8628A9 100%)",
              maxWidth: "494px",
              maxHeight: "496px",
              marginLeft: "auto",
              marginTop: "auto",
            }}
          >
            <Image
              src="/assets/section3/grow-phone-portfolio-mockup.png"
              alt="Mizan portfolio showing halal investments"
              width={350}
              height={601}
              className="object-contain absolute left-15 right-0 top-8"
              priority
            />
          </div>
        </div>
      </div>

      {/* BOTTOM-CENTRE GLASS BAR CHART
          190 × 202, positioned over the card's bottom edge,
          centred horizontally on the card content area */}
      <div
        className="absolute z-20 overflow-hidden"
        style={{
          width: "190px",
          height: "202px",
          bottom: "4px",
          left: "calc(60% - 60px)",
          transform: "translateX(-50%)",
          borderRadius: "17.83px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.08) 100%)",
          backdropFilter: "blur(1px) saturate(110%)",
          WebkitBackdropFilter: "blur(1px) saturate(110%)",
          // 1px inside stroke with linear gradient
          boxShadow: "inset 0 0 0 1px transparent, 0 8px 24px rgba(0,0,0,0.15)",
        }}
      >
        {/* Gradient stroke overlay (since CSS doesn't support gradient borders directly) */}
        <div
          className="pointer-events-none absolute inset-0 rounded-[17.83px]"
          style={{
            padding: "1px",
            // Use higher opacity for the top-left of the border to simulate light hit
            background:
              "linear-gradient(135deg, rgba(231,181,170,0.5) 0%, rgba(102,102,102,0.2) 100%)",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Heading + percentage */}
        <div className="relative px-4 pt-3">
          <h4 className="text-[16px] font-bold leading-tight text-white">
            Portfolio growth
          </h4>
          <div className="mt-0.5 text-[26.75px] font-bold text-white">
            +12 %
          </div>
        </div>

        {/* Bar chart */}
        <div className="absolute bottom-7 left-0 right-0 flex items-end justify-center gap-[8px] px-3">
          {BARS.map((bar) => (
            <div key={bar.month} className="flex flex-col items-center">
              <div
                data-bar
                className="rounded-t-[4px]"
                style={{
                  width: "19.48px",
                  height: `${bar.height}px`,
                  background: BAR_GRADIENT,
                  boxShadow: "0 4px 12px rgba(165, 0, 224, 0.35)",
                }}
              />
              <span className="mt-1 text-[8px] font-medium text-white/85">
                {bar.month}
              </span>
            </div>
          ))}
        </div>

        {/* "Illustrative annual growth" caption */}
        <div className="absolute bottom-1.5 left-4 text-center">
          <span className="text-[8px] italic text-white/60">
            Illustrative annual growth
          </span>
        </div>
      </div>
    </div>
  );
}
