import { motion } from 'framer-motion'
import { FiBriefcase } from 'react-icons/fi'
import { fadeInLeft, viewportSettings } from '../../../lib/animations'
import GlassCard from '../../ui/GlassCard'

/**
 * Single timeline entry for a Position of Responsibility.
 *
 * @param {object} props
 * @param {object} props.item - Experience entry
 * @param {string} props.item.role
 * @param {string} props.item.organization
 * @param {string} props.item.type
 * @param {boolean} [props.isLast] - Whether this is the last item (hides connector line)
 */
const TimelineItem = ({ item, isLast = false }) => {
  return (
    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      className="relative flex gap-6"
    >
      {/* Timeline rail */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-border-hover flex items-center justify-center text-accent text-lg z-10">
          <FiBriefcase />
        </div>
        {!isLast && <div className="w-px flex-1 bg-border mt-2 mb-2" />}
      </div>

      {/* Content */}
      <div className="pb-10 flex-1">
        <GlassCard className="p-5 sm:p-6">
          <span className="font-mono text-xs text-accent tracking-wider uppercase">
            {item.type}
          </span>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-black dark:text-white mt-2">
            {item.role}
          </h3>
          <p className="text-black dark:text-white-muted text-sm sm:text-base mt-1">{item.organization}</p>
        </GlassCard>
      </div>
    </motion.div>
  )
}

export default TimelineItem