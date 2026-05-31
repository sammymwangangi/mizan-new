"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { useHeroEntrance } from "@/lib/useGsapEntrance";
import Navbar from "@/components/Navbar";

const navItems = [
  { label: "Personal", href: "/" },
  { label: "Business", href: "/business" },
  { label: "Labs", href: "#" },
  { label: "About", href: "#" },
];

const shootingStars = [
  { top: "24%", left: "69%", delay: "0s", duration: "5.8s" },
  { top: "36%", left: "82%", delay: "1.6s", duration: "6.4s" },
  { top: "52%", left: "76%", delay: "3.2s", duration: "7s" },
  { top: "31%", left: "57%", delay: "4.4s", duration: "6.2s" },
  { top: "66%", left: "88%", delay: "5.6s", duration: "7.4s" },
];

function BusinessNavbar() {
  return (
    <nav
      data-anim="navbar"
      className="relative z-30 flex h-[72px] items-center justify-between bg-black px-6 sm:px-10 lg:px-[86px]"
    >
      <a href="/" aria-label="Mizan home" className="flex items-center">
        <Image
          src="/assets/logo.svg"
          alt="Mizan"
          width={96}
          height={48}
          priority
          className="h-auto w-[92px]"
        />
      </a>

      <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-9 md:flex">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-[15px] font-normal text-white/88 transition-colors duration-200 hover:text-white"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="Open menu"
        className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/85 md:hidden"
      >
        <span className="flex w-4 flex-col gap-1">
          <span className="h-px rounded-full bg-current" />
          <span className="h-px rounded-full bg-current" />
          <span className="h-px rounded-full bg-current" />
        </span>
      </button>
    </nav>
  );
}

function NetworkMesh() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.32, y: 0.48, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const particles = Array.from({ length: 46 }, (_, i) => ({
      x: ((i * 73) % 100) / 100,
      y: ((i * 41) % 100) / 100,
      vx: (((i * 17) % 9) - 4) * 0.00045,
      vy: (((i * 29) % 9) - 4) * 0.00035,
    }));

    let width = 0;
    let height = 0;
    let frame = 0;
    let raf = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (event.clientX - rect.left) / rect.width,
        y: (event.clientY - rect.top) / rect.height,
        active: true,
      };
    };

    const onPointerLeave = () => {
      mouseRef.current.active = false;
    };

    const draw = () => {
      frame += 1;
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const mouseX = mouse.x * width;
      const mouseY = mouse.y * height;

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0.02 || particle.x > 0.98) particle.vx *= -1;
        if (particle.y < 0.08 || particle.y > 0.92) particle.vy *= -1;

        const px = particle.x * width;
        const py = particle.y * height;
        const pulse = 0.5 + Math.sin(frame * 0.018 + index) * 0.5;
        const proximity = mouse.active
          ? Math.max(0, 1 - Math.hypot(px - mouseX, py - mouseY) / 150)
          : 0;

        ctx.beginPath();
        ctx.fillStyle = `rgba(192, 132, 252, ${0.24 + pulse * 0.18 + proximity * 0.32})`;
        ctx.arc(px + proximity * (mouseX - px) * 0.07, py + proximity * (mouseY - py) * 0.07, 1.3 + proximity * 2.4, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const ax = a.x * width;
          const ay = a.y * height;
          const bx = b.x * width;
          const by = b.y * height;
          const distance = Math.hypot(ax - bx, ay - by);

          if (distance < 112) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.13 * (1 - distance / 112)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(ax, ay);
            ctx.lineTo(bx, by);
            ctx.stroke();
          }
        }
      }

      if (mouse.active) {
        const gradient = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 170);
        gradient.addColorStop(0, "rgba(168, 85, 247, 0.16)");
        gradient.addColorStop(1, "rgba(168, 85, 247, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      if (!media.matches) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-y-0 left-0 z-10 hidden w-full opacity-80 md:block"
    />
  );
}

function ArrowRightIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="h-4 w-4" fill="none">
      <path
        d="M4 9h10m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 72 34" className="h-9 w-[72px]" fill="none" aria-hidden="true">
      <path
        d="M2 29C12 25 15 21 23 22C31 23 34 15 42 15C51 15 53 8 60 9C65 10 68 5 70 3"
        stroke="#74e4c5"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M2 29C12 25 15 21 23 22C31 23 34 15 42 15C51 15 53 8 60 9C65 10 68 5 70 3V34H2V29Z"
        fill="url(#sparklineFill)"
      />
      <defs>
        <linearGradient id="sparklineFill" x1="36" x2="36" y1="3" y2="34">
          <stop stopColor="#74e4c5" stopOpacity="0.35" />
          <stop offset="1" stopColor="#74e4c5" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function GlobalPassCard() {
  return (
    <div
      data-anim="float-coin"
      className="relative h-[504px] w-[764px] overflow-hidden rounded-[24px] bg-[#050505] shadow-[0_34px_80px_rgba(0,0,0,0.45)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_46%_38%,rgba(255,255,255,0.38),rgba(255,255,255,0.08)_22%,rgba(0,0,0,0)_44%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05),transparent_45%,rgba(255,255,255,0.08))]" />
      <Image
        src="/assets/business/chip.png"
        alt=""
        width={34}
        height={27}
        className="absolute right-6 top-[43%] z-10 opacity-75"
      />
      <Image
        src="/assets/business/mastercard.png"
        alt=""
        width={58}
        height={39}
        className="absolute bottom-5 right-7 z-10"
      />
      <p className="absolute bottom-7 left-7 z-10 text-[11px] font-medium text-white/30">
        Global Pass
      </p>
    </div>
  );
}

