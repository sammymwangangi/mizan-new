"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * BankGradeTrustSection
 * ---------------------
 * Section 4. Layout (1440 × 768):
 *   - LEFT: vault image, floating, with separated bottom shadow
 *   - RIGHT: heading + subtitle
 *
 * Two layered animations:
 *   1. Vault floats continuously (Y oscillation, ~6s cycle)
 *      Shadow scales & fades inversely so it feels grounded
 *   2. A sharp diagonal "light sweep" passes across the safe every 6s,
 *      simulating a metal piece being turned in the light
 *
 * Background: existing background.svg + an additive sweep layer.
 */

export default function BankGradeTrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const vaultRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const vault = vaultRef.current;
      const shadow = shadowRef.current;
      if (!vault || !shadow) return;

      // === Vault float (continuous) ===
      // y oscillates -14 → 0; shadow scales/fades INVERSELY for realism
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(vault, { y: -14, duration: 3, ease: "sine.inOut" }, 0);
      tl.to(
        shadow,
        {
          scaleX: 1.12,        // wider when vault is high
          scaleY: 0.85,        // flatter
          opacity: 0.5,        // more diffused
          duration: 3,
          ease: "sine.inOut",
        },
        0
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "768px" }}
    >
      {/* === BG IMAGE (the soft ambient wash) === */}
      <div
        aria-hidden
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/section4/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* === SHARP DIAGONAL LIGHT SWEEP ===
          A thin bright strip moves across the section every 6s.
          Pure CSS keyframe animation — no JS overhead.
          Mix-blend-mode: screen makes it brighten anything underneath. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <div className="light-sweep" />
      </div>

      {/* === CONTENT GRID === */}
      <div className="relative z-10 mx-auto grid h-full max-w-[1440px] grid-cols-2 items-center gap-12 px-12 py-24 lg:px-20">
        {/* LEFT — vault with separated shadow */}
        <div className="relative flex h-[500px] items-center justify-center">
          {/* Bottom shadow — sits on the "ground", scales inversely to vault */}
          <div
            ref={shadowRef}
            className="pointer-events-none absolute"
            style={{
              bottom: "60px",
              left: "50%",
              width: "320px",
              height: "60px",
              transform: "translateX(-50%)",
              transformOrigin: "center center",
              willChange: "transform, opacity",
            }}
          >
            {/* <Image
              src="/assets/section4/vault-bottom-shadow.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden
            /> */}
          </div>

          {/* Vault — floats up & down */}
          <div
            ref={vaultRef}
            className="relative z-10"
            style={{
              width: "440px",
              height: "auto",
              willChange: "transform",
            }}
          >
            <Image
              src="/assets/section4/vault.webp"
              alt="Bank-grade safe representing Mizan's security standards"
              width={440}
              height={420}
              className="h-auto w-full"
              priority={false}
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT — heading + subtitle */}
        <div className="flex flex-col justify-center">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.4rem, 4.4vw, 3.75rem)" }}
          >
            Bank-grade
            <br />
            trust, built in.
          </h2>
          <p className="mt-7 max-w-[420px] text-[15px] leading-[1.7] text-white/75 md:text-[16px]">
            Protected by security standards trusted by leading global financial
            institutions.
          </p>

          {/* CTA button — with heart-beat ripple */}
          <div className="mt-10">
            <a
              href="#robin-helps"
              className="ripple-btn group relative inline-flex items-center gap-3 rounded-full bg-bg px-7 py-4 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10">How Robin helps</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}