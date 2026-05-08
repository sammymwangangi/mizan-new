// components/section9/EarlyAccessForm.tsx
"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import confetti from "canvas-confetti";
import CountryPhoneField from "./CountryPhoneField";

/**
 * EarlyAccessForm — three-field form with gradient borders
 * --------------------------------------------------------
 * Fields:
 *   - Name (with smiley icon)
 *   - Country + phone (combined field with flag, dial code, and number)
 *   - Email (with envelope icon, validates email format)
 *
 * 52px gap between fields per Figma.
 *
 * Submit fires golden confetti and transitions to success state.
 * Real submission would POST to /api/early-access — for now just
 * validates client-side and triggers success.
 */

interface FormProps {
  onSuccess: () => void;
}

export default function EarlyAccessForm({ onSuccess }: FormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [dialCode, setDialCode] = useState("254");
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim()) return setError("Please enter your name");
    if (!phone.trim()) return setError("Please enter your phone number");
    if (!email.trim()) return setError("Please enter your email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setError("Please enter a valid email address");
    }

    // Fire golden confetti
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#D39C90", "#FFFFFF", "#D39B8E", "#E8C5A0", "#F5DEB3"],
      ticks: 200,
    });

    // TODO: replace with real API call when backend is ready
    // await fetch("/api/early-access", { method: "POST", body: JSON.stringify(...) });

    // Show success view after a short delay so user sees the confetti pop
    setTimeout(onSuccess, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[469px] flex-col gap-[52px]"
    >
      {/* NAME FIELD */}
      <GradientField
        icon="/assets/section9/face-emoji.png"
        iconSize={{ w: 23, h: 24 }}
      >
        <input
          type="text"
          placeholder="What is your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent text-[15px] text-[#1B1C39] placeholder-[#6D6E8A] outline-none"
          required
        />
      </GradientField>

      {/* COUNTRY + PHONE FIELD */}
      <CountryPhoneField
        dialCode={dialCode}
        onDialCodeChange={setDialCode}
        phone={phone}
        onPhoneChange={setPhone}
      />

      {/* EMAIL FIELD */}
      <GradientField
        icon="/assets/section9/envelope.png"
        iconSize={{ w: 23, h: 24 }}
      >
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent text-[15px] text-white placeholder-[#6D6E8A] outline-none"
          required
        />
      </GradientField>

      {error && (
        <p className="-mt-8 text-center text-[13px] text-[#FF6B8B]">{error}</p>
      )}

      {/* SUBMIT — same gradient as Shams button */}
      <button
        type="submit"
        className="mx-auto rounded-full px-17 py-3.75 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(211,155,142,0.6)]"
        style={{
          background:
            "linear-gradient(80.76deg, #D39C90 11.82%, #FFFFFF 48.18%, #D39B8E 84.24%)",
          color: "#0E0E0E",
        }}
      >
        Claim my seat
      </button>
    </form>
  );
}

/**
 * GradientField — pill-shaped input with gradient border
 *
 * The gradient border is achieved with a pseudo-element technique:
 * outer div has the gradient as background, inner div has the dark
 * fill, and a CSS mask leaves only the 1px gap visible as the border.
 *
 * Width 469px, height 62px per Figma.
 */
function GradientField({
  icon,
  iconSize,
  children,
}: {
  icon: string;
  iconSize: { w: number; h: number };
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative w-full"
      style={{
        height: "62px",
        borderRadius: "9999px",
        padding: "1px",
        background:
          "linear-gradient(80.75deg, #D155FF 4.6%, #B532F2 17.14%, #A016E8 29.4%, #9406E2 40.22%, #8F00E0 48.46%, #921BE6 56.84%, #A08CFF 92.32%)",
      }}
    >
      <div className="flex h-full w-full items-center gap-3 rounded-full bg-white px-6">
        <Image
          src={icon}
          alt=""
          width={iconSize.w}
          height={iconSize.h}
          className="shrink-0"
          aria-hidden
        />
        {children}
      </div>
    </div>
  );
}
