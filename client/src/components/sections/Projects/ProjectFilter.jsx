import { motion } from 'framer-motion'

/**
 * Category filter buttons with animated active indicator.
 *
 * @param {object} props
 * @param {string[]} props.categories - List of category labels
 * @param {string} props.activeCategory - Currently selected category
 * @param {function} props.onChange - Called with the selected category on click
 */
const ProjectFilter = ({ categories, activeCategory, onChange }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-10">
      {categories.map((category) => {
        const isActive = category === activeCategory

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className={`relative font-mono text-sm px-5 py-2.5 rounded-xl border transition-colors duration-300 ${
              isActive
                ? 'text-white border-border-hover'
                : 'text-ink-muted border-border hover:text-ink hover:border-border-hover'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="active-filter-pill"
                className="absolute inset-0 rounded-xl bg-accent shadow-glow-sm"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        )
      })}
    </div>
  )
}

export default ProjectFilter