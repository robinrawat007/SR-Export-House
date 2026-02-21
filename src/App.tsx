import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from './components/SiteLayout'

const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })))
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })))
const ProductsPage = lazy(() => import('./pages/ProductsPage').then((module) => ({ default: module.ProductsPage })))
const CertificationsPage = lazy(() =>
  import('./pages/CertificationsPage').then((module) => ({ default: module.CertificationsPage })),
)
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })))
const ProductDetailsPage = lazy(() =>
  import('./pages/ProductDetailsPage').then((module) => ({ default: module.ProductDetailsPage })),
)
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })))

function RouteLoadingFallback() {
  return (
    <div
      className="flex min-h-[60vh] flex-col items-center justify-center gap-5"
      role="status"
      aria-label="Loading page…"
    >
      {/* Brand logo shimmer */}
      <div className="relative flex h-14 w-44 overflow-hidden rounded-lg bg-brand-primary/8">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 25%, rgba(35,81,48,0.08) 50%, transparent 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s linear infinite',
          }}
        />
      </div>
      {/* Content lines shimmer */}
      <div className="flex w-full max-w-xs flex-col items-center gap-3">
        <div className="relative h-3 w-56 overflow-hidden rounded-full bg-brand-primary/6">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 25%, rgba(35,81,48,0.08) 50%, transparent 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s linear infinite 0.1s',
            }}
          />
        </div>
        <div className="relative h-3 w-40 overflow-hidden rounded-full bg-brand-primary/6">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(90deg, transparent 25%, rgba(35,81,48,0.08) 50%, transparent 75%)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 1.5s linear infinite 0.2s',
            }}
          />
        </div>
      </div>
      <span className="sr-only">Loading…</span>
    </div>
  )
}


function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/about-us"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/our-products"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <ProductsPage />
            </Suspense>
          }
        />
        <Route path="/shop" element={<Navigate to="/our-products" replace />} />
        <Route
          path="/our-certifications"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <CertificationsPage />
            </Suspense>
          }
        />
        <Route path="/our-certificate" element={<Navigate to="/our-certifications" replace />} />
        <Route
          path="/contact-us"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route path="/about" element={<Navigate to="/about-us" replace />} />
        <Route path="/contact" element={<Navigate to="/contact-us" replace />} />
        <Route
          path="/products/:slug"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <ProductDetailsPage />
            </Suspense>
          }
        />
        <Route
          path="/not-found"
          element={
            <Suspense fallback={<RouteLoadingFallback />}>
              <NotFoundPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Route>
    </Routes>
  )
}

export default App
