"use client";

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
                "linear-gradient(160deg, #9B6DFF 0%, #7350FF 55%, #5C35E8 100%)",
            }}
          >
            <div className="mb-6">
              <h3 className="text-[32px] font-bold text-white">Starter</h3>
              <p className="mt-2 text-[14px] leading-snug text-white/80">
                Full-featured trade essentials with no strings attached.
              </p>
            </div>

            <div className="mb-7 flex items-baseline gap-2">
              <span className="text-[68px] font-bold leading-none text-white">
                $0
              </span>
              <span className="text-[15px] text-white/65">/ per month</span>
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
          <div
            className="relative flex flex-col overflow-hidden rounded-[24px] p-8 sm:p-10"
            style={{
              background:
                "linear-gradient(180deg, #3A1268 0%, #1C0848 45%, #0D0420 100%)",
            }}
          >
            {/* light-ray glow */}
            <div
              className="pointer-events-none absolute -top-10 -right-10 h-[320px] w-[320px]"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 20%, rgba(200,160,255,0.55) 0%, rgba(150,90,255,0.25) 35%, transparent 65%)",
              }}
            />
            {/* secondary shimmer streaks */}
            <div
              className="pointer-events-none absolute top-0 right-0 h-[260px] w-[200px]"
              style={{
                background:
                  "conic-gradient(from 210deg at 85% 10%, transparent 0deg, rgba(255,255,255,0.12) 15deg, transparent 30deg, rgba(255,255,255,0.07) 50deg, transparent 70deg)",
                filter: "blur(6px)",
              }}
            />

            <div className="relative mb-6">
              <h3 className="text-[32px] font-bold text-white">Enterprise</h3>
              <p className="mt-2 text-[14px] leading-snug text-white/65">
                No setup fee. No monthly fee to begin. Clear pricing before
                settlement.
              </p>
            </div>

            <div className="relative mb-7 flex items-baseline gap-2">
              <span className="text-[68px] font-bold leading-none text-white">
                $500
              </span>
              <span className="text-[15px] text-white/55">/ per month</span>
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

            <button className="relative mt-10 w-full rounded-full border border-white/25 py-[14px] text-[15px] font-medium text-white transition-colors hover:bg-white/10">
              Book a demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
