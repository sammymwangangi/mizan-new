// components/pricing/NoorCard.tsx
import Image from "next/image";

const NOOR_FEATURES = [
  "Free account",
  "Smart virtual card",
  "Access to waitlist for real estate tokens",
  "Spending insights",
  "Zakat calculator for clear obligations",
  "Real-time balance and activity",
];

/**
 * NoorCard — Free tier ("The spark of a new habit")
 * --------------------------------------------------
 * 420 × 650. Layout:
 *   - Top: name, tagline, price (Free)
 *   - Divider
 *   - "What You Get" + checkmark feature list
 *   - Bottom: "Start Free" button + "Forever. No card required." caption
 *
 * Visual: glassmorphic surface with soft purple-violet gradient.
 * Same diagonal light rays as section 3/5 cards (top-left).
 */
export default function NoorCard() {
  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-[28px] border border-white/10"
      style={{
        width: "100%",
        maxWidth: "420px",
        height: "650px",
        background: "linear-gradient(152.54deg, rgba(240, 233, 255, 0.14) 2.04%, rgba(184, 157, 235, 0.55) 31.78%, rgba(119, 89, 201, 0.9) 66.48%, #332857 101.18%)",
        backdropFilter: "blur(20px) saturate(150%)",
        WebkitBackdropFilter: "blur(20px) saturate(150%)",
        boxShadow:
          "0 24px 60px -20px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.10)",
      }}
    >
      {/* Top-left light rays — same recipe as section 3 cards */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden"
        style={{ borderRadius: "28px" }}
      >
        <div
          className="absolute"
          style={{
            top: "-280px",
            left: "60px",
            width: "500px",
            height: "10px",
            transform: "rotate(60deg)",
            transformOrigin: "top left",
          }}
        >
          <div
            className="absolute animate-ray-shimmer-1"
            style={{
              top: "120px",
              left: "10px",
              width: "350px",
              height: "30px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.45) 50%, transparent 95%)",
              filter: "blur(7px)",
            }}
          />
          <div
            className="absolute animate-ray-shimmer-2"
            style={{
              top: "70px",
              left: "20px",
              width: "400px",
              height: "30px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.45) 50%, transparent 95%)",
              filter: "blur(7px)",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-7 lg:p-8">
        {/* Plan name + tagline */}
        <h3 className="text-[26px] font-bold text-white">Noor</h3>
        <p className="mt-1 text-[14px] italic text-white/85">
          The spark of a new habit.
        </p>

        {/* Price */}
        <div className="mt-7">
          <span className="text-[44px] font-bold leading-none text-white">
            Free
          </span>
        </div>

        {/* Divider */}
        <div className="mt-6 h-px w-full bg-white/15" />

        {/* What You Get */}
        <p className="mt-6 text-[14px] font-medium text-white/85">What You Get</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {NOOR_FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
              {/* Checkmark in circle */}
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-white/40">
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                  <path
                    d="M2 4.5 L4 6.5 L7 2.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[13px] leading-[1.5] text-white/90">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* Spacer pushes button to bottom */}
        <div className="flex-1" />

        {/* CTA button */}
        <a
          href="#start-free"
          className="group relative flex items-center justify-center rounded-full border border-white/25 px-6 py-3.5 text-[14px] font-medium text-white bg-[#00000033] transition-all duration-300  hover:bg-white/10 hover:-translate-y-0.5"
        >
          Start Free
        </a>

        {/* Footer caption */}
        <p className="mt-3 text-center text-[11px] italic text-white/55">
          Forever. No card required.
        </p>
      </div>
    </article>
  );
}
