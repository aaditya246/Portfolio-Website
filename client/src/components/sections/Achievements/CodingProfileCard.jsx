import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { SiLeetcode, SiCodeforces } from 'react-icons/si'
import { staggerItem } from '../../../lib/animations'
import GlassCard from '../../ui/GlassCard'

const platformIcons = {
    LeetCode: SiLeetcode,
    Codeforces: SiCodeforces,
}

/**
 * Coding profile card (LeetCode / Codeforces).
 *
 * @param {object} props
 * @param {object} props.profile - Coding profile entry
 */
const CodingProfileCard = ({ profile }) => {
    const Icon = platformIcons[profile.platform]

    return (
        <motion.div variants={staggerItem}>
            <GlassCard
                hoverEffect
                className="h-full flex flex-col gap-4"
            >
                <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-border-hover flex items-center justify-center text-accent text-2xl">
                        <Icon />
                    </div>

                    <a
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit ${profile.platform} profile`}
                        className="text-slate-900 dark:text-ink-muted hover:text-accent transition-colors duration-300 text-lg"
                    >
                        <FiExternalLink />
                    </a>
                </div>
                <div>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-900 dark:text-ink">
                        {profile.platform}
                    </h3>
                    <p className="font-mono text-sm text-slate-900 dark:text-ink-muted mt-1">@{profile.username}</p>
                </div>

                <span className="font-mono text-sm px-3 py-1.5 rounded-lg border border-border-hover bg-accent/10 text-accent-glow w-fit">
                    {profile.stat}
                </span>

                <p className="text-slate-900 dark:text-ink-muted text-sm leading-relaxed">{profile.description}</p>
            </GlassCard>
        </motion.div>
    )
}

export default CodingProfileCard