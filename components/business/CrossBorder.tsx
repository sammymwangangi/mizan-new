"use client";

import Image from "next/image";


export default function CrossBorder() {
    return (
        <section
            className="relative w-full overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
            style={{
                background:
                    "linear-gradient(180deg, #F4EEFF 0%, #E8E2FF 45%, #EEF2FF 100%)",
            }}
        >
            <div className="mx-auto max-w-[1100px]">
                {/* ── header ── */}
                <div className="mb-14 text-center">
                    <h2
                        className="text-[42px] font-bold leading-tight tracking-tight sm:text-[56px]"
                        style={{
                            background:
                                "linear-gradient(180deg, #280137 34.01%, #8A609F 108.79%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Built for the most ambitious cross-border businesses
                    </h2>
                    <p className="mx-auto mt-4 max-w-[520px] text-[15px] leading-relaxed text-[#4a4a6a] sm:text-[17px]">
                        From documents to payout, Mizan Trade connects payments, approvals, and settlement in one secure flow — so your team can move faster without losing control.
                    </p>
                </div>

                {/* 2-column grid with same-size cards */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div className="relative shadow-lg overflow-hidden w-[520px] h-[440px] rounded-[32px] bg-[#141414]">
                        <Image src="/assets/business/cross-border-bg.png" alt="Cross Border" width={915} height={927} className="z-0 absolute inset-0 w-full h-full object-cover rounded-[32px]" />
                        <div className="absolute -top-[130px] left-[40%] w-[133px] h-[340px] bg-[#D94EFF] rotate-80 z-10 blur-[213px]"></div>
                        <div className="absolute -left-[121px] top-[66px] z-0 w-[242px] h-[240px] rounded-[20px]" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 60%)" }}></div>
                        <div className="absolute -right-[121px] top-[66px] z-0 w-[242px] h-[240px] rounded-[20px]" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 60%)" }}></div>

                        {/* border: 0.5px solid;border-image-source: linear-gradient(120.94deg, rgba(115, 77, 74, 0) 63.5%, #734D4A 100.11%); */}
                        <div className="absolute left-[46px] top-[120px] z-10 w-[152px] h-[119px] flex flex-col items-center justify-center gap-2" style={{
                            border: "0.5px solid transparent",
                            borderRadius: "20px",
                            borderImage: "linear-gradient(121deg, #734D4A 0%, #734D4A 100%) 1",
                            boxShadow: "0px 34px 24px -20px #00000059",
                            backdropFilter: "blur(24px)",
                        }}>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: "linear-gradient(60deg, #D155FF 2.32%, #B532F2 15.95%, #A016E8 29.28%, #9406E2 41.05%, #8F00E0 50%, #A08CFF 97.68%)" }}>
                                <Image src="/assets/business/outbox.svg" alt="Payment Icon" width={20} height={20} />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p className="text-[14px] font-medium text-white">USD 9,500</p>
                                <p className="text-[12px] text-white/80">Consignee</p>
                            </div>
                        </div>

                        <div className="w-[56px] h-[56px] absolute left-[45%]  top-[160px] z-10 bg-[#FFFFFF0D] rounded-full flex items-center justify-center">
                            <div className="w-[40px] h-[40px] bg-[#FFFFFF0D] rounded-full flex items-center justify-center">
                                <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center" style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #999999 60%)" }}>
                                    <Image src="/assets/business/check.svg" alt="Center Icon" width={12} height={12} />
                                </div>
                            </div>
                        </div>

                        {/* border: 0.5px solid;border-image-source: linear-gradient(180deg, #581EFB 0%, #F048B4 100%); */}
                        {/* box-shadow: 0px 34px 24px -20px #00000059;backdrop-filter: blur(24px) */}
                        <div className="absolute right-[46px] top-[120px] z-10 w-[152px] h-[119px] flex flex-col items-center justify-center gap-2" style={{
                            border: "0.5px solid transparent",
                            borderRadius: "20px",
                            borderImage: "linear-gradient(180deg, #581EFB 0%, #F048B4 100%) 1",
                            boxShadow: "0px 34px 24px -20px #00000059",
                            backdropFilter: "blur(24px)",
                        }}>
                            <div className="w-10 h-10 flex items-center justify-center rounded-full" style={{ background: "linear-gradient(60deg, #D155FF 2.32%, #B532F2 15.95%, #A016E8 29.28%, #9406E2 41.05%, #8F00E0 50%, #A08CFF 97.68%)" }}>
                                <Image src="/assets/business/inbox.svg" alt="Payment Icon" width={20} height={20} />
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1">
                                <p className="text-[14px] font-medium text-white">KES 1,235,000</p>
                                <p className="text-[12px] text-white/80">Shipper</p>
                            </div>
                        </div>
                        {/* footer content with black background faded at top part */}
                        <div className="absolute bottom-0 pb-6 pl-6 z-20 bg-linear-to-t from-black to-gray-25 rounded-[32px] w-full">
                            <h3 className="text-[24px] font-medium text-white">Send & Receive Payments in Minutes.</h3>
                            <p className="mt-2 text-[#606165] text-[16px]">
                                Set auto-transfer rules and send free USD wires.
                            </p>
                        </div>
                    </div>

                    <div className="relative shadow-lg w-[520px] h-[440px] rounded-[32px] bg-[#141414]">
                        <Image src="/assets/business/cross-border-bg.png" alt="Cross Border" width={915} height={927} className="z-0 absolute inset-0 w-full h-full object-cover rounded-[32px]" />
                        <div className="absolute -top-[70px] -right-10 w-[233px] h-[240px] bg-[#FF584E] -rotate-80 z-10 blur-[213px]"></div>
                        <div className="absolute -top-[70px] -left-10 w-[133px] h-[240px] bg-[#FF584E] rotate-80 z-10 blur-[213px]"></div>
                        <div className="absolute top-[2%] z-0">

                        </div>

                        {/* footer content with black background faded at top part */}
                        <div className="absolute bottom-0 pb-6 pl-6 z-20 bg-linear-to-t from-black to-gray-25 rounded-[32px]">
                            <h3 className="text-[24px] font-medium text-white">Organize every trade flow</h3>
                            <p className="mt-2 text-[#606165] text-[16px]">
                                Keep documents, payment triggers, and approvals linked to every shipment
                            </p>
                        </div>
                    </div>
                </div>

                {/* one card, full width */}
                <div className="bg-white p-6 shadow-lg w-full h-[440px] mt-6 rounded-[32px] bg-[#141414]">
                    <h3 className="text-xl font-bold text-[#280137]">Feature 3</h3>
                    <p className="mt-2 text-[#4a4a6a]">
                        Description of the third feature.
                    </p>
                </div>
            </div>
        </section >
    );
}
