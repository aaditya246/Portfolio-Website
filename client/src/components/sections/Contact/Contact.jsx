import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { personalInfo } from '../../../data/personalInfo'
import { fadeInLeft, fadeInRight, viewportSettings } from '../../../lib/animations'
import SectionHeading from '../../ui/SectionHeading'
import GlassCard from '../../ui/GlassCard'
import ContactForm from './ContactForm'

const contactDetails = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.contact.email,
    href: `mailto:${personalInfo.contact.email}`,
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: personalInfo.contact.phone,
    href: `tel:${personalInfo.contact.phone.replace(/[\s-]/g, '')}`,
  },
  {
    icon: FiMapPin,
    label: 'Location',
    value: personalInfo.location,
    href: null,
  },
]

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have a project in mind, an opportunity, or just want to connect? Send a message and I'll get back to you."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr,1.1fr] gap-8 lg:gap-12">
          {/* Left: Contact info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            className="flex flex-col gap-4"
          >
            {contactDetails.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <GlassCard hoverEffect={!!href} className="flex items-center gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-accent/10 border border-border-hover flex items-center justify-center text-accent text-lg">
                    <Icon />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-ink-muted uppercase tracking-wider">
                      {label}
                    </span>
                    <span className="text-ink text-sm sm:text-base font-medium break-all">
                      {value}
                    </span>
                  </div>
                </GlassCard>
              )

              return href ? (
                <a key={label} href={href} className="block">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
          >
            <GlassCard hoverEffect={false} className="p-6 sm:p-8">
              <ContactForm />
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact