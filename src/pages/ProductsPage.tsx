import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Search, SlidersHorizontal } from 'lucide-react'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
import { products, type ProductCategory } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

const categoryLabels: Record<ProductCategory | 'all', string> = {
  all: 'All Products',
  agro: 'Agro Products',
  industrial: 'Industrial Products',
}

export function ProductsPage() {
  usePageMeta({
    title: 'Our Products — S.R Export House',
    description:
      'Explore S.R Export House product portfolio: rice, spices, mango pulp, essential oils, wires and cables, tiles and marbles, psyllium husk, and more.',
  })

  const [category, setCategory] = useState<ProductCategory | 'all'>('all')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category
      const matchesSearch =
        !term || p.name.toLowerCase().includes(term) || p.shortDescription.toLowerCase().includes(term)
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <>
      {/* ══ HERO ═══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,188,52,0.15),transparent_30%),radial-gradient(circle_at_70%_0%,rgba(35,81,48,0.55),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" aria-hidden />

        <div className="section-wrap relative">
          <Reveal>
            <span className="eyebrow text-brand-gold">Our Products</span>
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl lg:text-7xl">
              Export-Ready Products with Consistent Quality
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70 sm:text-xl">
              A diverse portfolio from premium agro goods to selected industrial items — carefully sourced and
              quality-checked for global markets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══ FILTER + GRID ══════════════════════════════════════ */}
      <section className="py-16 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Find the Right Product"
              description="Filter by category or search to quickly browse our export catalogue."
            />
          </Reveal>

          {/* Filter bar */}
          <Reveal className="mt-8">
            <div className="glass-card rounded-2xl p-5 sm:p-6">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                {/* Search input */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-brand-text/50" />
                  <input
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search products…"
                    className="h-12 w-full rounded-xl border border-black/12 bg-white/80 pl-11 pr-4 text-base outline-none transition focus:border-brand-primary focus:shadow-[0_0_0_3px_rgba(35,81,48,0.12)] focus:bg-white"
                  />
                </div>

                {/* Category filter pills */}
                <div className="flex flex-wrap items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 shrink-0 text-brand-text/50" />
                  {(Object.keys(categoryLabels) as Array<ProductCategory | 'all'>).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCategory(key)}
                      className={clsx(
                        'rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-all duration-200',
                        category === key
                          ? 'text-white shadow-glow-sm'
                          : 'border border-black/12 bg-white text-brand-title hover:border-brand-primary/30 hover:text-brand-primary',
                      )}
                      style={
                        category === key
                          ? { background: 'linear-gradient(135deg, #235130, #2d6b3f)' }
                          : undefined
                      }
                    >
                      {categoryLabels[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Results count */}
          {filteredProducts.length > 0 && (
            <p className="mt-6 text-sm font-semibold text-brand-text">
              Showing <span className="text-brand-primary">{filteredProducts.length}</span> product
              {filteredProducts.length !== 1 ? 's' : ''}
            </p>
          )}

          {/* Product grid with AnimatePresence */}
          <div className="mt-6">
            <AnimatePresence mode="popLayout">
              {filteredProducts.length > 0 ? (
                <motion.div
                  layout
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                  {filteredProducts.map((product, i) => (
                    <motion.article
                      key={product.slug}
                      layout
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="group overflow-hidden rounded-2xl bg-white"
                      style={{ boxShadow: 'var(--shadow-card)' }}
                      whileHover={{ y: -6, boxShadow: 'var(--shadow-card-hover)' }}
                    >
                      <Link to={`/products/${product.slug}`} className="block overflow-hidden">
                        <div className="relative overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            loading="lazy"
                            className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.07]"
                            width={500}
                            height={500}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                        </div>
                      </Link>

                      <div className="p-5">
                        <span className="badge-green">{product.category}</span>
                        <h3 className="mt-3 font-display text-2xl leading-tight sm:text-3xl">{product.name}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-brand-text sm:text-base">
                          {product.shortDescription}
                        </p>
                        <Link
                          to={`/products/${product.slug}`}
                          className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:text-brand-primary-dark"
                        >
                          View Details
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 rounded-2xl border-2 border-dashed border-black/12 bg-white/60 p-12 text-center"
                >
                  <Search className="mx-auto h-10 w-10 text-brand-text/30" />
                  <p className="mt-4 text-lg font-semibold text-brand-title">No products found</p>
                  <p className="mt-2 text-sm text-brand-text">Try a different search term or reset the filters.</p>
                  <button
                    type="button"
                    className="cta-btn mt-6"
                    onClick={() => { setSearch(''); setCategory('all') }}
                  >
                    Reset Filters
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  )
}
