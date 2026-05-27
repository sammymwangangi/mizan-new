import Image from "next/image";

export default function SecurityCompliance() {
  return (
    <section className="relative w-full bg-white px-5 py-8 sm:px-8 md:py-10 lg:px-12 lg:py-12">
        <h2 className="text-black font-semibold text-[64px]">Security & Compliance</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

        <div className="rounded-lg bg-[#E6E6E6] p-6 h-[282px] w-[440px]">
          <h3 className="text-xl font-semibold mb-4">Fully Licensed & Compliant</h3>
          <p className="text-gray-700">Mizan operates under strict financial regulations, ensuring your business is always backed by secure practices.</p>
        </div>

      </div>
    </section>
  );
}
