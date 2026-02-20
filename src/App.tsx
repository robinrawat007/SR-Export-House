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
    <div className="section-wrap py-24 text-center">
      <p className="text-lg font-semibold text-brand-text">Loading...</p>
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
