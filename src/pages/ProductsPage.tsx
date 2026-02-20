import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
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
    title: 'Our Products - S.R Export House',
    description:
      'Explore the full S.R Export House product portfolio including rice, spices, mango pulp, essential oils, wires and cables, tiles and marbles, and more.',
  })

  const [category, setCategory] = useState<ProductCategory | 'all'>('all')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    const term = search.trim().toLowerCase()
    return products.filter((product) => {
      const matchesCategory = category === 'all' || product.category === category
      const matchesSearch =
        term.length === 0 ||
        product.name.toLowerCase().includes(term) ||
        product.shortDescription.toLowerCase().includes(term)
      return matchesCategory && matchesSearch
    })
  }, [category, search])

  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,188,52,0.17),transparent_30%),radial-gradient(circle_at_70%_0%,rgba(35,81,48,0.55),transparent_35%)]" />
        <div className="section-wrap relative">
          <Reveal>
            <p className="eyebrow text-brand-gold">Our Products</p>
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl">
              Export-Ready Products with Consistent Quality
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">
              We offer a diverse product portfolio from agro goods to selected industrial items, carefully sourced and
              quality-checked for global markets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="section-wrap">
          <Reveal>
            <SectionHeading
              title="Find the Right Product"
              description="Filter by category and search product names to quickly browse our export catalog."
            />
          </Reveal>

          <Reveal className="mt-8">
            <div className="rounded-sm border border-black/10 bg-white p-5 shadow-soft sm:p-6">
              <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search products..."
                  className="h-12 w-full rounded-sm border border-black/15 px-4 text-base outline-none transition focus:border-brand-primary"
                />

                <div className="flex flex-wrap gap-2">
                  {(Object.keys(categoryLabels) as Array<ProductCategory | 'all'>).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setCategory(key)}
                      className={clsx(
                        'rounded-sm border px-4 py-2 text-sm font-bold uppercase tracking-wide transition',
                        category === key
                          ? 'border-brand-primary bg-brand-primary text-white'
                          : 'border-black/10 bg-white text-brand-title hover:border-brand-primary hover:text-brand-primary',
                      )}
                    >
                      {categoryLabels[key]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="mt-10">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredProducts.map((product) => (
                <article key={product.slug} className="group overflow-hidden rounded-sm bg-white shadow-soft">
                  <Link to={`/products/${product.slug}`} className="block overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                      width={500}
                      height={500}
                    />
                  </Link>
                  <div className="p-5">
                    <p className="inline-flex rounded-sm bg-brand-muted px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-brand-primary">
                      {product.category}
                    </p>
                    <h3 className="mt-3 font-display text-4xl leading-tight">{product.name}</h3>
                    <p className="mt-2 text-base leading-relaxed text-brand-text sm:text-lg">{product.shortDescription}</p>
                    <Link
                      to={`/products/${product.slug}`}
                      className="mt-4 inline-flex text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:text-brand-dark"
                    >
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="mt-8 rounded-sm border border-dashed border-black/20 bg-white p-8 text-center text-brand-text">
                No products match your search. Try another term or reset filters.
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>
    </>
  )
}
