// Fade in + slide up — used for section headings and standalone elements
export const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Fade in + slide down — used for elements entering from the top (e.g. navbar)
export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Fade in from left — used for text blocks, timeline items on the left
export const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Fade in from right — used for images, timeline items on the right
export const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Simple fade — used for backgrounds, overlays
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
}

// Scale up + fade — used for cards, badges
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Stagger container — wraps groups of children (cards, list items)
export const staggerContainer = (staggerDelay = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
})

// Child item for use inside staggerContainer
export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// Hover scale — used for buttons, icons, interactive cards
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.2, ease: 'easeOut' },
}

// Hover lift — used for project/skill cards
export const hoverLift = {
  y: -8,
  transition: { duration: 0.3, ease: 'easeOut' },
}

// Tap effect — used for buttons
export const tapScale = {
  scale: 0.96,
}

// Page-level viewport settings for scroll-triggered reveals
export const viewportSettings = {
  once: true,
  amount: 0.2,
}

// Hero entrance sequence — orchestrated load-in
export const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}