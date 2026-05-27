import Hero from "@/components/Hero";
import Mountains from "@/components/business/Mountains";
import SecurityCompliance from "@/components/business/SecurityCompliance";
import Footer from "@/components/footer/Footer";

export default function BusinessPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[--color-bg]">

      <div className="relative z-10">
        <Hero />
        <SecurityCompliance />
        <Mountains />
        <Footer />
      </div>
    </main>
  );
}
