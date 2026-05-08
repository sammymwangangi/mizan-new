// components/section9/EarlyAccessSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import EarlyAccessForm from "./EarlyAccessForm";

/**
 * EarlyAccessSection — section 9
 * ------------------------------
 * 1321 × 820 dark card with three states:
 *   1. INITIAL: heading + subtitle + "Claim my seat" button
 *   2. FORM:    name/country-phone/email form + submit button
 *   3. SUCCESS: confetti + congratulations text + same button styling
 *
 * The key icon, top-right ellipse glow, bottom-left pattern, and overall
 * card layout stay consistent across all states. Only the content
 * between the key and bottom of card swaps.
 *
 * Per Figma:
 *   - Card: 1321×820, #0E0E0E bg, 30px radius
 *   - Top-right ellipse glow (background-ellipses.svg)
 *   - Bottom-left pattern.svg
 *   - Centred key.svg above content
 *   - Peach gradient button (same as Shams card)
 */

type ViewState = "initial" | "form" | "success";

export default function EarlyAccessSection() {
  const [view, setView] = useState<ViewState>("initial");

  return (
    <section className="relative w-full px-6 py-16 md:px-10 lg:px-16 lg:py-20">
      <div
        className="relative mx-auto w-full overflow-hidden"
        style={{
          maxWidth: "1321px",
          minHeight: "820px",
          background: "#0E0E0E",
          borderRadius: "30px",
        }}
      >
        {/* TOP-RIGHT BACKGROUND ELLIPSES — shifted further right */}
<div
  aria-hidden
  className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
  style={{ borderRadius: "30px" }}
>
  {/* === LAYER 1: Large purple dome === */}
  <div
    className="absolute"
    style={{
      width: "700px",
      height: "700px",
      top: "-200px",
      left: "45%",
      background: "#8F00E0",
      filter: "blur(150px)",
      borderRadius: "50%",
      opacity: 0.55,
      willChange: "filter",
    }}
  />

  {/* === LAYER 2: Bright violet centre highlight === */}
  <div
    className="absolute"
    style={{
      width: "500px",
      height: "500px",
      top: "-50px",
      left: "55%",
      background: "#BA85FF",
      filter: "blur(140px)",
      borderRadius: "50%",
      opacity: 0.5,
      willChange: "filter",
    }}
  />

  {/* === LAYER 3: Magenta accent === */}
  <div
    className="absolute"
    style={{
      width: "400px",
      height: "400px",
      top: "100px",
      left: "70%",
      background: "#D155FF",
      filter: "blur(160px)",
      borderRadius: "50%",
      opacity: 0.35,
      willChange: "filter",
    }}
  />

  {/* === LAYER 4: Warm coral — pushed even further off-screen right === */}
  <div
    className="absolute"
    style={{
      width: "500px",
      height: "500px",
      top: "100px",
      right: "-300px",
      background: "#DB7260",
      filter: "blur(170px)",
      borderRadius: "50%",
      opacity: 0.28,
      willChange: "filter",
    }}
  />

  {/* === LAYER 5: Subtle orange spot — top-right corner === */}
  <div
    className="absolute"
    style={{
      width: "350px",
      height: "350px",
      top: "-100px",
      right: "-150px",
      background: "#FF584E",
      filter: "blur(180px)",
      borderRadius: "50%",
      opacity: 0.18,
      willChange: "filter",
    }}
  />
</div>

        {/* BOTTOM-LEFT PATTERN */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 z-0"
          style={{
            width: "50%",
            height: "70%",
            opacity: 0.4,
          }}
        >
          <Image
            src="/assets/section9/pattern.svg"
            alt=""
            fill
            className="object-contain object-left-bottom"
            aria-hidden
          />
        </div>

        {/* CONTENT — flex column, centred */}
        <div className="relative z-10 flex h-full min-h-[820px] flex-col items-center justify-center px-6 py-16 md:px-12">
          {/* KEY ICON — same across all states */}
          <div className="mb-10">
            <Image
              src="/assets/section9/key.svg"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16"
              aria-hidden
            />
          </div>

          {/* CONTENT VIEW — swaps based on state */}
          {view === "initial" && (
            <InitialView onClaim={() => setView("form")} />
          )}
          {view === "form" && (
            <EarlyAccessForm onSuccess={() => setView("success")} />
          )}
          {view === "success" && <SuccessView />}
        </div>
      </div>
    </section>
  );
}

// === INITIAL VIEW ===
function InitialView({ onClaim }: { onClaim: () => void }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2
        className="font-light text-white"
        style={{
          fontSize: "clamp(1.6rem, 3vw, 32px)",
          lineHeight: "1.3",
        }}
      >
        You&rsquo;re invited to early access
      </h2>
      <p
        className="mt-5 max-w-[600px] font-normal"
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#ACAFB9",
        }}
      >
        We&rsquo;re opening Mizan to an exclusive group of 1,000 founding
        members. Your insight will help shape the future of wealth. This is your
        seat at the table of a new financial legacy
      </p>

      <button
        onClick={onClaim}
        className="mt-10 rounded-full px-17 py-3.75 text-[15px] font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_rgba(211,155,142,0.6)]"
        style={{
          background:
            "linear-gradient(80.76deg, #D39C90 11.82%, #FFFFFF 48.18%, #D39B8E 84.24%)",
          color: "#0E0E0E",
        }}
      >
        Claim my seat
      </button>
    </div>
  );
}

// === SUCCESS VIEW ===
function SuccessView() {
  return (
    <div className="flex flex-col items-center text-center">
      <h2
        className="font-light text-white"
        style={{
          fontSize: "clamp(1.6rem, 3vw, 32px)",
          lineHeight: "1.3",
        }}
      >
        Welcome to Mizan
      </h2>
      <p
        className="mt-5 max-w-[600px] font-normal"
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#ACAFB9",
        }}
      >
        Your seat is reserved. We&rsquo;ll be in touch soon with next steps on
        your founding member journey.
      </p>
    </div>
  );
}
