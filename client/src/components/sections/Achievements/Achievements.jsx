import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { codingProfiles, achievements } from '../../../data/achievements'
import { staggerContainer, staggerItem, viewportSettings } from '../../../lib/animations'
import SectionHeading from '../../ui/SectionHeading'
import GlassCard from '../../ui/GlassCard'
import CodingProfileCard from './CodingProfileCard'

const Achievements = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Achievements"
          title="Coding profiles & accomplishments"
          description="Competitive programming stats and recognitions from technical events and contests."
        />

        {/* Coding profile cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
        >
          {codingProfiles.map((profile) => (
            <CodingProfileCard key={profile.id} profile={profile} />
          ))}
        </motion.div>

        {/* Contest / event achievements */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {achievements.map((item) => (
            <motion.div key={item.id} variants={staggerItem}>
              <GlassCard className="h-full flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-border-hover flex items-center justify-center text-accent text-base">
                  <FiAward />
                </div>
                <h3 className="font-display text-base sm:text-lg font-semibold text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="text-black dark:text-white-muted text-sm leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between mt-auto pt-2">
                  <span className="font-mono text-xs text-black dark:text-white-faint">{item.organization}</span>
                  <span className="font-mono text-xs text-accent-glow">{item.date}</span>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Achievements