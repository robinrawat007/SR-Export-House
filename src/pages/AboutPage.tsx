import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { aboutGallery, aboutPillars, exportImpactStats } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export function AboutPage() {
  usePageMeta({
    title: 'About Us - S.R Export House',
    description:
      'Learn about S.R Export House, our story, values, and quality-first export operations built on trust, transparency, and sustainability.',
    image: '/images/product-mango.jpg',
  })

  return (
    <>
      <section className="relative overflow-hidden bg-brand-muted py-16 sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(35,81,48,0.12),transparent_38%),radial-gradient(circle_at_85%_0%,rgba(251,188,52,0.16),transparent_32%)]" />
        <div className="section-wrap relative">
          <Reveal className="max-w-4xl">
            <p className="eyebrow">About Us</p>
            <h1 className="font-display text-5xl leading-tight text-brand-title sm:text-6xl">
              Built on Family Values, Focused on Global Quality
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-brand-text sm:text-2xl">
              S.R. Export House combines local agricultural relationships with international trade discipline to
              deliver trusted export quality at scale.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {aboutPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="h-full rounded-sm border border-black/10 bg-white/95 p-8 shadow-soft transition duration-300 hover:-translate-y-1">
                  <h2 className="font-display text-[2.35rem] leading-tight text-brand-title">{pillar.title}</h2>
                  <p className="mt-5 text-lg leading-relaxed text-brand-text sm:text-xl">{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="section-wrap grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="group relative overflow-hidden rounded-sm shadow-soft">
              <img
                src="/images/product-mango.jpg"
                alt="Mango pulp product"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                width={720}
                height={720}
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionHeading
              title="Welcome to S.R. Export House"
              description="A family-run export business started in the memory of our beloved Grandfather, Late Shri Sahaj Ram. We are dedicated to providing high-quality agro products to global markets. We leverage our family’s agricultural heritage and strong local connections to source fresh, organic products from local farmers."
            />
            <p className="mt-6 text-xl leading-relaxed text-brand-text sm:text-2xl">
              Our commitment to quality processing and fair business practices has earned us nationwide recognition.
              With a customer-centric approach, we ensure reliable deliveries, competitive pricing, and exceptional
              service.
            </p>
            <Link to="/our-products" className="cta-btn mt-8">
              Explore Products
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-14 pt-2 sm:pb-20">
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

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {aboutGallery.map((image, index) => (
              <Reveal key={image.src} delay={index * 0.05}>
                <article className="group relative overflow-hidden rounded-sm">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110 sm:h-80"
                    width={500}
                    height={600}
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70 transition group-hover:opacity-90" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white sm:py-20">
        <img
          src="/images/product-spices.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          width={1500}
          height={1001}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/72" />
        <div className="section-wrap relative grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <h2 className="font-display text-5xl leading-tight text-white sm:text-6xl">Healthy Life With Fresh Products!</h2>
            <p className="mt-6 text-xl leading-relaxed text-white/85 sm:text-2xl">
              We ensure every product meets stringent quality standards through rigorous testing, careful sourcing, and
              sustainable practices.
            </p>
            <p className="mt-5 text-xl leading-relaxed text-white/85 sm:text-2xl">
              We partner with dedicated farmers to deliver premium-quality spices, rice, and fresh produce globally.
            </p>
            <Link
              to="/contact-us"
              className="mt-8 inline-flex items-center gap-2 border-b border-white/70 pb-1 text-sm font-bold uppercase tracking-wide text-white transition hover:text-brand-gold"
            >
              Talk to Our Team
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {exportImpactStats.map((stat) => (
                <article key={stat.label} className="border-l border-white/40 pl-5">
                  <p className="font-display text-7xl leading-none text-white">{stat.value}</p>
                  <p className="mt-3 text-3xl leading-tight text-white/90">{stat.label}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
