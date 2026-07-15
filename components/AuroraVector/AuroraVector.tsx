import Image, { type ImageProps } from "next/image";
import type { CSSProperties } from "react";

import styles from "./AuroraVector.module.css";

type AuroraStyle = CSSProperties & {
  "--aurora-duration": string;
  "--aurora-opacity-low": number;
  "--aurora-opacity-high": number;
  "--aurora-opacity-resting": number;
};

export type AuroraVectorProps = Omit<
  ImageProps,
  "alt" | "fill" | "height" | "src" | "width"
> & {
  /** Enables the slow, compositor-only drift and pulse. */
  animated?: boolean;

  /** Duration of one drift cycle, in seconds. */
  duration?: number;

  /** Overall opacity multiplier from 0 to 1. */
  intensity?: number;
};

/**
 * The hero aurora artwork.
 *
 * The Figma SVG deliberately remains an external image. Animating its wrapper
 * lets the browser cache the expensive blurred vector as one composited layer
 * instead of repainting an inline SVG filter on every animation frame.
 */
export function AuroraVector({
  animated = true,
  duration = 18,
  intensity = 1,
  className,
  style,
  ...rest
}: AuroraVectorProps) {
  const safeDuration =
    Number.isFinite(duration) && duration > 0 ? Math.max(duration, 8) : 18;
  const safeIntensity = Math.min(1, Math.max(0, intensity));

  const auroraStyle = {
    "--aurora-duration": `${safeDuration}s`,
    "--aurora-opacity-low": 0.6 * safeIntensity,
    "--aurora-opacity-high": 0.85 * safeIntensity,
    "--aurora-opacity-resting": 0.72 * safeIntensity,
    ...style,
  } as AuroraStyle;

  return (
    <Image
      {...rest}
      src="/assets/hero-light.svg"
      alt=""
      width={1895}
      height={1770}
      aria-hidden="true"
      draggable={false}
      className={[styles.root, animated && styles.animated, className]
        .filter(Boolean)
        .join(" ")}
      style={auroraStyle}
    />
  );
}

export default AuroraVector;
