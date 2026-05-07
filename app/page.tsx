import Hero from "@/components/Hero";
import FindsSection from "@/components/FindsSection";
import PageBackground from "@/components/PageBackground";
import HowMizanWorks from "@/components/HowMizanWorks";
import BankGradeTrustSection from "@/components/BankGradeTrustSection";
import MeetRobinSection from "@/components/MeetRobinSection";


export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[--color-bg]">

      <PageBackground />
      <div className="relative z-10">
        <Hero />
        <FindsSection />
        <HowMizanWorks />
        <BankGradeTrustSection />
        <MeetRobinSection />
      </div>
    </main>
  );
}
