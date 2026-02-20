import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useMotionValue, useSpring, animate } from 'framer-motion'
import { ArrowRight, Globe, Leaf, Shield, Star, TrendingUp } from 'lucide-react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import {
  featureCards,
  heroSlides,
  missionCards,
  products,
  quickCards,
  trustStats,
} from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

/* ─── Animated counter ──────────────────────────────── */
function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const motionVal = useMotionValue(0)
  const springVal = useSpring(motionVal, { duration: 1800, bounce: 0 })

  useEffect(() => {
    if (inView) {
      motionVal.set(0)
      const controls = animate(motionVal, to, { duration: 1.8, ease: 'easeOut' })
      return controls.stop
    }
  }, [inView, motionVal, to])

  useEffect(() => {
    return springVal.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`
    })
  }, [springVal, suffix])

  return <span ref={ref}>0{suffix}</span>
}

/* ─── Ticker Band ───────────────────────────────────── */


/* ─── Ticker Band ───────────────────────────────────── */
function TickerBand() {
  const tickerProducts = products.slice(0, 10)
  const items = [...tickerProducts, ...tickerProducts]

  return (
    <div className="group relative overflow-hidden border-y border-white/10 bg-brand-primary py-4" aria-hidden>
      {/* Subtle overlay gradients for fade edges */}
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-brand-primary to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-brand-primary to-transparent" />

      <div className="ticker-track flex items-center whitespace-nowrap">
        {items.map((product, i) => (
          <div key={`${product.slug}-${i}`} className="mx-10 flex items-center gap-4 shrink-0">
            <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 bg-white/10">
              <img src={product.image} alt="" className="h-full w-full object-cover" />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-white/90">
              {product.name}
            </span>
            <div className="h-1.5 w-1.5 rounded-full bg-brand-gold/60 mx-2" />
          </div>
        ))}
      </div>
    </div>
  )
}


const featureIcons = [Leaf, Globe, Shield, TrendingUp]

export function HomePage() {
  usePageMeta({
    title: 'S.R Export House — Premium Agro Products Exporter, India',
    description:
      'Premium agro exports from S.R Export House: rice, spices, mango pulp, essential oils, psyllium husk & more. Trusted by 150+ clients in 10+ countries.',
  })

  const topProducts = products.slice(0, 8)

  return (
    <>
      {/* ══ HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden />

        {/* Animated grain overlay */}
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-60" aria-hidden />

        {/* Decorative glow orbs */}
        <div
          className="pointer-events-none absolute -left-20 top-10 h-80 w-80 rounded-full opacity-20 blur-[80px]"
          style={{ background: '#235130' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full opacity-15 blur-[60px]"
          style={{ background: '#fbbc34' }}
          aria-hidden
        />

        <div className="section-wrap relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            className="hero-swiper"
            navigation
            pagination={{ clickable: true }}
            speed={1000}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid min-h-[560px] items-center gap-10 py-14 lg:grid-cols-2 lg:gap-14 lg:py-20">
                  <div className="max-w-2xl">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5"
                    >
                      <Star className="h-3.5 w-3.5 fill-brand-gold text-brand-gold" />
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-gold">Est. 2024 · India</span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-5 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="mt-8 flex flex-wrap items-center gap-4"
                    >
                      <Link to={slide.ctaTo} className="cta-btn-gold">
                        {slide.ctaLabel}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                      <Link
                        to="/our-products"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white/75 transition hover:text-white"
                      >
                        View All Products
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="mx-auto max-w-xl lg:ml-auto"
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full object-contain drop-shadow-[0_35px_55px_rgba(0,0,0,0.55)]"
                      width={900}
                      height={900}
                      loading="eager"
                    />
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ══ TICKER BAND ═══════════════════════════════════════ */}
      <TickerBand />

      {/* ══ WELCOME ═══════════════════════════════════════════ */}
      <section className="py-20 sm:py-24">
        <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome to S.R Export House"
              title="Welcome to S.R. Export House"
              description="A family-run export business started in the memory of our beloved Grandfather, Late Shri Sahaj Ram. We are dedicated to providing high-quality agro products to global markets."
            />
            <p className="mt-5 text-base leading-relaxed text-brand-text sm:text-lg">
              We leverage our family's agricultural heritage and strong local connections to source fresh, organic
              products from trusted farmers.
            </p>
            <Link to="/about-us" className="cta-btn mt-8">
              Learn More About Us
            </Link>
          </Reveal>

          <Reveal delay={0.08} direction="right">
            <div className="group relative overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/welcome-rice.webp"
                alt="Wooden spoon filled with premium rice grains"
                className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="lazy"
                width={1024}
                height={575}
              />
              {/* Overlay shimmer on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-brand-gold/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ QUICK CATEGORY CARDS ══════════════════════════════ */}
      <section className="pb-12 pt-4 sm:pb-16">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              eyebrow="S.R Export House"
              title="We Provide High Quality And Fresh Products."
              description="Healthy Life With Fresh Products!"
              center
              className="mx-auto max-w-5xl"
            />
          </Reveal>

          <Reveal className="mt-12" once>
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {quickCards.map((card, i) => (
                <motion.article
                  key={card.title}
                  className="group relative isolate min-h-[440px] overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-108"
                    width={600}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Slide-up info on hover */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white transition-transform duration-500">
                    <h3 className="font-display text-3xl text-white sm:text-4xl">{card.title}</h3>
                    <div className="mt-4 flex items-center gap-3 opacity-0 transition-all duration-400 group-hover:opacity-100">
                      <Link
                        to={card.to}
                        className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-4 py-2 text-xs font-bold uppercase tracking-wide text-brand-dark"
                      >
                        View More
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ QUALITY / STATS ═══════════════════════════════════ */}
      <section className="pb-20 pt-8 sm:pb-24">
        <div className="section-wrap grid items-start gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16">
          <Reveal direction="left">
            <div className="group relative overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/quality-rice.webp"
                alt="Premium rice grains in bowl"
                loading="lazy"
                className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                width={717}
                height={717}
              />
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl leading-tight text-brand-title sm:text-5xl">
              S.R. Export House: Delivering Quality Agro Products Worldwide with Integrity & Safety.
            </h2>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {trustStats.map((stat) => (
                <div key={stat.label} className="relative pl-4">
                  <div
                    className="absolute inset-y-0 left-0 w-1 rounded-full"
                    style={{ background: 'linear-gradient(180deg, #235130, #fbbc34)' }}
                  />
                  <p className="font-display text-6xl text-brand-primary sm:text-7xl">
                    <CountUp
                      to={parseInt(stat.value.replace(/[^0-9]/g, ''), 10)}
                      suffix={stat.value.replace(/[0-9]/g, '')}
                    />
                  </p>
                  <p className="mt-1 font-display text-2xl text-brand-title sm:text-3xl">{stat.label}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-base leading-relaxed text-brand-text sm:text-lg">
              S.R. Export House is committed to delivering premium-quality agro products to customers worldwide,
              ensuring the highest standards of food hygiene and safety. With a focus on integrity, we meticulously
              source, process, and export a diverse range of agricultural goods.
            </p>

            <div
              className="mt-8 overflow-hidden rounded-xl"
              style={{ height: 160 }}
            >
              <img
                src="/images/farm-field.webp"
                alt="Green farm field"
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={300}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ PRODUCTS GRID ══════════════════════════════════════ */}
      <section className="py-20 sm:py-24">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Our Products"
              description="Bringing farm-fresh, organic produce from local fields to global markets — quality, sustainability, and tradition in every harvest."
              center
              className="mx-auto max-w-4xl"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {topProducts.map((product, i) => (
              <motion.article
                key={product.slug}
                className="group overflow-hidden rounded-2xl bg-white"
                style={{ boxShadow: 'var(--shadow-card)' }}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ delay: i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: 'var(--shadow-card-hover)' }}
              >
                <Link to={`/products/${product.slug}`} className="block overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                      width={500}
                      height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </div>
                </Link>

                <div className="px-5 pb-6 pt-4 text-center">
                  <span className="badge-green mb-2">
                    {product.category}
                  </span>
                  <h3 className="mt-2 font-display text-2xl leading-tight sm:text-3xl">{product.name}</h3>
                  <p className="mt-2 text-sm text-brand-text sm:text-base">{product.shortDescription}</p>
                  <Link
                    to={`/products/${product.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:text-brand-primary-dark"
                  >
                    Read More
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link to="/our-products" className="cta-btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ══ WHY CHOOSE US ══════════════════════════════════════ */}
      <section className="pb-16 pt-4 sm:pb-20">
        <div className="section-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal direction="left">
            <div className="group relative overflow-hidden rounded-2xl shadow-card">
              <img
                src="/images/why-choose.jpg"
                alt="Assorted spices in wooden spoons"
                loading="lazy"
                className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                width={1500}
                height={1001}
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              title="Why Choose Us?"
              description="We ensure every product meets stringent quality standards through rigorous testing, careful sourcing, and sustainable practices."
            />
            <p className="mt-5 text-base leading-relaxed text-brand-text sm:text-lg">
              We partner with dedicated farmers who follow responsible agricultural practices, promoting fair trade,
              environmental sustainability, and community empowerment while providing premium-quality spices, rice, and
              fresh produce globally.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Leaf, label: 'Farm-fresh sourcing' },
                { icon: Shield, label: 'Strict quality control' },
                { icon: Globe, label: 'Global reach, local roots' },
                { icon: Star, label: '150+ satisfied clients' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 rounded-xl bg-brand-muted px-4 py-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-brand-title">{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ MISSION / VISION / VALUES ═════════════════════════ */}
      <section className="section-dark py-20 sm:py-24">
        <div className="section-wrap">
          <Reveal>
            <div className="grid gap-6 lg:grid-cols-3">
              {missionCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 text-white backdrop-blur-sm"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ borderColor: 'rgba(251,188,52,0.3)', backgroundColor: 'rgba(255,255,255,0.08)' }}
                >
                  {/* Gold top accent on hover */}
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }}
                  />

                  <p className="font-display text-6xl leading-none text-white/20">{index + 1}.</p>
                  <h3 className="mt-3 font-display text-4xl text-white sm:text-5xl">{card.title}</h3>
                  <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">{card.body}</p>
                </motion.article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ FEATURE CARDS ══════════════════════════════════════ */}
      <section className="py-20 sm:py-24">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              eyebrow="S.R Export House"
              title="Healthy Life With Fresh Products!"
              description="We believe that to have good health, clean and healthy food sources are the key."
              center
              className="mx-auto max-w-5xl"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {featureCards.map((feature, i) => {
              const Icon = featureIcons[i] ?? Leaf
              return (
                <motion.article
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl bg-white p-7"
                  style={{ boxShadow: 'var(--shadow-card)' }}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient top bar */}
                  <div
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }}
                  />

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/8 text-brand-primary transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-2xl leading-tight sm:text-3xl">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-text sm:text-base">{feature.body}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
