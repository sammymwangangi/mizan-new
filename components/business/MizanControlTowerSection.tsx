"use client";

/**
 * MizanControlTowerSection
 * ------------------------------------------------------------------
 * Drop-in Next.js / React section that recreates the "Mizan Control
 * Tower : All-in-one suite" composition entirely in code — no image
 * assets required. Both the MacBook (rose-gold) and Samsung Galaxy S25
 * (pink-gold) mockups are pure CSS/SVG, and the dashboard + Upload
 * Documents screens are real HTML/Tailwind so they stay sharp at any
 * zoom level.
 *
 * Tailwind CSS v3+ is assumed. No external icon library is required —
 * all icons are inline SVG so the component is fully self-contained.
 *
 * Usage:
 *   import MizanControlTowerSection from "@/components/MizanControlTowerSection";
 *   export default function Page() { return <MizanControlTowerSection />; }
 */

import React from "react";

/* -------------------------------------------------------------------------- */
/*  Inline icon set (kept tiny — only what the two mockups actually use)       */
/* -------------------------------------------------------------------------- */

type IconProps = { className?: string; strokeWidth?: number };

const I = {
  Search: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  ),
  Bell: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  ),
  Chat: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
  Help: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 1 1 5.8 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </svg>
  ),
  Grid: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  ),
  Box: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 8 12 3 3 8v8l9 5 9-5z" />
      <path d="M3 8l9 5 9-5" />
      <path d="M12 13v9" />
    </svg>
  ),
  Wallet: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <circle cx="16.5" cy="15" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Doc: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h6" />
    </svg>
  ),
  Flag: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4 22V4a1 1 0 0 1 1-1h12l-3 5 3 5H5" />
    </svg>
  ),
  List: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M8 6h13M8 12h13M8 18h13" />
      <circle cx="4" cy="6" r="1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="12" r="1" fill="currentColor" stroke="none" />
      <circle cx="4" cy="18" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Users: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Chart: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 3v18h18" />
      <path d="M7 16V11M12 16V7M17 16v-3" />
    </svg>
  ),
  Gear: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Headset: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1v-6h3zM3 19a2 2 0 0 0 2 2h1v-6H3z" />
    </svg>
  ),
  Plane: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.2.6-.6.5-1.1z" />
    </svg>
  ),
  Hourglass: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 22h14M5 2h14M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22M17 2v4.17a2 2 0 0 1-.59 1.42L12 12 7.59 7.59A2 2 0 0 1 7 6.17V2" />
    </svg>
  ),
  Check: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  CheckCircle: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  ),
  ArrowLeft: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  ),
  ArrowRight: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  ),
  ArrowUp: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 19V5M5 12l7-7 7 7" />
    </svg>
  ),
  ArrowDown: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  ),
  Caret: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  ),
  CaretDown: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  ),
  Info: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4M12 8h.01" />
    </svg>
  ),
  Upload: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M17 8l-5-5-5 5M12 3v12" />
    </svg>
  ),
  Download: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 10l5 5 5-5M12 15V3" />
    </svg>
  ),
  Clock: ({ className, strokeWidth = 2 }: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  ),
  Dot: ({ className }: IconProps) => (
    <svg viewBox="0 0 8 8" className={className}>
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  ),
};

/* -------------------------------------------------------------------------- */
/*  Dashboard rendered inside the MacBook                                      */
/* -------------------------------------------------------------------------- */

