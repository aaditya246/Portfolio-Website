import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import { personalInfo } from '../../../data/personalInfo'
import { staggerContainer, staggerItem } from '../../../lib/animations'

const socialLinksData = [
  {
    label: 'GitHub',
    icon: FiGithub,
    href: personalInfo.socials.github,
    external: true,
  },
  {
    label: 'LinkedIn',
    icon: FiLinkedin,
    href: personalInfo.socials.linkedin,
    external: true,
  },
  {
    label: 'LeetCode',
    icon: SiLeetcode,
    href: personalInfo.socials.leetcode,
    external: true,
  },
  {
    label: 'Codeforces',
    icon: SiCodeforces,
    href: personalInfo.socials.codeforces,
    external: true,
  },
  {
    label: 'Email',
    icon: FiMail,
    href: `mailto:${personalInfo.contact.email}`,
    external: false,
  },
]

/**
 * Animated row of social/profile icon links.
 *
 * @param {object} props
 * @param {string} [props.className] - Additional wrapper classes
 */
const SocialLinks = ({ className = '' }) => {
  return (
    <motion.div
      variants={staggerContainer(0.08)}
      initial="hidden"
      animate="visible"
      className={`flex items-center gap-4 ${className}`}
    >
      {socialLinksData.map(({ label, icon: Icon, href, external }) => (
        <motion.a
          key={label}
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          aria-label={label}
          variants={staggerItem}
          whileHover={{ y: -4, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-11 h-11 flex items-center justify-center rounded-xl
                     border border-border bg-panel/60 backdrop-blur-sm
                     text-ink-muted text-lg
                     transition-colors duration-300
                     hover:border-border-hover hover:text-accent hover:shadow-glow-sm"
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  )
}

export default SocialLinks