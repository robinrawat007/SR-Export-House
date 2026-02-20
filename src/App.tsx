import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, type Variants } from 'framer-motion'
import {
  AlignJustify,
  ArrowUp,
  ChevronDown,
  Instagram,
  Linkedin,
  MessageCircle,
  X,
} from 'lucide-react'
import { A11y, Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type MenuItem = {
  label: string
  href: string
  children?: MenuItem[]
}

type HeroSlide = {
  title: string
  description: string
  image: string
  alt: string
  cta: string
}

type ProductItem = {
  name: string
  image: string
  href: string
}

const menuItems: MenuItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about-us' },
  {
    label: 'Our Products',
    href: '#products',
    children: [
      { label: 'Rice', href: 'https://srexporthouse.com/shop/rice/' },
      { label: 'Mango Pulp', href: 'https://srexporthouse.com/shop/mango-pulp/' },
      { label: 'Spices', href: 'https://srexporthouse.com/shop/spices/' },
      { label: 'Wires and Cables', href: 'https://srexporthouse.com/shop/wires-and-cables/' },
      { label: 'Tiles and Marbles', href: 'https://srexporthouse.com/shop/tiles-and-marbles/' },
      { label: 'Psyllium Husk', href: 'https://srexporthouse.com/shop/psyllium-husk/' },
      {
        label: 'Dried and Dehydrated Items',
        href: 'https://srexporthouse.com/shop/dried-and-dehydrated-items/',
      },
      { label: 'Coffee', href: 'https://srexporthouse.com/shop/coffee/' },
      { label: 'Essential Oils', href: 'https://srexporthouse.com/shop/essential-oils/' },
      { label: 'Menthol', href: 'https://srexporthouse.com/shop/menthol/' },
      { label: 'Pearls', href: 'https://srexporthouse.com/shop/pearls/' },
    ],
  },
  { label: 'Our Certifications', href: '#certifications' },
  { label: 'Contact Us', href: '#contact-us' },
]

const heroSlides: HeroSlide[] = [
  {
    title: 'Bringing Authentic and Premium Rice to the World',
    description:
      'We collaborate with suppliers to export high-quality agro products, promoting fair trade and sustainability worldwide.',
    image: '/images/hero-rice.png',
    alt: 'Rice bag representing premium rice exports',
    cta: 'https://srexporthouse.com/shop/rice/',
  },
  {
    title: 'Delivering Aromatic and Authentic Spices Worldwide',
    description:
      'Our spices are carefully sourced to maintain freshness, aroma, and taste, ensuring global satisfaction.',
    image: '/images/hero-chili.png',
    alt: 'Red chili powder bowl highlighting spice exports',
    cta: 'https://srexporthouse.com/shop/spices/',
  },
]

const quickCards: ProductItem[] = [
  {
    name: 'Mango Pulp',
    image: '/images/card-mango.jpg',
    href: 'https://srexporthouse.com/shop/mango-pulp/',
  },
  { name: 'Spices', image: '/images/card-spices.jpg', href: 'https://srexporthouse.com/shop/spices/' },
  {
    name: 'Dried and Dehydrated Items',
    image: '/images/card-dried.webp',
    href: 'https://srexporthouse.com/shop/dried-and-dehydrated-items/',
  },
  {
    name: 'Wires and Cables',
    image: '/images/card-wires.jpg',
    href: 'https://srexporthouse.com/shop/wires-and-cables/',
  },
]

