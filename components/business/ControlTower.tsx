import Image from "next/image";

export default function ControlTower() {
  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0.54)_28%,transparent_52%),linear-gradient(115deg,#f8dfff_0%,#ffffff_52%,#dcd5ff_100%)] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24 h-screen">
      <div className="mx-auto w-full max-w-[1360px]">
        <h2 className="text-center text-[40px] font-extrabold leading-[1.08] text-black sm:text-[52px] lg:text-[64px]">
          Mizan Control Tower : All-in-one suite
        </h2>

        <p className="mx-auto mt-6 max-w-[700px] text-center text-[16px] font-normal leading-[1.5] text-[#333333] sm:text-[18px] lg:text-[20px]">
          Create trades, run AI-powered document checks, request payment, track
          milestones, and manage settlement — all in one secure trade control
          tower.
        </p>

        <div className="mt-14 lg:mt-[76px] lg:gap-9">
          <Image
            src="/assets/business/control-tower.svg"
            alt=""
            fill
            sizes="(min-width: 1440px) 1340px, calc(100vw - 40px)"
            className=""
            priority
          />
          
        </div>
      </div>
    </section>
  );
}
