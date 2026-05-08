// lib/useScrollEntrance.ts
"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * useScrollEntrance
 * -----------------
 * Sibling hook to useHeroEntrance. Same data-attribute pattern, but
 * triggers when the section scrolls into view rather than on mount.
 *
 * Each element marked with data-entrance fades up from below as it
 * enters the viewport. Optional attributes:
 *   data-entrance-delay="0.15"  — seconds to delay relative to first element
 *   data-entrance-y="40"        — Y travel distance (default 30)
 *
 * Plays once per element. Respects prefers-reduced-motion.
 *
 * Usage:
 *   const ref = useScrollEntrance();
 *   <section ref={ref}>
 *     <h2 data-entrance>Heading</h2>
 *     <p data-entrance data-entrance-delay="0.15">Subtitle</p>
 *   </section>
 */
export function useScrollEntrance<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const scope = ref.current;
      if (!scope) return;

      const elements = scope.querySelectorAll<HTMLElement>("[data-entrance]");
      if (elements.length === 0) return;

      // Respect reduced-motion preference
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(elements, { opacity: 1, y: 0 });
        return;
      }

      elements.forEach((el) => {
        const delay = parseFloat(el.dataset.entranceDelay || "0");
        const yDistance = parseFloat(el.dataset.entranceY || "30");

        gsap.set(el, { opacity: 0, y: yDistance });

        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    },
    { scope: ref }
  );

  return ref;
}