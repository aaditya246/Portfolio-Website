import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'
import { sendContactMessage } from '../../../lib/api'
import MagneticButton from '../../ui/MagneticButton'

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = 'Name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Enter a valid email address.'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.'
    else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validate()) return

    setStatus('loading')
    setStatusMessage('')

    const result = await sendContactMessage(formData)

    if (result.success) {
      setStatus('success')
      setStatusMessage(result.message)
      setFormData(initialFormState)
    } else {
      setStatus('error')
      setStatusMessage(result.message)
    }
  }

  const fieldClass = (hasError) =>
    `w-full bg-panel/60 backdrop-blur-sm border rounded-xl px-4 py-3 text-slate-900 dark:text-ink placeholder:text-slate-900 dark:text-ink-muted/60 font-body text-sm sm:text-base transition-colors duration-300 focus:outline-none ${
      hasError
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-border focus:border-border-hover'
    }`

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-xs text-slate-900 dark:text-ink-muted uppercase tracking-wider">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={fieldClass(errors.name)}
          />
          {errors.name && <p className="text-red-400 text-xs">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-xs text-slate-900 dark:text-ink-muted uppercase tracking-wider">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className={fieldClass(errors.email)}
          />
          {errors.email && <p className="text-red-400 text-xs">{errors.email}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="font-mono text-xs text-slate-900 dark:text-ink-muted uppercase tracking-wider">
          Subject <span className="text-slate-900 dark:text-ink-faint normal-case">(optional)</span>
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={fieldClass(errors.subject)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono text-xs text-slate-900 dark:text-ink-muted uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your project or opportunity..."
          className={`${fieldClass(errors.message)} resize-none`}
        />
        {errors.message && <p className="text-red-400 text-xs">{errors.message}</p>}
      </div>

      <MagneticButton
        variant="primary"
        className="w-full sm:w-fit"
        onClick={handleSubmit}
      >
        {status === 'loading' ? (
          <>
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
            />
            Sending...
          </>
        ) : (
          <>
            <FiSend />
            Send Message
          </>
        )}
      </MagneticButton>

      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-green-400 text-sm font-body"
          >
            <FiCheckCircle />
            {statusMessage}
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-red-400 text-sm font-body"
          >
            <FiAlertCircle />
            {statusMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}

export default ContactForm