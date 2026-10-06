import React from "react";
import { motion, useReducedMotion } from "framer-motion";

// Small looping micro-animations applied to icons throughout the site —
// a dependable, no-network replacement for the old remote Lottie files.
// Pick a variant that matches what the icon represents.
const VARIANTS = {
  float: {
    animate: { y: [0, -7, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
  bounce: {
    animate: { y: [0, -9, 0, -3, 0] },
    transition: { duration: 1.7, repeat: Infinity, ease: "easeInOut" },
  },
  wiggle: {
    animate: { rotate: [-10, 10, -10] },
    transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
  },
  wave: {
    animate: { rotate: [0, 22, -8, 22, 0] },
    transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 },
  },
  spin: {
    animate: { rotate: 360 },
    transition: { duration: 6, repeat: Infinity, ease: "linear" },
  },
  pulse: {
    animate: { scale: [1, 1.15, 1] },
    transition: { duration: 1.7, repeat: Infinity, ease: "easeInOut" },
  },
  heartbeat: {
    animate: { scale: [1, 1.25, 1, 1.15, 1] },
    transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" },
  },
  send: {
    animate: { x: [0, 5, 0], y: [0, -5, 0], rotate: [0, 8, 0] },
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  },
  swing: {
    animate: { rotate: [-7, 7, -7] },
    transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
  },
};

/**
 * Props:
 *  - icon      : a react-icons component (mutually exclusive with `emoji`)
 *  - emoji     : a literal emoji string, animated the same way as `icon`
 *  - variant   : one of the VARIANTS keys above (default "float")
 *  - size      : icon pixel size
 *  - color     : icon color (ignored for emoji)
 *  - badge     : wraps the icon in a rounded gradient badge when true
 *  - badgeClassName / className : extra classes for the badge / icon span
 */
export default function AnimatedIcon({
  icon: Icon,
  emoji,
  variant = "float",
  size = 22,
  color,
  badge = false,
  badgeClassName = "",
  className = "",
}) {
  const reduced = useReducedMotion();
  const cfg = VARIANTS[variant] || VARIANTS.float;

  const inner = (
    <motion.span
      className={`inline-flex ${className}`}
      animate={reduced ? undefined : cfg.animate}
      transition={reduced ? undefined : cfg.transition}
    >
      {Icon ? <Icon size={size} color={color} /> : <span style={{ fontSize: size, lineHeight: 1 }}>{emoji}</span>}
    </motion.span>
  );

  if (!badge) return inner;

  return (
    <span
      className={`inline-flex items-center justify-center rounded-2xl bg-gradient-primary shadow-glow-violet ${badgeClassName}`}
    >
      {inner}
    </span>
  );
}
