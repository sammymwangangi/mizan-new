"use client";

import Navbar from "@/components/Navbar";
import { useHeroEntrance } from "@/lib/useGsapEntrance";
import Image from "next/image";

export default function BusinessHero() {
  const sectionRef = useHeroEntrance<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="relative w-full px-4 py-4 md:px-6 md:py-6 lg:px-8 lg:py-8"
      style={{
        backgroundImage: "url('/assets/business/globe.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative mx-auto w-full overflow-hidden min-h-[985px] lg:h-screen xl:h-screen">
        <Navbar />
        <div className="relative z-10 mt-20 mx-auto max-w-[900px]">
          {/* Heading : background: linear-gradient(87.76deg, #FFFFFF 31.85%, #AB5ED7 82.73%);*/}
          <h1
            className="text-[68px] font-semibold text-white text-center"
            style={{
              background:
                "linear-gradient(87.76deg, #FFFFFF 31.85%, #AB5ED7 82.73%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            AI-Powered Global Trade. Instant Settlement.
          </h1>
          {/* Subheading */}
          <h2 className="mt-4 text-[16px] font=medium text-white text-center">
            No more WhatsApp threads, lost paperwork, or manual delays. From
            documentation to instant payment, Mizan gives exporters, importers,
            and cross-border businesses a faster, cleaner way to move money.
          </h2>
          {/* CTA Buttons */}
          <div className="mt-16 flex justify-center space-x-8">
            <button className="bg-[#8F00E0] text-white font-medium text-[16px] px-4 py-3 rounded-[10px] cursor-pointer">
              Book a demo
              <span className="ml-2 inline-block transform transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>
            <button className="bg-transparent text-[#BEBEBE] text-[16px] cursor-pointer">
              See how it works
            </button>
          </div>

          {/* Two cards */}
          <div className="mt-20 flex flex-col md:flex-row gap-8 items-center">
            <div className="relative rounded-3xl h-[257px] w-[382px] bg-black">
              <Image
                src="/assets/business/chip.png"
                alt="chip"
                width={30}
                height={24}
                className="absolute bottom-[50%] right-10 z-0"
                priority
              />

              <Image
                src="/assets/business/mastercard.png"
                alt="mastercard logo"
                width={60}
                height={40}
                className="absolute bottom-2 right-10 z-0"
                priority
              />

              <h2 className="absolute bottom-[10%] left-4 z-10 text-[#6E6E6E] font-bold text-[11px]">
                Global Pass
              </h2>

            </div>
            <div className="bg-white rounded-[24px] flex-1 flex-col h-[140px]">
              <div className="flex p-4 bg-[#F6E2F8] rounded-t-2xl">
                {/* svg image */}
                <Image
                  src="/assets/business/avocado.svg"
                  alt="AI Icon"
                  width={33}
                  height={33}
                />
                <div className="ml-4 flex flex-col">
                  <h3 className="text-[18px] font-medium text-black mb-2">
                    Nairobi - Amsterdam
                  </h3>
                  <p className="text-[14px] text-[#6E6E6E]">
                    1,750 kg Hass Avocados
                  </p>
                </div>
              </div>
              <div className="flex px-4 pt-[10px] pb-4">
                <div className="flex flex-col">
                  <p className="text-[12px] text-[#6E6E6E]">Payment Received</p>
                  <div className="flex space-x-1">
                    <h3 className="text-[16px] font-medium text-black">
                      Nairobi - Amsterdam
                    </h3>
                    <button className="bg-[#CCFFF0] text-[#141414] text-[14px] px-[3px] py-px rounded-[5px] cursor-pointer">
                      50% paid
                    </button>
                  </div>
                </div>
                <div>{/* graph */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
