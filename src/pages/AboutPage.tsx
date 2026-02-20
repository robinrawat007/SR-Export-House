import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { featureCards, trustStats } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export function AboutPage() {
  usePageMeta({
    title: 'About Us - S.R Export House',
    description:
      'Learn about S.R Export House, our agricultural heritage, quality standards, and our mission to connect local farmers with global markets.',
  })

  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(251,188,52,0.2),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(35,81,48,0.55),transparent_35%)]" />
        <div className="section-wrap relative">
          <Reveal>
            <p className="eyebrow text-brand-gold">About S.R Export House</p>
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl">
              Rooted in Family Values, Built for Global Agricultural Trade
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
              Established in 2024, S.R. Export House bridges the gap between local producers and international demand
              through reliable sourcing, strict quality control, and ethical export practices.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              title="Our Story"
              description="A family-run export business started in the memory of our beloved Grandfather, Late Shri Sahaj Ram. We are dedicated to providing high-quality agro products to global markets. We leverage our family's agricultural heritage and strong local connections to source fresh, organic products from local farmers."
            />
            <p className="mt-4 text-xl leading-relaxed sm:text-2xl">
              With years of industry knowledge and practical field experience, we maintain consistency in quality,
              freshness, packaging, and timely delivery for buyers around the world.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <img
              src="/images/welcome-rice.webp"
              alt="Rice grains and spoon"
              className="w-full rounded-sm object-cover shadow-soft"
              width={1024}
              height={575}
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-14 pt-2 sm:pb-20">
        <div className="section-wrap grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <article className="h-full rounded-sm bg-white p-7 shadow-soft transition duration-300 hover:-translate-y-1">
                <h3 className="font-display text-4xl leading-tight">{feature.title}</h3>
                <p className="mt-4 text-lg leading-relaxed sm:text-xl">{feature.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-16">
        <div className="section-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/images/quality-rice.webp"
              alt="Rice bowl quality"
              className="w-full rounded-sm object-cover shadow-soft"
              width={717}
              height={717}
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              title="Quality and Trust that Scale Worldwide"
              description="S.R. Export House is committed to delivering premium-quality agro products to customers worldwide, ensuring the highest standards of food hygiene and safety."
            />
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-7xl text-brand-primary">{stat.value}</p>
                  <p className="mt-1 font-display text-[2rem] text-brand-title">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xl leading-relaxed sm:text-2xl">
              We maintain strict quality controls at every stage of sourcing, processing, and shipping to ensure that
              each shipment meets customer expectations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-wrap">
          <Reveal>
            <div className="rounded-sm bg-brand-dark p-10 text-white shadow-soft sm:p-12">
              <h2 className="font-display text-5xl text-white sm:text-6xl">Partner with Us for Reliable Exports</h2>
              <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
                Looking for a dependable export partner with product quality, transparent communication, and global
                delivery support? We are ready to work with your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/our-products" className="cta-btn">
                  Explore Products
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center rounded-sm border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:border-brand-gold hover:text-brand-gold"
                >
                  Contact Team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
