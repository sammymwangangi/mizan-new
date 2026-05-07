export default function ConicBlobs() {
  return (
    <>
    {/* === CONIC GRADIENT BLOB 1 — first wash, near hero/lower sections ===
    Per Figma spec: top: 2724px, opacity: 1, rotated 100.97deg.
    Heavy blur dissolves the conic stops into a soft multi-colour wash. */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "2203.48px",
          height: "1492.5px",
          top: "5724px",
          left: "-432px",
          opacity: 1,
          transform: "rotate(100.97deg)",
          background: `conic-gradient(
      from 144.7deg at 44.77% 38%,
      #FA8792 -54.94deg,
      #561BBE 28.29deg,
      #70E6FB 157.82deg,
      #FBF8B3 220.83deg,
      #FA8792 305.06deg,
      #561BBE 388.29deg
    )`,
          filter: "blur(226.73px)",
          willChange: "filter",
        }}
      />

      {/* === CONIC GRADIENT BLOB 2 — second wash, lower in the page ===
    Per Figma spec: top: 4280px, opacity: 0.7, no rotation. */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "1142px",
          height: "1824px",
          top: "4280px",
          left: "-47px",
          opacity: 0.7,
          background: `conic-gradient(
      from 198.19deg at 44.77% 40.66%,
      #FA8792 -54.94deg,
      #561BBE 28.29deg,
      #70E6FB 157.82deg,
      #FBF8B3 220.83deg,
      #FA8792 305.06deg,
      #561BBE 388.29deg
    )`,
          filter: "blur(226.73px)",
          willChange: "filter",
        }}
      />

    </>

    );
}
