import { AnimatePresence, motion } from 'framer-motion'
import { BadgeCheck, FileCheck2, Globe2, ShieldCheck, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { certificateItems } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const complianceHighlights = [
  {
    title: 'Verified Documentation',
    description: 'Every certificate is maintained with current records for transparent buyer verification.',
    icon: FileCheck2,
  },
  {
    title: 'Regulatory Alignment',
    description: 'Our operations align with required national export and food safety compliance frameworks.',
    icon: BadgeCheck,
  },
  {
    title: 'Quality Assurance',
    description: 'Strict quality checks and handling standards are followed before packing and dispatch.',
    icon: ShieldCheck,
  },
  {
    title: 'Global Shipment Readiness',
    description: 'Our compliance setup helps us execute international shipments with confidence and consistency.',
    icon: Globe2,
  },
]

export function CertificationsPage() {
  usePageMeta({
    title: 'Our Certifications — S.R Export House',
    description:
      'Explore S.R Export House certifications and compliance standards that support safe, reliable, and transparent global exports.',
    image: '/images/certificates/certificate-1.jpg',
  })

  const [activeCertificateIndex, setActiveCertificateIndex] = useState<number | null>(null)
  const activeCertificate = activeCertificateIndex !== null ? certificateItems[activeCertificateIndex] : null

  useEffect(() => {
    if (activeCertificateIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveCertificateIndex(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeCertificateIndex])

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 text-white sm:py-24">
        <img
          src="/images/farm-field.webp"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          width={1500}
          height={500}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/75" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" aria-hidden />

        <div className="section-wrap relative text-center">
          <Reveal>
            <span className="eyebrow text-brand-gold">Our Certifications</span>
            <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Our Certifications
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
              Certified, compliant, and committed to transparent global trade standards.
            </p>
            {/* Breadcrumb */}
            <p className="mt-5 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-wide text-white/60">
              <Link to="/" className="transition hover:text-brand-gold">Home</Link>
              <span>/</span>
              <span className="text-white/85">Our Certifications</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ CERTIFICATE CARDS ══════════════════════════════════ */}
      <section className="py-16 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Certified for Trusted Global Trade"
              description="Our certifications reflect our commitment to quality control, regulatory compliance, and transparent export operations."
              center
              className="mx-auto max-w-4xl"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {certificateItems.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                className={index === certificateItems.length - 1 ? 'sm:col-span-2 xl:col-span-2 xl:col-start-2' : ''}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <button
                  type="button"
                  onClick={() => setActiveCertificateIndex(index)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-black/8 bg-white text-left transition-all duration-300 hover:-translate-y-1.5"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  {/* Shimmer border on hover */}
                  <div className="relative overflow-hidden border-b border-black/8 bg-brand-muted/60">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-72 w-full object-contain transition duration-600 group-hover:scale-[1.03] sm:h-[340px]"
                      width={768}
                      height={1085}
                      loading="lazy"
                    />
                    {/* Gold shimmer on hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/0 via-brand-gold/10 to-brand-gold/0 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                    {/* Badge overlay */}
                    <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary/90 text-white opacity-0 shadow-glow-sm transition-opacity duration-300 group-hover:opacity-100">
                      <ShieldCheck className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Gold top accent on hover */}
                  <div
                    className="h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }}
                  />

                  <div className="flex-1 p-5">
                    <h3 className="font-display text-2xl leading-tight sm:text-3xl">{certificate.title}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand-primary">{certificate.issuer}</p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPLIANCE CARDS ═══════════════════════════════════ */}
      <section className="pb-20 sm:pb-24">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Compliance Framework"
              description="Beyond certificates, our process standards protect product integrity and buyer confidence."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {complianceHighlights.map((step, index) => (
              <motion.article
                key={step.title}
                className="group relative h-full overflow-hidden rounded-2xl bg-white p-6"
                style={{ boxShadow: 'var(--shadow-card)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-card-hover)' }}
              >
                {/* Gradient top bar */}
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }}
                />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-glow-sm">
                  <step.icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-2xl leading-tight sm:text-3xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATE MODAL ══════════════════════════════════ */}
      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificateIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] w-[min(95vw,920px)] overflow-hidden rounded-2xl bg-white"
              style={{ boxShadow: '0 40px 120px rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close certificate preview"
                onClick={() => setActiveCertificateIndex(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-title shadow-soft transition hover:bg-brand-primary hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Gold top bar */}
              <div
                className="h-0.5"
                style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }}
              />

              <div className="max-h-[75vh] overflow-auto bg-brand-muted/40 p-4 sm:p-6">
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="mx-auto h-auto w-full max-w-[720px] rounded-xl"
                  width={768}
                  height={1085}
                />
              </div>

              <div className="border-t border-black/8 px-6 py-5">
                <h2 className="font-display text-3xl leading-tight">{activeCertificate.title}</h2>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-primary">{activeCertificate.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
