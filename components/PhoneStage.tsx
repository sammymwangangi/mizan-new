"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function PhoneStage() {
  const stageRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const coinRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stage = stageRef.current;
      const phone = phoneRef.current;
      const coin = coinRef.current;
      const arrow = arrowRef.current;
      if (!stage || !phone || !coin || !arrow) return;
      if (window.matchMedia("(pointer: coarse)").matches) return;

      const PHONE_TILT = 5;
      const COIN_PARALLAX = 32;
      const ARROW_PARALLAX = 20;

      const tiltX = gsap.quickTo(phone, "rotationX", { duration: 0.6, ease: "power3.out" });
      const tiltY = gsap.quickTo(phone, "rotationY", { duration: 0.6, ease: "power3.out" });
      const coinX = gsap.quickTo(coin, "x", { duration: 0.7, ease: "power3.out" });
      const coinY = gsap.quickTo(coin, "y", { duration: 0.7, ease: "power3.out" });
      const arrowX = gsap.quickTo(arrow, "x", { duration: 0.7, ease: "power3.out" });
      const arrowY = gsap.quickTo(arrow, "y", { duration: 0.7, ease: "power3.out" });

      const handleMove = (e: MouseEvent) => {
        const rect = stage.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
        tiltY(nx * PHONE_TILT);
        tiltX(-ny * PHONE_TILT);
        coinX(nx * COIN_PARALLAX);
        coinY(ny * COIN_PARALLAX);
        arrowX(nx * ARROW_PARALLAX);
        arrowY(ny * ARROW_PARALLAX);
      };

      const handleLeave = () => {
        tiltX(0); tiltY(0); coinX(0); coinY(0); arrowX(0); arrowY(0);
      };

      window.addEventListener("mousemove", handleMove);
      stage.addEventListener("mouseleave", handleLeave);
      return () => {
        window.removeEventListener("mousemove", handleMove);
        stage.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: stageRef },
  );

  return (
    <div
      ref={stageRef}
      data-anim="phone"
      className="tilt-stage relative h-full w-full"
    >
      {/* iPhone — scales down at lg, full size at xl+ */}
      <div
        ref={phoneRef}
        className="tilt-target absolute right-0 top-0 flex items-start justify-end lg:-right-15 xl:-right-30"
      >
        <Image
          src="/assets/iphone.svg"
          alt="Mizan app on iPhone"
          width={770}
          height={1040}
          priority
          sizes="(min-width: 1280px) 770px, 620px"
          className="h-auto w-[620px] xl:w-[770px] drop-shadow-[0_50px_100px_rgba(0,0,0,0.55)]"
        />
      </div>

      {/* Floating coin — positioned relative to phone, scales down at lg */}
      <div
        ref={coinRef}
        data-anim="float-coin"
        className="float-slow absolute z-10 left-[20px] top-[260px] lg:left-[20px] lg:top-[260px] xl:left-[30px] xl:top-80"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/assets/coin.png"
          alt=""
          width={170}
          height={170}
          className="h-auto w-[120px] xl:w-[150px] drop-shadow-[0_24px_50px_rgba(124,92,255,0.45)]"
        />
      </div>

      {/* Floating arrow — same scaling pattern */}
      <div
        ref={arrowRef}
        data-anim="float-arrow"
        className="float-fast absolute z-10 left-[140px] top-[200px] lg:left-[140px] lg:top-[200px] xl:left-[180px] xl:top-60"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/assets/arrow.png"
          alt=""
          width={140}
          height={140}
          className="h-auto w-[95px] xl:w-[120px]"
        />
      </div>
    </div>
  );
}