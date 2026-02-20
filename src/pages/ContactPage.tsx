import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { companyInfo } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

type ContactFormState = {
  fullName: string
  email: string
  company: string
  message: string
}

const initialForm: ContactFormState = {
  fullName: '',
  email: '',
  company: '',
  message: '',
}

export function ContactPage() {
  usePageMeta({
    title: 'Contact Us - S.R Export House',
    description:
      'Contact S.R Export House for global agro export inquiries, product requirements, and partnership opportunities.',
  })

  const [form, setForm] = useState<ContactFormState>(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(251,188,52,0.2),transparent_30%),radial-gradient(circle_at_82%_0%,rgba(35,81,48,0.6),transparent_35%)]" />
        <div className="section-wrap relative">
          <Reveal>
            <p className="eyebrow text-brand-gold">Contact Us</p>
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl">
              Talk to Our Export Team
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
              Share your requirements and we will respond with suitable product options, pricing guidance, and export
              support details.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-wrap grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              title="Get in Touch"
              description="Reach us directly for product discussions, quotes, and long-term sourcing partnerships."
            />

            <div className="mt-8 grid gap-4">
              <article className="rounded-sm bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3 text-brand-primary">
                  <Phone className="h-5 w-5" />
                  <h3 className="font-display text-3xl">Phone</h3>
                </div>
                <a href={`tel:${companyInfo.phone}`} className="mt-2 inline-flex text-lg text-brand-text hover:text-brand-primary">
                  {companyInfo.phone}
                </a>
              </article>

              <article className="rounded-sm bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3 text-brand-primary">
                  <Mail className="h-5 w-5" />
                  <h3 className="font-display text-3xl">Email</h3>
                </div>
                <a href={`mailto:${companyInfo.email}`} className="mt-2 inline-flex text-lg text-brand-text hover:text-brand-primary">
                  {companyInfo.email}
                </a>
              </article>

              <article className="rounded-sm bg-white p-5 shadow-soft">
                <div className="flex items-center gap-3 text-brand-primary">
                  <MapPin className="h-5 w-5" />
                  <h3 className="font-display text-3xl">Location</h3>
                </div>
                <p className="mt-2 text-lg text-brand-text">{companyInfo.address}</p>
              </article>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-sm bg-white p-6 shadow-soft sm:p-8">
              <h2 className="font-display text-5xl">Send an Inquiry</h2>
              <p className="mt-2 text-lg text-brand-text">
                Fill out this form and our team will get back to you shortly.
              </p>

              <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    required
                    value={form.fullName}
                    onChange={(event) => setForm((prev) => ({ ...prev, fullName: event.target.value }))}
                    type="text"
                    name="fullName"
                    placeholder="Full Name*"
                    className="h-12 rounded-sm border border-black/15 px-4 outline-none transition focus:border-brand-primary"
                  />
                  <input
                    required
                    value={form.email}
                    onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="h-12 rounded-sm border border-black/15 px-4 outline-none transition focus:border-brand-primary"
                  />
                </div>

                <input
                  value={form.company}
                  onChange={(event) => setForm((prev) => ({ ...prev, company: event.target.value }))}
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="h-12 rounded-sm border border-black/15 px-4 outline-none transition focus:border-brand-primary"
                />

                <textarea
                  required
                  value={form.message}
                  onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                  name="message"
                  rows={6}
                  placeholder="Your requirement*"
                  className="rounded-sm border border-black/15 px-4 py-3 outline-none transition focus:border-brand-primary"
                />

                <button type="submit" className="cta-btn w-fit">
                  Submit Inquiry
                </button>
              </form>

              {submitted ? (
                <p className="mt-4 rounded-sm border border-brand-primary/20 bg-brand-primary/10 px-4 py-3 text-sm font-semibold text-brand-primary">
                  Thank you. Your inquiry was submitted successfully.
                </p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
