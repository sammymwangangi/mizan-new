"use client";

export default function AuroraLights() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 w-full"
      style={{
        top: 0,
        left: 0,
        height: "1600px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* LEFT — primary violet halo, pulled in from -320px to be partially visible */}
      <div
        className="aurora-blob"
        style={{
          width: "800px",
          height: "800px",
          top: "-200px",
          left: "-180px",
          background:
            "radial-gradient(ellipse at 45% 45%, rgba(124,92,255,0.72) 0%, rgba(110,80,240,0.35) 38%, transparent 68%)",
          animation:
            "aurora-drift-1 8s ease-in-out infinite, aurora-pulse 4s ease-in-out infinite",
        }}
      />

      {/* LEFT — inner core burst */}
      <div
        className="aurora-blob"
        style={{
          width: "420px",
          height: "420px",
          top: "60px",
          left: "-60px",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(167,139,250,0.6) 0%, rgba(124,92,255,0.25) 36%, transparent 68%)",
          animation:
            "aurora-drift-3 6s ease-in-out infinite, aurora-pulse 4s ease-in-out infinite 1s",
        }}
      />

      {/* LEFT — teal bloom bleeding into FindsSection */}
      <div
        className="aurora-blob"
        style={{
          width: "640px",
          height: "640px",
          top: "580px",
          left: "-160px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(92,225,255,0.42) 0%, rgba(80,190,220,0.18) 44%, transparent 70%)",
          animation:
            "aurora-drift-2 10s ease-in-out infinite, aurora-pulse 5s ease-in-out infinite 3s",
        }}
      />

      {/* RIGHT — violet glow behind the phone area */}
      <div
        className="aurora-blob"
        style={{
          width: "700px",
          height: "700px",
          top: "-100px",
          right: "-180px",
          left: "auto",
          background:
            "radial-gradient(ellipse at 55% 45%, rgba(124,92,255,0.55) 0%, rgba(110,80,240,0.28) 40%, transparent 68%)",
          animation:
            "aurora-drift-2 9s ease-in-out infinite, aurora-pulse 4s ease-in-out infinite 0.5s",
        }}
      />

      {/* RIGHT — pink/magenta accent so right side has its own colour character */}
      <div
        className="aurora-blob"
        style={{
          width: "480px",
          height: "480px",
          top: "200px",
          right: "-80px",
          left: "auto",
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(200,100,255,0.45) 0%, rgba(160,80,240,0.20) 40%, transparent 68%)",
          animation:
            "aurora-drift-1 7s ease-in-out infinite reverse, aurora-pulse 5s ease-in-out infinite 2s",
        }}
      />

      {/* RIGHT — teal counter-bloom so right side mirrors left transition */}
      <div
        className="aurora-blob"
        style={{
          width: "560px",
          height: "560px",
          top: "500px",
          right: "-140px",
          left: "auto",
          background:
            "radial-gradient(circle at 50% 50%, rgba(92,225,255,0.35) 0%, rgba(80,190,220,0.15) 44%, transparent 70%)",
          animation:
            "aurora-drift-3 11s ease-in-out infinite, aurora-pulse 5s ease-in-out infinite 4s",
        }}
      />
    </div>
  );
}
