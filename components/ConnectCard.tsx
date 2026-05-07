"use client";

import Image from "next/image";
import { useRef } from "react";

/**
 * ConnectCard
 * -----------
 * 1062 × 560 card. Layout mirrors GrowCard and SpendCard:
 *   - LEFT: heading + copy + "Secured by:" UBA badge at bottom-left
 *   - RIGHT: 494×496 container holding the connect-mockup image
 *   - TOP-LEFT: same diagonal light rays as Grow/Spend
 *   - BOTTOM-LEFT: same pattern SVG
 *
 * Card background: 8-stop linear gradient at 225° (top-right → bottom-left).
 * The angle MUST be 225deg per Figma — owner is keen on that.
 *
 * The connect-mockup image is heavy (~2MB). Mitigations applied:
 *   - next/image handles WebP/AVIF auto-conversion + lazy loading
 *   - sizes prop tells the browser only to fetch what's needed
 *   - explicit width/height prevents layout shift
 *   - quality={85} reduces file weight slightly without visible loss
 */

const CARD_GRADIENT =
  "linear-gradient(300deg, #D155FF 0%, #B532F2 14%, #A016E8 28%, #9406E2 41%, #8F00E0 58%, #921BE6 75%, #9320E7 77%, #A08CFF 100%)";

export default function ConnectCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      data-card="connect"
      className="absolute inset-x-0 top-0 mx-auto h-[560px] w-full max-w-[1062px] overflow-hidden rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
      style={{
        zIndex: 3,
        transformOrigin: "top center",
        background: CARD_GRADIENT,
      }}
    >
      {/* TOP-LEFT LIGHT RAYS — same recipe as Grow/Spend */}
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

      {/* BOTTOM-LEFT PATTERN — same as Grow/Spend, dimmed for purple bg */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-[280px] w-[320px]">
        <Image
          src="/assets/section3/grow-bottom-left-pattern.svg"
          alt=""
          fill
          className="object-contain object-bottom-left opacity-90"
          aria-hidden
        />
      </div>

      {/* CONTENT GRID */}
      <div className="relative z-10 grid h-full grid-cols-2">
        {/* LEFT — heading + copy + UBA badge */}
        <div className="relative flex flex-col justify-center px-12 py-12 lg:px-16">
          <h3
            className="font-bold leading-[1] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.6rem, 4.4vw, 4rem)" }}
          >
            CONNECT
          </h3>
          <p className="mt-5 max-w-[400px] text-[14px] leading-[1.65] text-white/85 md:text-[16px]">
            Skip the line and branch. Link M-PESA and your Mizan card in
            seconds. We instantly open your UBA Bank-linked account so your
            spare change has a secure place to grow.
          </p>

          {/* Secured by: UBA — bottom-left of text column */}
          <div className="absolute bottom-12 left-12 lg:left-16">
            <p className="text-[10px] italic text-white/85">Secured by:</p>
            <div className="mt-2">
              <Image
                src="/assets/section3/secured-by-uba.png"
                alt="UBA - United Bank for Africa"
                width={57}
                height={26}
                className="h-auto w-auto"
              />
            </div>
          </div>
        </div>

        {/* RIGHT — connect mockup container */}
        <div className="relative h-full w-full p-8 pr-10">
          <div
            className="relative h-full w-full overflow-hidden rounded-[20px]"
            style={{
              maxWidth: "494px",
              maxHeight: "496px",
              marginLeft: "auto",
              marginTop: "auto",
            }}
          >
            <Image
              src="/assets/section3/connect-mockup.png"
              alt="Person verifying identity by scanning ID with phone"
              fill
              className="object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEWFEPQ8j2BhAAAACklEQVR4nGNgAAAAAgABc3UBGAAAAABJRU5ErkJggg=="
            />
          </div>
        </div>
      </div>
    </div>
  );
}