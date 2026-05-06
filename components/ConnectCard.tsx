/**
 * ConnectCard — placeholder
 * -------------------------
 * Same dimensions and z-index conventions as GrowCard.
 */
export default function ConnectCard() {
  return (
    <div
      data-card="connect"
      className="absolute inset-x-0 top-0 mx-auto flex h-[560px] w-full max-w-[1062px] items-center justify-center rounded-[28px] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.55)]"
      style={{
        zIndex: 3,
        transformOrigin: "top center",
        background: "#B14EFF",
      }}
    >
      <span
        className="text-[64px] font-bold tracking-[-0.02em] text-white"
      >
        CONNECT
      </span>
    </div>
  );
}