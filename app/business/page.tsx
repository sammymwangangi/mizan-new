import BusinessHero from "@/components/business/Hero";
import Mountains from "@/components/business/Mountains";
import SecurityCompliance from "@/components/business/SecurityCompliance";
import Footer from "@/components/footer/Footer";
import MizanControlTowerSection from "@/components/business/MizanControlTowerSection";

export default function BusinessPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[--color-bg]">

      <div className="relative z-10">
        <BusinessHero />
        <MizanControlTowerSection />
        <SecurityCompliance />
        <Mountains />
        <Footer />
      </div>
    </main>
  );
}