function SettlementCard() {
  return (
    <div
      data-anim="float-arrow"
      className="relative h-[274px] w-[600px] overflow-hidden rounded-[20px] bg-white text-black shadow-[0_24px_60px_rgba(20,6,32,0.24)]"
    >
      <div className="flex items-center gap-3 bg-[#fbf0ff] px-4 py-4 lg:h-[70px]">
        <Image src="/assets/business/avocado.svg" alt="" width={36} height={36} />
        <div>
          <h3 className="text-[17px] font-semibold leading-tight">
            Nairobi - Amsterdam
          </h3>
          <p className="mt-1 text-[13px] text-[#6e6473]">1,750 kg Hass Avocados</p>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3 px-4 py-3 lg:h-[67px]">
        <div>
          <p className="text-[12px] text-[#7a707f]">Payment Received</p>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-[16px] font-semibold">USDT 4,750.00</span>
            <span className="rounded-md bg-[#ccfff0] px-1.5 py-0.5 text-[12px] font-medium">
              50% paid
            </span>
          </div>
        </div>
        <Sparkline />
      </div>
    </div>
  );
}

export default function BusinessHero() {
  const sectionRef = useHeroEntrance<HTMLElement>();

  return (
    <section ref={sectionRef} className="relative  w-full overflow-hidden bg-black text-white">
      <Navbar />

      <div className="relative min-h-[907px] overflow-hidden">
        <Image
          src="/assets/business/globe.png"
          alt=""
          width={1439}
          height={907}
          priority
          className="absolute inset-0 z-0 object-cover w-full h-full"
        />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_68%_42%,rgba(89,20,139,0.08),rgba(2,2,13,0.24)_36%,rgba(0,0,0,0.86)_84%),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.38)_45%,rgba(0,0,0,0.12)_72%)]" />
        <NetworkMesh />

        {shootingStars.map((star, index) => (
          <span
            key={index}
            className="shooting-star"
            style={{
              top: star.top,
              left: star.left,
              animationDelay: star.delay,
              animationDuration: star.duration,
            }}
          />
        ))}

        <div className="relative z-20 mx-auto flex min-h-[760px] max-w-[1439px] flex-col items-center px-5 pb-16 pt-[92px] text-center lg:min-h-[820px] lg:px-8 lg:pt-[60px]">
          <div className="mx-auto max-w-[830px] lg:max-w-[1080px]">
            <h1
              data-anim="heading"
              className="bg-[linear-gradient(88deg,#ffffff_10%,#ffffff_38%,#c978f0_72%,#a855f7_100%)] bg-clip-text text-[44px] font-extrabold leading-[1.15] text-transparent sm:text-[62px] lg:text-[68px]"
            >
              AI-Powered Global Trade.
              <br />
              Instant Settlement.
            </h1>

            <p
              data-anim="copy"
              className="mx-auto mt-6 max-w-[650px] text-[15px] font-medium leading-[1.4] text-white sm:text-[17px]"
            >
              No more WhatsApp threads, lost paperwork, or manual delays. From
              documentation to instant payment, Mizan gives exporters, importers,
              and cross-border businesses a faster, cleaner way to move money.
            </p>

            <div data-anim="cta" className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
              <a
                href="#"
                className="inline-flex h-[52px] min-w-[173px] items-center justify-center gap-2 rounded-[10px] bg-[#8f00e0] px-6 text-[16px] font-medium text-white shadow-[0_18px_45px_rgba(143,0,224,0.36)] transition duration-200 hover:scale-[1.02] hover:bg-[#a20af5]"
              >
                Book a demo
                <ArrowRightIcon />
              </a>
              <a
                href="#"
                className="text-[16px] font-normal text-white/68 transition-colors hover:text-white"
              >
                See how it works
              </a>
            </div>
          </div>

          <div className="mt-12 grid w-full grid-cols-1 place-items-center gap-6 sm:mt-11 sm:grid-cols-[1fr_auto] sm:items-end lg:mt-8">
            <div className="sm:justify-self-start lg:translate-x-10">
              <GlobalPassCard />
            </div>
            <div className="sm:justify-self-end lg:-translate-x-12 lg:-translate-y-20">
              {/* <SettlementCard /> */}
              <Image
                src="/assets/business/nairobi-amster.png"
                alt=""
                width={297}
                height={138}
                priority
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .shooting-star {
          position: absolute;
          z-index: 15;
          width: 3px;
          height: 3px;
          border-radius: 999px;
          background: white;
          box-shadow:
            0 0 12px rgba(255, 255, 255, 0.95),
            0 0 26px rgba(194, 132, 252, 0.85);
          opacity: 0;
          transform: rotate(-22deg);
          animation-name: shoot;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }

        .shooting-star::before {
          content: "";
          position: absolute;
          right: 2px;
          top: 1px;
          width: 92px;
          height: 1px;
          background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), transparent);
          transform: translateY(-50%);
        }

        @keyframes shoot {
          0%, 64%, 100% {
            opacity: 0;
            transform: translate3d(0, 0, 0) rotate(-22deg);
          }
          70% {
            opacity: 1;
          }
          82% {
            opacity: 0;
            transform: translate3d(-170px, 68px, 0) rotate(-22deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .shooting-star {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
