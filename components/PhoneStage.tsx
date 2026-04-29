"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

/**
 * PhoneStage v4
 * -------------
 * The stage container is sized 680×760 (set by parent in Hero.tsx).
 * Inside it:
 *   - iPhone is anchored bottom-right (so its wrist bleeds off the card)
 *   - Coin and arrow are positioned over the phone's upper-left area
 *   - 3D tilt + parallax all run relative to the stage rect
 */
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

      const PHONE_TILT = 9;
      const COIN_PARALLAX = 32;
      const ARROW_PARALLAX = 20;

      const tiltX = gsap.quickTo(phone, "rotationX", {
        duration: 0.6,
        ease: "power3.out",
      });
      const tiltY = gsap.quickTo(phone, "rotationY", {
        duration: 0.6,
        ease: "power3.out",
      });
      const coinX = gsap.quickTo(coin, "x", {
        duration: 0.7,
        ease: "power3.out",
      });
      const coinY = gsap.quickTo(coin, "y", {
        duration: 0.7,
        ease: "power3.out",
      });
      const arrowX = gsap.quickTo(arrow, "x", {
        duration: 0.7,
        ease: "power3.out",
      });
      const arrowY = gsap.quickTo(arrow, "y", {
        duration: 0.7,
        ease: "power3.out",
      });

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
        tiltX(0);
        tiltY(0);
        coinX(0);
        coinY(0);
        arrowX(0);
        arrowY(0);
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
      {/* iPhone anchored bottom-right of the stage so wrist bleeds off card.
          width 587, height auto preserves aspect ratio. */}
      <div
        ref={phoneRef}
        className="tilt-target absolute -right-30 md:right-0 lg:right-0 top-0 flex items-start justify-end"
      >
        <Image
          src="/assets/iphone.svg"
          alt="Mizan app on iPhone"
          width={770}
          height={1040}
          priority
          sizes="770px"
          className="h-auto w-[770px] drop-shadow-[0_50px_100px_rgba(0,0,0,0.55)]"
        />
      </div>

      {/* Floating coin — over phone's upper-left area */}
      <div
        ref={coinRef}
        data-anim="float-coin"
        className="float-slow absolute left-[30px] top-80 z-10"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/assets/coin.png"
          alt=""
          width={170}
          height={170}
          className="h-auto w-[150px] drop-shadow-[0_24px_50px_rgba(124,92,255,0.45)]"
        />
      </div>

      {/* Floating arrow — between coin and phone, pointing up-right */}
      <div
        ref={arrowRef}
        data-anim="float-arrow"
        className="float-fast absolute left-[180px] top-60 z-10"
        style={{ willChange: "transform" }}
      >
        <Image
          src="/assets/arrow.png"
          alt=""
          width={140}
          height={140}
          className="h-auto w-[120px]"
        />
      </div>
    </div>
  );
}
