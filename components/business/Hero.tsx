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

function DottedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 800;
    canvas.height = 800;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 300;

    const dots: { x: number; y: number; z: number; alpha: number }[] = [];
    const numDots = 800;

    for (let i = 0; i < numDots; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      dots.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        alpha: 1,
      });
    }

    interface ShootingStar {
      startX: number; startY: number; startZ: number;
      endX: number;   endY: number;   endZ: number;
      progress: number; speed: number; active: boolean;
    }

    const shootingStars: ShootingStar[] = [];
    const numStars = 3;
    let currentStarIndex = 0;
    let pauseTimer = 0;
    const pauseDuration = 60;

    for (let i = 0; i < numStars; i++) {
      const startDot = dots[Math.floor(Math.random() * dots.length)];
      const endDot   = dots[Math.floor(Math.random() * dots.length)];
      shootingStars.push({
        startX: startDot.x, startY: startDot.y, startZ: startDot.z,
        endX:   endDot.x,   endY:   endDot.y,   endZ:   endDot.z,
        progress: 0, speed: 0.008, active: i === 0,
      });
    }

    let rotation = 0;
    let raf = 0;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      rotation += 0.002;

      dots.forEach((dot) => {
        const rotatedX = dot.x * Math.cos(rotation) - dot.z * Math.sin(rotation);
        const rotatedZ = dot.x * Math.sin(rotation) + dot.z * Math.cos(rotation);
        const scale = 300 / (300 + rotatedZ);
        const projectedX = rotatedX * scale + centerX;
        const projectedY = dot.y * scale + centerY;
        const opacity = ((rotatedZ + radius) / (radius * 2)) * 0.6;

        ctx.fillStyle = `rgba(147, 197, 253, ${opacity})`;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, 2 * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      shootingStars.forEach((star) => {
        if (!star.active) return;

        star.progress += star.speed;

        if (star.progress >= 1) {
          const startDot = dots[Math.floor(Math.random() * dots.length)];
          const endDot   = dots[Math.floor(Math.random() * dots.length)];
          star.startX = startDot.x; star.startY = startDot.y; star.startZ = startDot.z;
          star.endX   = endDot.x;   star.endY   = endDot.y;   star.endZ   = endDot.z;
          star.progress = 0;
          star.speed = 0.008;
          star.active = false;
          currentStarIndex = (currentStarIndex + 1) % numStars;
          shootingStars[currentStarIndex].active = true;
          pauseTimer = 0;
        }

        const currentX = star.startX + (star.endX - star.startX) * star.progress;
        const currentY = star.startY + (star.endY - star.startY) * star.progress;
        const currentZ = star.startZ + (star.endZ - star.startZ) * star.progress;

        const rotatedX = currentX * Math.cos(rotation) - currentZ * Math.sin(rotation);
        const rotatedZ = currentX * Math.sin(rotation) + currentZ * Math.cos(rotation);
        const scale = 300 / (300 + rotatedZ);
        const projectedX = rotatedX * scale + centerX;
        const projectedY = currentY * scale + centerY;

        if (star.progress > 0.05) {
          ctx.strokeStyle = `rgba(255, 255, 255, 0.12)`;
          ctx.lineWidth = 1.5;
          ctx.beginPath();

          for (let t = Math.max(0, star.progress - 0.25); t <= star.progress; t += 0.01) {
            const trailX = star.startX + (star.endX - star.startX) * t;
            const trailY = star.startY + (star.endY - star.startY) * t;
            const trailZ = star.startZ + (star.endZ - star.startZ) * t;
            const rotTrailX = trailX * Math.cos(rotation) - trailZ * Math.sin(rotation);
            const rotTrailZ = trailX * Math.sin(rotation) + trailZ * Math.cos(rotation);
            const trailScale = 300 / (300 + rotTrailZ);
            const projTrailX = rotTrailX * trailScale + centerX;
            const projTrailY = trailY * trailScale + centerY;

            if (t === Math.max(0, star.progress - 0.25)) {
              ctx.moveTo(projTrailX, projTrailY);
            } else {
              ctx.lineTo(projTrailX, projTrailY);
            }
          }
          ctx.stroke();
        }

        const gradient = ctx.createRadialGradient(projectedX, projectedY, 0, projectedX, projectedY, 12);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${0.5 * (1 - star.progress * 0.2)})`);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${0.25 * (1 - star.progress * 0.2)})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, 12, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 * (1 - star.progress * 0.1)})`;
        ctx.beginPath();
        ctx.arc(projectedX, projectedY, 2.5 * scale, 0, Math.PI * 2);
        ctx.fill();
      });

      if (pauseTimer < pauseDuration) {
        pauseTimer++;
      }

      raf = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute right-[100px] top-1/2 z-2 -translate-y-1/2">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
  );
}

function AIBrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 600;
    canvas.height = 600;

    interface Node {
      x: number; y: number;
      baseX: number; baseY: number;
      vx: number; vy: number;
    }

    const nodes: Node[] = [];
    const numNodes = 50;

    for (let i = 0; i < numNodes; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      nodes.push({ x, y, baseX: x, baseY: y, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3 });
    }

    let raf = 0;

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.vx += (node.baseX - node.x) * 0.0001;
        node.vy += (node.baseY - node.y) * 0.0001;
        node.vx *= 0.99;
        node.vy *= 0.99;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(147, 197, 253, ${(1 - distance / 150) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.fillStyle = "rgba(147, 197, 253, 0.4)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      raf = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute left-[100px] top-1/2 z-10 hidden -translate-y-1/2 opacity-60 md:block">
      <canvas ref={canvasRef} aria-hidden="true" />
    </div>
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


function GlobalPassCard() {
  return (
    <div
      data-anim="float-coin"
      className="relative h-[316px] w-[480px] overflow-hidden rounded-[24px] bg-[#050505] shadow-[0_34px_80px_rgba(0,0,0,0.45)]"
    >
      <Image
        src="/assets/business/card-bg.svg"
        alt=""
        width={480}
        height={316}
        className="h-full w-full object-cover "
      />
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
          className="absolute inset-0 z-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_68%_42%,rgba(89,20,139,0.08),rgba(2,2,13,0.24)_36%,rgba(0,0,0,0.86)_84%),linear-gradient(90deg,rgba(0,0,0,0.94),rgba(0,0,0,0.38)_45%,rgba(0,0,0,0.12)_72%)]" />
        <DottedGlobe />
        <AIBrain />

        <div className="relative z-20 mx-auto flex min-h-[760px] max-w-[1439px] flex-col items-center px-5 pb-16 pt-[92px] text-center lg:min-h-[820px] lg:px-8 lg:pt-[60px]">
          <div className="mx-auto max-w-[830px] lg:max-w-[1080px]">
            <h1
              data-anim="heading"
              className="bg-[linear-gradient(88deg,#ffffff_10%,#ffffff_38%,#c978f0_72%,#a855f7_100%)] bg-clip-text text-[68px] font-semibold leading-[1.15] text-transparent"
            >
              AI-Powered Global Trade.
              <br />
              Instant Settlement.
            </h1>

            <p
              data-anim="copy"
              className="mx-auto mt-6 max-w-[650px] text-[16px] font-medium leading-[1.4] text-white"
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
            <div className="relative sm:justify-self-end lg:-translate-x-12 lg:-translate-y-20">
              {/* <SettlementCard /> */}
              <Image
                src="/assets/business/avocado.svg"
                alt=""
                width={33}
                height={33}
                priority
                className="absolute left-[20px] top-[20%] w-[33px] h-[33px]"
              />
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
    </section>
  );
}
