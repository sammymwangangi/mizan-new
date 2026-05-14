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

      <div>
        <Image
          src="/assets/right-light-hero.svg"
          alt="Light blob"
          width={858}
          height={1344}
          className="absolute top-0 right-0 z-20"
        />
      </div>

      <PageBackground />
      <AuroraLights />
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
