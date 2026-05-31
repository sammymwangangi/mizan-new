"use client";

import Image from "next/image";

/* ─── sub-components ───────────────────────────────────────────────────── */

/** White-ring badge with dark-gradient inner circle + white checkmark */
function CheckBadge() {
  return (
    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_2px_10px_rgba(0,0,0,0.22)]">
      <span
        className="flex h-[22px] w-[22px] items-center justify-center rounded-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.20) 0%, transparent 100%), linear-gradient(180deg, #280137 34.01%, #8A609F 108.79%)",
        }}
      >
        {/* checkmark */}
        <svg
          viewBox="0 0 12 9"
          fill="none"
          className="h-[9px] w-[11px]"
          aria-hidden="true"
        >
          <path
            d="M1 4.5L4.5 8L11 1"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  );
}

/** Soft-purple circle badge with white × mark */
function XBadge() {
  return (
    <span
      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full"
      style={{ background: "rgba(111,111,255,0.15)" }}
    >
      <svg
        viewBox="0 0 10 10"
        fill="none"
        className="h-[10px] w-[10px]"
        aria-hidden="true"
      >
        <path
          d="M1 1L9 9M9 1L1 9"
          stroke="#6F6FFF"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}

/* ─── comparison card ───────────────────────────────────────────────────── */

interface ComparisonCardProps {
  title: string;
  variant: "positive" | "negative";
  items: string[];
}

function ComparisonCard({ title, variant, items }: ComparisonCardProps) {
  const isPositive = variant === "positive";

  return (
    <div
      className="flex-1 rounded-[24px] p-7 transition-transform duration-300 hover:-translate-y-1"
      style={
        isPositive
          ? {
              background:
                "linear-gradient(232.96deg, rgba(111,111,255,0.92) -1.86%, #7350FF 101.06%)",
              boxShadow: "0 18px 40px rgba(115,80,255,0.24)",
              border: "1px solid rgba(255,255,255,0.38)",
            }
          : {
              background: "rgba(255,255,255,0.98)",
              boxShadow: "0 12px 32px rgba(115,80,255,0.08)",
              border: "1px solid rgba(115,80,255,0.10)",
            }
      }
    >
      <h3
        className={`text-[20px] font-bold leading-tight sm:text-[24px] ${
          isPositive ? "text-white" : "text-[#14143a]"
        }`}
      >
        {title}
      </h3>

      {/* divider */}
      <div
        className={`mt-3 mb-5 h-px ${
          isPositive ? "bg-white/25" : "bg-[#e2e0f0]"
        }`}
      />

      <ul className="space-y-[14px]">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            {isPositive ? <CheckBadge /> : <XBadge />}
            <span
              className={`text-[14px] font-medium leading-snug sm:text-[15px] ${
                isPositive ? "text-white/95" : "text-[#3a3760]"
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── section edge decorations (Figma SVG exports) ─────────────────────── */

function SideLines({ side }: { side: "left" | "right" }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/assets/business/${side}-side-lines.svg`}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none select-none absolute top-0 h-full w-auto ${
        side === "left" ? "left-0" : "right-0"
      }`}
      style={{ zIndex: 0 }}
    />
  );
}

/* ─── data ──────────────────────────────────────────────────────────────── */

const MIZAN_ITEMS = [
  "24/7 settlements",
  "From ~0.5% per transaction",
  "Documents trigger payments",
  "Live milestone tracking",
  "Stablecoin-powered settlement rails",
  "One control tower for trade teams",
];

const BANK_ITEMS = [
  "Payments limited to banking hours",
  "High SWIFT / RTGS fees (2–4%)",
  "Documents separate from payments",
  "No real-time tracking",
  "Manual follow-ups & approvals",
  "Unpredictable FX rates & hidden spreads",
];

/* ─── section ───────────────────────────────────────────────────────────── */

export default function MoveFaster() {
  return (
    <section
      className="relative w-full overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      style={{
        background: "linear-gradient(180deg, #F4EEFF 0%, #E8E2FF 45%, #EEF2FF 100%)",
      }}
    >

      {/* ── glass card ── */}
      <div
        className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[32px] shadow-[0_35px_90px_rgba(115,80,255,0.12)] px-7 py-10 sm:px-10 sm:py-14"
      >
        {/* side lines clipped inside the card */}
        <SideLines side="left" />
        <SideLines side="right" />

        {/* ── header ── */}
        <header className="relative z-10 mb-10 text-center">
          <h2 className="text-[38px] font-semibold leading-[1.1] tracking-tight text-[#0e0e20] sm:text-[50px] lg:text-[64px]">
            Time is money, save both.
            <br />
            Move faster, pay less.
          </h2>
          <p className="mx-auto mt-4 max-w-[440px] text-[15px] leading-relaxed text-black sm:text-[20px]">
            Global trade doesn&apos;t wait for office hours. Neither should
            your money.
          </p>
        </header>

        {/* ── comparison cards ── */}
        <div className="relative z-10 grid gap-5 md:grid-cols-2">
          <ComparisonCard
            title="Mizan Trade"
            variant="positive"
            items={MIZAN_ITEMS}
          />
          <ComparisonCard
            title="Traditional Banks"
            variant="negative"
            items={BANK_ITEMS}
          />
        </div>

        {/* ── footer ── */}
        <p className="relative z-10 mt-10 text-center text-[14px] text-[#9090b0] sm:text-[20px]">
          Trade moves every day. Your money should too.
        </p>
      </div>
    </section>
  );
}
