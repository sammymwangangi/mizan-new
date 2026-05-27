const complianceCards = [
  {
    title: "Fully Licensed &\nCompliant",
    body: "Mizan operates under strict financial regulations, ensuring your business is always backed by secure practices.",
    tone: "bg-white",
  },
  {
    title: "100% Digital\nExperience",
    body: "Mizan is built as a modern online payment platform-designed to handle all your business transactions seamlessly, anywhere, anytime.",
    tone: "bg-[#f0c9ff]",
  },
  {
    title: "Independent\n& Reliable",
    body: "Mizan owns its core infrastructure, giving you direct access to payment processing without relying on third-party providers.",
    tone: "bg-white",
  },
];

export default function SecurityCompliance() {
  return (
    <section className="relative w-full overflow-hidden bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.94),rgba(255,255,255,0.54)_28%,transparent_52%),linear-gradient(115deg,#f8dfff_0%,#ffffff_52%,#dcd5ff_100%)] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto w-full max-w-[1360px]">
        <h2 className="text-center text-[40px] font-extrabold leading-[1.08] text-black sm:text-[52px] lg:text-[64px]">
          Security & Compliance
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-[76px] lg:gap-9">
          {complianceCards.map((card) => (
            <article
              key={card.title}
              className={`${card.tone} flex min-h-[224px] flex-col justify-between rounded-[14px] border border-black/10 p-7 shadow-[0_1px_0_rgba(255,255,255,0.72)_inset] sm:p-8 lg:min-h-[260px]`}
            >
              <h3 className="whitespace-pre-line text-[21px] font-semibold leading-[1.22] text-black lg:text-[24px]">
                {card.title}
              </h3>
              <p className="max-w-[330px] text-[14px] font-normal leading-[1.32] text-[#333333] lg:text-[15px]">
                {card.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 flex min-h-[88px] items-center bg-[#ded8ff] px-6 py-6 text-black sm:px-9 lg:mt-[90px] lg:px-[84px]">
          <p className="text-[18px] font-semibold leading-[1.35] sm:text-[20px] lg:text-[22px]">
            <span className="mr-2 text-[#f3b300]" aria-hidden="true">
              ⚡
            </span>
            The complete solution to accept money, make payments, and manage
            finances effortlessly.
          </p>
        </div>
      </div>
    </section>
  );
}
