"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * Orchestrates the hero entrance animation.
 * Targets elements by data-anim attribute so the timeline
 * stays decoupled from component internals.
 *
 * Usage in a component:
 *   const ref = useHeroEntrance();
 *   <section ref={ref}>
 *     <nav data-anim="navbar">...</nav>
 *     <h1 data-anim="heading">...</h1>
 *     <p data-anim="subheading">...</p>
 *     <div data-anim="cta">...</div>
 *     <div data-anim="phone">...</div>
 *     <div data-anim="float-coin">...</div>
 *     <div data-anim="float-arrow">...</div>
 *   </section>
 */
export function useHeroEntrance<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      // Set initial state (FOUC prevention)
      gsap.set(
        ref.current.querySelectorAll(
          "[data-anim='navbar'], [data-anim='heading'], [data-anim='subheading'], [data-anim='copy'], [data-anim='cta'], [data-anim='phone'], [data-anim='float-coin'], [data-anim='float-arrow']"
        ),
        { opacity: 0 }
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      tl.to("[data-anim='navbar']", { opacity: 1, y: 0, duration: 0.6 }, 0)
        .from(
          "[data-anim='navbar']",
          { y: -20, duration: 0.6, ease: "power2.out" },
          0
        )
        .to(
          "[data-anim='heading']",
          { opacity: 1, y: 0, duration: 1.0 },
          0.2
        )
        .from(
          "[data-anim='heading']",
          { y: 40, duration: 1.0 },
          0.2
        )
        .to(
          "[data-anim='subheading']",
          { opacity: 1, y: 0, duration: 1.0 },
          0.35
        )
        .from(
          "[data-anim='subheading']",
          { y: 30, duration: 1.0 },
          0.35
        )
        .to(
          "[data-anim='copy']",
          { opacity: 1, y: 0, duration: 0.8 },
          0.5
        )
        .from(
          "[data-anim='copy']",
          { y: 20, duration: 0.8 },
          0.5
        )
        .to(
          "[data-anim='cta']",
          { opacity: 1, y: 0, duration: 0.8 },
          0.65
        )
        .from(
          "[data-anim='cta']",
          { y: 20, duration: 0.8 },
          0.65
        )
        .to(
          "[data-anim='phone']",
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.4,
            ease: "expo.out",
          },
          0.4
        )
        .from(
          "[data-anim='phone']",
          { y: 60, scale: 0.92, duration: 1.4, ease: "expo.out" },
          0.4
        )
        .to(
          "[data-anim='float-coin']",
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
          1.0
        )
        .from(
          "[data-anim='float-coin']",
          { scale: 0.4, duration: 0.8, ease: "back.out(1.7)" },
          1.0
        )
        .to(
          "[data-anim='float-arrow']",
          { opacity: 1, scale: 1, duration: 0.7, ease: "back.out(1.5)" },
          1.15
        )
        .from(
          "[data-anim='float-arrow']",
          { scale: 0.5, duration: 0.7, ease: "back.out(1.5)" },
          1.15
        );
    },
    { scope: ref }
  );

  return ref;
}
