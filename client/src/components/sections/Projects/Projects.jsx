import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, projectCategories } from '../../../data/projects'
import { staggerContainer, viewportSettings } from '../../../lib/animations'
import SectionHeading from '../../ui/SectionHeading'
import ProjectFilter from './ProjectFilter'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects
    return projects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="projects" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Full-stack applications built with the MERN stack, covering real-time features, authentication, and payment integrations."
        />

        {projectCategories.length > 1 && (
          <ProjectFilter
            categories={projectCategories}
            activeCategory={activeCategory}
            onChange={setActiveCategory}
          />
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects