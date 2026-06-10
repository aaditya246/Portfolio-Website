import { motion } from 'framer-motion'
import { skillCategories } from '../../../data/skills'
import { staggerContainer, viewportSettings } from '../../../lib/animations'
import SectionHeading from '../../ui/SectionHeading'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A categorized overview of the languages, frameworks, tools, and concepts I use to build full-stack applications."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills