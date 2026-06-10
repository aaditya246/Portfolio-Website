import { motion } from 'framer-motion'
import { fadeInUp, viewportSettings } from '../../lib/animations'

/**
 * Wraps children with a scroll-triggered reveal animation.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {object} [props.variants] - Custom Framer Motion variants (defaults to fadeInUp)
 * @param {number} [props.delay] - Optional delay before animation starts (seconds)
 * @param {string} [props.className] - Additional classes for the wrapping element
 * @param {string} [props.as] - HTML element / motion component to render (default 'div')
 */
const RevealOnScroll = ({
  children,
  variants = fadeInUp,
  delay = 0,
  className = '',
  as = 'div',
}) => {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}

export default RevealOnScroll