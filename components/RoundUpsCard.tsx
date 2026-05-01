import Image from "next/image";

/**
 * RoundUpsCard
 * ------------
 * Left card in the section grid (706 × 909 in Figma).
 * Heading + subtitle take the top 28%; the food/cooking lifestyle image
 * fills the rest with bottom rounded corners matching the card.
 */
export default function RoundUpsCard() {
  return (
    <div className="glass-card relative h-full w-full overflow-hidden rounded-[24px]">
      <div className="px-7 pb-20 pt-7 md:px-9 md:pt-9">
        <h3 className="text-[32px] font-semibold leading-tight text-white md:text-[32px]">
          Mizan Round-Ups
        </h3>
        <p className="mt-20 max-w-[480px] text-[16px] font-medium leading-[1.7] text-white/65 md:text-[15px]">
          Mizan rounds up spare change from your daily spending and turns it
          into steady halal growth — automatically.
        </p>
      </div>

      {/* Lifestyle image — fills the bottom of the card.
          aspect ratio is wide-rectangular per Figma; max-height keeps
          card from getting too tall on small viewports. */}
      <div className="absolute bottom-0 left-0 right-0 mt-2 h-[460px] w-full md:h-[600px]">
        <Image
          src="/assets/section2/round-ups-cooking.png"
          alt="Person paying with phone at kitchen counter"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 700px, 100vw"
        />
      </div>
    </div>
  );
}
