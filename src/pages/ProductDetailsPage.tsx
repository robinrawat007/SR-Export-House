import { Link, Navigate, useParams } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'
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

      <section className="py-16 sm:py-20">
        <div className="section-wrap grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded-sm object-cover shadow-soft"
              width={900}
              height={900}
              loading="eager"
            />
          </Reveal>
          <Reveal delay={0.06}>
            <SectionHeading title={product.name} description={product.description} />
            <ul className="mt-6 grid gap-3 text-lg leading-relaxed text-brand-text sm:text-xl">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="rounded-sm bg-white px-4 py-3 shadow-soft">
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/contact-us" className="cta-btn">
                Request Quote
              </Link>
              <Link
                to="/our-products"
                className="inline-flex items-center rounded-sm border border-brand-primary/50 px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:bg-brand-primary hover:text-white"
              >
                Back to Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
