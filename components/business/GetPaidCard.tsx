"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

const GET_PAID_CHARS = "Get paid".split("");
const TOTAL_SECONDS = 600; // 10 minutes

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")} Min`;
}

export default function GetPaidCard() {
  const [timeElapsed, setTimeElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeElapsed((prev) => (prev >= TOTAL_SECONDS ? 0 : prev + 6));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const barWidth = `${(timeElapsed / TOTAL_SECONDS) * 100}%`;

  return (
    <article className="relative flex flex-col rounded-[30px] bg-white/88 p-8 shadow-[0_24px_80px_rgba(80,36,132,0.10)] ring-1 ring-black/[0.03]">
      <div className="grid h-[64px] w-[69px] place-items-center rounded-[14px]">
        <Image src="/assets/business/fast.png" alt="" width={69} height={64} />
      </div>

      <h3 className="mt-8 max-w-[330px] text-[40px] font-medium leading-[1.1] tracking-[-0.01em] text-black">
        {GET_PAID_CHARS.map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: index * 0.1 }}
          >
            {char}
          </motion.span>
        ))}
        <br />
        <span className="text-[#8f00e0] text-[52px] font-semibold">
          <motion.span
            className="inline-block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            3{" "}
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            x{" "}
          </motion.span>
          <motion.span
            className="inline-block"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            faster
          </motion.span>
        </span>
      </h3>

      <div
        style={{ height: "1px", borderTop: "1px solid #341E9C2E", marginTop: "43px", marginBottom: "26px" }}
      />

      <p className="mt-7 max-w-[360px] text-[16px] font-medium leading-[1.2] text-black">
        Settle in minutes, not days. Keep cash moving across your business.
      </p>

      <div className="mt-auto pt-9">
        <div className="flex items-center justify-end text-[14px] font-medium text-[#737373]">
          <span>{formatTime(timeElapsed)}</span>
        </div>
        <div className="mt-2 h-[18px] overflow-hidden rounded-full bg-[#8F00E03B]">
          <motion.div
            className="h-full rounded-full bg-black"
            style={{ width: barWidth }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </article>
  );
}
