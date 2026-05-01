"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GrowthGraph
 * -----------
 * Animated SVG line chart showing spare-change growth over 12 months.
 * - Curved line draws in via stroke-dashoffset (left → right)
 * - "KES 16,500" pill counts up from 0 → 16,500 with `gsap.to({val})`
 * - Pill follows the line tip as it draws
 * - Animation triggers on scroll-into-view via ScrollTrigger
 *
 * Coordinate system: viewBox 0 0 400 280
 * The path mimics the Figma curve: flat baseline, gentle climb, steeper finish.
 */

// Sampled control points along the curve (used to position the pill)
const CURVE_PATH =
  "M 20 200 C 80 198, 110 192, 140 178 S 220 110, 280 80 S 360 50, 380 40";
// Data ticks for the dashed grid lines
const TICKS = [20, 110, 200, 290, 380];

export default function GrowthGraph() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const baselineRef = useRef<SVGLineElement>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      const dot = dotRef.current;
      const pill = pillRef.current;
      const counter = counterRef.current;
      const baseline = baselineRef.current;
      if (!path || !dot || !pill || !counter || !baseline) return;

      const pathLength = path.getTotalLength();
      gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
      gsap.set(dot, { opacity: 0 });
      gsap.set(pill, { opacity: 0, y: -10 });

      // Baseline progress dot positions
      const baselineLength = 360; // length of the baseline in viewBox units

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // 1. Draw the curve
      tl.to(path, {
        strokeDashoffset: 0,
        duration: 1.8,
        ease: "power2.inOut",
      })
        // 2. Counter ticks up alongside the draw
        .to(
          { val: 0 },
          {
            val: 16500,
            duration: 1.8,
            ease: "power2.inOut",
            onUpdate: function () {
              const v = Math.round(this.targets()[0].val);
              counter.textContent = `KES ${v.toLocaleString()}`;
            },
          },
          "<"
        )
        // 3. As path nears end, follow with the dot
        .to(
          dot,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
          },
          "-=0.4"
        )
        // 4. Pill fades in at the end
        .to(
          pill,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "back.out(1.6)",
          },
          "-=0.3"
        );

      // Animate dot along the path using getPointAtLength (no plugin needed)
      tl.to(
        { progress: 0 },
        {
          progress: 1,
          duration: 1.8,
          ease: "power2.inOut",
          onUpdate: function () {
            const p = this.targets()[0].progress;
            const pt = path.getPointAtLength(pathLength * p);
            dot.setAttribute("cx", pt.x.toString());
            dot.setAttribute("cy", pt.y.toString());
          },
        },
        0
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: wrapRef }
  );

  return (
    <div ref={wrapRef} className="relative w-full">
      {/* The pill that floats above the curve's endpoint */}
      <div
        ref={pillRef}
        className="absolute right-[14%] top-[18%] z-10 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#1B1C39] shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
      >
        <span ref={counterRef}>KES 0</span>
      </div>

      <svg
        viewBox="0 0 400 280"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Vertical dashed grid lines */}
        {TICKS.map((x) => (
          <line
            key={x}
            x1={x}
            y1={20}
            x2={x}
            y2={235}
            stroke="rgba(255,255,255,0.10)"
            strokeWidth={1}
            strokeDasharray="2 4"
          />
        ))}

        {/* Subtle area fill beneath the curve */}
        <defs>
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,180,150,0.22)" />
            <stop offset="100%" stopColor="rgba(255,180,150,0)" />
          </linearGradient>
          <linearGradient id="lineFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFCFB0" />
            <stop offset="100%" stopColor="#FFB088" />
          </linearGradient>
        </defs>

        {/* Area fill — drawn behind the line */}
        <path
          d={`${CURVE_PATH} L 380 235 L 20 235 Z`}
          fill="url(#areaFill)"
          opacity={0.7}
        />

        {/* The animated curve */}
        <path
          ref={pathRef}
          d={CURVE_PATH}
          fill="none"
          stroke="url(#lineFill)"
          strokeWidth={3}
          strokeLinecap="round"
        />

        {/* Endpoint dot that travels along the curve */}
        <circle
          ref={dotRef}
          cx={0}
          cy={0}
          r={5.5}
          fill="#FFFFFF"
          stroke="#FFB088"
          strokeWidth={2}
        />

        {/* Baseline (x-axis) — solid then dashed continuation */}
        <line
          ref={baselineRef}
          x1={20}
          y1={235}
          x2={380}
          y2={235}
          stroke="rgba(255,255,255,0.15)"
          strokeWidth={1}
          strokeDasharray="3 3"
        />

        {/* Today indicator dot on baseline */}
        <circle cx={20} cy={235} r={4} fill="#FFB088" />

        {/* 12-month indicator dot on baseline */}
        <circle cx={380} cy={235} r={4} fill="rgba(255,255,255,0.4)" />

        {/* X-axis labels */}
        <text
          x={20}
          y={258}
          fill="rgba(255,255,255,0.55)"
          fontSize={11}
          textAnchor="middle"
          fontFamily="var(--font-poppins, sans-serif)"
        >
          Today
        </text>
        <text
          x={380}
          y={258}
          fill="rgba(255,255,255,0.55)"
          fontSize={11}
          textAnchor="middle"
          fontFamily="var(--font-poppins, sans-serif)"
        >
          12 Months
        </text>
      </svg>
    </div>
  );
}
