import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Full-screen loading splash shown on initial page load.
 * Calls onComplete when the exit animation finishes.
 *
 * @param {object} props
 * @param {function} props.onComplete - Callback fired after loader exits
 */
const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 4
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => setIsVisible(false), 400)
      return () => clearTimeout(timeout)
    }
  }, [progress])

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-4xl sm:text-5xl font-bold text-black dark:text-white tracking-tight mb-8"
          >
            Aaditya<span className="text-accent">.</span>
          </motion.div>

          <div className="w-48 sm:w-64 h-[2px] bg-panel-light rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent shadow-glow-sm"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="font-mono text-xs text-black dark:text-white-muted mt-4 tracking-widest"
          >
            {progress}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loader