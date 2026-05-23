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

      <div aria-hidden className="pointer-events-none">
        <Image
          src="/assets/hero-light.svg"
          alt=""
          width={1895}
          height={1770}
          className="absolute left-[50%] top-[7%] z-10 -translate-x-1/2 -translate-y-1/2 opacity-70"
        />
      </div>

      <div aria-hidden className="pointer-events-none">
        <Image
          src="/assets/plan-light.svg"
          alt=""
          width={1142}
          height={1824}
          className="absolute bottom-0 left-1/3 top-4/5 lg:top-[62.5%] xl:top-[65.5%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-70"
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
