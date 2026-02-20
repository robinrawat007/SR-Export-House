import { ArrowRight, Eye, Heart, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { animate, motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { aboutGallery, aboutPillars, exportImpactStats } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const pillarIcons = [Target, Eye, Heart]

function AnimatedStat({ value, label, light = false }: { value: string; label: string; light?: boolean }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''), 10)
  const suffix = value.replace(/[0-9]/g, '')

  useEffect(() => {
    if (!inView || !ref.current || isNaN(numericValue)) return
    const node = ref.current
    const controls = animate(0, numericValue, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(v) {
        node.textContent = `${Math.round(v)}${suffix}`
      },
    })
    return controls.stop
  }, [inView, numericValue, suffix])

  return (
    <article className="border-l-2 border-brand-gold pl-5">
      <p
        ref={ref}
        className={`font-display text-6xl leading-none sm:text-7xl ${light ? 'text-white' : 'text-brand-primary'}`}
      >
        0{suffix}
      </p>
      <p className={`mt-3 text-xl leading-tight sm:text-2xl ${light ? 'text-white/80' : 'text-brand-title'}`}>
        {label}
      </p>
    </article>
  )
}

export function AboutPage() {
  usePageMeta({
    title: 'About Us — S.R Export House',
    description:
      'Learn about S.R Export House, our story, values, and quality-first export operations built on trust, transparency, and sustainability.',
    image: '/images/product-mango.jpg',
  })

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-muted py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(35,81,48,0.14),transparent_40%),radial-gradient(circle_at_85%_0%,rgba(251,188,52,0.18),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" aria-hidden />

        <div className="section-wrap relative">
          <Reveal className="max-w-4xl">
            <span className="eyebrow">About Us</span>
            <h1 className="font-display text-5xl leading-tight text-brand-title sm:text-6xl lg:text-7xl">
              Built on Family Values,<br className="hidden sm:block" /> Focused on Global Quality
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-text sm:text-xl">
              S.R. Export House combines local agricultural relationships with international trade discipline to deliver
              trusted export quality at scale.
            </p>
          </Reveal>

          {/* Pillar cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {aboutPillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Target
              return (
                <motion.article
                  key={pillar.title}
                  className="group relative h-full overflow-hidden rounded-2xl border border-black/8 bg-white/90 p-8"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5, boxShadow: 'var(--shadow-card-hover)' }}
                >
                  {/* Gradient left border on hover */}
                  <div
                    className="absolute inset-y-0 left-0 w-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(180deg, #235130, #fbbc34)' }}
                  />

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary transition-colors group-hover:bg-brand-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h2 className="font-display text-3xl leading-tight text-brand-title sm:text-4xl">{pillar.title}</h2>
                  <p className="mt-4 text-sm leading-relaxed text-brand-text sm:text-base">{pillar.body}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* ══ STORY SPLIT ════════════════════════════════════════ */}
      <section className="py-20 sm:py-24">
        <div className="section-wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal direction="left">
            <div className="group relative overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/product-mango.jpg"
                alt="Mango pulp product"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                width={720}
                height={720}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/8" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              title="Welcome to S.R. Export House"
              description="A family-run export business started in loving memory of our Grandfather, Late Shri Sahaj Ram — dedicated to quality agro exports that reach global markets."
            />
            <p className="mt-5 text-base leading-relaxed text-brand-text sm:text-lg">
              Our commitment to quality processing and fair business practices has earned us nationwide recognition.
              With a customer-centric approach, we ensure reliable deliveries, competitive pricing, and exceptional
              service.
            </p>
            <Link to="/our-products" className="cta-btn mt-8">
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ GALLERY ════════════════════════════════════════════ */}
      <section className="pb-16 pt-2 sm:pb-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              eyebrow="S.R Export House"
              title="Trusted Supplier of Quality Agro Products Since 2024"
              description="Our journey is built on strong, ethical connections with farming communities and buyers across markets."
              center
              className="mx-auto max-w-5xl"
            />
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aboutGallery.map((image, index) => (
              <motion.article
                key={image.src}
                className="group relative overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-80"
                  width={500}
                  height={600}
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ DARK STATS BANNER ══════════════════════════════════ */}
      <section className="relative overflow-hidden py-20 text-white sm:py-24">
        <img
          src="/images/product-spices.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          width={1500}
          height={1001}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" aria-hidden />

        <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Healthy Life With Fresh Products!
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
              We ensure every product meets stringent quality standards through rigorous testing, careful sourcing, and
              sustainable practices.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              We partner with dedicated farmers to deliver premium-quality spices, rice, and fresh produce globally.
            </p>
            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-brand-gold/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-gold transition hover:bg-brand-gold hover:text-brand-dark"
            >
              Talk to Our Team
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {exportImpactStats.map((stat) => (
                <AnimatedStat key={stat.label} value={stat.value} label={stat.label} light />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
