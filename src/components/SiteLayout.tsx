import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './Footer'
import { FloatingActions } from './FloatingActions'
import { Navbar } from './Navbar'

function PageProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[9999] h-[3px] origin-left"
      style={{
        scaleX,
        background: 'linear-gradient(90deg, #235130, #fbbc34, #2d6b3f)',
      }}
    />
  )
}

export function SiteLayout() {
  const location = useLocation()
  useEffect(() => {
    let raf: number
    raf = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: 'instant' })
    })
    return () => cancelAnimationFrame(raf)
  }, [location.pathname])

  return (
    <div className="site-shell min-h-screen">
      <PageProgressBar />
      <Navbar />
      <main className="pt-[80px] sm:pt-[92px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10, scale: 0.995 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.998 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}
