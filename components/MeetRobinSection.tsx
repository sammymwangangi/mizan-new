"use client";

import Image from "next/image";

/**
 * MeetRobinSection — section 5
 * ----------------------------
 * 100vh tall. No background — uses page bg + page-level aurora.
 *
 * Layout:
 *   - LEFT (~50%): heading, subtitle, three checkmark feature blocks, CTA button
 *   - RIGHT (~50%): 633×799 container with phone portfolio image and the
 *     same diagonal light rays we used in section 3 cards
 *
 * The CTA button has a heart-beat ripple animation — three rings emanate
 * outward in sequence, looping continuously to draw the eye.
 */

const FEATURES = [
  {
    title: "Finds your spare change",
    copy: "Robin notices the KES 30 you won't miss and puts it to work. It's the smallest habit that really counts.",
  },
  {
    title: "Understands your spending",
    copy: "Finally see where your money goes without the headache of tracking it yourself.",
  },
  {
    title: "Access world-class assets",
    copy: "From Apple to Safaricom, Robin helps you access Shariah-screened portfolios built from global giants to regional leaders.",
  },
];

export default function MeetRobinSection() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden">
      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-24 md:px-12 lg:grid-cols-2 lg:px-20 lg:py-32">
        {/* LEFT — text content */}
        <div className="flex flex-col">
          <h2
            className="font-bold leading-[1.05] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(2.4rem, 4.4vw, 3.5rem)" }}
          >
            Meet Robin Habibi
          </h2>
          <h3
            className="mt-1 font-light leading-[1.1] tracking-[-0.02em] text-white"
            style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)" }}
          >
            Your financial AI companion.
          </h3>

          <p className="mt-7 max-w-[480px] text-[15px] leading-[1.7] text-white/75 md:text-[16px]">
            The friend who helps your money grow quietly.
          </p>

          {/* Feature list */}
          <ul className="mt-10 flex flex-col gap-7">
            {FEATURES.map((feature) => (
              <li key={feature.title} className="flex gap-4">
                {/* Checkmark icon */}
                <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M4 10.5 L8 14.5 L16 6"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold text-white">
                    {feature.title}
                  </h4>
                  <p className="mt-2 max-w-[400px] text-[13px] leading-[1.6] text-white/70 md:text-[14px]">
                    {feature.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA button — with heart-beat ripple */}
          <div className="mt-10">
            <a
              href="#robin-helps"
              className="ripple-btn group relative inline-flex items-center gap-3 rounded-full bg-bg px-7 py-4 text-[15px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
            >
              {/* Three ripple rings — pure CSS animation */}
              <span aria-hidden className="ripple ripple-1" />
              <span aria-hidden className="ripple ripple-2" />
              <span aria-hidden className="ripple ripple-3" />

              <span className="relative z-10">How Robin helps</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10m0 0L9 4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT — image container with light rays */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="relative overflow-hidden rounded-card"
            style={{
              width: "100%",
              maxWidth: "633px",
              height: "799px",
              maxHeight: "90vh",
              // Diagonal gradient: bright purple at top → deep navy at bottom.
              // 165deg = top-left to bottom-right, biased so the bright area
              // sits in the upper-left corner (where the rays originate).
              background: `
      linear-gradient(
        165deg,
        #6B3FA8 0%,
        #4A2080 25%,
        #2A1547 55%,
        #1B1C39 85%,
        #14152A 100%
      )
    `,
              // Backdrop blur — this is what makes it GLASS
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              // 1px border at low opacity for the frosted edge
              border: "1px solid rgba(255, 255, 255, 0.08)",
              // Outer drop shadow + inner top-edge highlight
              boxShadow: `
      0 24px 60px -20px rgba(0, 0, 0, 0.45),
      inset 0 1px 0 rgba(255, 255, 255, 0.10)
    `,
            }}
          >
            {/* TOP-LEFT LIGHT RAYS — same recipe as section 3 cards */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full overflow-hidden"
              style={{ borderRadius: "28px" }}
            >
              <div
                className="absolute"
                style={{
                  top: "-420px",
                  left: "120px",
                  width: "700px",
                  height: "10px",
                  transform: "rotate(60deg)",
                  transformOrigin: "top left",
                }}
              >
                <div
                  className="absolute animate-ray-shimmer-1"
                  style={{
                    top: "200px",
                    left: "10px",
                    width: "500px",
                    height: "40px",
                    background:
                      "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 95%)",
                    filter: "blur(8px)",
                  }}
                />
                <div
                  className="absolute animate-ray-shimmer-2"
                  style={{
                    top: "130px",
                    left: "20px",
                    width: "560px",
                    height: "40px",
                    background:
                      "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 95%)",
                    filter: "blur(8px)",
                  }}
                />
                <div
                  className="absolute animate-ray-shimmer-3"
                  style={{
                    top: "80px",
                    left: "20px",
                    width: "620px",
                    height: "40px",
                    background:
                      "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.55) 50%, transparent 80%)",
                    filter: "blur(5px)",
                  }}
                />
              </div>

              <div
                className="absolute"
                style={{
                  top: "-60px",
                  left: "-10px",
                  width: "320px",
                  height: "320px",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.12) 35%, transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
            </div>

            {/* PHONE PORTFOLIO IMAGE — flush to bottom of container */}
            <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center px-8 pt-8">
              <Image
                src="/assets/section5/robin-portfolio.png"
                alt="Mizan portfolio with Robin AI assistant"
                width={520}
                height={720}
                className="block h-[600px] md:h-[720px] lg:h-[600px] w-full max-w-[520px] object-contain"
                priority={false}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
