import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { products } from '../data/siteData'
import { usePageMeta } from '../hooks/usePageMeta'

export function ProductDetailsPage() {
  const { slug } = useParams<{ slug: string }>()
  const product = products.find((item) => item.slug === slug)

  usePageMeta({
    title: product ? `${product.name} - S.R Export House` : 'Product Not Found - S.R Export House',
    description: product ? product.description : 'Requested product is not available.',
  })

  if (!product) {
    return <Navigate to="/not-found" replace />
  }

  const productIndex = products.findIndex((item) => item.slug === slug)

  const prevProduct = productIndex > 0 ? products[productIndex - 1] : products[products.length - 1]
  const nextProduct = productIndex < products.length - 1 ? products[productIndex + 1] : products[0]

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.slug !== product.slug)
    .slice(0, 4)

  return (
    <>
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,188,52,0.22),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(35,81,48,0.6),transparent_35%)]" />
        <div className="section-wrap relative">
          <Reveal>
            <p className="eyebrow text-brand-gold">Product Details</p>
            <h1 className="max-w-4xl font-display text-5xl leading-tight text-white sm:text-6xl">{product.name}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-white/85 sm:text-2xl">{product.shortDescription}</p>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        {/* Side Navigation Arrows */}
        <Link
          to={`/products/${prevProduct.slug}`}
          aria-label={`Previous product: ${prevProduct.name}`}
          className="group absolute left-2 top-1/2 z-10 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-card transition-all duration-300 group-hover:-translate-x-1 group-hover:border-brand-primary/30 group-hover:shadow-card-hover">
            <ChevronLeft className="h-5 w-5 text-brand-primary" />
          </div>
          <span className="max-w-[80px] text-center text-[10px] font-bold uppercase tracking-widest text-brand-text/50 group-hover:text-brand-primary">{prevProduct.name}</span>
        </Link>
        <Link
          to={`/products/${nextProduct.slug}`}
          aria-label={`Next product: ${nextProduct.name}`}
          className="group absolute right-2 top-1/2 z-10 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-card transition-all duration-300 group-hover:translate-x-1 group-hover:border-brand-primary/30 group-hover:shadow-card-hover">
            <ChevronRight className="h-5 w-5 text-brand-primary" />
          </div>
          <span className="max-w-[80px] text-center text-[10px] font-bold uppercase tracking-widest text-brand-text/50 group-hover:text-brand-primary">{nextProduct.name}</span>
        </Link>

        <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="group relative overflow-hidden rounded-2xl shadow-card">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                width={900}
                height={900}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 via-transparent to-brand-gold/10 opacity-0 transition duration-500 group-hover:opacity-100" />
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex items-center gap-3 mb-4">
              <span className="badge-green">{product.category}</span>
            </div>
            <h2 className="font-display text-4xl leading-tight text-brand-title sm:text-5xl">{product.name}</h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-text sm:text-xl">{product.description}</p>

            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-primary mb-4">Key Highlights</p>
              <ul className="grid gap-3">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-3 rounded-xl bg-brand-muted px-4 py-3 text-sm font-medium text-brand-title border border-black/5">
                    <div className="h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/contact-us" className="cta-btn">
                Request Quote
              </Link>
              <Link
                to="/our-products"
                className="inline-flex items-center rounded-md border border-brand-primary/20 px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                Back to Products
              </Link>
            </div>

            {/* Mobile Prev/Next */}
            <div className="mt-8 flex items-center justify-between border-t border-black/8 pt-6 lg:hidden">
              <Link to={`/products/${prevProduct.slug}`} className="group flex items-center gap-2 text-sm font-semibold text-brand-title transition hover:text-brand-primary">
                <ChevronLeft className="h-4 w-4" /> {prevProduct.name}
              </Link>
              <Link to={`/products/${nextProduct.slug}`} className="group flex items-center gap-2 text-sm font-semibold text-brand-title transition hover:text-brand-primary">
                {nextProduct.name} <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-black/5 bg-white py-20">
          <div className="section-wrap">
            <Reveal>
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="eyebrow">Discover More</p>
                  <h2 className="font-display text-4xl text-brand-title sm:text-5xl">Related Products</h2>
                </div>
                <Link to="/our-products" className="hidden text-sm font-bold uppercase tracking-widest text-brand-primary hover:underline sm:block">
                  View All
                </Link>
              </div>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item, i) => (
                <Reveal key={item.slug} delay={i * 0.05}>
                  <Link to={`/products/${item.slug}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl shadow-card transition-transform duration-500 group-hover:-translate-y-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
                        width={400}
                        height={400}
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5 text-white">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-brand-gold" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}>{item.category}</p>
                        <h3 className="mt-1 font-display text-2xl" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}>{item.name}</h3>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

    </>
  )
}
