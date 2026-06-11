import { FiBookOpen } from 'react-icons/fi'
import GlassCard from '../../ui/GlassCard'

/**
 * Displays a single education entry.
 *
 * @param {object} props
 * @param {object} props.item - Education entry
 * @param {string} props.item.institution
 * @param {string} props.item.degree
 * @param {string} props.item.duration
 * @param {string} props.item.score
 */
const EducationCard = ({ item }) => {
  return (
    <GlassCard className="flex flex-col sm:flex-row sm:items-start gap-5">
      <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-border-hover flex items-center justify-center text-accent text-xl">
        <FiBookOpen />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg sm:text-xl font-semibold text-black dark:text-white leading-snug">
          {item.institution}
        </h3>
        <p className="text-black dark:text-white-muted text-sm sm:text-base">{item.degree}</p>

        <div className="flex flex-wrap items-center gap-3 mt-1">
          <span className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-panel-light/60 text-black dark:text-white-faint">
            {item.duration}
          </span>

        </div>
      </div>
    </GlassCard>
  )
}

export default EducationCard