import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta({
    title: '404 Not Found — S.R Export House',
    description: 'The page you are looking for does not exist. Return to S.R Export House homepage.',
  })

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20">
      {/* Background radial gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(35,81,48,0.12),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(251,188,52,0.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" aria-hidden />

      <div className="section-wrap relative text-center">
        {/* Big "404" */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative select-none"
        >
          <p
            className="font-display text-[10rem] font-bold leading-none sm:text-[16rem]"
            style={{
              background: 'linear-gradient(135deg, #235130 0%, #2d6b3f 50%, #fbbc34 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.18,
            }}
            aria-hidden
          >
            404
          </p>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            <span className="font-display text-[5rem] sm:text-[8rem]">🌾</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="-mt-6"
        >
          <h1 className="font-display text-4xl leading-tight text-brand-title sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-brand-text sm:text-lg">
            Looks like this page has gone off to the fields! Let's get you back to the harvest.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link to="/" className="cta-btn">
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            <Link
              to="/our-products"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-primary/30 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              View Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