const products: ProductItem[] = [
  { name: 'Coffee', image: '/images/product-coffee.webp', href: 'https://srexporthouse.com/shop/coffee/' },
  {
    name: 'Dried and Dehydrated Items',
    image: '/images/product-dried.jpg',
    href: 'https://srexporthouse.com/shop/dried-and-dehydrated-items/',
  },
  {
    name: 'Essential Oils',
    image: '/images/product-essential-lavender.jpeg',
    href: 'https://srexporthouse.com/shop/essential-oils/',
  },
  { name: 'Mango Pulp', image: '/images/product-mango.jpg', href: 'https://srexporthouse.com/shop/mango-pulp/' },
  { name: 'Menthol', image: '/images/product-menthol.webp', href: 'https://srexporthouse.com/shop/menthol/' },
  { name: 'Pearls', image: '/images/product-pearls.webp', href: 'https://srexporthouse.com/shop/pearls/' },
  { name: 'Psyllium Husk', image: '/images/product-husk.jpg', href: 'https://srexporthouse.com/shop/psyllium-husk/' },
  { name: 'Rice', image: '/images/product-rice.jpg', href: 'https://srexporthouse.com/shop/rice/' },
  { name: 'Spices', image: '/images/product-spices.jpg', href: 'https://srexporthouse.com/shop/spices/' },
  {
    name: 'Tiles And Marbles',
    image: '/images/product-tiles.jpg',
    href: 'https://srexporthouse.com/shop/tiles-and-marbles/',
  },
  {
    name: 'Wires And Cables',
    image: '/images/product-wires.jpg',
    href: 'https://srexporthouse.com/shop/wires-and-cables/',
  },
]

const featureCards = [
  {
    title: 'Freshness Guaranteed',
    body: 'We prioritize farm-to-market efficiency, ensuring that our spices, rice, and other agro products retain their natural aroma, flavor, and nutritional value, offering unparalleled freshness in every shipment.',
  },
  {
    title: 'Global Reach with Local Roots',
    body: 'Leveraging strong relationships with local farmers, we bring high-quality, locally sourced products to international markets, bridging the gap between traditional agriculture and global demand.',
  },
  {
    title: 'Transparency and Integrity',
    body: 'Honesty and reliability are at the core of our business. We maintain complete transparency in sourcing, pricing, and processes, ensuring ethical trade practices and long-term partnerships with customers worldwide.',
  },
  {
    title: 'Innovation in Agro Exporting',
    body: 'By integrating modern logistics, quality control, and sustainable practices, we continuously enhance our supply chain, ensuring efficiency, consistency, and premium quality in every agro product we export globally.',
  },
]

const missionCards = [
  {
    title: 'Our Mission',
    body: 'At S.R. Export House, our mission is to deliver premium products across the globe, ensuring customer satisfaction through reliability, quality, and service excellence. We strive to expand our reach by adhering to the highest standards of ethical business practices, fostering growth for our clients, partners, and communities.',
  },
  {
    title: 'Our Vision',
    body: 'To be a globally recognized leader in the export of high-quality agro products, known for our commitment to sustainability, innovation, and excellence. We aim to build enduring partnerships, contribute positively to global food security, and set new benchmarks in quality, safety, and ethical business practices, while empowering communities and supporting a greener planet.',
  },
  {
    title: 'Our Values',
    body: 'At S.R. Export House, our core values are centered around sustainability, innovation, and excellence. We are committed to promoting environmentally responsible practices, sourcing high-quality products that support a sustainable future. By embracing innovation, we continually enhance our processes and solutions, ensuring we lead in a competitive global market.',
  },
]

const riseUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

const stagger: Variants = {
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
}

