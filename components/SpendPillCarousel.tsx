"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Pill = {
  uid: number;
  label: string;
  amount: string;
  iconSrc: string;
};

const PILL_POOL: Omit<Pill, "uid">[] = [
  {
    label: "Today's Spare Change",
    amount: "KES 242",
    iconSrc: "/assets/section3/dollar-icon.png",
  },
  { label: "", amount: "KES 64", iconSrc: "/assets/section3/bill-icon.png" },
  { label: "", amount: "KES 128", iconSrc: "/assets/section3/bill-icon.png" },
];

// 4 positions: -1 (exit above, invisible), 0 (top/largest), 1 (mid), 2 (bottom/smallest)
// A new pill enters at position 2. Each tick, all pills move up by 1 position.
// The pill reaching position -1 unmounts after its transition.
const POSITION_STYLES = [
  // -1: exiting, fades up off the top
  {
    width: "243.53px",
    height: "67.89px",
    translateY: "-60px",
    opacity: 0,
    zIndex: 40,
    paddingX: "16px",
    iconSize: 28,
    fontSize: "13px",
    amountSize: "16px",
  },
  // 0: top, largest
  {
    width: "243.53px",
    height: "67.89px",
    translateY: "0px",
    opacity: 1,
    zIndex: 30,
    paddingX: "16px",
    iconSize: 28,
    fontSize: "13px",
    amountSize: "16px",
  },
  // 1: middle
  {
    width: "208.64px",
    height: "58.16px",
    translateY: "52px",
    opacity: 0.65,
    zIndex: 20,
    paddingX: "14px",
    iconSize: 24,
    fontSize: "11px",
    amountSize: "14px",
  },
  // 2: bottom, smallest — entry point
  {
    width: "171.29px",
    height: "47.75px",
    translateY: "98px",
    opacity: 0.4,
    zIndex: 10,
    paddingX: "12px",
    iconSize: 20,
    fontSize: "10px",
    amountSize: "12px",
  },
];

let nextUid = 0;
const TICK_MS = 2800;
const TRANSITION_MS = 700;

export default function SpendPillCarousel() {
  // Each pill has a `pos` from -1 to 2. We track them all in one array so
  // exiting pills can smoothly animate to -1 before being unmounted.
  const [pills, setPills] = useState<(Pill & { pos: number })[]>(() => [
    { uid: nextUid++, ...PILL_POOL[0], pos: 0 },
    { uid: nextUid++, ...PILL_POOL[1], pos: 1 },
    { uid: nextUid++, ...PILL_POOL[2], pos: 2 },
  ]);
  const [poolCursor, setPoolCursor] = useState(3);

  useEffect(() => {
    const tick = () => {
      // Step 1: shift everyone up. Pill at pos 0 → pos -1 (exiting).
      setPills((prev) => [
        ...prev.map((p) => ({ ...p, pos: p.pos - 1 })),
        // Add a new pill entering at pos 2
        {
          uid: nextUid++,
          ...PILL_POOL[poolCursor % PILL_POOL.length],
          pos: 2,
        },
      ]);
      setPoolCursor((c) => c + 1);

      // Step 2: after the transition finishes, remove the pill at pos -1
      setTimeout(() => {
        setPills((prev) => prev.filter((p) => p.pos >= 0));
      }, TRANSITION_MS + 50);
    };

    const interval = setInterval(tick, TICK_MS);
    return () => clearInterval(interval);
  }, [poolCursor]);

  return (
    <div className="relative" style={{ width: "243.53px", height: "200px" }}>
      {pills.map((pill) => {
        // pos is -1, 0, 1, or 2 → index into POSITION_STYLES is pos + 1
        const style = POSITION_STYLES[pill.pos + 1];
        if (!style) return null;

        return (
          <div
            key={pill.uid}
            className="absolute left-1/2 flex items-center gap-2.5 overflow-hidden rounded-full backdrop-blur-md"
            style={{
              width: style.width,
              height: style.height,
              top: 0,
              transform: `translateX(-50%) translateY(${style.translateY})`,
              opacity: style.opacity,
              zIndex: style.zIndex,
              paddingLeft: style.paddingX,
              paddingRight: style.paddingX,
              background: "rgba(255, 255, 255, 0.08)",
              border: "1px solid rgba(255, 255, 255, 0.10)",
              transition: `width ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), height ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), transform ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${TRANSITION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
            }}
          >
            <div
              className="flex shrink-0 items-center justify-center rounded-full bg-white/10"
              style={{
                width: `${style.iconSize}px`,
                height: `${style.iconSize}px`,
                transition: `width ${TRANSITION_MS}ms, height ${TRANSITION_MS}ms`,
              }}
            >
              <Image
                src={pill.iconSrc}
                alt=""
                width={style.iconSize - 8}
                height={style.iconSize - 8}
                className="object-contain"
              />
            </div>
            <div className="min-w-0 flex-1 leading-tight">
              {pill.label && (
                <div
                  className="truncate text-white/85"
                  style={{
                    fontSize: style.fontSize,
                    transition: `font-size ${TRANSITION_MS}ms`,
                  }}
                >
                  {pill.label}
                </div>
              )}
              <div
                className="truncate font-semibold text-white"
                style={{
                  fontSize: style.amountSize,
                  transition: `font-size ${TRANSITION_MS}ms`,
                }}
              >
                {pill.amount}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}