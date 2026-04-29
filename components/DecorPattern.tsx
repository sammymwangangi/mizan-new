import Image from "next/image";
/**
 * DecorPattern
 * ------------
 * The subtle organic "M"-style watermark behind the navbar on the right side.
 * Pure SVG so it scales crisply. Replace this file's SVG content with your
 * exported pattern from Figma if you have a more accurate one.
 */
export default function DecorPattern() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 -md:top-5 z-0 h-[60%] w-[55%] overflow-hidden opacity-80"
    >
      <Image
        src="/assets/pattern.svg"
        alt=""
        fill
        className="object-contain md:object-cover object-top-right"
        priority={false}
      />
    </div>
  );
}
