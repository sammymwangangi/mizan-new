// components/section9/CountryPhoneField.tsx
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CountryPhoneField — with proper flag rendering
 * ----------------------------------------------
 * Layout per Figma:
 *   ┌──────────────────────────────────────────────────────┐
 *   │              Country                                 │
 *   │   [flag]    254  ▼   │   Your phone number          │
 *   └──────────────────────────────────────────────────────┘
 *
 * - "Country" label sits above the dial-code row
 * - Flag (25×15) sits to the LEFT of the dial code (vertically aligned with phone input row)
 * - Dial code + chevron sit on the same horizontal line as the phone input
 * - Vertical divider separates country picker from phone input
 *
 * Flags are inline SVG (Twemoji-style country flags). Reliable across
 * all browsers including Windows Chrome where emoji flags fail.
 *
 * Click outside closes the dropdown.
 */

// Inline SVG flags — minimal data, reliable rendering on all platforms
const COUNTRIES = [
  {
    code: "KE",
    name: "Kenya",
    dial: "254",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="5" fill="#000000" />
        <rect y="5" width="25" height="5" fill="#FFFFFF" />
        <rect y="6" width="25" height="3" fill="#BB0000" />
        <rect y="10" width="25" height="5" fill="#006600" />
        <ellipse cx="12.5" cy="7.5" rx="2" ry="3.5" fill="#BB0000" stroke="#FFFFFF" strokeWidth="0.5" />
      </svg>
    ),
  },
  {
    code: "UG",
    name: "Uganda",
    dial: "256",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="2.5" fill="#000000" />
        <rect y="2.5" width="25" height="2.5" fill="#FCDC04" />
        <rect y="5" width="25" height="2.5" fill="#D90000" />
        <rect y="7.5" width="25" height="2.5" fill="#000000" />
        <rect y="10" width="25" height="2.5" fill="#FCDC04" />
        <rect y="12.5" width="25" height="2.5" fill="#D90000" />
      </svg>
    ),
  },
  {
    code: "TZ",
    name: "Tanzania",
    dial: "255",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="15" fill="#1EB53A" />
        <polygon points="0,15 25,0 25,15" fill="#00A3DD" />
        <polygon points="0,15 25,0 25,3 3,15" fill="#000000" />
        <polygon points="0,12 22,0 25,0 25,3 3,15 0,15" fill="#FCD116" stroke="#FCD116" strokeWidth="0" />
      </svg>
    ),
  },
  {
    code: "NG",
    name: "Nigeria",
    dial: "234",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="8.33" height="15" fill="#008751" />
        <rect x="8.33" width="8.34" height="15" fill="#FFFFFF" />
        <rect x="16.67" width="8.33" height="15" fill="#008751" />
      </svg>
    ),
  },
  {
    code: "ZA",
    name: "South Africa",
    dial: "27",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="7.5" fill="#E03C31" />
        <rect y="7.5" width="25" height="7.5" fill="#001489" />
        <polygon points="0,0 12,7.5 0,15" fill="#007749" stroke="#FFFFFF" strokeWidth="2" />
        <polygon points="0,0 9,7.5 0,15" fill="#FFB81C" stroke="#000000" strokeWidth="1" />
      </svg>
    ),
  },
  {
    code: "GH",
    name: "Ghana",
    dial: "233",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="5" fill="#CE1126" />
        <rect y="5" width="25" height="5" fill="#FCD116" />
        <rect y="10" width="25" height="5" fill="#006B3F" />
        <polygon points="12.5,5.5 13.4,8.1 16.1,8.1 13.9,9.7 14.7,12.3 12.5,10.7 10.3,12.3 11.1,9.7 8.9,8.1 11.6,8.1" fill="#000000" />
      </svg>
    ),
  },
  {
    code: "AE",
    name: "UAE",
    dial: "971",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="6.25" height="15" fill="#FF0000" />
        <rect x="6.25" width="18.75" height="5" fill="#00732F" />
        <rect x="6.25" y="5" width="18.75" height="5" fill="#FFFFFF" />
        <rect x="6.25" y="10" width="18.75" height="5" fill="#000000" />
      </svg>
    ),
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    dial: "966",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="15" fill="#006C35" />
      </svg>
    ),
  },
  {
    code: "GB",
    name: "United Kingdom",
    dial: "44",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="15" fill="#012169" />
        <path d="M0,0 L25,15 M25,0 L0,15" stroke="#FFFFFF" strokeWidth="3" />
        <path d="M0,0 L25,15 M25,0 L0,15" stroke="#C8102E" strokeWidth="1.5" />
        <path d="M12.5,0 L12.5,15 M0,7.5 L25,7.5" stroke="#FFFFFF" strokeWidth="5" />
        <path d="M12.5,0 L12.5,15 M0,7.5 L25,7.5" stroke="#C8102E" strokeWidth="3" />
      </svg>
    ),
  },
  {
    code: "US",
    name: "United States",
    dial: "1",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="15" fill="#FFFFFF" />
        <rect y="0" width="25" height="1.15" fill="#B22234" />
        <rect y="2.30" width="25" height="1.15" fill="#B22234" />
        <rect y="4.61" width="25" height="1.15" fill="#B22234" />
        <rect y="6.92" width="25" height="1.15" fill="#B22234" />
        <rect y="9.23" width="25" height="1.15" fill="#B22234" />
        <rect y="11.54" width="25" height="1.15" fill="#B22234" />
        <rect y="13.85" width="25" height="1.15" fill="#B22234" />
        <rect width="10" height="8.07" fill="#3C3B6E" />
      </svg>
    ),
  },
  {
    code: "IN",
    name: "India",
    dial: "91",
    flag: (
      <svg viewBox="0 0 25 15" width="25" height="15" xmlns="http://www.w3.org/2000/svg">
        <rect width="25" height="5" fill="#FF9933" />
        <rect y="5" width="25" height="5" fill="#FFFFFF" />
        <rect y="10" width="25" height="5" fill="#138808" />
        <circle cx="12.5" cy="7.5" r="1.5" fill="none" stroke="#000080" strokeWidth="0.3" />
      </svg>
    ),
  },
];

