import Hero from "@/components/Hero";
import FindsSection from "@/components/FindsSection";
import PageBackground from "@/components/PageBackground";
import AuroraLights from "@/components/AuroraLights";
import HowMizanWorks from "@/components/HowMizanWorks";
import BankGradeTrustSection from "@/components/BankGradeTrustSection";
import MeetRobinSection from "@/components/MeetRobinSection";
import PricingSection from "@/components/pricing/PricingSection";
import OwnFutureSection from "@/components/OwnFutureSection";
import PartnersMarquee from "@/components/PartnersMarquee";
import EarlyAccessSection from "@/components/early-access/EarlyAccessSection";
import Footer from "@/components/footer/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[--color-bg]">

      {/* SVG filter definitions — must exist in the DOM for filter: url(#...)
          to resolve. Hidden visually but accessible to the rendering engine. */}
      <svg
        aria-hidden
        style={{ position: "absolute", width: 0, height: 0 }}
      >
        <defs>
          {/*
            AURORA WARP FILTER
            ──────────────────
            Two-step pipeline:
              1. feTurbulence — generates animated fractal noise.
                 baseFrequency controls "graininess" (lower = smoother flowing,
                 higher = more chaotic). numOctaves adds layers of detail.
                 The <animate> tag on baseFrequency makes the noise pattern
                 evolve over time, which is what creates the rippling effect.
              2. feDisplacementMap — uses the noise to push pixels of the
                 source image around. scale controls how much warping happens.
                 Higher scale = more dramatic distortion.
          */}
          <filter id="aurora-warp" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008 0.012"
              numOctaves="2"
              seed="3"
              result="turbulence"
            >
              {/* Animate baseFrequency over 20s for the warping motion */}
              <animate
                attributeName="baseFrequency"
                dur="20s"
                values="0.008 0.012; 0.014 0.008; 0.008 0.012"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turbulence"
              scale="40"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Main Hero light blob */}
      <div aria-hidden className="pointer-events-none">
        <Image
          src="/assets/hero-light.svg"
          alt=""
          width={1895}
          height={1770}
          className="aurora-image absolute left-[50%] top-[7%] z-10"
        />
      </div>

      {/* Plan light blob — also gets the warp */}
      <div aria-hidden className="pointer-events-none">
        <Image
          src="/assets/plan-light.svg"
          alt=""
          width={1142}
          height={1824}
          className="aurora-image absolute bottom-0 left-1/3 top-4/5 lg:top-[62.5%] xl:top-[65.5%] z-0"
        />
      </div>

      {/* <PageBackground /> */}
      {/* <AuroraLights /> */}
      <div className="relative z-10">
        <Hero />
        <FindsSection />
        <HowMizanWorks />
        <BankGradeTrustSection />
        <MeetRobinSection />
        <PricingSection />
        <OwnFutureSection />
        <PartnersMarquee />
        <EarlyAccessSection />
        <Footer />
      </div>
    </main>
  );
}
