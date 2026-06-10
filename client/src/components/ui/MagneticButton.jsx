import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Button with a magnetic hover effect that follows the cursor.
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.href] - If provided, renders as an anchor tag
 * @param {function} [props.onClick] - Click handler (used when no href)
 * @param {'primary'|'secondary'} [props.variant] - Visual style (default 'primary')
 * @param {string} [props.className] - Additional classes
 * @param {string} [props.target] - Anchor target (e.g. '_blank')
 * @param {string} [props.rel] - Anchor rel attribute
 * @param {string} [props.download] - Download attribute for resume link
 */
const MagneticButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  target,
  rel,
  download,
}) => {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  const Component = motion[href ? 'a' : 'button']

  return (
    <Component
      ref={ref}
      href={href}
      onClick={onClick}
      target={target}
      rel={rel}
      download={download}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.1 }}
      whileTap={{ scale: 0.96 }}
      className={`${baseClass} ${className}`}
    >
      {children}
    </Component>
  )
}

export default MagneticButton