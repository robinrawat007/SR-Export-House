import { useState } from 'react'
import type { FormEvent } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, ChevronDown, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { companyInfo, contactFaq } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

type ContactFormState = {
  subject: string
  fullName: string
  email: string
  phoneNumber: string
  company: string
  message: string
}

const initialForm: ContactFormState = {
  subject: '',
  fullName: '',
  email: '',
  phoneNumber: '',
  company: '',
  message: '',
}

const mapUrl =
  'https://maps.google.com/maps?q=Sonipat%2C%20Haryana%2C%20India&t=m&z=12&output=embed&iwloc=near'

function PremiumInput({
  label,
  type = 'text',
  name,
  value,
  required,
  onChange,
}: {
  label: string
  type?: string
  name: string
  value: string
  required?: boolean
  onChange: (v: string) => void
}) {
  const [focused, setFocused] = useState(false)
  const floating = focused || value.length > 0

  return (
    <div className="relative">
      <motion.label
        htmlFor={name}
        className="pointer-events-none absolute left-4 font-medium text-brand-text/70 transition-all"
        animate={{
          top: floating ? '8px' : '50%',
          fontSize: floating ? '10px' : '14px',
          y: floating ? '0%' : '-50%',
          color: focused ? 'var(--color-primary)' : undefined,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}{required ? ' *' : ''}
      </motion.label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={clsx(
          'h-14 w-full rounded-xl border bg-white px-4 pb-2 pt-5 text-sm text-brand-title outline-none transition-all duration-200',
          focused
            ? 'border-brand-primary shadow-[0_0_0_3px_rgba(35,81,48,0.12)]'
            : 'border-black/12 hover:border-black/25',
        )}
      />
    </div>
  )
}

function PremiumTextarea({
  label,
  name,
  value,
  onChange,
  rows = 6,
}: {
  label: string
  name: string
  value: string
  onChange: (v: string) => void
  rows?: number
}) {
  const [focused, setFocused] = useState(false)
  const floating = focused || value.length > 0

  return (
    <div className="relative">
      <motion.label
        htmlFor={name}
        className="pointer-events-none absolute left-4 font-medium text-brand-text/70"
        animate={{
          top: floating ? '10px' : '16px',
          fontSize: floating ? '10px' : '14px',
          color: focused ? 'var(--color-primary)' : undefined,
        }}
        transition={{ duration: 0.2 }}
      >
        {label} *
      </motion.label>
      <textarea
        id={name}
        name={name}
        value={value}
        required
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={clsx(
          'w-full resize-none rounded-xl border bg-white px-4 pb-3 pt-6 text-sm text-brand-title outline-none transition-all duration-200',
          focused
            ? 'border-brand-primary shadow-[0_0_0_3px_rgba(35,81,48,0.12)]'
            : 'border-black/12 hover:border-black/25',
        )}
      />
    </div>
  )
}

export function ContactPage() {
  usePageMeta({
    title: 'Contact Us — S.R Export House',
    description:
      'Contact S.R Export House for product inquiries, export collaboration, and sourcing support across global markets.',
    image: '/images/logo.webp',
  })

  const [form, setForm] = useState<ContactFormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [activeFaqIndex, setActiveFaqIndex] = useState(0)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-muted py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(35,81,48,0.12),transparent_38%),radial-gradient(circle_at_84%_0%,rgba(251,188,52,0.16),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" aria-hidden />

        <div className="section-wrap relative">
          <Reveal className="max-w-4xl">
            <span className="eyebrow">Contact Us</span>
            <h1 className="font-display text-5xl leading-tight text-brand-title sm:text-6xl lg:text-7xl">
              Contact Us for Any Questions
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-text sm:text-xl">
              Reach out for product requirements, certifications, quotations, and export collaboration details.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ FAQ + FORM ═════════════════════════════════════════ */}
      <section className="py-16 sm:py-20">
        <div className="section-wrap grid gap-8 lg:grid-cols-2">

          {/* FAQ panel */}
          <Reveal>
            <div className="rounded-2xl border border-black/8 bg-white p-7 sm:p-9" style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="eyebrow">Information Questions</span>
              <h2 className="mt-1 font-display text-4xl leading-tight sm:text-5xl">
                Frequently Asked Questions
              </h2>

              <ul className="mt-8 divide-y divide-black/8">
                {contactFaq.map((faq, index) => {
                  const isOpen = index === activeFaqIndex
                  return (
                    <li key={faq.question}>
                      <button
                        type="button"
                        className={clsx(
                          'flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold transition-colors sm:text-lg',
                          isOpen ? 'text-brand-primary' : 'text-brand-title hover:text-brand-primary',
                        )}
                        aria-expanded={isOpen}
                        onClick={() => setActiveFaqIndex((c) => (c === index ? -1 : index))}
                      >
                        <span>{faq.question}</span>
                        <motion.span
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.25 }}
                          className="shrink-0"
                        >
                          <ChevronDown className="h-5 w-5" />
                        </motion.span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="pb-5 pr-2 text-sm leading-relaxed text-brand-text sm:text-base">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-black/8 bg-white p-7 sm:p-9" style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="eyebrow">Send Us a Message</span>
              <h2 className="mt-1 font-display text-4xl leading-tight sm:text-5xl">
                Get in Touch
              </h2>

              <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                <PremiumInput
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  required
                  onChange={(v) => setForm((p) => ({ ...p, subject: v }))}
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <PremiumInput
                    label="Your Name"
                    name="fullName"
                    value={form.fullName}
                    required
                    onChange={(v) => setForm((p) => ({ ...p, fullName: v }))}
                  />
                  <PremiumInput
                    label="Email Address"
                    type="email"
                    name="email"
                    value={form.email}
                    required
                    onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <PremiumInput
                    label="Phone Number"
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={(v) => setForm((p) => ({ ...p, phoneNumber: v }))}
                  />
                  <PremiumInput
                    label="Company"
                    name="company"
                    value={form.company}
                    onChange={(v) => setForm((p) => ({ ...p, company: v }))}
                  />
                </div>

                <PremiumTextarea
                  label="Your Message"
                  name="message"
                  value={form.message}
                  onChange={(v) => setForm((p) => ({ ...p, message: v }))}
                  rows={6}
                />

                <motion.button
                  type="submit"
                  className="cta-btn w-fit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </motion.button>
              </form>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-3 rounded-xl border border-brand-primary/20 bg-brand-primary/8 px-5 py-4"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-primary" />
                    <p className="text-sm font-semibold text-brand-primary">
                      Thank you! Our team will contact you shortly.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ MAP + CONTACT INFO ═════════════════════════════════ */}
      <section className="pb-20 sm:pb-24">
        <div className="section-wrap grid items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-card">
              <iframe
                title="S.R Export House location in Sonipat, Haryana"
                src={mapUrl}
                className="h-[380px] w-full sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="flex h-full flex-col justify-center rounded-2xl border border-black/8 bg-white p-8 shadow-card sm:p-10">
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Important Info.</h2>
              <ul className="mt-8 grid gap-6">
                {[
                  { icon: MapPin, label: companyInfo.address, href: undefined },
                  { icon: Phone, label: companyInfo.phone, href: `tel:${companyInfo.phone}` },
                  { icon: Mail, label: companyInfo.email, href: `mailto:${companyInfo.email}` },
                ].map(({ icon: Icon, label, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    {href ? (
                      <a href={href} className="pt-1.5 text-base text-brand-title transition hover:text-brand-primary sm:text-lg">
                        {label}
                      </a>
                    ) : (
                      <span className="pt-1.5 text-base text-brand-title sm:text-lg">{label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
