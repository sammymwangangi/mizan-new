// components/section8/PartnersMarquee.tsx
"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * PartnersMarquee — section 8
 * ---------------------------
 * Infinite horizontal scroll of partner logos with seamless loop and
 * faded edges. Each logo uses its native dimensions (no forced height)
 * so brand proportions are preserved.
 */

// Native logo dimensions per Figma
const LOGOS = [
  { src: "/assets/section8/visa.svg", alt: "Visa", width: 120, height: 39 },
  {
    src: "/assets/section8/uba.svg",
    alt: "UBA — United Bank for Africa",
    width: 130,
    height: 61,
  },
  {
    src: "/assets/section8/google-cloud.svg",
    alt: "Google Cloud",
    width: 286,
    height: 45,
  },
  {
    src: "/assets/section8/pci.svg",
    alt: "PCI DSS Compliant",
    width: 140,
    height: 54,
  },
  {
    src: "/assets/section8/islamic-accounting.svg",
    alt: "AAOIFI",
    width: 166,
    height: 50,
  },
];

export default function PartnersMarquee() {
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const track = trackRef.current;
      if (!track) return;

      // Measure the width of just one set (track is doubled, so half).
      // We do this after a frame so all images have loaded their dimensions.
      const setupAnimation = () => {
        const totalWidth = track.scrollWidth;
        const oneSetWidth = totalWidth / 2;

        // Pixels per second — derives duration from desired speed
        const PIXELS_PER_SECOND = 60;
        const duration = oneSetWidth / PIXELS_PER_SECOND;

        // gsap.utils.wrap() creates a function that wraps any value into
        // a min/max range. We use it to keep `x` looping in [-oneSetWidth, 0]
        // forever — when it goes past -oneSetWidth, it wraps back to 0
        // continuously, so the eye sees no jump.
        const wrap = gsap.utils.wrap(-oneSetWidth, 0);

        const tween = gsap.to(track, {
          x: `-=${oneSetWidth}`,
          duration,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => `${wrap(parseFloat(x))}px`,
          },
        });

        return tween;
      };

      // Wait one frame so layout is settled before measuring
      let tween: gsap.core.Tween | undefined;
      const raf = requestAnimationFrame(() => {
        tween = setupAnimation();
      });

      return () => {
        cancelAnimationFrame(raf);
        tween?.kill();
      };
    },
    { scope: trackRef },
  );

  return (
    <section className="relative w-full py-12 md:py-16">
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center gap-16 md:gap-24 lg:gap-32"
          style={{ willChange: "transform" }}
        >
          {/* First set */}
          {LOGOS.map((logo, i) => (
            <div
              key={`a-${i}`}
              className="flex shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="opacity-50 transition-opacity duration-300 hover:opacity-80"
                style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                loading="lazy"
              />
            </div>
          ))}

          {/* Duplicate set — required for seamless loop */}
          {LOGOS.map((logo, i) => (
            <div
              key={`b-${i}`}
              aria-hidden
              className="flex shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt=""
                width={logo.width}
                height={logo.height}
                className="opacity-50"
                style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
