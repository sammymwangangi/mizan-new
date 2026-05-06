"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import GrowCard from "./GrowCard";
import SpendCard from "./SpendCard";
import ConnectCard from "./ConnectCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * HowMizanWorks — orchestrator
 * ----------------------------
 * Each card is now its own component. The orchestrator only handles:
 *   1. Pin scroll mechanics
 *   2. The slide/scale GSAP timeline (queries cards via [data-card])
 *   3. Heading + layout
 *
 * Card components can change their internal content freely without
 * affecting the animation logic, as long as they:
 *   - Render a root element with data-card attribute
 *   - Match the 1062 × 560 size and absolute positioning
 *   - Set their own z-index (1, 2, 3)
 *
 * Stack order is determined by component order in JSX:
 *   - GrowCard (z=1, rendered first) — bottom
 *   - SpendCard (z=2) — middle
 *   - ConnectCard (z=3) — top
 */

const PEEK_OFFSET = 30;
const SCALE_STEP = 0.06;
const SLIDE_DURATION = 1;
const NUM_CARDS = 3;

export default function HowMizanWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const sticky = stickyRef.current;
      if (!section || !sticky) return;

      // Find cards by their data attribute. Order matters: must match render order.
      const grow = section.querySelector<HTMLElement>("[data-card='grow']");
      const spend = section.querySelector<HTMLElement>("[data-card='spend']");
      const connect = section.querySelector<HTMLElement>("[data-card='connect']");
      if (!grow || !spend || !connect) return;

      const cards = [grow, spend, connect];

      cards.forEach((card, i) => {
        gsap.set(card, { yPercent: i === 0 ? 0 : 110, scale: 1, y: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${(NUM_CARDS - 1) * window.innerHeight}`,
          pin: sticky,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Transition 1: Spend slides in, Grow recedes
      tl.to(spend, { yPercent: 0, duration: SLIDE_DURATION, ease: "power2.inOut" }, 0);
      tl.to(grow, {
        y: -PEEK_OFFSET,
        scale: 1 - SCALE_STEP,
        duration: SLIDE_DURATION,
        ease: "power2.inOut",
      }, 0);

      // Transition 2 (final): Connect slides in, both Spend & Grow flatten back to y:0 + scale down
      tl.to(connect, { yPercent: 0, duration: SLIDE_DURATION, ease: "power2.inOut" }, 1);
      tl.to(spend, {
        y: 0,
        scale: 1 - SCALE_STEP,
        duration: SLIDE_DURATION,
        ease: "power2.inOut",
      }, 1);
      tl.to(grow, {
        y: 0,
        scale: 1 - SCALE_STEP * 2,
        duration: SLIDE_DURATION,
        ease: "power2.inOut",
      }, 1);

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{
        height: `${100 + (NUM_CARDS - 1) * 100}vh`,
      }}
    >
      <div
        ref={stickyRef}
        className="relative flex h-screen w-full flex-col items-center overflow-hidden"
      >
        <div className="relative z-50 mt-20 text-center md:mt-24">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            How Mizan works
          </h2>
          <p className="mx-auto mt-3 max-w-[460px] px-6 text-[15px] leading-[1.7] text-white/65 md:text-[16px]">
            From buying coffee to building wealth.
          </p>
        </div>

        <div className="relative z-10 mt-12 w-full px-6 md:mt-16">
          <div className="relative mx-auto h-[560px] w-full max-w-[1062px]">
            <GrowCard />
            <SpendCard />
            <ConnectCard />
          </div>
        </div>
      </div>
    </section>
  );
}