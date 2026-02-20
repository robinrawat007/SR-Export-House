import { Link } from 'react-router-dom'
import { Reveal } from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found - S.R Export House',
    description: 'The page you are looking for does not exist.',
  })

  return (
    <section className="py-24 sm:py-32">
      <div className="section-wrap">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-sm bg-white p-10 text-center shadow-soft sm:p-14">
            <p className="font-display text-8xl text-brand-primary">404</p>
            <h1 className="mt-3 font-display text-5xl">Page Not Found</h1>
            <p className="mt-4 text-xl text-brand-text sm:text-2xl">
              The page you are trying to open is not available.
            </p>
            <Link to="/" className="cta-btn mt-8">
              Return Home
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
