"use client";

import Image from "next/image";

function CheckMark() {
  return (
    <svg
      viewBox="0 0 14 11"
      fill="none"
      className="mt-[2px] h-[11px] w-[14px] flex-shrink-0"
      aria-hidden="true"
    >
      <path
        d="M1 5.5L5 9.5L13 1.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STARTER_FEATURES = [
  "0.8% per settlement (up to $10K)",
  "Document upload & payment requests",
  "Milestone tracking",
  "Standard settlement (T+0 to T+1)",
  "Basic dashboard visibility",
  "Single business access : Single Control Tower",
];

const ENTERPRISE_FEATURES = [
  "AI document verification (AWB, invoice, packing list)",
  "Instant settlement priority lanes",
  "Multi-Entity Control Tower: Multi-user approvals & roles",
  "Real-time trade ledger",
  "Custom payment triggers (milestone-based)",
  "Multi-entity control across regions",
  "24/7 dedicated trade support",
];

export default function PricingTable() {
  return (
    <section
      className="relative w-full overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      style={{
        background:
          "linear-gradient(180deg, #F4EEFF 0%, #E8E2FF 45%, #EEF2FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* ── header ── */}
        <div className="mb-14 text-center">
          <h2
            className="text-[42px] font-bold leading-tight tracking-tight sm:text-[56px]"
            style={{
              background:
                "linear-gradient(180deg, #280137 34.01%, #8A609F 108.79%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Get Started for free
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-[#4a4a6a] sm:text-[17px]">
            No monthly fee to begin. Pay only when value moves — with
            transparent settlement pricing built for exporters, importers, and
            cross-border teams.
          </p>
        </div>

        {/* ── cards ── */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* ── Starter ── */}
          <div
            className="flex flex-col rounded-[24px] p-8 sm:p-10"
            style={{
              background:
                "#5E05A6CC",
            }}
          >
            <div className="mb-6">
              <h3 className="text-[48px] font-medium text-white">Starter</h3>
              <p className="mt-2 text-[18px] leading-snug text-white">
                Full-featured trade essentials with no strings attached.
              </p>
            </div>

            <div className="mb-7 flex items-baseline gap-2">
              <span className="text-[70px] font-bold leading-none text-white">
                $0
              </span>
              <span className="text-[20px] text-[#ACAFB9]">/ per month</span>
            </div>

            <p className="mb-5 text-[13px] font-semibold text-white/90">
              Everything you need to run your first trade.
            </p>

            <ul className="flex-1 space-y-[14px]">
              {STARTER_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-[14px] leading-snug text-white/90">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            <button className="mt-10 w-full rounded-full border border-white/40 py-[14px] text-[15px] font-medium text-white transition-colors hover:bg-white/10">
              Start Free
            </button>
          </div>

          {/* ── Enterprise ── */}
          {/* background: linear-gradient(158.96deg, #210D25 36.89%, #8F00E0 107.81%); */}
          <div
            className="relative flex flex-col overflow-hidden rounded-[24px] p-8 sm:p-10"
            style={{
              background:
                "url('/assets/business/pricing-plan-2.svg') no-repeat center/cover, linear-gradient(158.96deg, #210D25 36.89%, #8F00E0 107.81%)",
            }}
          >

            <div className="relative mb-6">
              <h3 className="text-[48px] font-medium text-white">Enterprise</h3>
              <p className="mt-2 text-[18px] leading-snug text-[#ACAFB9]">
                No setup fee. No monthly fee to begin. Clear pricing before
                settlement.
              </p>
            </div>

            <div className="relative mb-7 flex items-baseline gap-2">
              <span className="text-[70px] font-medium leading-none text-white">
                $500
              </span>
              <span className="text-[20px] text-[#ACAFB9]">/ per month</span>
            </div>

            <p className="relative mb-5 text-[13px] font-semibold leading-snug text-white/75">
              Settlement Fee: 0.3% per transaction (Volume-optimized)
            </p>

            <ul className="relative flex-1 space-y-[14px]">
              {ENTERPRISE_FEATURES.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckMark />
                  <span className="text-[14px] leading-snug text-white/80">
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%); */}
            <button className="cursor-pointer mt-10 w-full rounded-full py-[14px] text-[18px] font-medium text-[#141414]" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.6) 100%)" }} >
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
