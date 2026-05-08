// components/footer/Footer.tsx
import Image from "next/image";

/**
 * Footer
 * ------
 * Three-row layout:
 *   Row 1: Resources column + secondary links column + (gap) + Download buttons column
 *   Row 2: About Mizan Money — heading + long disclaimer paragraph
 *   Row 3: Copyright (right-aligned)
 *
 * No background — uses page bg (which is dark, matching footer aesthetic).
 */

const RESOURCES = [
  { label: "Support",      href: "/support" },
  { label: "Mizan Donate", href: "/donate" },
  { label: "Mizan Pay",    href: "/pay" },
  { label: "Mizan Invest", href: "/invest" },
  { label: "Mizan Save",   href: "/save" },
  { label: "Careers",      href: "/careers" },
];

const SECONDARY_LINKS = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy",       href: "/privacy" },
  { label: "Privacy Notice",       href: "/privacy-notice" },
];

export default function Footer() {
  return (
    <footer className="relative w-full px-6 py-16 md:px-10 lg:px-16 lg:py-20 bg-[#000000]">
      <div className="mx-auto max-w-[1386px]">

        {/* === ROW 1: Three columns (resources, secondary links, downloads) === */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">

          {/* Resources column */}
          <div className="lg:col-span-3">
            <h4 className="text-[16px] font-bold uppercase tracking-[0.05em] text-white">
              Resources
            </h4>
            <ul className="mt-6 flex flex-col gap-5">
              {RESOURCES.map((item) => (
                <li key={item.label}>
                  
                  <a  href={item.href}
                    className="text-[16px] font-medium text-white transition-colors hover:text-white/70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary links column */}
          <div className="lg:col-span-3">
            {/* Empty heading slot to vertically align with Resources first link */}
            <div className="hidden h-[13px] lg:block" aria-hidden />
            <ul className="mt-0 flex flex-col gap-5 lg:mt-6">
              {SECONDARY_LINKS.map((item) => (
                <li key={item.label}>
                  
                  <a  href={item.href}
                    className="text-[14px] font-medium text-white/58 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Spacer column on desktop only */}
          <div className="hidden lg:col-span-2 lg:block" aria-hidden />

          {/* Download column */}
          <div className="lg:col-span-4">
            <h4 className="text-[16px] font-bold uppercase tracking-wider text-white px-11">
              Download
            </h4>
            <div className="mt-6 flex flex-col gap-4">
              {/* App Store */}
              
              <a  href="#"
                className="group flex items-center gap-3 rounded-full border border-white/30 px-11 w-[214px] h-[56px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/assets/footer/apple-logo.svg"
                  alt=""
                  width={20}
                  height={24}
                  className="h-6 w-auto"
                  aria-hidden
                />
              </a>

              {/* Google Play */}
              
              <a  href="#"
                className="group flex items-center gap-3 rounded-full border border-white/30 px-11 w-[214px] h-[56px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/5"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/assets/footer/google-play-logo.svg"
                  alt=""
                  width={22}
                  height={24}
                  className="h-6 w-auto"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>

        {/* === ROW 2: About Mizan Money === */}
        <div className="mt-16 lg:mt-20">
          <h4 className="text-[15px] font-medium text-white">About Mizan Money</h4>
          <p className="mt-5 text-[16px] leading-[1.7] text-white">
            Mizan Global Ventures Ltd, operating under the brand name Mizan
            Money, is a financial technology company and is not a bank. Mizan
            Financial Ltd is incorporated in Kenya under Certificate of
            Incorporation No. PVT-DLUXXX, with its registered office at The
            Address Complex, 7th Floor, Muthangari Drive, Westlands, Nairobi,
            Kenya. Mizan provides technology and product access and may work
            with third-party regulated partners for custody, payments, and
            other financial services where applicable. Investment products are
            not bank deposits, are not guaranteed, and are not covered by any
            deposit protection scheme. The value of investments can fall as
            well as rise, and capital is at risk. Past performance is not a
            reliable indicator of future results. Eligibility, product
            availability, and access may be subject to jurisdiction, onboarding,
            and partner approval.
          </p>
        </div>

        {/* === ROW 3: Copyright === */}
        <div className="mt-12 flex justify-end lg:mt-16">
          <p className="text-[15px] font-medium text-white">
            All rights reserved {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}