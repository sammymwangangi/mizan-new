"use client";

import Image from "next/image";
import { useMemo } from "react";
import { motion } from "motion/react";

function MinusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 72 72" className="h-10 w-10" fill="none">
      <rect x="18" y="30" width="36" height="12" rx="6" stroke="white" strokeWidth="5" />
      <path d="M14 42h15" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

interface Confetti {
  id: number;
  x: number;
  delay: number;
  duration: number;
  color: string;
  size: number;
  round: boolean;
}

function ConfettiParticle({ confetti }: { confetti: Confetti }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: confetti.x, rotate: 0 }}
      animate={{
        opacity: [0, 0.6, 0.8, 0.4, 0],
        y: [0, -40, -80, -100, -120],
        x: [
          confetti.x,
          confetti.x + Math.sin(confetti.id) * 15,
          confetti.x + Math.sin(confetti.id) * 25,
          confetti.x + Math.sin(confetti.id) * 20,
          confetti.x + Math.sin(confetti.id) * 10,
        ],
        rotate: [0, 180, 360, 540, 720],
      }}
      transition={{
        duration: confetti.duration,
        delay: confetti.delay,
        repeat: Infinity,
        ease: "easeOut",
      }}
      className="absolute pointer-events-none bottom-0"
      style={{
        width: confetti.size,
        height: confetti.size,
        backgroundColor: confetti.color,
        borderRadius: confetti.round ? "50%" : "2px",
      }}
    />
  );
}

function YouSavedCard() {
  const confettiParticles = useMemo<Confetti[]>(() => {
    const colors = ["#8f00e0", "#D155FF", "#A016E8", "#6f4dfb", "#A08CFF"];
    const rounds = [true, false, true, false, true, false, true, false, false, true, false, true];
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: (i / 12) * 200 - 20,
      delay: (i / 12) * 4,
      duration: 3 + (i % 3) * 0.7,
      color: colors[i % colors.length],
      size: 4 + (i % 3) * 2,
      round: rounds[i],
    }));
  }, []);

  return (
    <div className="relative ml-5 rounded-[34px] bg-white/86 px-2 py-4 text-center shadow-[0_16px_40px_rgba(91,45,132,0.08)] ring-[10px] ring-white rotate-[3deg] overflow-visible">
      {/* Glowing animated border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ overflow: "visible" }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="rgba(143,0,224,0.05)" />
            <stop offset="50%" stopColor="rgba(111,77,251,0.2)" />
            <stop offset="65%" stopColor="rgba(143,0,224,0.05)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <motion.rect
          x="1" y="1"
          width="calc(100% - 2px)" height="calc(100% - 2px)"
          rx="33"
          fill="none"
          stroke="url(#glowGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          pathLength="1"
          strokeDasharray="0.2 0.8"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      {/* Confetti particles */}
      <div className="absolute bottom-0 left-0 w-full h-[120px] overflow-visible pointer-events-none">
        {confettiParticles.map((c) => (
          <ConfettiParticle key={c.id} confetti={c} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-[14px] text-black"
      >
        You saved
      </motion.p>

      <p className="mt-4 flex items-baseline justify-center gap-1 text-[24px] font-normal leading-none text-[#313131]">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          $
        </motion.span>
        <motion.span
          className="font-semibold text-[#6F4DFB]"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
        >
          450.00
        </motion.span>
        <motion.span
          className="text-[22px] text-[#313131]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          USD
        </motion.span>
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-5 text-[14px] text-black"
      >
        in Sept
      </motion.p>
    </div>
  );
}

export default function SaveCard() {
  return (
    <article className="relative flex flex-col rounded-[30px] bg-white/92 p-6 shadow-[0_24px_80px_rgba(80,36,132,0.10)] ring-1 ring-black/[0.03]">
      <Image
        src="/assets/business/shield.png"
        alt=""
        width={51}
        height={58}
        className="h-[58px] w-[51px]"
      />

      <h3 className="mt-1 text-[40px] font-medium text-black">
        Save up to
        <br />
        <span className="text-[#8f00e0] font-medium text-[52px]">70% on fees.</span>
      </h3>

      <div
        style={{ height: "1px", borderTop: "1px solid #341E9C2E", marginTop: "20px", marginBottom: "10px" }}
      />

      <p className="mt-1 text-[16px] font-medium leading-[1.25] text-black">
        Transparent pricing. No hidden charges.
      </p>

      <div className="relative mt-8 max-w-[262px]">
        <div className="absolute -left-4 -top-6 z-10 grid h-[60px] w-[60px] place-items-center rounded-full bg-[#ede7f8]">
          <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[linear-gradient(145deg,#c98dff,#8f00e0)]">
            <MinusIcon />
          </div>
        </div>
        <YouSavedCard />
      </div>
    </article>
  );
}
