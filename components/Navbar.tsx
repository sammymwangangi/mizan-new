"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const NAV_ITEMS = [
  { label: "Personal", href: "#" },
  { label: "Business", href: "https://sprout-sticky-49845851.figma.site" },
  { label: "Intelligence Labs", href: "#" },
  { label: "About Us", href: "#" },
];

/**
 * Navbar — v4
 * -----------
 * Transparent. Sits inside the hero glass card.
 * Mobile: animated burger → X morph + full-height slide-down glass panel.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  /* Close on resize back to desktop */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => { if (e.matches) setOpen(false); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <>
      <nav
        data-anim="navbar"
        className="relative z-30 flex items-center justify-between px-8 pt-7 md:px-14 md:pt-9 lg:px-20"
      >
        {/* Logo */}
        <a href="/" className="relative z-10 flex items-center" aria-label="Mizan home">
          <Image
            src="/assets/logo.svg"
            alt="Mizan"
            width={92}
            height={48}
            priority
            className="h-auto w-20 md:w-23"
          />
        </a>

        {/* Center nav — desktop */}
        <ul className="hidden items-center gap-10 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-[15px] font-light text-white/85 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right spacer — keeps menu optically centred relative to logo */}
        <div className="hidden w-23 md:block" aria-hidden />

        {/* Mobile burger button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={[
            "relative z-50 flex h-10 w-10 items-center justify-center rounded-full border md:hidden",
            "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
            open
              ? "border-violet-400/40 bg-violet-500/20 shadow-[0_0_20px_rgba(124,92,255,0.35)]"
              : "border-white/15 bg-transparent",
          ].join(" ")}
        >
          {/* Three-bar → X morph */}
          <span className="relative flex h-4 w-4 flex-col items-center justify-center gap-1.25">
            {/* Top bar */}
            <span
              className={[
                "block h-px w-full rounded-full bg-white/85 origin-center",
                "transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                open ? "translate-y-1.5 rotate-45" : "",
              ].join(" ")}
            />
            {/* Middle bar */}
            <span
              className={[
                "block h-px rounded-full bg-white/85 origin-center",
                "transition-all duration-300 ease-in-out",
                open ? "w-0 opacity-0" : "w-full opacity-100",
              ].join(" ")}
            />
            {/* Bottom bar */}
            <span
              className={[
                "block h-px w-full rounded-full bg-white/85 origin-center",
                "transition-all duration-400 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
                open ? "-translate-y-1.5 -rotate-45" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </nav>

      {/* ── Mobile menu overlay (portalled to body to escape glass-card's backdrop-filter/overflow-hidden) ── */}
      {mounted && createPortal(
        <>
          {/* Backdrop */}
          <div
            aria-hidden
            onClick={() => setOpen(false)}
            className={[
              "fixed inset-0 z-90 md:hidden",
              "bg-bg-deep/60 backdrop-blur-sm",
              "transition-opacity duration-500 ease-in-out",
              open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
          />

          {/* Slide-down panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={[
              "fixed inset-x-0 top-0 z-100 md:hidden",
              "px-5 pb-8 pt-24",
              "bg-linear-to-b from-[rgba(124,92,255,0.15)] to-[rgba(15,16,40,0.92)]",
              "backdrop-blur-2xl",
              "border-b border-white/8",
              "shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7),0_0_0_1px_rgba(124,92,255,0.12)]",
              "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
              open
                ? "translate-y-0 opacity-100 pointer-events-auto"
                : "-translate-y-full opacity-0 pointer-events-none",
            ].join(" ")}
          >
            {/* Subtle top shimmer line */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent"
            />

            {/* Nav links */}
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item, i) => (
                <li
                  key={item.label}
                  style={{
                    transitionDelay: open ? `${80 + i * 60}ms` : "0ms",
                  }}
                  className={[
                    "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  ].join(" ")}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={[
                      "group flex items-center justify-between rounded-2xl px-5 py-4",
                      "text-[17px] font-light tracking-wide text-white/80",
                      "transition-all duration-250 ease-out",
                      "hover:bg-white/6 hover:text-white",
                      "active:scale-[0.98]",
                    ].join(" ")}
                  >
                    <span>{item.label}</span>
                    <span
                      className="translate-x-1 opacity-0 transition-all duration-250 group-hover:translate-x-0 group-hover:opacity-60"
                      aria-hidden
                    >
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Bottom CTA row */}
            <div
              style={{ transitionDelay: open ? `${80 + NAV_ITEMS.length * 60 + 40}ms` : "0ms" }}
              className={[
                "mt-6 border-t border-white/[0.07] pt-6",
                "transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
              ].join(" ")}
            >
              <a
                href="#"
                onClick={() => setOpen(false)}
                className={[
                  "flex w-full items-center justify-center gap-2 rounded-2xl py-3.5",
                  "bg-linear-to-r from-violet-500/80 to-indigo-500/80",
                  "text-[15px] font-medium text-white",
                  "shadow-[0_4px_24px_rgba(124,92,255,0.4)]",
                  "transition-all duration-250 hover:brightness-110 active:scale-[0.98]",
                ].join(" ")}
              >
                Get Started
              </a>
            </div>
          </div>
        </>,
        document.body
      )}
    </>
  );
}
