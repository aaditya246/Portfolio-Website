import { motion } from 'framer-motion'
import { FiArrowDown, FiDownload, FiMail } from 'react-icons/fi'
import { personalInfo } from '../../../data/personalInfo'
import { heroContainer, heroItem } from '../../../lib/animations'
import FloatingShapes from '../../ui/FloatingShapes'
import Typewriter from '../../ui/Typewriter'
import MagneticButton from '../../ui/MagneticButton'
import SocialLinks from './SocialLinks'

const Hero = () => {
  const handleScrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-10 lg:px-20 pt-24 pb-16"
    >
      <FloatingShapes />

      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        className="container-content grid grid-cols-1 lg:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-8 items-center relative z-10"
      >
        {/* Left: Text content */}
        <div className="flex flex-col gap-6 order-2 lg:order-1">
          <motion.span
            variants={heroItem}
            className="font-mono text-sm text-accent tracking-wider uppercase"
          >
            Hi, my name is
          </motion.span>

          <motion.h1
            variants={heroItem}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ink tracking-tight leading-[1.1]"
          >
            {personalInfo.name}
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.div
            variants={heroItem}
            className="text-xl sm:text-2xl md:text-3xl font-display font-semibold text-ink-faint h-10"
          >
            <Typewriter words={personalInfo.typewriterRoles} className="text-accent" />
          </motion.div>

          <motion.p
            variants={heroItem}
            className="text-ink-muted text-base sm:text-lg leading-relaxed max-w-xl"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div variants={heroItem} className="flex flex-wrap items-center gap-4 mt-2">
            <MagneticButton
              href={personalInfo.resumeFile}
              download="Aaditya_Resume.pdf"
              variant="primary"
            >
              <FiDownload />
              Download Resume
            </MagneticButton>

            <MagneticButton href="#contact" onClick={handleScrollToContact} variant="secondary">
              <FiMail />
              Contact Me
            </MagneticButton>
          </motion.div>

          <motion.div variants={heroItem}>
            <SocialLinks className="mt-2" />
          </motion.div>
        </div>

        {/* Right: Terminal signature element + image placeholder */}
        <motion.div
          variants={heroItem}
          className="order-1 lg:order-2 flex flex-col items-center gap-8"
        >
          {/* Developer image placeholder */}
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-dark/10 blur-2xl" />
            <div className="relative w-full h-full rounded-full glass-card flex items-center justify-center overflow-hidden border-2 border-border-hover">
              <span className="font-display text-5xl sm:text-6xl font-bold gradient-text">
                AJ
              </span>
            </div>
          </div>

          {/* Terminal signature panel */}
          <div className="w-full glass-card overflow-hidden">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-panel-light/50">
              <span className="w-3 h-3 rounded-full bg-red-400/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
              <span className="w-3 h-3 rounded-full bg-green-400/70" />
              <span className="ml-3 font-mono text-xs text-ink-muted">profile.js</span>
            </div>

            {/* Terminal body */}
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p className="text-ink-muted">
                <span className="text-accent">const</span>{' '}
                <span className="text-ink">developer</span> = {'{'}
              </p>
              <p className="pl-4 text-ink-muted">
                name: <span className="text-accent-glow">'{personalInfo.name}'</span>,
              </p>
              <p className="pl-4 text-ink-muted">
                role: <span className="text-accent-glow">'{personalInfo.fullTitle}'</span>,
              </p>
              <p className="pl-4 text-ink-muted">
                leetcode: <span className="text-accent-glow">'600+ solved'</span>,
              </p>
              <p className="pl-4 text-ink-muted">
                stack: <span className="text-accent-glow">'MERN'</span>,
              </p>
              <p className="text-ink-muted">{'};'}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-xs text-ink-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-accent text-lg"
        >
          <FiArrowDown />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero