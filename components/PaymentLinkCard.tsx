import Image from "next/image";

/**
 * PaymentLinkCard
 * ---------------
 * Top-right card (625 × 429 in Figma). Two visual zones:
 *   - Top-left: copy + Airtel/M-PESA logos
 *   - Bottom-right: floating "Round-ups Kshs 242" pill + spare-change list
 *
 * The list shows three transactions (Uber, Java House, Naivas) with brand icons.
 */

type Transaction = {
  brand: string;
  category: string;
  amount: string;
  iconSrc: string;
  iconBg: string;
};

const TRANSACTIONS: Transaction[] = [
  {
    brand: "Uber",
    category: "Transport",
    amount: "KES 64",
    iconSrc: "/assets/section2/uber.png",
    iconBg: "#000000",
  },
  {
    brand: "Java House",
    category: "Coffee",
    amount: "KES 50",
    iconSrc: "/assets/section2/javahouse.png",
    iconBg: "#D63031",
  },
  {
    brand: "Naivas",
    category: "Shopping",
    amount: "KES 128",
    iconSrc: "/assets/section2/naivas.png",
    iconBg: "#E63946",
  },
];

export default function PaymentLinkCard() {
  return (
    <div className="glass-card relative h-full w-full overflow-hidden rounded-[24px] p-6 md:p-7">
      {/* Heading + brief */}
      <div className="max-w-[557px]">
        <h3 className="text-[32px] font-semibold leading-tight text-white">
          Link M-PESA, Airtel Money or Card
        </h3>
        <p className="mt-3 text-[16px] leading-[1.65] text-white/65">
          Connect your everyday payment method once, and Mizan can round up
          purchases automatically as you spend.
        </p>
      </div>

      {/* Brand logos — Airtel + M-PESA */}
      <div className="absolute bottom-[40%] right-7 flex items-center gap-3">
        <Image
          src="/assets/section2/airtel-money.svg"
          alt="Airtel Money"
          width={68}
          height={28}
          className="h-20 w-auto opacity-90"
        />
        <Image
          src="/assets/section2/mpesa.svg"
          alt="M-PESA"
          width={68}
          height={28}
          className="h-7 w-auto opacity-90"
        />
      </div>

      {/* Floating round-ups pill — bottom-left of the right cluster */}
      <div className="absolute bottom-[33%] left-6 flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 backdrop-blur-md md:left-7">
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
          <div className="text-[12px] font-semibold text-white">Kshs. 242</div>
        </div>
      </div>

      {/* Spare-change list — right-anchored */}
      <div className="absolute -bottom-3 right-0 w-[58%] max-w-[380px] rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md md:right-7">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[14px] font-semibold text-white">
            Spare change
          </span>
          <span className="flex items-center gap-1 text-[11px] text-white/55">
            Today
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path
                d="M2 4l3 3 3-3"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>

        <ul className="space-y-3">
          {TRANSACTIONS.map((t) => (
            <li key={t.brand} className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full"
                style={{ backgroundColor: t.iconBg }}
              >
                <Image
                  src={t.iconSrc}
                  alt={t.brand}
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1 leading-tight">
                <div className="text-[13px] font-medium text-white">
                  {t.brand}
                </div>
                <div className="text-[11px] text-white/55">{t.category}</div>
              </div>
              <span className="text-[13px] font-semibold text-white">
                {t.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
