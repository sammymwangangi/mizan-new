import Image from "next/image";
import GrowthGraph from "./GrowthGraph";

/**
 * ChangeGrowsCard
 * ---------------
 * Bottom-right card (625 × 450 in Figma).
 * Heading + subtitle on the left, animated growth graph on the right.
 * A large faded coin asset peeks from the bottom-left corner.
 */
export default function ChangeGrowsCard() {
  return (
    <div className="glass-card relative h-full w-full overflow-hidden rounded-[24px] p-6 md:p-7">
      {/* Decorative coin — peeks from bottom-left, very dimmed */}
      <div className="float-coin pointer-events-none absolute top-10 -left-8 h-[260px] w-[260px] opacity-75">
        <Image
          src="/assets/section2/coin-decor.png"
          alt=""
          width={260}
          height={260}
          className="object-contain"
          aria-hidden
        />
      </div>

      {/* Heading + subtitle */}
      <div className="relative z-10 max-w-[486px]">
        <h3 className="text-[32px] font-semibold leading-tight text-white">
          Where your change grows
        </h3>
        <p className="mt-3 text-[16px] leading-[1.65] text-white/65">
          Start with spare change. Build toward halal stocks, or even a share
          in Dubai real estate from AED 2,000.
        </p>
      </div>

      {/* Round-ups badge — bottom-left, sits above the coin */}
      <div className="absolute bottom-[26%] left-7 z-10 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect
              x="1"
              y="3"
              width="12"
              height="9"
              rx="2"
              stroke="white"
              strokeWidth="1.2"
            />
            <path
              d="M1 6h12"
              stroke="white"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="leading-tight">
          <div className="text-[10px] text-white/55">Round-ups</div>
          <div className="text-[12px] font-semibold text-white">KES 242</div>
        </div>
      </div>

      {/* The animated graph — right-aligned, fills lower-right */}
      <div className="absolute bottom-0 right-5 z-10 w-[62%] max-w-[420px]">
        <GrowthGraph />
      </div>
    </div>
  );
}
