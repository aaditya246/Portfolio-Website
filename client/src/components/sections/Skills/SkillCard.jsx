import { motion } from 'framer-motion'
import {
  FiCode,
  FiLayers,
  FiDatabase,
  FiPackage,
  FiTool,
  FiTarget,
} from 'react-icons/fi'
import { staggerItem } from '../../../lib/animations'
import GlassCard from '../../ui/GlassCard'

// Icon mapping per category id (from skills.js)
const categoryIcons = {
  languages: FiCode,
  frameworks: FiLayers,
  databases: FiDatabase,
  libraries: FiPackage,
  tools: FiTool,
  interests: FiTarget,
}

/**
 * Animated skill category card.
 *
 * @param {object} props
 * @param {object} props.category - Skill category object
 * @param {string} props.category.id
 * @param {string} props.category.title
 * @param {string[]} props.category.skills
 */
const SkillCard = ({ category }) => {
  const Icon = categoryIcons[category.id] || FiCode

  return (
    <motion.div variants={staggerItem}>
      <GlassCard className="h-full flex flex-col gap-5">
        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-border-hover flex items-center justify-center text-accent text-xl">
          <Icon />
        </div>

        <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-900 dark:text-ink">
          {category.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="font-mono text-xs px-3 py-1.5 rounded-lg border border-border bg-panel-light/50 text-slate-900 dark:text-ink-faint transition-all duration-300 hover:border-border-hover hover:text-accent-glow hover:bg-accent/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  )
}

export default SkillCard