interface Props {
  dialCode: string;
  onDialCodeChange: (code: string) => void;
  phone: string;
  onPhoneChange: (phone: string) => void;
}

export default function CountryPhoneField({ dialCode, onDialCodeChange, phone, onPhoneChange }: Props) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selected = COUNTRIES.find((c) => c.dial === dialCode) || COUNTRIES[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full"
      style={{
        height: "62px",
        borderRadius: "9999px",
        padding: "1px",
        background:
          "linear-gradient(80.75deg, #D155FF 4.6%, #B532F2 17.14%, #A016E8 29.4%, #9406E2 40.22%, #8F00E0 48.46%, #921BE6 56.84%, #A08CFF 92.32%)",
      }}
    >
      <div className="flex h-full w-full items-center rounded-full bg-white px-6">
        {/* COUNTRY SECTION (left) */}
        <div className="flex flex-col justify-center">
          <span className="text-[10px] text-[#6D6E8A]">Country</span>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="mt-0.5 flex items-center gap-2 outline-none"
            aria-haspopup="listbox"
            aria-expanded={open}
          >
            {/* Flag — 25x15 per Figma */}
            <span className="flex shrink-0 items-center rounded" style={{ width: 25, height: 15 }} aria-hidden>
              {selected.flag}
            </span>
            <span className="text-[15px] text-[#1B1C39]">{selected.dial}</span>
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className={`text-[#6D6E8A] transition-transform ${open ? "rotate-180" : ""}`}
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* DIVIDER */}
        <div className="mx-4 h-8 w-px bg-[#6D6E8A]/40" />

        {/* PHONE INPUT */}
        <input
          type="tel"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => onPhoneChange(e.target.value)}
          className="flex-1 bg-transparent text-[15px] text-[#1B1C39] placeholder-[#6D6E8A] outline-none"
          required
        />
      </div>

      {/* DROPDOWN */}
      {open && (
        <div className="absolute left-0 top-[68px] z-20 max-h-[260px] w-full overflow-y-auto rounded-2xl border border-[#6D6E8A]/30 bg-white py-2 shadow-2xl">
          {COUNTRIES.map((country) => (
            <button
              key={country.code}
              type="button"
              onClick={() => {
                onDialCodeChange(country.dial);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 px-5 py-2.5 text-left text-[14px] text-[#1B1C39] transition-colors hover:bg-black/5"
            >
              <span className="shrink-0" style={{ width: 25, height: 15 }} aria-hidden>
                {country.flag}
              </span>
              <span className="flex-1">{country.name}</span>
              <span className="text-[#6D6E8A]">+{country.dial}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}