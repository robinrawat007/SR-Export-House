import { Link } from 'react-router-dom'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { featureCards, heroSlides, missionCards, products, quickCards, trustStats } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export function HomePage() {
  usePageMeta({
    title: 'Home - S.R Export House',
    description:
      'Premium agro exports from S.R Export House including rice, spices, mango pulp, dehydrated products, and more.',
  })

  const topProducts = products.slice(0, 8)

  return (
    <>
      <section className="relative bg-brand-dark py-12 sm:py-16">
        <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
        <div className="section-wrap relative">
          <Swiper
            modules={[Autoplay, Navigation, Pagination, A11y]}
            className="hero-swiper"
            navigation
            pagination={{ clickable: true }}
            speed={900}
            loop
            autoplay={{ delay: 4800, disableOnInteraction: false }}
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid min-h-[520px] items-center gap-10 py-10 lg:grid-cols-2 lg:gap-14 lg:py-14">
                  <div className="max-w-2xl">
                    <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">{slide.title}</h1>
                    <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/80 sm:text-2xl">{slide.description}</p>
                    <Link
                      to={slide.ctaTo}
                      className="mt-8 inline-flex items-center rounded-sm bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition hover:-translate-y-0.5 hover:bg-brand-gold hover:text-brand-dark"
                    >
                      {slide.ctaLabel}
                    </Link>
                  </div>

                  <div className="mx-auto max-w-xl lg:ml-auto">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
                      width={900}
                      height={900}
                      loading="eager"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Welcome to S.R Export House"
              title="Welcome to S.R. Export House"
              description="A family-run export business started in the memory of our beloved Grandfather, Late Shri Sahaj Ram. We are dedicated to providing high-quality agro products to global markets. We leverage our family's agricultural heritage and strong local connections to source fresh, organic products from local farmers."
            />
            <Link to="/about-us" className="cta-btn mt-9">
              View More
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <img
              src="/images/welcome-rice.webp"
              alt="Wooden spoon filled with rice grains"
              className="w-full rounded-sm object-cover shadow-soft"
              loading="lazy"
              width={1024}
              height={575}
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-10 pt-4 sm:pb-14">
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
              {quickCards.map((card) => (
                <article key={card.title} className="group relative isolate min-h-[430px] overflow-hidden rounded-sm">
                  <img
                    src={card.image}
                    alt={card.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    width={600}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="font-display text-4xl text-white">{card.title}</h3>
                    <Link
                      to={card.to}
                      className="mt-5 inline-flex border-b border-white/80 pb-1 text-sm font-bold uppercase tracking-wide transition hover:text-brand-gold"
                    >
                      View More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 pt-6 sm:pb-20">
        <div className="section-wrap grid items-start gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16">
          <Reveal>
            <img
              src="/images/quality-rice.webp"
              alt="Rice grains in bowl"
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-soft"
              width={717}
              height={717}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl leading-tight text-brand-title sm:text-[3.1rem]">
              S.R. Export House: Delivering Quality Agro Products Worldwide with Integrity, food hygiene and safety.
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              {trustStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-7xl text-brand-primary">{stat.value}</p>
                  <p className="mt-1 font-display text-[2rem] text-brand-title">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 bg-[url('/images/farm-field.webp')] bg-[length:100%_auto] bg-bottom bg-no-repeat pb-24 text-xl leading-relaxed sm:text-2xl">
              S.R. Export House is committed to delivering premium-quality agro products to customers worldwide,
              ensuring the highest standards of food hygiene and safety. With a focus on integrity, we meticulously
              source, process, and export a diverse range of agricultural goods, from fresh produce to processed items.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Our Products"
              description="Bringing farm-fresh, organic produce from local fields to global markets - quality, sustainability, and tradition in every harvest."
              center
              className="mx-auto max-w-5xl"
            />
          </Reveal>

          <Reveal className="mt-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {topProducts.map((product) => (
                <article key={product.slug} className="group rounded-sm bg-white shadow-soft">
                  <Link to={`/products/${product.slug}`} className="block overflow-hidden rounded-t-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      width={500}
                      height={500}
                    />
                  </Link>
                  <div className="px-5 pb-6 pt-4 text-center">
                    <h3 className="font-display text-4xl">{product.name}</h3>
                    <p className="mt-2 text-xl text-brand-text">Our Products</p>
                    <Link
                      to={`/products/${product.slug}`}
                      className="mt-3 inline-flex text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:text-brand-dark"
                    >
                      Read More
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>

          <div className="mt-8 text-center">
            <Link to="/our-products" className="cta-btn">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-14 pt-4 sm:pb-16">
        <div className="section-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src="/images/why-choose.jpg"
              alt="Assorted spices in wooden spoons"
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-soft"
              width={1500}
              height={1001}
            />
          </Reveal>
          <Reveal delay={0.08}>
            <SectionHeading
              title="Why Choose Us?"
              description="We ensure every product meets stringent quality standards through rigorous testing, careful sourcing, and sustainable practices, delivering only the freshest, purest, and most flavorful agro products worldwide."
            />
            <p className="mt-5 text-xl leading-relaxed sm:text-2xl">
              We partner with dedicated farmers who follow responsible agricultural practices, promoting fair trade,
              environmental sustainability, and community empowerment while providing premium-quality spices, rice, and
              fresh produce globally.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-brand-dark py-16 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-3">
              {missionCards.map((card, index) => (
                <article key={card.title} className="rounded-sm border border-white/10 bg-black/25 p-8 text-white shadow-soft">
                  <p className="font-display text-7xl leading-none text-white/90">{index + 1}.</p>
                  <h3 className="mt-3 font-display text-5xl text-white">{card.title}</h3>
                  <p className="mt-5 text-xl leading-relaxed text-white/85 sm:text-2xl">{card.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
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

          <Reveal className="mt-12">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {featureCards.map((feature) => (
                <article key={feature.title} className="rounded-sm bg-white p-7 shadow-soft">
                  <h3 className="text-center font-display text-5xl">{feature.title}</h3>
                  <p className="mt-4 text-center text-xl leading-relaxed">{feature.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
