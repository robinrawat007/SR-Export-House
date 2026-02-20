import { AnimatePresence, motion } from 'framer-motion'
import { BadgeCheck, CheckCircle2, FileCheck2, Globe2, ShieldCheck, X, ZoomIn } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { certificateItems } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const complianceHighlights = [
  { title: 'APEDA Registered', description: 'Registered with Agricultural and Processed Food Products Export Development Authority for agro exports.', icon: BadgeCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { title: 'Quality Verified', description: 'Every batch undergoes strict quality inspection before packing and international dispatch.', icon: FileCheck2, color: 'text-brand-primary', bg: 'bg-brand-muted' },
  { title: 'Regulatory Aligned', description: 'Operations aligned with national food safety and export compliance frameworks.', icon: ShieldCheck, color: 'text-blue-600', bg: 'bg-blue-50' },
  { title: 'Global Ready', description: 'Full documentation and certifications for seamless international shipment execution.', icon: Globe2, color: 'text-purple-600', bg: 'bg-purple-50' },
]

const trustPoints = [
  'All certificates maintained with up-to-date valid records',
  'Buyer verification available on request',
  'Third-party quality checks before every shipment',
  'Transparent documentation for customs clearance',
  'Consistent compliance across all product categories',
]

export function CertificationsPage() {
  usePageMeta({
    title: 'Our Certifications — S.R Export House',
    description: 'Explore S.R Export House certifications and compliance standards that support safe, reliable, and transparent global exports.',
    image: '/images/certificates/certificate-1.jpg',
  })

  const [activeCertificateIndex, setActiveCertificateIndex] = useState<number | null>(null)
  const activeCertificate = activeCertificateIndex !== null ? certificateItems[activeCertificateIndex] : null

  useEffect(() => {
    if (activeCertificateIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setActiveCertificateIndex(null) }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKeyDown) }
  }, [activeCertificateIndex])

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-0 text-white">
        <img src="/images/farm-field.webp" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" aria-hidden />

        {/* Decorative rings */}
        <div className="pointer-events-none absolute right-[8%] top-1/2 -translate-y-1/2 h-60 w-60 rounded-full border border-brand-gold/20" aria-hidden />
        <div className="pointer-events-none absolute right-[11%] top-1/2 -translate-y-1/2 h-40 w-40 rounded-full border-2 border-brand-gold/30" aria-hidden />

        <div className="section-wrap relative py-28 sm:py-36">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold backdrop-blur-sm">
              <ShieldCheck className="h-3 w-3" /> Certified & Compliant
            </div>
            <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl drop-shadow-xl">
              Our<br />
              <span className="bg-gradient-to-r from-brand-gold to-yellow-300 bg-clip-text text-transparent">Certifications</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl drop-shadow-md">
              Certified, compliant, and committed to transparent global trade standards. Every document reflects our dedication to quality.
            </p>

          </Reveal>
        </div>
      </section>

      {/* COMPLIANCE BADGES */}
      <section className="border-b border-black/8 bg-white py-10">
        <div className="section-wrap grid grid-cols-2 gap-4 lg:grid-cols-4">
          {complianceHighlights.map((item, i) => (
            <motion.div key={item.title}
              className="group flex flex-col gap-3 rounded-2xl border border-black/6 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              style={{ boxShadow: 'var(--shadow-card)' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} ${item.color}`}>
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-title">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-brand-text">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATE CARDS */}
      <section className="py-16 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <span className="eyebrow">Our Documents</span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-brand-title sm:text-5xl">
              Certified for Trusted<br />Global Trade
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-brand-text sm:text-lg">
              Click any certificate to view it in full detail. All documents are maintained and updated regularly.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {certificateItems.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                className={index === certificateItems.length - 1 ? 'sm:col-span-2 xl:col-span-2 xl:col-start-2' : ''}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
                <button
                  type="button"
                  onClick={() => setActiveCertificateIndex(index)}
                  className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-black/8 bg-white text-left transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  aria-label={`View certificate: ${certificate.title}`}>
                  {/* Gold top bar */}
                  <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }} />

                  <div className="relative overflow-hidden border-b border-black/6 bg-brand-muted/50">
                    <img src={certificate.image} alt={certificate.title}
                      className="h-72 w-full object-contain transition duration-500 group-hover:scale-[1.04] sm:h-[340px]"
                      width={768} height={1085} loading="lazy" />

                    {/* Hover overlay with zoom icon */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 text-white opacity-0 shadow-lg transition-all duration-300 group-hover:bg-brand-primary/90 group-hover:opacity-100">
                        <ZoomIn className="h-5 w-5" />
                      </div>
                    </div>

                    {/* Verified badge */}
                    <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-primary shadow-soft opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <CheckCircle2 className="h-3 w-3" /> Verified
                    </div>
                  </div>

                  <div className="flex-1 p-5">
                    <h3 className="font-display text-2xl leading-tight sm:text-3xl">{certificate.title}</h3>
                    <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand-primary">{certificate.issuer}</p>
                    <p className="mt-3 text-xs text-brand-text/60 underline underline-offset-2 group-hover:text-brand-primary">Click to view full certificate →</p>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST POINTS BANNER */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <img src="/images/quality-rice.webp" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-brand-primary/90" />

        <div className="section-wrap relative grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow text-brand-gold">Why Trust Us</span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-white sm:text-5xl">
              Transparency in Every Export
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
              Our certifications aren't just documents — they represent a verified commitment to quality, consistency, and honest trade.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-3">
              {trustPoints.map((point, i) => (
                <motion.li key={point}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/8 px-5 py-4 text-sm font-medium text-white/90 backdrop-blur-sm"
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}>
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATE MODAL */}
      <AnimatePresence>
        {activeCertificate ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setActiveCertificateIndex(null)}>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-h-[90vh] w-[min(95vw,920px)] overflow-hidden rounded-2xl bg-white"
              style={{ boxShadow: '0 40px 120px rgba(0,0,0,0.5)' }}
              onClick={(e) => e.stopPropagation()}>
              <button type="button" aria-label="Close certificate"
                onClick={() => setActiveCertificateIndex(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-brand-title shadow-soft transition hover:bg-brand-primary hover:text-white">
                <X className="h-4 w-4" />
              </button>
              <div className="h-0.5" style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }} />
              <div className="max-h-[75vh] overflow-auto bg-brand-muted/40 p-4 sm:p-6">
                <img src={activeCertificate.image} alt={activeCertificate.title}
                  className="mx-auto h-auto w-full max-w-[720px] rounded-xl" width={768} height={1085} />
              </div>
              <div className="border-t border-black/8 px-6 py-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="font-display text-3xl leading-tight">{activeCertificate.title}</h2>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-brand-primary">{activeCertificate.issuer}</p>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 rounded-full bg-brand-primary/8 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-brand-primary">
                  <CheckCircle2 className="h-3 w-3" /> Verified
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
