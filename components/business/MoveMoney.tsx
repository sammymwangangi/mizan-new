import Image from "next/image";
import GetPaidCard from "./GetPaidCard";
import SaveCard from "./SaveCard";

export default function MoveMoney() {
  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(112deg,#f9e0ff_0%,#ffffff_50%,#dcd7ff_100%)] px-5 pb-14 pt-16 sm:px-8 md:pb-18 md:pt-20 lg:px-12 lg:pb-20">
      {/* Aurora background layers */}
      <div className="movemoney-aurora absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute" style={{ top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.15) 30%, transparent 60%)", filter: "blur(150px)" }} />
        <div className="absolute" style={{ top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(ellipse 800px 600px at 30% 40%, rgba(209,85,255,0.6) 0%, transparent 50%)", filter: "blur(110px)", animation: "aurora1 15s ease-in-out infinite" }} />
        <div className="absolute" style={{ top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(ellipse 700px 700px at 70% 60%, rgba(97,66,255,0.6) 0%, transparent 50%)", filter: "blur(110px)", animation: "aurora2 18s ease-in-out infinite" }} />
        <div className="absolute" style={{ top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(ellipse 600px 800px at 50% 70%, rgba(209,85,255,0.5) 0%, transparent 50%)", filter: "blur(120px)", animation: "aurora3 20s ease-in-out infinite" }} />
        <div className="absolute" style={{ top: "-50%", left: "-50%", width: "200%", height: "200%", background: "radial-gradient(ellipse 750px 550px at 40% 30%, rgba(97,66,255,0.5) 0%, transparent 50%)", filter: "blur(120px)", animation: "aurora4 22s ease-in-out infinite" }} />
      </div>

      <div className="relative z-10 mx-auto max-w-[1360px]">
        <div className="mx-auto flex min-h-[44px] w-full max-w-[444px] items-center justify-center gap-4 rounded-full border border-[#cfc6ff] bg-white/85 px-6 shadow-[0_12px_34px_rgba(85,42,140,0.08)] backdrop-blur-sm">
          <Image
            src="/assets/business/badge.png"
            alt=""
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <p className="text-[16px] font-semibold text-black sm:text-[18px]">
            Why businesses choose Mizan Trade
          </p>
        </div>

        <div className="mx-auto mt-4 flex max-w-[760px] flex-col items-center gap-6 text-center">
          <h2
            className="movemoney-heading bg-[linear-gradient(180deg,#280137_34%,#8a609f_109%)] bg-clip-text text-[64px] font-extrabold leading-[1.08] text-transparent"
            style={{ animation: "headingGlow 3s ease-in-out infinite" }}
          >
            Move money today, mountains tomorrow.
          </h2>
          <p className="max-w-[710px] text-[16px] font-normal leading-[1.5] text-[#34313a] sm:text-[18px]">
            From payment initiation to final settlement, Mizan Trade helps
            exporters and cross-border businesses move with more speed, more
            clarity, and less friction.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-end gap-5 lg:grid-cols-[1fr_1fr_1fr] lg:gap-4 xl:gap-6">
          <GetPaidCard />

          <article className="relative w-[443px] min-h-[510px] overflow-hidden rounded-[30px] bg-[#150d2d] shadow-[0_26px_90px_rgba(52,20,105,0.28)]">
            <Image
              src="/assets/business/network.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-[52%_28%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,5,36,0)_0%,rgba(12,5,36,0.18)_48%,rgba(12,5,36,0.92)_72%)]" />

            <Image
              src="/assets/business/Card.png"
              alt=""
              width={307}
              height={143}
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover absolute left-20 top-[33%] w-[307px] h-[143px]"
            />

            <div className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-[#171029]/96 px-8 py-8 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-[15px]">
                  Today's settlements
                </h3>
                <a href="#" className="text-[15px] text-white">
                  View all
                </a>
              </div>
              <div className="mt-5 border-t border-dashed border-white/45 pt-5">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[12px] text-[#55546E]">Total Volume</p>
                    <p className="mt-4 text-[15px]">$ 150K</p>
                  </div>
                  <div className="border-x border-dashed border-white/35 px-7">
                    <p className="text-[12px] text-[#55546E]">Transactions</p>
                    <p className="mt-4 text-[15px]">128</p>
                  </div>
                  <div>
                    <p className="text-[12px] text-[#55546E]">Success Rate</p>
                    <p className="mt-4 text-[15px] font-bold text-[#67E691]">
                      99.7%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <SaveCard />
        </div>
      </div>
    </section>
  );
}