function Dashboard() {
  const shipments = [
    { id: "FRE-AMS-0042", customer: "Amsterdam XXX",   route: "NBO → AMS", status: "In Transit",       value: "$24,500.00", tone: "violet" },
    { id: "FRE-RDM-0039", customer: "Rotterdam Fresh BV", route: "NBO → RTM", status: "Awaiting Docs",    value: "$18,200.00", tone: "amber" },
    { id: "FRE-HAM-0036", customer: "Hamburg Produce",    route: "NBO → HAM", status: "Awaiting Payment", value: "$15,850.00", tone: "orange" },
    { id: "FRE-LON-0031", customer: "London Greens Ltd",  route: "NBO → LON", status: "Completed",        value: "$22,750.00", tone: "green" },
    { id: "FRE-PAR-0028", customer: "Paris Market SARL",  route: "NBO → CDG", status: "Completed",        value: "$17,300.00", tone: "green" },
  ];

  const statusTone: Record<string, string> = {
    violet: "bg-violet-500/15 text-violet-300",
    amber:  "bg-amber-500/15 text-amber-300",
    orange: "bg-orange-500/15 text-orange-300",
    green:  "bg-emerald-500/15 text-emerald-300",
  };

  return (
    <div className="flex h-full w-full bg-[#0b0a14] font-sans text-slate-100">
      {/* Sidebar ----------------------------------------------------------- */}
      <aside className="flex w-[18%] min-w-[160px] flex-col border-r border-white/[0.04] px-3 py-4">
        <div className="mb-5 flex items-center gap-2 px-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-gradient-to-br from-violet-500 to-violet-700 text-[10px] font-bold text-white">M</div>
          <span className="text-[11px] font-semibold tracking-wide text-white/90">MIZAN</span>
        </div>
        <nav className="flex flex-col gap-[2px] text-[10px]">
          {[
            { icon: I.Grid,  label: "Dashboard", active: true },
            { icon: I.Box,   label: "Shipments" },
            { icon: I.Wallet,label: "Payments" },
            { icon: I.Doc,   label: "Invoices" },
            { icon: I.Flag,  label: "Milestones" },
            { icon: I.List,  label: "Ledger" },
            { icon: I.Users, label: "Counterparties" },
            { icon: I.Doc,   label: "Documents" },
            { icon: I.Chart, label: "Reports" },
            { icon: I.Gear,  label: "Settings" },
          ].map(({ icon: Icon, label, active }) => (
            <button
              key={label}
              className={[
                "flex items-center gap-2 rounded-md px-2 py-[7px] text-left transition-colors",
                active ? "bg-violet-500/10 text-violet-300" : "text-slate-400 hover:bg-white/[0.03] hover:text-slate-200",
              ].join(" ")}
            >
              <Icon className="h-3 w-3" strokeWidth={1.8} />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </nav>

        <div className="mt-auto flex flex-col gap-2">
          <div className="flex items-center justify-between rounded-md border border-white/[0.05] bg-white/[0.02] px-2 py-1.5">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <div className="leading-tight">
                <div className="text-[9px] font-semibold text-white">Control Tower</div>
                <div className="text-[8px] text-slate-500">All systems operational</div>
              </div>
            </div>
            <I.Caret className="h-2.5 w-2.5 text-slate-500" />
          </div>

          <button className="flex items-center justify-center gap-1.5 rounded-md border border-violet-500/30 bg-violet-500/10 px-2 py-1.5 text-[9px] font-medium text-violet-300 hover:bg-violet-500/15">
            <I.Headset className="h-3 w-3" strokeWidth={1.8} />
            Contact Support
          </button>

          <button className="flex items-center gap-1 px-2 py-1 text-[9px] text-slate-500 hover:text-slate-300">
            <I.ArrowLeft className="h-2.5 w-2.5" />
            Collapse
          </button>
        </div>
      </aside>

      {/* Main -------------------------------------------------------------- */}
      <main className="flex-1 overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center gap-3 border-b border-white/[0.04] px-5 py-3">
          <div className="flex flex-1 items-center gap-2 rounded-lg border border-white/[0.05] bg-white/[0.02] px-2.5 py-1.5">
            <I.Search className="h-3 w-3 text-slate-500" strokeWidth={2} />
            <span className="text-[10px] text-slate-500">Search shipments, payments, invoices…</span>
            <span className="ml-auto rounded border border-white/[0.06] bg-white/[0.03] px-1.5 py-[1px] text-[8px] text-slate-400">⌘K</span>
          </div>
          <div className="relative">
            <I.Bell className="h-3.5 w-3.5 text-slate-400" strokeWidth={1.8} />
            <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-rose-500" />
          </div>
          <I.Chat className="h-3.5 w-3.5 text-slate-400" strokeWidth={1.8} />
          <I.Help className="h-3.5 w-3.5 text-slate-400" strokeWidth={1.8} />
          <div className="flex items-center gap-1.5">
            <div className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-violet-700 text-[8px] font-bold text-white">FL</div>
            <div className="leading-tight">
              <div className="text-[9px] font-semibold text-white">Fresh Logistics</div>
              <div className="text-[8px] text-slate-500">Operations</div>
            </div>
            <I.CaretDown className="h-2.5 w-2.5 text-slate-500" />
          </div>
        </header>

        <div className="space-y-3 overflow-hidden p-5">
          <h1 className="text-[15px] font-semibold text-white">
            Welcome back, Fresh Logistics <span className="inline-block">👋</span>
          </h1>

          {/* KPI cards */}
          <div className="grid grid-cols-4 gap-2.5">
            {[
              { icon: <I.Plane className="h-3 w-3 text-violet-300" strokeWidth={1.8} />,    iconBg: "bg-violet-500/15",     label: "Total Settled (30D)", value: "$142,500.00", sub: "Across 7 active trades", badge: "↑ 18.4%", badgeTone: "text-emerald-400 bg-emerald-500/10" },
              { icon: <I.Plane className="h-3 w-3 text-sky-300" strokeWidth={1.8} />,        iconBg: "bg-sky-500/15",         label: "In Transit",          value: "$87,250.00",  sub: "5 shipments" },
              { icon: <I.Hourglass className="h-3 w-3 text-orange-300" strokeWidth={1.8} />, iconBg: "bg-orange-500/15",      label: "Awaiting Action",     value: "$24,300.00",  sub: "3 shipments" },
              { icon: <I.CheckCircle className="h-3 w-3 text-emerald-300" strokeWidth={1.8} />, iconBg: "bg-emerald-500/15",  label: "Success Rate",        value: "99.7%",       sub: "This month" },
            ].map((k) => (
              <div key={k.label} className="rounded-lg border border-white/[0.05] bg-white/[0.02] p-2.5">
                <div className="flex items-start gap-2">
                  <div className={`grid h-7 w-7 place-items-center rounded-md ${k.iconBg}`}>{k.icon}</div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[8px] text-slate-400">{k.label}</div>
                    <div className="mt-0.5 flex items-baseline gap-1.5">
                      <div className="text-[13px] font-semibold text-white">{k.value}</div>
                      {k.badge && (
                        <span className={`rounded px-1 py-[1px] text-[7px] font-medium ${k.badgeTone}`}>{k.badge}</span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[8px] text-slate-500">{k.sub}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Shipments + Live shipment */}
          <div className="grid grid-cols-5 gap-2.5">
            <div className="col-span-3 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold text-white">Shipments</div>
                <button className="text-[8px] text-violet-300 hover:text-violet-200">View all</button>
              </div>
              <div className="mt-1.5 flex gap-3 border-b border-white/[0.05] text-[8px]">
                <button className="border-b border-violet-400 pb-1 font-medium text-violet-300">Active</button>
                <button className="pb-1 text-slate-400">In Transit</button>
                <button className="pb-1 text-slate-400">Completed</button>
              </div>
              <div className="mt-2 grid grid-cols-[1.1fr_1.2fr_0.8fr_1fr_0.7fr_auto] items-center gap-2 text-[7.5px] uppercase tracking-wider text-slate-500">
                <div>Shipment ID</div>
                <div>Customer</div>
                <div>Route</div>
                <div>Status</div>
                <div>Value</div>
                <div />
              </div>
              <div className="mt-1 space-y-1">
                {shipments.map((s) => (
                  <div key={s.id} className="grid grid-cols-[1.1fr_1.2fr_0.8fr_1fr_0.7fr_auto] items-center gap-2 rounded-md py-1 text-[9px]">
                    <div className="text-slate-200">{s.id}</div>
                    <div className="truncate text-slate-300">{s.customer}</div>
                    <div className="text-slate-400">{s.route}</div>
                    <div>
                      <span className={`rounded px-1.5 py-[2px] text-[7.5px] font-medium ${statusTone[s.tone]}`}>{s.status}</span>
                    </div>
                    <div className="text-slate-200">{s.value}</div>
                    <I.Caret className="h-2.5 w-2.5 text-slate-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Live shipment */}
            <div className="col-span-2 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold text-white">Live Shipment</div>
                <button className="text-[8px] text-violet-300 hover:text-violet-200">View details</button>
              </div>

              <div className="mt-2 rounded-lg bg-gradient-to-br from-violet-600/30 to-violet-500/10 p-2.5 ring-1 ring-violet-400/20">
                <div className="flex items-center justify-between text-[7.5px]">
                  <span className="rounded bg-black/30 px-1.5 py-[2px] text-violet-200">FRE-AMS-0042</span>
                  <span className="flex items-center gap-1 text-violet-200">
                    <I.Dot className="h-1.5 w-1.5 text-emerald-400" />
                    In Transit
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-1.5 text-[15px] font-semibold text-violet-100">
                  <span>NBO</span>
                  <I.ArrowRight className="h-3 w-3" strokeWidth={2} />
                  <span>AMS</span>
                </div>
                <div className="mt-0.5 text-[8px] text-violet-200/80">Nairobi, Kenya → Amsterdam, Netherlands</div>
                <div className="mt-2">
                  <div className="h-1 overflow-hidden rounded-full bg-black/30">
                    <div className="h-full w-[68%] rounded-full bg-violet-300" />
                  </div>
                  <div className="mt-1 flex justify-between text-[7.5px] text-violet-200/80">
                    <span>Est. arrival: 12h 22m</span>
                    <span>68%</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 text-[8px]">
                <div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <span>🥑</span> Cargo
                  </div>
                  <div className="mt-0.5 font-medium text-white">Fresh Avocados</div>
                </div>
                <div>
                  <div className="text-slate-400">Value</div>
                  <div className="mt-0.5 font-medium text-white">
                    $24,500.00 <span className="text-slate-500">USD</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 border-t border-white/[0.05] pt-2">
                <div className="text-[8px] text-slate-400">Next milestone</div>
                <div className="mt-1 flex items-center gap-1.5">
                  <div className="grid h-5 w-5 place-items-center rounded bg-violet-500/15">
                    <I.Plane className="h-2.5 w-2.5 text-violet-300" strokeWidth={1.8} />
                  </div>
                  <div className="leading-tight">
                    <div className="text-[8.5px] font-medium text-white">Arrival in Amsterdam</div>
                    <div className="text-[7.5px] text-slate-500">Today, 22:30 EAT</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="grid grid-cols-5 gap-2.5">
            <div className="col-span-2 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold text-white">Recent Transactions</div>
                <button className="text-[8px] text-violet-300 hover:text-violet-200">View all</button>
              </div>
              <div className="mt-2 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-emerald-500/15">
                    <I.ArrowDown className="h-3 w-3 text-emerald-300" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="text-white">Payment from Amsterdam XXX</span>
                      <span className="font-semibold text-white">$12,250.00</span>
                    </div>
                    <div className="flex items-center justify-between text-[8px] text-slate-500">
                      <span>FRE-AMS-0042 · Today, 09:42</span>
                      <span className="text-emerald-400">Completed</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-orange-500/15">
                    <I.ArrowUp className="h-3 w-3 text-orange-300" strokeWidth={1.8} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[9px]">
                      <span className="text-white">Payment to Rotterdam Fresh BV</span>
                      <span className="font-semibold text-white">$8,900.00</span>
                    </div>
                    <div className="flex items-center justify-between text-[8px] text-slate-500">
                      <span>FRE-RDM-0039 · Yesterday, 14:18</span>
                      <span className="text-orange-300">Awaiting</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ledger summary */}
            <div className="col-span-3 rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
              <div className="flex items-center justify-between">
                <div className="text-[10px] font-semibold text-white">Trade Ledger Summary</div>
                <button className="text-[8px] text-violet-300 hover:text-violet-200">View ledger</button>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-2 text-[8px]">
                {[
                  { label: "Total Collected", value: "$142,500.00", tone: "text-emerald-400" },
                  { label: "Total Released",  value: "$118,200.00", tone: "text-emerald-400" },
                  { label: "In Reserve",      value: "$24,300.00",  tone: "text-orange-300" },
                  { label: "Total Fees",      value: "$1,240.00",   tone: "text-slate-200" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="text-slate-500">{m.label}</div>
                    <div className={`mt-0.5 text-[10px] font-semibold ${m.tone}`}>{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Mini chart */}
              <svg viewBox="0 0 300 70" className="mt-2 w-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="gGreen" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="gViolet" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* green area */}
                <path d="M0,55 L20,50 L40,48 L60,45 L80,40 L100,38 L120,32 L140,28 L160,25 L180,22 L200,18 L220,15 L240,12 L260,10 L280,8 L300,6 L300,70 L0,70 Z" fill="url(#gGreen)" />
                <path d="M0,55 L20,50 L40,48 L60,45 L80,40 L100,38 L120,32 L140,28 L160,25 L180,22 L200,18 L220,15 L240,12 L260,10 L280,8 L300,6" fill="none" stroke="#34d399" strokeWidth="1.4" />
                {/* violet area */}
                <path d="M0,62 L20,60 L40,58 L60,56 L80,54 L100,52 L120,48 L140,46 L160,42 L180,40 L200,38 L220,34 L240,32 L260,28 L280,26 L300,22 L300,70 L0,70 Z" fill="url(#gViolet)" />
                <path d="M0,62 L20,60 L40,58 L60,56 L80,54 L100,52 L120,48 L140,46 L160,42 L180,40 L200,38 L220,34 L240,32 L260,28 L280,26 L300,22" fill="none" stroke="#a78bfa" strokeWidth="1.4" />
                {/* dashed orange */}
                <path d="M0,66 L60,64 L120,62 L180,60 L240,58 L300,56" fill="none" stroke="#fb923c" strokeWidth="1.2" strokeDasharray="3 3" />
              </svg>
              <div className="mt-1 flex justify-between text-[7px] text-slate-500">
                <span>$50K</span>
                <span>$100K</span>
                <span>$150K</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Upload Documents screen — rendered inside the phone                        */
/* -------------------------------------------------------------------------- */

function PhoneScreen() {
  type DocStatus = "PENDING" | "COMPLETE" | "WAITING";
  const docs: { title: string; sub: string; status: DocStatus; done?: boolean; waiting?: boolean }[] = [
    { title: "Commercial Invoice",      sub: "Itemised list of goods and value",   status: "PENDING" },
    { title: "Packing List",            sub: "Box count, weights, and dimensions", status: "PENDING" },
    { title: "Phytosanitary Certificate", sub: "Plant health clearance certificate", status: "PENDING" },
    { title: "Airline AWB Copy",        sub: "Air waybill — triggers payment",     status: "PENDING" },
    { title: "Consignee Details",       sub: "Buyer contact and customs info",     status: "COMPLETE", done: true },
    { title: "Proof of Delivery",       sub: "Signed receipt at destination",      status: "WAITING", waiting: true },
  ];

  const statusPill: Record<DocStatus, string> = {
    PENDING:  "bg-slate-100 text-slate-500",
    COMPLETE: "bg-emerald-100 text-emerald-600",
    WAITING:  "bg-amber-100 text-amber-600",
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-white font-sans">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-4">
        <button className="grid h-9 w-9 place-items-center rounded-full bg-slate-50 ring-1 ring-slate-200/70">
          <I.ArrowLeft className="h-4 w-4 text-slate-700" strokeWidth={2.2} />
        </button>
        <h2 className="text-[15px] font-semibold tracking-tight text-slate-900">Upload Documents</h2>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-4 pt-3">
        {/* Progress card */}
        <div className="rounded-2xl bg-white px-3 py-3 ring-1 ring-slate-100 shadow-[0_2px_10px_-2px_rgba(15,23,42,0.06)]">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-900">Document Checklist</div>
              <div className="mt-0.5 text-[9px] text-slate-500">1 of 5 required docs uploaded</div>
            </div>
            <div className="text-[15px] font-bold text-[#8F00E0]">20%</div>
          </div>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-[20%] rounded-full bg-[#8F00E0]" />
          </div>
        </div>

        {/* Info banner */}
        <div className="rounded-2xl bg-violet-50 p-3">
          <div className="flex gap-2">
            <I.Info className="mt-0.5 h-3.5 w-3.5 flex-none text-[#8F00E0]" strokeWidth={2} />
            <p className="text-[7px] leading-snug text-[#8F00E0]">
              The Airline AWB copy is the primary payment trigger. Upload it to initiate buyer payment collection.
            </p>
          </div>
        </div>

        {/* Document rows */}
        <div className="space-y-2 pb-3">
          {docs.map((d) => (
            <div
              key={d.title}
              className={[
                "flex items-center gap-2.5 rounded-2xl bg-white px-2.5 py-2 ring-1",
                d.done    ? "ring-emerald-100" :
                d.waiting ? "ring-amber-100"   : "ring-slate-100",
                "shadow-[0_1px_6px_-2px_rgba(15,23,42,0.05)]",
              ].join(" ")}
            >
              {/* leading icon */}
              <div
                className={[
                  "grid h-8 w-8 flex-none place-items-center rounded-full",
                  d.done    ? "bg-emerald-50" :
                  d.waiting ? "bg-amber-50"   : "bg-slate-50",
                ].join(" ")}
              >
                {d.done    ? <I.CheckCircle className="h-4 w-4 text-emerald-500" strokeWidth={2} /> :
                 d.waiting ? <I.Clock       className="h-4 w-4 text-amber-500"   strokeWidth={2} /> :
                              <I.Upload     className="h-4 w-4 text-slate-500"   strokeWidth={2} />}
              </div>

              {/* title + sub */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1">
                  <span className="truncate text-[7px] font-bold text-slate-900">{d.title}</span>
                  <span className="rounded bg-violet-50 px-1 py-[1px] text-[7px] font-bold tracking-wide text-violet-600">REQ</span>
                </div>
                <div className="truncate text-[6px] text-slate-500">{d.sub}</div>
              </div>

              {/* status pill + download */}
              <span className={`rounded px-1.5 py-[2px] text-[6px] font-bold tracking-wide ${statusPill[d.status]}`}>
                {d.status}
              </span>
              <div className="grid h-7 w-7 flex-none place-items-center rounded-full bg-slate-50">
                <I.Download className="h-3.5 w-3.5 text-slate-700" strokeWidth={2} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  MacBook mockup                                                             */
/* -------------------------------------------------------------------------- */

function MacBookMockup({ children }: { children: React.ReactNode }) {
  // Rose-gold MacBook in pure CSS. Aspect ratios chosen to match the reference.
  return (
    <div className="relative w-full" style={{ aspectRatio: "16 / 10.5" }}>
      {/* Lid */}
      <div
        className="relative h-[95%] w-full rounded-[18px] p-[10px] shadow-[0_30px_60px_-20px_rgba(76,29,149,0.35)]"
        style={{
          background:
            "linear-gradient(160deg, #f7d4d4 0%, #e8b8b8 25%, #d49b9b 55%, #c98484 100%)",
        }}
      >
        {/* Inner bezel */}
        <div className="relative h-full w-full rounded-[10px] bg-[#0b0a14] p-[6px]">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 z-10 flex h-[10px] w-[70px] -translate-x-1/2 items-center justify-center rounded-b-[6px] bg-[#0b0a14]">
            <span className="h-[4px] w-[4px] rounded-full bg-[#1c1b29]" />
          </div>
          {/* Screen content */}
          <div className="relative h-full w-full overflow-hidden rounded-[6px]">
            {children}
          </div>
        </div>
      </div>

      {/* Hinge / base */}
      <div className="absolute -bottom-[1.5%] left-1/2 h-[3%] w-[112%] -translate-x-1/2 rounded-b-[10px]"
        style={{
          background:
            "linear-gradient(180deg, #e8b8b8 0%, #d49b9b 40%, #b87a7a 100%)",
        }}
      />
      {/* Trackpad notch */}
      <div className="absolute -bottom-[1.5%] left-1/2 h-[2%] w-[14%] -translate-x-1/2 rounded-b-[6px] bg-[#a06b6b]/40" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Phone (Samsung Galaxy S25, pink-gold)                                      */
/* -------------------------------------------------------------------------- */

function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ aspectRatio: "9 / 19" }}>
      {/* Outer frame */}
      <div
        className="relative h-full w-full rounded-[36px] p-[5px] shadow-[0_30px_50px_-15px_rgba(76,29,149,0.35)]"
        style={{
          background:
            "linear-gradient(150deg, #f7d4d4 0%, #e8b8b8 30%, #d49b9b 60%, #c98484 100%)",
        }}
      >
        {/* Inner bezel */}
        <div className="relative h-full w-full rounded-[32px] bg-[#0b0a14] p-[3px]">
          {/* Screen */}
          <div className="relative h-full w-full overflow-hidden rounded-[29px] bg-white">
            {/* Punch-hole camera */}
            <div className="absolute left-1/2 top-2 z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-[#0b0a14]" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section wrapper                                                            */
/* -------------------------------------------------------------------------- */

export default function MizanControlTowerSection() {
  return (
    <section
      className="relative isolate w-full overflow-hidden px-4 py-16 sm:px-8 sm:py-24"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 0%, #efe6ff 0%, #f3edff 30%, #faf6ff 70%, #ffffff 100%)",
      }}
    >
      {/* Decorative soft blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-[1367px]">
        {/* Heading */}
        {/* background: linear-gradient(180deg, #280137 34.01%, #8A609F 108.79%),linear-gradient(0deg, var(--Color-1, rgba(0, 0, 0, 0.2)), var(--Color-1, rgba(0, 0, 0, 0.2))); */}
        <div className="mx-auto max-w-[1238px] text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-[#2a1454] sm:text-4xl md:text-[64px]">
            Mizan Control Tower <span className="text-violet-700">:</span> All-in-one suite
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-sm text-slate-600 sm:text-base">
            Create trades, run AI-powered document checks, request payment, track milestones, and manage settlement — all in one secure trade control tower.
          </p>
        </div>

        {/* Mockup composition */}
        <div className="relative mx-auto mt-12 max-w-[1248px]">
          {/* MacBook */}
          <MacBookMockup>
            <Dashboard />
          </MacBookMockup>

          {/* Phone — overlaps bottom-right */}
          <div className="pointer-events-none absolute -bottom-6 right-[2%] w-[22%] min-w-[287px] max-w-[290px] sm:bottom-[1%] sm:-right-[4%]">
            <PhoneMockup>
              <PhoneScreen />
            </PhoneMockup>
          </div>
        </div>
      </div>
    </section>
  );
}
