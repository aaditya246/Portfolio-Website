import { motion } from 'framer-motion'
import { personalInfo } from '../../../data/personalInfo'
import { education } from '../../../data/education'
import { coursework } from '../../../data/skills'
import { staggerContainer, staggerItem, fadeInRight, viewportSettings } from '../../../lib/animations'
import SectionHeading from '../../ui/SectionHeading'
import EducationCard from './EducationCard'

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="About Me"
          title="Turning ideas into scalable web applications"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] gap-12 lg:gap-16 items-start">
          {/* Left: Summary + coursework */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-col gap-8"
          >
            <motion.p
              variants={staggerItem}
              className="text-black dark:text-white-muted text-base sm:text-lg leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div variants={staggerItem} className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold text-black dark:text-white">
                Relevant Coursework
              </h3>
              <div className="flex flex-wrap gap-3">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="font-mono text-xs sm:text-sm px-4 py-2 rounded-full border border-border bg-panel/60 backdrop-blur-sm text-black dark:text-white-faint transition-colors duration-300 hover:border-border-hover hover:text-accent-glow"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Education */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-col gap-6"
          >
            <h3 className="font-display text-lg font-semibold text-black dark:text-white">Education</h3>
            {education.map((item, idx) => (
              <EducationCard key={idx} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About