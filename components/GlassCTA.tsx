/**
 * GlassCTA
 * --------
 * Solid-fill CTA: dark navy background, no glass effect, no animated border.
 */
export default function GlassCTA() {
  return (
    <div
      data-anim="cta"
      className="flex flex-wrap items-center gap-5"
    >
      {/* Primary CTA — solid dark navy */}
      
      <a  href="#early-access"
        className="group inline-flex items-center gap-3 rounded-full bg-[#1B1C39] px-8 py-4 text-[16px] font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
      >
        <span>Early Access sign up</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="transition-transform duration-300 group-hover:translate-x-1"
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

      {/* Secondary text link */}
      
      <a  href="#features"
        className="text-[15px] font-light text-white/70 transition-colors duration-200 hover:text-white"
      >
        Explore Features
      </a>
    </div>
  );
}