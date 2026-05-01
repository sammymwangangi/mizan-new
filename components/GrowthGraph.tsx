"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * GrowthGraph v2
 * --------------
 * Updates from v1:
 *   - Backdrop: faded dark purple-grey gradient with rounded border
 *   - Gridlines: visible white at 25% opacity (was 10%)
 *   - X-axis: golden gradient track with an end "thumb" puck (matches Figma slider style)
 *   - Curve: kept the golden gradient, brightened slightly
 *
 * Coordinate system: viewBox 0 0 400 280
 */

const CURVE_PATH =
  "M 20 200 C 80 198, 110 192, 140 178 S 220 110, 280 80 S 360 50, 380 40";
const TICKS = [20, 110, 200, 290, 380];

export default function GrowthGraph() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const axisFillRef = useRef<SVGRectElement>(null);
  const axisThumbRef = useRef<SVGCircleElement>(null);

  useGSAP(
    () => {
      const path = pathRef.current;
      const dot = dotRef.current;
      const pill = pillRef.current;
      const counter = counterRef.current;
      const axisFill = axisFillRef.current;
      const axisThumb = axisThumbRef.current;
      if (!path || !dot || !pill || !counter || !axisFill || !axisThumb) return;

      const pathLength = path.getTotalLength();
      gsap.set(path, { strokeDasharray: pathLength, strokeDashoffset: pathLength });
      gsap.set(dot, { opacity: 0 });
      gsap.set(pill, { opacity: 0, y: -10 });

      // Axis track starts collapsed — animates from width 0 to full
      gsap.set(axisFill, { attr: { width: 0 } });
      gsap.set(axisThumb, { attr: { cx: 20 } });

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
        // 2. Counter ticks 0 → 16,500
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
        // 3. Dot fades in & follows path tip
        .to(dot, { opacity: 1, duration: 0.3, ease: "power2.out" }, "-=0.4")
        // 4. Pill pops in
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

      // Curve dot tracking
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

      // Axis track + thumb animation runs synchronously with the curve
      // Track fills 20 → 290 (about 70% width), thumb travels with it
      tl.to(
        { progress: 0 },
        {
          progress: 1,
          duration: 1.8,
          ease: "power2.inOut",
          onUpdate: function () {
            const p = this.targets()[0].progress;
            const trackWidth = 270 * p; // 20 → 290 = 270px travel
            axisFill.setAttribute("width", trackWidth.toString());
            axisThumb.setAttribute("cx", (20 + trackWidth).toString());
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
    <div ref={wrapRef} className="relative w-full h-auto">
      {/* Floating KES pill — sits above the curve's endpoint */}
      <div
        ref={pillRef}
        className="absolute right-[14%] top-[14%] z-10 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-[#1B1C39] shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
      >
        <span ref={counterRef}>KES 0</span>
      </div>

      <svg
        viewBox="0 0 400 280"
        className="h-auto w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Card backdrop gradient — dark muted purple-grey */}
          <linearGradient id="bgFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3F4262" />
            <stop offset="100%" stopColor="#2C2E48" />
          </linearGradient>

          {/* Curve line — golden/peach gradient */}
          <linearGradient id="lineFill" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFD8B5" />
            <stop offset="100%" stopColor="#FFA070" />
          </linearGradient>

          {/* X-axis track gradient — golden, denser than the curve */}
          <linearGradient id="axisGold" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFCFA8" />
            <stop offset="100%" stopColor="#FF9966" />
          </linearGradient>

          {/* Subtle area fill beneath the curve */}
          <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,180,150,0.18)" />
            <stop offset="100%" stopColor="rgba(255,180,150,0)" />
          </linearGradient>
        </defs>

        {/* === BACKDROP === fading rounded rectangle behind the graph */}
        <rect
          x={0}
          y={10}
          width={400}
          height={235}
          rx={16}
          ry={16}
          fill="url(#bgFade)"
          opacity={0.55}
        />
        {/* Subtle inner border on backdrop */}
        <rect
          x={0.5}
          y={10.5}
          width={399}
          height={234}
          rx={16}
          ry={16}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />

        {/* === GRIDLINES === white, clearly visible */}
        {TICKS.map((x) => (
          <line
            key={x}
            x1={x}
            y1={20}
            x2={x}
            y2={235}
            stroke="rgba(255,255,255,0.22)"
            strokeWidth={1}
          />
        ))}

        {/* Subtle area fill beneath curve */}
        <path
          d={`${CURVE_PATH} L 380 235 L 20 235 Z`}
          fill="url(#areaFill)"
          opacity={0.6}
        />

        {/* Animated curve */}
        <path
          ref={pathRef}
          d={CURVE_PATH}
          fill="none"
          stroke="url(#lineFill)"
          strokeWidth={3.5}
          strokeLinecap="round"
        />

        {/* Endpoint dot that travels along the curve */}
        <circle
          ref={dotRef}
          cx={0}
          cy={0}
          r={6}
          fill="#FFFFFF"
          stroke="#FF9966"
          strokeWidth={2.5}
        />

        {/* === X-AXIS — golden track with thumb === */}
        {/* Background track — full width, light/desaturated */}
        <rect
          x={20}
          y={232}
          width={360}
          height={6}
          rx={3}
          fill="rgba(255,255,255,0.18)"
        />
        {/* Animated golden fill — grows left → right */}
        <rect
          ref={axisFillRef}
          x={20}
          y={232}
          width={0}
          height={6}
          rx={3}
          fill="url(#axisGold)"
        />
        {/* Today indicator — start of axis */}
        <circle cx={20} cy={235} r={6} fill="#FFD8B5" stroke="#FFFFFF" strokeWidth={2} />
        {/* Animated thumb — slides along the track as it fills */}
        <circle
          ref={axisThumbRef}
          cx={20}
          cy={235}
          r={8}
          fill="#FFD8B5"
          stroke="#FFFFFF"
          strokeWidth={2.5}
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
        />

        {/* X-axis labels */}
        <text
          x={2}
          y={258}
          fill="rgba(255,255,255,0.85)"
          fontSize={12}
          fontWeight={500}
          fontFamily="var(--font-poppins, sans-serif)"
        >
          Today
        </text>
        <text
          x={398}
          y={258}
          fill="rgba(255,255,255,0.95)"
          fontSize={12}
          fontWeight={600}
          textAnchor="end"
          fontFamily="var(--font-poppins, sans-serif)"
        >
          12 Months
        </text>
      </svg>
    </div>
  );
}