const viewport = { once: true, amount: 0.2 }

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const [showTopButton, setShowTopButton] = useState(false)
  const lastScrollY = useRef(0)
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 12)
      setShowTopButton(currentScrollY > 500)

      if (currentScrollY < 40) {
        setShowHeader(true)
      } else {
        setShowHeader(currentScrollY < lastScrollY.current || currentScrollY < 120)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = menuItems
      .map((item) => (item.href.startsWith('#') ? item.href.slice(1) : null))
      .filter((id): id is string => id !== null)

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '-25% 0px -50% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }

  const isActiveLink = (href: string) => href.startsWith('#') && activeSection === href.slice(1)

  return (
    <div className="site-shell">
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm transition-all duration-300',
          showHeader ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'py-3 shadow-soft' : 'py-5',
        )}
      >
        <div className="section-wrap flex items-center justify-between">
          <a className="inline-flex items-center gap-3" href="#home" aria-label="S.R Export House home">
            <img
              src="/images/logo.webp"
              alt="S.R Export House logo"
              className="h-12 w-auto sm:h-14"
              width={212}
              height={72}
            />
          </a>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-9 text-sm font-bold uppercase tracking-wide text-[#1c241e]">
              {menuItems.map((item) => (
                <li key={item.label} className="group relative">
                  <a
                    href={item.href}
                    aria-current={isActiveLink(item.href) ? 'page' : undefined}
                    className={clsx(
                      'inline-flex items-center gap-1.5 transition-colors hover:text-brand-primary',
                      isActiveLink(item.href) ? 'text-brand-primary' : '',
                    )}
                  >
                    <span>{item.label}</span>
                    {item.children ? <ChevronDown className="h-4 w-4" /> : null}
                  </a>
                  {item.children ? (
                    <div className="pointer-events-none invisible absolute left-0 top-full mt-4 min-w-[280px] rounded-md border border-black/10 bg-white p-4 opacity-0 shadow-soft transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                      <ul className="grid gap-2 text-left text-xs font-semibold normal-case tracking-normal text-brand-title">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              className="block rounded-sm px-3 py-2 transition hover:bg-brand-muted hover:text-brand-primary"
                              href={child.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            className="inline-flex items-center rounded-md border border-black/10 p-2 text-brand-title lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-black/10 bg-white lg:hidden">
            <nav aria-label="Mobile navigation" className="section-wrap py-4">
              <ul className="grid gap-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="block rounded-sm px-3 py-2 text-sm font-semibold text-brand-title transition hover:bg-brand-muted hover:text-brand-primary"
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </a>
                    {item.children ? (
                      <ul className="mt-1 grid gap-1 pl-3">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
                              className="block rounded-sm px-3 py-1.5 text-sm text-brand-text transition hover:bg-brand-muted hover:text-brand-primary"
                              href={child.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        ) : null}
      </header>

      <main id="home" className="pt-[84px] sm:pt-[96px]">
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
              autoplay={{ delay: 4700, disableOnInteraction: false }}
            >
              {heroSlides.map((slide) => (
                <SwiperSlide key={slide.title}>
                  <div className="grid min-h-[520px] items-center gap-10 py-10 lg:grid-cols-2 lg:gap-14 lg:py-14">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="max-w-2xl"
                    >
                      <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl">
                        {slide.title}
                      </h1>
                      <p className="mt-5 max-w-xl text-xl leading-relaxed text-white/80">{slide.description}</p>
                      <a
                        href={slide.cta}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center rounded-sm bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-black transition hover:-translate-y-0.5 hover:bg-brand-gold hover:text-brand-dark"
                      >
                        To Shop
                      </a>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 35, scale: 0.96 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="mx-auto max-w-xl lg:ml-auto"
                    >
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="w-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)]"
                        width={900}
                        height={900}
                      />
                    </motion.div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <motion.section
          id="about-us"
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={viewport}
          className="py-16 sm:py-20"
        >
          <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={riseUp}>
              <span className="eyebrow">Welcome to S.R. Export House</span>
              <h2 className="section-title">Welcome to S.R. Export House</h2>
              <p className="mt-6 max-w-2xl text-2xl leading-relaxed text-brand-text">
                A family-run export business started in the memory of our beloved Grandfather, Late Shri Sahaj Ram.
                We are dedicated to providing high-quality agro products to global markets. We leverage our family&apos;s
                agricultural heritage and strong local connections to source fresh, organic products from local
                farmers. Established in 2024, S.R. Export House was founded with a vision to bridge the gap between
                local farmers and international markets.
              </p>
              <a href="#products" className="cta-btn mt-9">
                View More
              </a>
            </motion.div>
            <motion.div variants={riseUp}>
              <img
                src="/images/welcome-rice.webp"
                alt="Wooden spoon filled with rice grains"
                className="w-full rounded-sm object-cover shadow-soft"
                loading="lazy"
                width={1024}
                height={575}
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={viewport}
          className="pb-10 pt-4 sm:pb-14"
        >
          <div className="section-wrap">
            <motion.div variants={riseUp} className="mx-auto max-w-5xl text-center">
              <span className="eyebrow">S.R Export House</span>
              <h2 className="section-title">We Provide High Quality And Fresh Products.</h2>
              <p className="mt-4 text-2xl text-brand-text">Healthy Life With Fresh Products!</p>
            </motion.div>

            <motion.div variants={stagger} className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {quickCards.map((card) => (
                <motion.article
                  key={card.name}
                  variants={riseUp}
                  className="group relative isolate min-h-[430px] overflow-hidden rounded-sm"
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    width={600}
                    height={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                    <h3 className="font-display text-4xl text-white">{card.name}</h3>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex border-b border-white/80 pb-1 text-sm font-bold uppercase tracking-wide transition hover:text-brand-gold"
                    >
                      View More
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={viewport}
          className="pb-16 pt-6 sm:pb-20"
        >
          <div className="section-wrap grid items-start gap-12 lg:grid-cols-[1fr_1.08fr] lg:gap-16">
            <motion.div variants={riseUp}>
              <img
                src="/images/quality-rice.webp"
                alt="Rice grains close-up in a bowl"
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-soft"
                width={717}
                height={717}
              />
            </motion.div>
            <motion.div variants={riseUp}>
              <h2 className="font-display text-5xl leading-tight text-brand-title sm:text-[3.35rem]">
                S.R. Export House: Delivering Quality Agro Products Worldwide with Integrity food hygiene and safety!
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <p className="font-display text-7xl text-brand-primary">100%</p>
                  <p className="mt-1 font-display text-[2rem] text-brand-title">Our Quality</p>
                </div>
                <div>
                  <p className="font-display text-7xl text-brand-primary">150+</p>
                  <p className="mt-1 font-display text-[2rem] text-brand-title">Trust By Clients</p>
                </div>
              </div>
              <p className="mt-8 bg-[url('/images/farm-field.webp')] bg-[length:100%_auto] bg-bottom bg-no-repeat pb-24 text-2xl leading-relaxed">
                S.R. Export House is committed to delivering premium-quality agro products to customers worldwide,
                ensuring the highest standards of food hygiene and safety. With a focus on integrity, we meticulously
                source, process, and export a diverse range of agricultural goods, from fresh produce to processed
                items. Our dedication to maintaining strict quality controls at every stage of production and shipping
                guarantees that our customers receive only the best.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="products"
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={viewport}
          className="py-16 sm:py-20"
        >
          <div className="section-wrap">
            <motion.div variants={riseUp} className="mx-auto max-w-5xl text-center">
              <h2 className="section-title">Our Products</h2>
              <p className="mt-4 text-2xl leading-relaxed text-brand-text">
                Bringing farm-fresh, organic produce from local fields to global markets - quality, sustainability, and
                tradition in every harvest.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((product) => (
                <motion.article key={product.name} variants={riseUp} className="group rounded-sm bg-white shadow-soft">
                  <a href={product.href} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-t-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      width={500}
                      height={500}
                    />
                  </a>
                  <div className="px-5 pb-6 pt-4 text-center">
                    <h3 className="font-display text-4xl">{product.name}</h3>
                    <p className="mt-2 text-xl text-brand-text">Our Products</p>
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:text-brand-dark"
                    >
                      Read More
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={viewport}
          className="pb-14 pt-4 sm:pb-16"
        >
          <div className="section-wrap grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div variants={riseUp}>
              <img
                src="/images/why-choose.jpg"
                alt="Assorted spices in wooden spoons"
                loading="lazy"
                className="w-full rounded-sm object-cover shadow-soft"
                width={1500}
                height={1001}
              />
            </motion.div>
            <motion.div variants={riseUp}>
              <h2 className="section-title">Why Choose Us?</h2>
              <p className="mt-5 text-2xl leading-relaxed">
                We ensure every product meets stringent quality standards through rigorous testing, careful sourcing,
                and sustainable practices, delivering only the freshest, purest, and most flavorful agro products
                worldwide.
              </p>
              <p className="mt-5 text-2xl leading-relaxed">
                We partner with dedicated farmers who follow responsible agricultural practices, promoting fair trade,
                environmental sustainability, and community empowerment while providing premium-quality spices, rice,
                and fresh produce globally.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="certifications"
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={viewport}
          className="bg-brand-dark py-16 sm:py-20"
        >
          <div className="section-wrap">
            <motion.div variants={stagger} className="grid gap-8 lg:grid-cols-3">
              {missionCards.map((card, index) => (
                <motion.article
                  key={card.title}
                  variants={riseUp}
                  className="rounded-sm border border-white/10 bg-black/25 p-8 text-white shadow-soft"
                >
                  <p className="font-display text-7xl leading-none text-white/90">{index + 1}.</p>
                  <h3 className="mt-3 font-display text-5xl text-white">{card.title}</h3>
                  <p className="mt-5 text-2xl leading-relaxed text-white/85">{card.body}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="contact-us"
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={viewport}
          className="py-16 sm:py-20"
        >
          <div className="section-wrap">
            <motion.div variants={riseUp} className="mx-auto max-w-5xl text-center">
              <span className="eyebrow">S.R Export House</span>
              <h2 className="section-title">Healthy Life With Fresh Products!</h2>
              <p className="mt-4 text-2xl text-brand-text">
                We believe that to have good health, clean and healthy food sources are the key.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {featureCards.map((feature) => (
                <motion.article key={feature.title} variants={riseUp} className="rounded-sm bg-white p-7 shadow-soft">
                  <h3 className="text-center font-display text-5xl">{feature.title}</h3>
                  <p className="mt-4 text-center text-xl leading-relaxed">{feature.body}</p>
                </motion.article>
              ))}
            </motion.div>

            <motion.footer variants={riseUp} className="mt-16 border-t border-black/10 pt-12 text-center">
              <img
                src="/images/logo-220x65.webp"
                alt="S.R Export House"
                width={220}
                height={65}
                className="mx-auto h-auto w-[210px]"
                loading="lazy"
              />
              <p className="mx-auto mt-5 max-w-4xl text-2xl leading-relaxed">
                A family-run export business started in the memory of our beloved Grandfather, Late Shri Sahaj Ram. We
                are dedicated to providing high-quality agro products to global markets.
              </p>

              <nav className="mt-7" aria-label="Footer navigation">
                <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wide text-brand-title">
                  <li>
                    <a href="#home" className="transition hover:text-brand-primary">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#about-us" className="transition hover:text-brand-primary">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#products" className="transition hover:text-brand-primary">
                      Our Products
                    </a>
                  </li>
                  <li>
                    <a href="#certifications" className="transition hover:text-brand-primary">
                      Our Certificate
                    </a>
                  </li>
                  <li>
                    <a href="#contact-us" className="transition hover:text-brand-primary">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="https://www.instagram.com/s.r.exporthouse?igsh=ZGl6c3YwaDh0dHFs"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/s-r-export-house/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>

              <p className="mt-6 text-sm text-brand-text">
                Designed &amp; Promoted by{' '}
                <a className="font-bold text-brand-primary hover:text-brand-dark" href="https://www.24digitalindia.com">
                  24 Digital India
                </a>{' '}
                · © {currentYear} S.R Export House
              </p>
            </motion.footer>
          </div>
        </motion.section>
      </main>

      <a
        href="https://api.whatsapp.com/send?phone=7206980178&text=Hello%20S.R.%20Export%20House"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp chat"
        className="fixed bottom-5 left-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-soft transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {showTopButton ? (
        <button
          type="button"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-brand-title shadow-soft transition hover:bg-brand-primary hover:text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </div>
  )
}

export default App
