// components/section6/ShamsCard.tsx
import Image from "next/image";

const SHAMS_FEATURES: Array<string | { text: string; linkText: string; href: string }> = [
  "Everything in Qamar +",
  "Premium sukuk & private placements",
  "The Obsidian Metal Card",
  "The Global Pass : 0% Fees in 150+ Countries",
  "Dedicated Robin Habibi Concierge",
  // This one has an inline "more>" link
  { text: "Digital Wasiyyah (Will) and ", linkText: "more>", href: "#shams-more" },
  "Family sharing (5 sub-accounts)",
];

// The signature peach/cream gradient — used on heading, price, and button bg
const SHAMS_GRADIENT =
  "linear-gradient(80.76deg, #D39C90 11.82%, #FFFFFF 48.18%, #D39B8E 84.24%)";

/**
 * ShamsCard — Premium tier ("Rise with the sun")
 * ----------------------------------------------
 * 420 × 650. Same skeleton as Noor/Qamar with key differences:
 *   - Background is shams-bg.svg (dark metallic image, not a CSS gradient)
 *   - Light rays sit on the TOP-RIGHT (not top-left)
 *   - "Shams" heading + "KES 1,200/month" use peach gold gradient (text-clip)
 *   - Tagline "Rise with the sun" is in #D8C1B7 (warm cream)
 *   - "Enter Shams Club" button has the peach gradient bg, dark text (#0E0E0E)
 *   - One feature row contains an inline "more>" link
 *   - Footer caption is two lines about accredited investors
 *
 * The peach gradient on text uses `background-clip: text` + `color: transparent`
 * so the gradient fills the letterforms instead of the background box.
 */
export default function ShamsCard() {
  return (
    <article
      className="relative flex flex-col overflow-hidden rounded-card"
      style={{
        width: "100%",
        maxWidth: "420px",
        height: "650px",
        backgroundImage: "url('/assets/section6/shams-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        border: "1px solid rgba(255, 255, 255, 0.08)",
        boxShadow:
          "0 24px 60px -20px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.10)",
      }}
    >
      {/* TOP-RIGHT light rays — flipped from Noor/Qamar.
          Wrapper rotated 120deg (instead of 60deg) and anchored on the right
          edge so the rays beam down-and-leftward from the top-right corner. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden"
        style={{ borderRadius: "28px" }}
      >
        <div
          className="absolute"
          style={{
            top: "-280px",
            right: "60px",
            width: "500px",
            height: "10px",
            transform: "rotate(120deg)",
            transformOrigin: "top right",
          }}
        >
          <div
            className="absolute animate-ray-shimmer-1"
            style={{
              top: "120px",
              right: "10px",
              width: "350px",
              height: "30px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 95%)",
              filter: "blur(7px)",
            }}
          />
          <div
            className="absolute animate-ray-shimmer-2"
            style={{
              top: "70px",
              right: "20px",
              width: "400px",
              height: "30px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 95%)",
              filter: "blur(7px)",
            }}
          />
          <div
            className="absolute animate-ray-shimmer-3"
            style={{
              top: "40px",
              right: "20px",
              width: "440px",
              height: "30px",
              background:
                "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.45) 50%, transparent 95%)",
              filter: "blur(5px)",
            }}
          />
        </div>
      </div>

      {/* Square pattern — same position as Qamar, near the price area */}
      <div
        aria-hidden
        className="pointer-events-none absolute z-0"
        style={{
          top: "150px",
          right: "-20px",
          width: "180px",
          height: "120px",
          opacity: 0.25,
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
        {/* Plan name — peach gradient text */}
        <h3
          className="text-[36px] font-medium"
          style={{
            backgroundImage: SHAMS_GRADIENT,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shams
        </h3>
        <p className="mt-1 text-[20px] italic" style={{ color: "#D8C1B7" }}>
          Rise with the sun
        </p>

        {/* Price — peach gradient text */}
        <div className="mt-7">
          <span
            className="text-[40px] font-bold leading-none"
            style={{
              backgroundImage: SHAMS_GRADIENT,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            KES 1,200
          </span>
          <span
            className="text-[32px] font-normal"
            style={{
              backgroundImage: SHAMS_GRADIENT,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            /month
          </span>
        </div>

        {/* Divider */}
        <div className="mt-5 h-px w-full bg-[#D39C90]" />

        {/* What You Get */}
        <p className="mt-6 text-[18px] font-medium text-white">What You Get</p>
        <ul className="mt-3 flex flex-col gap-2.5">
          {SHAMS_FEATURES.map((feature, i) => {
            const isLink = typeof feature !== "string";
            return (
              <li key={i} className="flex items-start gap-2.5">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#A3A3A3]">
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
                <span className="text-[14px] leading-normal text-white">
                  {isLink ? (
                    <>
                      {feature.text}
                      
                    <a    href={feature.href}
                        className="underline underline-offset-2 transition-colors hover:text-white"
                      >
                        {feature.linkText}
                      </a>
                    </>
                  ) : (
                    feature
                  )}
                </span>
              </li>
            );
          })}
        </ul>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA — peach gradient button with dark text */}
        
        <a  href="#enter-shams"
          className="group relative flex items-center justify-center rounded-full px-6 py-3.5 text-[18px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(211,155,142,0.6)]"
          style={{
            background: SHAMS_GRADIENT,
            border: "1px solid rgba(255, 255, 255, 0.2)",
            color: "#0E0E0E",
          }}
        >
          Enter Shams Club
        </a>

        {/* Footer caption — two lines */}
        <p className="mt-3 text-center text-[11px] italic leading-normal text-white/55">
          Less than KES 40/day. For accredited investors.
          <br />
          Capital at risk.
        </p>
      </div>
    </article>
  );
}