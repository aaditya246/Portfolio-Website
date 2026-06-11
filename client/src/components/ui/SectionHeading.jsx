import { motion } from 'framer-motion'
import { fadeInUp, viewportSettings } from '../../lib/animations'

/**
 * Standardized section heading: eyebrow label + title + optional description.
 *
 * @param {object} props
 * @param {string} props.eyebrow - Small label above the title (e.g. "02 — Skills")
 * @param {string} props.title - Main section title
 * @param {string} [props.description] - Optional supporting text below the title
 * @param {'left'|'center'} [props.align] - Text alignment (default 'left')
 * @param {string} [props.className] - Additional wrapper classes
 */
const SectionHeading = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  const alignment = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={fadeInUp}
      className={`flex flex-col gap-4 mb-12 md:mb-16 max-w-2xl ${alignment} ${className}`}
    >
      {eyebrow && (
        <span className="font-mono text-sm text-accent tracking-wider uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-ink tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-900 dark:text-ink-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading