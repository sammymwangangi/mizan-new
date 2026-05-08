// components/section7/OwnFutureSection.tsx
"use client";

import Image from "next/image";
import { useScrollEntrance } from "@/lib/useScrollEntrance";

export default function OwnFutureSection() {
  const sectionRef = useScrollEntrance<HTMLElement>();

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="mx-auto flex max-w-[1386px] flex-col items-center px-6 py-16 md:px-10 lg:px-16 lg:py-20">
        <h2
          data-entrance
          className="text-center font-bold text-white"
          style={{
            fontSize: "clamp(2.4rem, 5vw, 64px)",
            lineHeight: "120%",
            letterSpacing: "-0.02em",
          }}
        >
          Own what the future is building
        </h2>

        <p
          data-entrance
          data-entrance-delay="0.15"
          className="mt-5 max-w-[920px] text-center font-normal text-white"
          style={{
            fontSize: "clamp(1rem, 1.6vw, 20px)",
            lineHeight: "150%",
          }}
        >
          From global stocks to tokenised real estate, Mizan helps you access
          screened assets and real-world ownership opportunities &mdash;
          starting from everyday money habits.
        </p>

        <div
          data-entrance
          data-entrance-delay="0.3"
          data-entrance-y="50"
          className="relative mt-12 w-full max-w-[1108px] md:mt-16"
        >
          <Image
            src="/assets/section7/tokens.webp"
            alt="Four collectible tokens representing financial assets"
            width={1108}
            height={739}
            className="h-auto w-full"
            loading="lazy"
            sizes="(min-width: 1108px) 1108px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}