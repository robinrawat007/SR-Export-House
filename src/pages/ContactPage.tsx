import { useState } from 'react'
import type { FormEvent } from 'react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, ChevronDown, Clock, Globe2, Mail, MapPin, MessageSquare, Phone, Send, Truck } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { companyInfo, contactFaq } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

type ContactFormState = { subject: string; fullName: string; email: string; phoneNumber: string; company: string; message: string }
const initialForm: ContactFormState = { subject: '', fullName: '', email: '', phoneNumber: '', company: '', message: '' }
const subjectOptions = ['Product Inquiry', 'Export Quotation', 'Certification Request', 'Partnership Proposal', 'Other']
const mapUrl = 'https://maps.google.com/maps?q=Sonipat%2C%20Haryana%2C%20India&t=m&z=12&output=embed&iwloc=near'

const contactReasons = [
  { icon: Truck, title: 'Export Orders', body: 'Bulk export shipping quotes and availability.' },
  { icon: Globe2, title: 'Global Partnerships', body: 'Explore long-term supply arrangements.' },
  { icon: MessageSquare, title: 'Quick Query', body: 'Questions about products, pricing, or process.' },
  { icon: Clock, title: 'Fast Response', body: 'We respond within 24 hours on business days.' },
]

function PremiumInput({ label, type = 'text', name, value, required, onChange }: { label: string; type?: string; name: string; value: string; required?: boolean; onChange: (v: string) => void }) {
  const [focused, setFocused] = useState(false)
  const floating = focused || value.length > 0
  return (
    <div className="relative">
      <motion.label htmlFor={name} className="pointer-events-none absolute left-4 font-medium text-brand-text/70"
        animate={{ top: floating ? '8px' : '50%', fontSize: floating ? '10px' : '14px', y: floating ? '0%' : '-50%', color: focused ? 'var(--color-primary)' : undefined }}
        transition={{ duration: 0.2 }}>
        {label}{required ? ' *' : ''}
      </motion.label>
      <input id={name} type={type} name={name} value={value} required={required}
        onChange={(e) => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={clsx('h-14 w-full rounded-xl border bg-white px-4 pb-2 pt-5 text-sm text-brand-title outline-none transition-all duration-200',
          focused ? 'border-brand-primary shadow-[0_0_0_3px_rgba(35,81,48,0.12)]' : 'border-black/12 hover:border-black/25')} />
    </div>
  )
}

function PremiumTextarea({ label, name, value, onChange, rows = 5 }: { label: string; name: string; value: string; onChange: (v: string) => void; rows?: number }) {
  const [focused, setFocused] = useState(false)
  const floating = focused || value.length > 0
  return (
    <div className="relative">
      <motion.label htmlFor={name} className="pointer-events-none absolute left-4 font-medium text-brand-text/70"
        animate={{ top: floating ? '10px' : '16px', fontSize: floating ? '10px' : '14px', color: focused ? 'var(--color-primary)' : undefined }}
        transition={{ duration: 0.2 }}>
        {label} *
      </motion.label>
      <textarea id={name} name={name} value={value} required rows={rows}
        onChange={(e) => onChange(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        className={clsx('w-full resize-none rounded-xl border bg-white px-4 pb-3 pt-6 text-sm text-brand-title outline-none transition-all duration-200',
          focused ? 'border-brand-primary shadow-[0_0_0_3px_rgba(35,81,48,0.12)]' : 'border-black/12 hover:border-black/25')} />
    </div>
  )
}

export function ContactPage() {
  usePageMeta({ title: 'Contact Us — S.R Export House', description: 'Contact S.R Export House for product inquiries, export collaboration, and sourcing support across global markets.', image: '/images/logo.webp' })
  const [form, setForm] = useState<ContactFormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [activeFaqIndex, setActiveFaqIndex] = useState(0)
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); setForm(initialForm) }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-0 text-white">
        <img src="/images/why-choose.jpg" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" aria-hidden />
        <div className="section-wrap relative py-28 sm:py-36">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-brand-gold">Contact Us</span>
            <h1 className="mt-2 font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Let's Start<br />
              <span className="bg-gradient-to-r from-brand-gold to-yellow-300 bg-clip-text text-transparent">a Conversation</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl">
              Whether you need a product quote, want to explore partnerships, or have any questions — we're here.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REASON CARDS */}
      <section className="border-b border-black/8 bg-brand-muted py-10">
        <div className="section-wrap grid grid-cols-2 gap-4 lg:grid-cols-4">
          {contactReasons.map((reason, i) => (
            <motion.div key={reason.title}
              className="group flex flex-col items-start gap-3 rounded-2xl bg-white p-5 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: 'var(--shadow-card)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                <reason.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-title">{reason.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-brand-text">{reason.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ + FORM */}
      <section className="py-16 sm:py-20">
        <div className="section-wrap grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border border-black/8 bg-white p-7 sm:p-9" style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="eyebrow">Common Questions</span>
              <h2 className="mt-1 font-display text-4xl leading-tight sm:text-5xl">Frequently Asked</h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-text">Find quick answers. Can't find what you need? Just contact us directly.</p>
              <ul className="mt-8 divide-y divide-black/8">
                {contactFaq.map((faq, index) => {
                  const isOpen = index === activeFaqIndex
                  return (
                    <li key={faq.question}>
                      <button type="button"
                        className={clsx('flex w-full items-center justify-between gap-4 py-5 text-left text-base font-semibold transition-colors sm:text-lg',
                          isOpen ? 'text-brand-primary' : 'text-brand-title hover:text-brand-primary')}
                        aria-expanded={isOpen} onClick={() => setActiveFaqIndex((c) => (c === index ? -1 : index))}>
                        <span>{faq.question}</span>
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                          <ChevronDown className="h-5 w-5" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                            <p className="pb-5 pr-2 text-sm leading-relaxed text-brand-text sm:text-base">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-black/8 bg-white p-7 sm:p-9" style={{ boxShadow: 'var(--shadow-card)' }}>
              <div className="mb-7 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }} />
              <span className="eyebrow">Send Us a Message</span>
              <h2 className="mt-1 font-display text-4xl leading-tight sm:text-5xl">Get in Touch</h2>
              <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                <div className="relative">
                  <label className="mb-1.5 block text-[11px] font-bold uppercase tracking-widest text-brand-text/70">Subject *</label>
                  <select name="subject" value={form.subject} required onChange={(e) => setForm((p) => ({ ...p, subject: e.target.value }))}
                    className="h-12 w-full appearance-none rounded-xl border border-black/12 bg-white px-4 text-sm text-brand-title outline-none transition-all hover:border-black/25 focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(35,81,48,0.12)]">
                    <option value="" disabled>Select a subject…</option>
                    {subjectOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-9 h-4 w-4 text-brand-text/50" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <PremiumInput label="Your Name" name="fullName" value={form.fullName} required onChange={(v) => setForm((p) => ({ ...p, fullName: v }))} />
                  <PremiumInput label="Email Address" type="email" name="email" value={form.email} required onChange={(v) => setForm((p) => ({ ...p, email: v }))} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <PremiumInput label="Phone Number" type="tel" name="phoneNumber" value={form.phoneNumber} onChange={(v) => setForm((p) => ({ ...p, phoneNumber: v }))} />
                  <PremiumInput label="Company" name="company" value={form.company} onChange={(v) => setForm((p) => ({ ...p, company: v }))} />
                </div>
                <PremiumTextarea label="Your Message" name="message" value={form.message} onChange={(v) => setForm((p) => ({ ...p, message: v }))} rows={5} />
                <motion.button type="submit" className="cta-btn w-fit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Send className="mr-2 h-4 w-4" /> Send Message
                </motion.button>
              </form>
              <AnimatePresence>
                {submitted && (
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-3 rounded-xl border border-brand-primary/20 bg-brand-primary/8 px-5 py-4">
                    <CheckCircle className="h-5 w-5 shrink-0 text-brand-primary" />
                    <p className="text-sm font-semibold text-brand-primary">Thank you! Our team will contact you shortly.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP + CONTACT INFO */}
      <section className="pb-20 sm:pb-24">
        <div className="section-wrap grid items-stretch gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-black/8 bg-white shadow-card">
              <iframe title="S.R Export House location in Sonipat, Haryana" src={mapUrl}
                className="h-[420px] w-full sm:h-[500px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-black/8 bg-brand-dark p-8 text-white shadow-card sm:p-10">
              <div className="mb-6 h-1 w-12 rounded-full bg-brand-gold" />
              <div>
                <span className="eyebrow text-brand-gold">Where to Find Us</span>
                <h2 className="mt-2 font-display text-3xl leading-tight text-white sm:text-4xl">Contact Details</h2>
                <ul className="mt-8 grid gap-6">
                  {[
                    { icon: MapPin, label: companyInfo.address, href: undefined, note: 'Our base of operations' },
                    { icon: Phone, label: companyInfo.phone, href: `tel:${companyInfo.phone}`, note: 'Call us anytime' },
                    { icon: Mail, label: companyInfo.email, href: `mailto:${companyInfo.email}`, note: 'Drop us an email' },
                  ].map(({ icon: Icon, label, href, note }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-brand-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-white/40">{note}</p>
                        {href ? (
                          <a href={href} className="mt-0.5 block text-sm font-semibold text-white transition hover:text-brand-gold sm:text-base">{label}</a>
                        ) : (
                          <span className="mt-0.5 block text-sm font-semibold text-white sm:text-base">{label}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">Business Hours</p>
                <p className="mt-1 text-sm text-white/75">Mon – Sat · 9:00 AM – 6:00 PM IST</p>
                <p className="text-xs text-white/40">Closed on Sundays and public holidays</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
