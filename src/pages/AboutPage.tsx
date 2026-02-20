import { animate, motion, useInView } from 'framer-motion'
import { ArrowRight, Award, Globe2, Heart, Leaf, PackageCheck, ShieldCheck, Star, Target, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { aboutPillars, exportImpactStats } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const pillarIcons = [Target, Heart, ShieldCheck]

const timelineEvents = [
  { year: '2024', title: 'Founded', body: 'S.R Export House was established in memory of Late Shri Sahaj Ram, with a vision to deliver premium agro products to global markets.' },
  { year: '2024', title: 'First Shipment', body: 'Successfully executed our first international export of premium basmati rice to buyers in the Middle East.' },
  { year: '2025', title: 'Product Expansion', body: 'Expanded our catalogue to include spices, mango pulp, essential oils, psyllium husk, wires and cables, and more.' },
  { year: '2025', title: 'Quality Certified', body: 'Achieved essential export certifications and compliance standards to serve buyers across multiple global markets.' },
]

const whyUs = [
  { icon: PackageCheck, title: 'Quality First', body: 'Every batch is sourced, inspected, and packed to the highest standards before dispatch.' },
  { icon: Globe2, title: 'Global Reach', body: 'We export to buyers across Asia, Middle East, Europe, and beyond with confidence.' },
  { icon: Users, title: 'Family Values', body: 'Built on trust and long-term relationships — with farmers, buyers, and partners alike.' },
  { icon: Award, title: 'Certified Exports', body: 'Full documentation and certifications for transparent and reliable global trade.' },
  { icon: Leaf, title: 'Sustainable Sourcing', body: 'We work directly with farmers to ensure ethical, sustainable, and fair agricultural practices.' },
  { icon: Star, title: 'Buyer Satisfaction', body: 'Our track record of repeat buyers tells the story of consistent quality and service.' },
]

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
      <p ref={ref} className={`font-display text-6xl leading-none sm:text-7xl ${light ? 'text-white' : 'text-brand-primary'}`}>
        0{suffix}
      </p>
      <p className={`mt-3 text-xl leading-tight sm:text-2xl ${light ? 'text-white/80' : 'text-brand-title'}`}>{label}</p>
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

  const [activeTimeline, setActiveTimeline] = useState(0)

  return (
    <>
      {/* ══ HERO with parallax-feel ══════════════════════════════ */}
      <section className="relative overflow-hidden py-0 text-white">
        <img
          src="/images/farm-field.webp"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover scale-105"
          width={1500}
          height={600}
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" aria-hidden />

        {/* Decorative gold ring */}
        <div className="absolute right-[12%] top-1/2 -translate-y-1/2 h-72 w-72 rounded-full border-2 border-brand-gold/20 opacity-40" />
        <div className="absolute right-[14%] top-1/2 -translate-y-1/2 h-48 w-48 rounded-full border border-brand-gold/30" />

        <div className="section-wrap relative py-28 sm:py-36">
          <Reveal className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-gold backdrop-blur-sm">
              <Leaf className="h-3 w-3" /> Est. 2024 · Sonipat, Haryana
            </div>
            <h1 className="font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Built on Family Values,<br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-brand-gold to-yellow-300 bg-clip-text text-transparent">
                Trusted Globally
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75 sm:text-xl">
              S.R Export House combines deep-rooted agricultural relationships with international trade discipline — delivering quality you can trust, at scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/our-products" className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-dark transition hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(251,188,52,0.5)]">
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contact-us" className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/10">
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ STORY SPLIT ════════════════════════════════════════ */}
      <section className="py-20 sm:py-24">
        <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="group relative overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/quality-rice.webp"
                alt="Premium quality rice from S.R Export House"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                width={720}
                height={720}
                loading="lazy"
              />
              {/* Gold badge overlay */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-brand-gold px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-dark shadow-lg">
                <Star className="h-3 w-3" /> Premium Quality
              </div>
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/8" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-brand-title sm:text-5xl">
              A Legacy of Trust<br />& Quality
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-brand-primary to-brand-gold" />
            <p className="mt-6 text-base leading-relaxed text-brand-text sm:text-lg">
              S.R Export House was founded in loving memory of our Grandfather, <strong className="text-brand-title">Late Shri Sahaj Ram</strong> — a man who believed in hard work, honesty, and quality in everything he did.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brand-text sm:text-lg">
              Carrying his legacy forward, we built an agro export business rooted in the same values: genuine quality, fair trade, and lasting relationships with both farmers and international buyers.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {aboutPillars.slice(0, 2).map((pillar, index) => {
                const Icon = pillarIcons[index] ?? Target
                return (
                  <div key={pillar.title} className="flex items-start gap-3 rounded-xl bg-brand-muted p-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-primary text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-sm font-bold text-brand-title">{pillar.title}</p>
                      <p className="mt-0.5 text-xs text-brand-text line-clamp-2">{pillar.body}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <Link to="/our-products" className="cta-btn mt-8 inline-flex">
              Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ══ WHY CHOOSE US GRID ══════════════════════════════════ */}
      <section className="bg-brand-muted py-20 sm:py-24">
        <div className="section-wrap">
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-brand-title sm:text-5xl">
              What Sets Us Apart
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {whyUs.map((item, index) => (
              <motion.article
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-white p-7 transition-all duration-300"
                style={{ boxShadow: 'var(--shadow-card)' }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-card-hover)' }}
              >
                {/* Gradient corner accent */}
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-bl from-brand-primary/5 to-transparent" />
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-brand-primary to-brand-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary transition-all duration-300 group-hover:bg-brand-primary group-hover:text-white group-hover:shadow-glow-sm">
                  <item.icon className="h-6 w-6" />
                </div>

                <h3 className="font-display text-2xl leading-tight text-brand-title sm:text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INTERACTIVE TIMELINE ════════════════════════════════ */}
      <section className="py-20 sm:py-24">
        <div className="section-wrap">
          <Reveal>
            <span className="eyebrow">Our Journey</span>
            <h2 className="mt-2 font-display text-4xl leading-tight text-brand-title sm:text-5xl">
              From Vision to Global Reach
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Timeline selector */}
            <div className="flex flex-col gap-4">
              {timelineEvents.map((event, index) => (
                <button
                  key={event.title}
                  type="button"
                  className={`group relative flex items-start gap-5 rounded-2xl border p-5 text-left transition-all duration-300 ${activeTimeline === index
                    ? 'border-brand-primary bg-brand-primary text-white shadow-glow-sm'
                    : 'border-black/8 bg-white hover:border-brand-primary/30 hover:shadow-card'
                    }`}
                  onClick={() => setActiveTimeline(index)}
                >
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xs font-bold tabular-nums transition-colors ${activeTimeline === index ? 'bg-white/20 text-white' : 'bg-brand-primary/8 text-brand-primary'
                    }`}>
                    {event.year}
                  </div>
                  <div>
                    <p className={`font-bold ${activeTimeline === index ? 'text-white' : 'text-brand-title'}`}>{event.title}</p>
                    <p className={`mt-1 text-sm leading-relaxed ${activeTimeline === index ? 'text-white/80' : 'text-brand-text'}`}>{event.body}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Image panel */}
            <Reveal direction="right">
              <div className="sticky top-24 group relative h-[400px] overflow-hidden rounded-2xl bg-brand-dark shadow-card lg:h-[500px]">
                <img
                  src="/images/welcome-rice.webp"
                  alt="S.R Export House operations"
                  className="h-full w-full object-cover opacity-60 transition duration-700 group-hover:scale-105"
                  width={900}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <motion.div
                  key={activeTimeline}
                  className="absolute inset-x-0 bottom-0 p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-gold">{timelineEvents[activeTimeline].year}</p>
                  <h3 className="mt-2 font-display text-3xl text-white sm:text-4xl">{timelineEvents[activeTimeline].title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{timelineEvents[activeTimeline].body}</p>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ DARK STATS BANNER ═══════════════════════════════════ */}
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
              We ensure every product meets stringent quality standards through rigorous testing, careful sourcing, and sustainable practices.
            </p>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              We partner with dedicated farmers to deliver premium-quality spices, rice, and fresh produce globally.
            </p>
            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-2 rounded-lg border border-brand-gold/50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-gold transition hover:bg-brand-gold hover:text-brand-dark"
            >
              Talk to Our Team <ArrowRight className="h-4 w-4" />
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
