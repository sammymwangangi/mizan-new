import Image from "next/image";

function MinusIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 72 72" className="h-10 w-10" fill="none">
      <rect x="18" y="30" width="36" height="12" rx="6" stroke="white" strokeWidth="5" />
      <path d="M14 42h15" stroke="white" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function MoveMoney() {
  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,0.98),rgba(255,255,255,0.72)_22%,transparent_42%),linear-gradient(112deg,#f9e0ff_0%,#ffffff_50%,#dcd7ff_100%)] px-5 pb-14 pt-16 sm:px-8 md:pb-18 md:pt-20 lg:px-12 lg:pb-20">
      <div className="mx-auto max-w-[1360px]">
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
          <h2 className="bg-[linear-gradient(180deg,#280137_34%,#8a609f_109%)] bg-clip-text text-[44px] font-extrabold leading-[1.08] text-transparent sm:text-[64px] lg:text-[72px]">
            Move money today, mountains tomorrow.
          </h2>
          <p className="max-w-[710px] text-[16px] font-normal leading-[1.5] text-[#34313a] sm:text-[18px]">
            From payment initiation to final settlement, Mizan Trade helps
            exporters and cross-border businesses move with more speed, more
            clarity, and less friction.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 items-end gap-5 lg:grid-cols-[1fr_1fr_1fr] lg:gap-4 xl:gap-6">
          <article className="relative flex min-h-[420px] flex-col rounded-[30px] bg-white/88 p-8 shadow-[0_24px_80px_rgba(80,36,132,0.10)] ring-1 ring-black/[0.03] sm:min-h-[480px] sm:p-11 lg:min-h-[516px]">
            <div className="grid h-[62px] w-[62px] place-items-center rounded-[14px] bg-[linear-gradient(145deg,#c98dff,#8f00e0)] shadow-[0_14px_30px_rgba(143,0,224,0.24)]">
              <Image src="/assets/business/fast.png" alt="" width={38} height={38} />
            </div>

            <h3 className="mt-8 max-w-[330px] text-[42px] font-extrabold leading-[1.1] tracking-[-0.01em] text-black sm:text-[52px]">
              Get paid
              <br />
              <span className="text-[#8f00e0]">3 x faster</span>
            </h3>

            <div className="mt-10 h-px w-full bg-[#ded8f3]" />

            <p className="mt-7 max-w-[360px] text-[18px] font-semibold leading-[1.2] text-black">
              Settle in minutes, not days. Keep cash moving across your business.
            </p>

            <div className="mt-auto pt-9">
              <div className="flex items-center justify-end text-[16px] font-medium text-[#777179]">
                <span>08:10 Min</span>
              </div>
              <div className="mt-2 h-[18px] overflow-hidden rounded-full bg-[#dfb1fa]">
                <div className="h-full w-[69%] rounded-full bg-black" />
              </div>
            </div>
          </article>

          <article className="relative min-h-[516px] overflow-hidden rounded-[30px] bg-[#150d2d] shadow-[0_26px_90px_rgba(52,20,105,0.28)]">
            <Image
              src="/assets/business/network.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover object-[52%_28%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,5,36,0)_0%,rgba(12,5,36,0.18)_48%,rgba(12,5,36,0.92)_72%)]" />

            <div className="absolute left-[20%] top-[17%] rounded-md border border-violet-300/20 bg-[#211247]/70 px-2.5 py-1.5 text-[11px] text-white shadow-[0_8px_22px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span>🇬🇧</span>
                <div className="leading-tight">
                  <div>GBP</div>
                  <div className="text-white/70">£30,281</div>
                </div>
              </div>
            </div>
            <div className="absolute right-[22%] top-[16%] rounded-md border border-violet-300/20 bg-[#211247]/70 px-2.5 py-1.5 text-[11px] text-white shadow-[0_8px_22px_rgba(0,0,0,0.18)] backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span>🇯🇵</span>
                <div className="leading-tight">
                  <div>JPY</div>
                  <div className="text-white/70">¥85,450</div>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-[33%] w-[70%] -translate-x-1/2 overflow-hidden rounded-[24px] bg-white/78 text-black shadow-[0_24px_70px_rgba(0,0,0,0.20)] ring-1 ring-white/60 backdrop-blur-[6px]">
              <div className="flex min-h-[84px] items-center justify-between bg-[#ded5ff]/62 px-5">
                <h3 className="text-[22px] font-semibold tracking-[-0.01em] sm:text-[25px]">
                  Dubai → Nairobi
                </h3>
                <span className="rounded-md bg-[#bdf6d9]/80 px-3 py-1 text-[16px] font-medium text-[#145c37]">
                  Completed
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 bg-white/70 px-5 py-5">
                <div>
                  <p className="text-[18px] text-[#6d6872]">Payment Received</p>
                  <p className="mt-1 text-[25px] font-semibold text-black">USD 9,500</p>
                </div>
                <div>
                  <p className="text-[18px] text-[#6d6872]">Settled in</p>
                  <p className="mt-1 text-[25px] font-bold text-[#3b9655]">11 Mins</p>
                </div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 rounded-t-[28px] bg-[#171029]/96 px-8 py-8 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-[18px] font-medium sm:text-[20px]">
                  Today's settlements
                </h3>
                <a href="#" className="text-[18px] font-medium text-white">
                  View all
                </a>
              </div>
              <div className="mt-5 border-t border-dashed border-white/45 pt-5">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[15px] text-white/28">Total Volume</p>
                    <p className="mt-4 text-[18px]">$ 150K</p>
                  </div>
                  <div className="border-x border-dashed border-white/35 px-7">
                    <p className="text-[15px] text-white/28">Transactions</p>
                    <p className="mt-4 text-[18px]">128</p>
                  </div>
                  <div>
                    <p className="text-[15px] text-white/28">Success Rate</p>
                    <p className="mt-4 text-[18px] font-bold text-[#56e187]">
                      99.7%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article className="relative flex min-h-[420px] flex-col rounded-[30px] bg-white/92 p-8 shadow-[0_24px_80px_rgba(80,36,132,0.10)] ring-1 ring-black/[0.03] sm:min-h-[480px] sm:p-11 lg:min-h-[516px]">
            <Image
              src="/assets/business/shield.png"
              alt=""
              width={51}
              height={58}
              className="h-[58px] w-[51px]"
            />

            <h3 className="mt-8 max-w-[390px] text-[40px] font-medium text-black">
              Save up to
              <br />
              <span className="text-[#8f00e0] font-semibold text-[52px]">70% on fees.</span>
            </h3>

            <div className="mt-9 h-px w-full bg-[#ded8f3]" />

            <p className="mt-6 text-[18px] font-semibold leading-[1.25] text-black">
              Transparent pricing. No hidden charges.
            </p>

            <div className="relative mt-8 max-w-[320px]">
              <div className="absolute -left-4 -top-6 z-10 grid h-[72px] w-[72px] place-items-center rounded-full bg-[#ede7f8]">
                <div className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[linear-gradient(145deg,#c98dff,#8f00e0)]">
                  <MinusIcon />
                </div>
              </div>

              <div className="relative ml-5 rounded-[54px] bg-white/86 px-9 py-8 text-center shadow-[0_16px_40px_rgba(91,45,132,0.08)] ring-[10px] ring-white">
                <p className="text-[16px] font-medium text-black">You saved</p>
                <p className="mt-4 text-[36px] font-normal leading-none text-[#2b2a2e]">
                  $ <span className="font-extrabold text-[#744cff]">450.00</span>{" "}
                  <span className="text-[26px]">USD</span>
                </p>
                <p className="mt-5 text-[18px] font-medium italic text-black">
                  in Sept
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
