import Hero from "@/components/Hero";
import FindsSection from "@/components/FindsSection";
import PageBackground from "@/components/PageBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[--color-bg]">
      <PageBackground />
      <div className="relative z-10">
        <Hero />
        <FindsSection />
      </div>
    </main>
  );
}
