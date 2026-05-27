import Image from "next/image";

function ArrowRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 18 18"
      className="h-4 w-4"
      fill="none"
    >
      <path
        d="M4 9h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Mountains() {
  return (
    <section className="relative w-full bg-white px-5 py-8 sm:px-8 md:py-10 lg:px-12 lg:py-12">
      <div className="relative mx-auto h-[430px] w-full max-w-[1340px] overflow-hidden rounded-[38px] bg-black shadow-[0_24px_80px_rgba(0,0,0,0.18)] sm:h-[520px] sm:rounded-[48px] lg:h-[787px] lg:rounded-[70px]">
        <Image
          src="/assets/business/mountains.svg"
          alt=""
          fill
          sizes="(min-width: 1440px) 1340px, calc(100vw - 40px)"
          className="absolute inset-0 z-0 object-cover"
          priority
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_44%,rgba(255,255,255,0.10),transparent_25%),linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.16)_45%,rgba(0,0,0,0.38))]"
        />

        <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center sm:px-10">
          <h2 className="max-w-[760px] bg-[linear-gradient(88deg,#ffffff_18%,#ffffff_46%,#c982f1_82%)] bg-clip-text text-[42px] font-extrabold leading-[1.08] text-transparent sm:text-[56px] lg:text-[68px]">
            Ready to move mountains?
          </h2>

          <p className="mt-8 max-w-[500px] text-[13px] font-normal leading-[1.55] text-white/90 sm:text-[15px] lg:mt-10">
            From documents to settlement, Mizan Trade gives cross-border teams
            one secure control tower to move faster, reduce delays, and keep
            every trade visible.
          </p>

          <button className="mt-10 inline-flex h-12 min-w-[178px] items-center justify-center gap-5 rounded-[10px] bg-[linear-gradient(60deg,#d155ff_2%,#b532f2_22%,#9406e2_52%,#a08cff_98%)] px-7 text-[13px] font-semibold text-white shadow-[0_14px_34px_rgba(143,0,224,0.36)] transition duration-200 hover:scale-[1.02] hover:shadow-[0_18px_42px_rgba(143,0,224,0.46)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#c982f1] focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:text-[14px]">
            Book a demo
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
