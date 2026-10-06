// Shared framer-motion variants for the springy "pop-in" scroll reveal
// used across every section — elements scale + rise into place with a
// bouncy overshoot instead of a plain fade, matching the glass-kit motion
// language. `i` lets a grid/list stagger each item's entrance.

export const popUp = (i = 0, delayStep = 0.08, baseDelay = 0) => ({
  hidden: { opacity: 0, y: 36, scale: 0.86 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 18,
      mass: 0.7,
      delay: baseDelay + i * delayStep,
    },
  },
});

// Same pop, but slides in from the left — used for the Experience timeline.
export const popUpX = (i = 0, delayStep = 0.1, baseDelay = 0) => ({
  hidden: { opacity: 0, x: -28, scale: 0.92 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
      mass: 0.7,
      delay: baseDelay + i * delayStep,
    },
  },
});

// A punchier pop for small badges/icons that should feel snappy.
export const popUpSmall = (i = 0, delayStep = 0.06, baseDelay = 0) => ({
  hidden: { opacity: 0, scale: 0.6 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 320,
      damping: 16,
      mass: 0.6,
      delay: baseDelay + i * delayStep,
    },
  },
});
