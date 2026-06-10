import { motion } from 'framer-motion'
import { hoverLift } from '../../lib/animations'

/**
 * Glassmorphism card with optional hover lift/glow.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} [props.className] - Additional classes
 * @param {boolean} [props.hoverEffect] - Enable hover lift animation (default true)
 * @param {function} [props.onClick] - Optional click handler (makes card interactive)
 */
const GlassCard = ({ children, className = '', hoverEffect = true, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? hoverLift : undefined}
      className={`glass-card p-6 sm:p-8 ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard