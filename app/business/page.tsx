import BusinessHero from "@/components/business/Hero";
import Mountains from "@/components/business/Mountains";
import SecurityCompliance from "@/components/business/SecurityCompliance";
import Footer from "@/components/footer/Footer";
import MizanControlTowerSection from "@/components/business/MizanControlTowerSection";
import MoveMoney from "@/components/business/MoveMoney";
import MoveFaster from "@/components/business/MoveFaster";
import PricingTable from "@/components/business/PricingTable";
import CrossBorder from "@/components/business/CrossBorder";

export default function BusinessPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[--color-bg]">

      <div className="relative z-10">
        <BusinessHero />
        <MoveMoney />
        <MizanControlTowerSection />
        <MoveFaster />
        <PricingTable />
        <CrossBorder />
        <SecurityCompliance />
        <Mountains />
        <Footer />
      </div>
    </main>
  );
}
