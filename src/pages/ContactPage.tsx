import { useState } from 'react'
import type { FormEvent } from 'react'
import clsx from 'clsx'
import { ChevronDown, Mail, MapPin, Phone } from 'lucide-react'
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

export function ContactPage() {
  usePageMeta({
    title: 'Contact Us - S.R Export House',
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
      <section className="relative overflow-hidden bg-brand-muted py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_8%_12%,rgba(35,81,48,0.12),transparent_38%),radial-gradient(circle_at_84%_0%,rgba(251,188,52,0.14),transparent_30%)]" />
        <div className="section-wrap relative">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">Contact Us</p>
            <h1 className="font-display text-5xl leading-tight text-brand-title sm:text-6xl">Contact Us for Any Questions</h1>
            <p className="mt-5 text-xl leading-relaxed text-brand-text sm:text-2xl">
              Reach out for product requirements, certifications, quotations, and export collaboration details.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-wrap grid gap-8 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-sm border border-black/10 bg-white p-6 shadow-soft sm:p-8">
              <p className="eyebrow mb-2">Information Questions</p>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Frequently Asked Questions</h2>

              <ul className="mt-7 divide-y divide-black/10">
                {contactFaq.map((faq, index) => {
                  const isOpen = index === activeFaqIndex
                  return (
                    <li key={faq.question}>
                      <button
                        type="button"
                        className={clsx(
                          'flex w-full items-center justify-between gap-4 py-5 text-left text-2xl transition sm:text-[1.6rem]',
                          isOpen ? 'text-brand-primary' : 'text-brand-title hover:text-brand-primary',
                        )}
                        aria-expanded={isOpen}
                        onClick={() => setActiveFaqIndex((current) => (current === index ? -1 : index))}
                      >
                        <span>{faq.question}</span>
                        <ChevronDown className={clsx('h-5 w-5 shrink-0 transition-transform', isOpen ? 'rotate-180' : '')} />
                      </button>
                      <div
                        className={clsx(
                          'grid overflow-hidden transition-all duration-300',
                          isOpen ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr] pb-0',
                        )}
                      >
                        <p className="overflow-hidden pr-2 text-lg leading-relaxed text-brand-text sm:text-xl">{faq.answer}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-sm border border-black/10 bg-white p-6 shadow-soft sm:p-8">
              <p className="eyebrow mb-2">Information About Us</p>
              <h2 className="font-display text-4xl leading-tight sm:text-5xl">Contact Us for Any Questions</h2>

              <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
                <input
                  required
                  value={form.subject}
                  onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  className="h-12 rounded-sm border border-black/15 px-4 text-base outline-none transition focus:border-brand-primary"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    value={form.fullName}
                    onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
                    type="text"
                    name="fullName"
                    placeholder="Your Name*"
                    className="h-12 rounded-sm border border-black/15 px-4 text-base outline-none transition focus:border-brand-primary"
                  />
                  <input
                    required
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    type="email"
                    name="email"
                    placeholder="Your Email*"
                    className="h-12 rounded-sm border border-black/15 px-4 text-base outline-none transition focus:border-brand-primary"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    value={form.phoneNumber}
                    onChange={(event) => setForm((prev) => ({ ...prev, phoneNumber: event.target.value }))}
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    className="h-12 rounded-sm border border-black/15 px-4 text-base outline-none transition focus:border-brand-primary"
                  />
                  <input
                    value={form.company}
                    onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="h-12 rounded-sm border border-black/15 px-4 text-base outline-none transition focus:border-brand-primary"
                  />
                </div>

                <textarea
                  required
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  name="message"
                  rows={7}
                  placeholder="Your Message*"
                  className="rounded-sm border border-black/15 px-4 py-3 text-base outline-none transition focus:border-brand-primary"
                />

                <button type="submit" className="cta-btn w-fit">
                  Ask a Question
                </button>
              </form>

              {submitted ? (
                <p className="mt-4 rounded-sm border border-brand-primary/20 bg-brand-primary/10 px-4 py-3 text-sm font-semibold text-brand-primary">
                  Thank you for your message. Our team will contact you shortly.
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="section-wrap grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="overflow-hidden rounded-sm border border-black/10 bg-white shadow-soft">
              <iframe
                title="S.R Export House location map"
                src={mapUrl}
                className="h-[380px] w-full sm:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-sm border border-black/10 bg-white p-7 shadow-soft sm:p-9">
              <h2 className="font-display text-5xl leading-tight">Important Info.</h2>
              <ul className="mt-6 grid gap-5 text-xl text-brand-title sm:text-2xl">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <span>{companyInfo.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <a href={`tel:${companyInfo.phone}`} className="transition hover:text-brand-primary">
                    Call us: {companyInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-primary" />
                  <a href={`mailto:${companyInfo.email}`} className="transition hover:text-brand-primary">
                    Mail us: {companyInfo.email}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
