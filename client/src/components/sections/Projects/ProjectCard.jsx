import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi'
import { staggerItem } from '../../../lib/animations'
import GlassCard from '../../ui/GlassCard'

/**
 * Premium project card.
 *
 * @param {object} props
 * @param {object} props.project - Project data object from projects.js
 */
const ProjectCard = ({ project }) => {
    return (
        <motion.div variants={staggerItem}>
            <GlassCard className="h-full flex flex-col gap-5 relative overflow-hidden">
                {project.featured && (
                    <span className="absolute top-5 right-5 inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-accent/10 border border-border-hover text-accent-glow">
                        <FiStar className="text-xs" />
                        Featured
                    </span>
                )}

                <div className="flex flex-col gap-1 pr-24">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-black dark:text-white">
                        {project.title}
                    </h3>
                    <p className="text-black dark:text-white-muted text-sm sm:text-base">{project.subtitle}</p>
                    {project.event && (
                        <span className="font-mono text-xs text-accent-glow mt-1">{project.event}</span>
                    )}
                </div>

                <p className="text-black dark:text-white-muted text-sm sm:text-base leading-relaxed">
                    {project.description}
                </p>

                {/* Highlights */}
                <ul className="flex flex-col gap-2">
                    {project.highlights.slice(0,5).map((point, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-black dark:text-white-faint leading-relaxed">
                            <span className="text-accent mt-1.5 shrink-0">▹</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="font-mono text-xs px-3 py-1.5 rounded-lg border border-border bg-panel-light/50 text-black dark:text-white-faint"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary flex-1 text-sm py-2.5 flex items-center justify-center gap-2"
                        >
                            <FiGithub />
                            Code
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex-1 text-sm py-2.5 flex items-center justify-center gap-2"
                        >
                            <FiExternalLink />
                            Live Demo
                        </a>
                    )}
                </div>
            </GlassCard>
        </motion.div>
    )
}

export default ProjectCard