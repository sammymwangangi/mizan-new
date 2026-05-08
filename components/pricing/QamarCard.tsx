// components/pricing/QamarCard.tsx
import Image from "next/image";

const QAMAR_FEATURES = [
  "Everything in Noor",
  "Physical + virtual card",
  "Robin helps you prioritise goals",
  "Access to Dubai real estate tokens",
  "Unlimited savings goals + 3 giving goals",
  "Access to Shariah-screened index funds",
];

/**
 * QamarCard — Mid tier ("For building with more guidance")
 * --------------------------------------------------------
 * 420 × 650. Same skeleton as Noor with these differences:
 *   - Different gradient (lighter, more violet-leaning)
 *   - Slightly stronger border (#F3E8FF1F = white at 12% opacity)
 *   - "(one month on us)" promo line under the price
 *   - Solid white "Unlock Qamar" button (vs. Noor's outline)
 *   - Two-line footer caption
 *   - square-pattern.svg decoration near the "month" word
 *
 * The square pattern is positioned absolutely near the price line,
 * subtly bleeding past the right edge of the visible price area.
 */
export default function QamarCard() {
  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-[28px]"
      style={{
        width: "100%",
        maxWidth: "420px",
        height: "650px",
        background:
          "linear-gradient(151.79deg, rgba(111, 0, 177, 0.1) 0%, rgba(174, 99, 230, 0.6) 34.05%, rgba(66, 16, 62, 0.7) 68.18%, #220418 98.87%)",
        border: "1px solid #F3E8FF1F",
        backdropFilter: "blur(1px) saturate(150%)",
        WebkitBackdropFilter: "blur(1px) saturate(150%)",
        boxShadow:
          "0 24px 60px -20px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.10)",
      }}
    >

      {/* Square pattern — sits behind/near the "month" word, subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-0"
        style={{
          top: "100px",
          right: "0px",
          width: "180px",
          height: "120px",
          opacity: 1,
        }}
      >
        <Image
          src="/assets/section6/square-pattern.svg"
          alt=""
          fill
          className="object-contain object-right"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col p-7 lg:p-8">
        {/* Plan name + tagline */}
        <h3 className="text-[36px] font-medium text-white">Qamar</h3>
        <p className="mt-1 text-[20px] italic font-medium text-white/85">
          For building with more guidance
        </p>

        {/* Price + promo */}
        <div className="mt-7">
          <div className="flex items-baseline gap-1">
            <span className="text-[32px] font-medium leading-none text-white">
              KES 350
            </span>
            <span className="text-[32px] font-medium text-white/85">
              /month
            </span>
          </div>
          <p className="mt-1 text-[15px] italic font-medium text-white/70">
            (one month on us)
          </p>
        </div>

        {/* Divider */}
        <div className="mt-5 h-px w-full bg-white/15" />

        {/* What You Get */}
        <p className="mt-6 text-[14px] font-medium text-white/85">What You Get</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {QAMAR_FEATURES.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5">
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

        {/* CTA — solid white pill (Qamar is the featured tier) */}
        
        <a  href="#unlock-qamar"
          className="group relative flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-[15px] font-semibold text-[#1B1C39] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.5)]"
        >
          Unlock Qamar
        </a>

        {/* Footer caption — two lines */}
        <p className="mt-3 text-center text-[11px] italic leading-[1.5] text-white/55">
          ~$2.70 USD. Change or cancel anytime.
          <br />
          Capital at risk.
        </p>
      </div>
    </article>
  );
}