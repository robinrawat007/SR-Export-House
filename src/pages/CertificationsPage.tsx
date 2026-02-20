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
    title: 'Our Certifications - S.R Export House',
    description:
      'Explore S.R Export House certifications and compliance standards that support safe, reliable, and transparent global exports.',
    image: '/images/certificates/certificate-1.jpg',
  })

  const [activeCertificateIndex, setActiveCertificateIndex] = useState<number | null>(null)
  const activeCertificate =
    activeCertificateIndex !== null ? certificateItems[activeCertificateIndex] : null

  useEffect(() => {
    if (activeCertificateIndex === null) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCertificateIndex(null)
      }
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 to-black/70" />
        <div className="section-wrap relative text-center">
          <Reveal>
            <p className="eyebrow text-brand-gold">Our Certifications</p>
            <h1 className="font-display text-6xl leading-tight text-white sm:text-7xl">Our Certifications</h1>
            <p className="mt-6 flex items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.08em] text-white/85 sm:text-base">
              <Link to="/" className="transition hover:text-brand-gold">
                Home
              </Link>
              <span>/</span>
              <span className="text-white">Our Certifications</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Certified for Trusted Global Trade"
              description="Our certifications reflect our commitment to quality control, regulatory compliance, and transparent export operations."
              center
              className="mx-auto max-w-4xl"
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {certificateItems.map((certificate, index) => (
              <Reveal
                key={certificate.title}
                delay={index * 0.05}
                className={index === certificateItems.length - 1 ? 'sm:col-span-2 xl:col-span-2 xl:col-start-2' : ''}
              >
                <button
                  type="button"
                  onClick={() => setActiveCertificateIndex(index)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-sm border border-black/10 bg-white text-left shadow-soft transition duration-300 hover:-translate-y-1"
                >
                  <div className="overflow-hidden border-b border-black/10 bg-black/5">
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                      className="h-80 w-full object-contain transition duration-700 group-hover:scale-[1.03] sm:h-[360px]"
                      width={768}
                      height={1085}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-4xl leading-tight">{certificate.title}</h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-primary">{certificate.issuer}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Compliance Framework"
              description="Beyond certificates, our process standards protect product integrity and buyer confidence."
            />
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {complianceHighlights.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.05}>
                <article className="h-full rounded-sm bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1">
                  <step.icon className="h-7 w-7 text-brand-primary" />
                  <h3 className="mt-4 font-display text-4xl leading-tight">{step.title}</h3>
                  <p className="mt-3 text-lg leading-relaxed text-brand-text">{step.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCertificateIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="relative max-h-[90vh] w-[min(95vw,920px)] overflow-hidden rounded-sm bg-white shadow-soft"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Close certificate preview"
                onClick={() => setActiveCertificateIndex(null)}
                className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-title shadow-soft transition hover:bg-brand-primary hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="max-h-[78vh] overflow-auto bg-black/5 p-3 sm:p-5">
                <img
                  src={activeCertificate.image}
                  alt={activeCertificate.title}
                  className="mx-auto h-auto w-full max-w-[760px] rounded-sm"
                  width={768}
                  height={1085}
                />
              </div>

              <div className="border-t border-black/10 px-5 py-4 sm:px-6">
                <h2 className="font-display text-4xl leading-tight">{activeCertificate.title}</h2>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-brand-primary">
                  {activeCertificate.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
