import Image from "next/image";

const NAV_ITEMS = ["Personal", "Business", "Intelligence Labs", "About Us"];

/**
 * Navbar — v3
 * -----------
 * Transparent. Sits inside the hero glass card.
 * No background, no border — those live on the parent.
 */
export default function Navbar() {
  return (
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
          className="h-auto w-[80px] md:w-[92px]"
        />
      </a>

      {/* Center nav */}
      <ul className="hidden items-center gap-10 md:flex">
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-[15px] font-light text-white/85 transition-colors duration-200 hover:text-white"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Right spacer — keeps menu optically centred relative to logo */}
      <div className="hidden w-[92px] md:block" aria-hidden />

      {/* Mobile burger */}
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 md:hidden"
        aria-label="Open menu"
      >
        <span className="block h-px w-4 bg-white/80 shadow-[0_5px_0_0_rgba(255,255,255,0.8),0_-5px_0_0_rgba(255,255,255,0.8)]" />
      </button>
    </nav>
  );
}