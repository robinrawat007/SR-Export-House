import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { AlignJustify, ChevronDown, Leaf, X, Zap } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, type NavItem } from '../data/siteData'

function isNavItemActive(item: NavItem, pathname: string) {
  if (item.to === '/') return pathname === '/'
  if (pathname === item.to) return true
  if (item.label === 'Our Products' && pathname.startsWith('/products/')) return true
  return false
}

const categoryIcons: Record<string, typeof Leaf> = {
  Rice: Leaf,
  'Mango Pulp': Leaf,
  Spices: Leaf,
  Coffee: Leaf,
  'Essential Oils': Leaf,
  'Psyllium Husk': Leaf,
  'Dried and Dehydrated Items': Leaf,
  Menthol: Leaf,
  Pearls: Zap,
  'Wires and Cables': Zap,
  'Tiles and Marbles': Zap,
}

export function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  const pathname = location.pathname

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setMobileProductsOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 12)
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
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  const productLinks = useMemo(
    () => navItems.find((item) => item.label === 'Our Products')?.children ?? [],
    [],
  )

  return (
    <>
      <motion.header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 transition-all duration-400',
          isScrolled
            ? 'glass-nav py-3 shadow-nav'
            : 'border-b border-transparent bg-white/90 py-5 backdrop-blur-md',
        )}
        animate={{ y: showHeader ? 0 : -100 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Gradient top accent line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, #235130, #fbbc34, #235130)' }}
        />

        <div className="section-wrap flex items-center justify-between">
          <Link className="group inline-flex items-center gap-3" to="/" aria-label="S.R Export House home">
            <img
              src="/images/logo.webp"
              alt="S.R Export House logo"
              className="h-12 w-auto transition duration-300 group-hover:opacity-85 sm:h-14"
              width={212}
              height={72}
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8 text-sm font-bold uppercase tracking-wide text-[#1a2018]">
              {navItems.map((item) => {
                const active = isNavItemActive(item, pathname)
                return (
                  <li key={item.label} className="group relative">
                    <NavLink
                      to={item.to}
                      className={clsx(
                        'relative inline-flex items-center gap-1.5 py-1 transition-colors duration-200 hover:text-brand-primary',
                        active ? 'text-brand-primary' : '',
                      )}
                    >
                      <span>{item.label}</span>
                      {item.children ? <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" /> : null}

                      {/* Active underline */}
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute -bottom-1 inset-x-0 h-0.5 rounded-full"
                          style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </NavLink>

                    {/* Dropdown */}
                    {item.children ? (
                      <div className="pointer-events-none invisible absolute left-0 top-full mt-3 w-[320px] rounded-xl border border-black/8 bg-white/95 p-3 opacity-0 shadow-[0_8px_32px_rgba(0,0,0,0.12)] backdrop-blur-xl transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                        {/* Dropdown caret */}
                        <div className="absolute -top-2 left-6 h-0 w-0 border-x-8 border-b-8 border-x-transparent border-b-white/95" />

                        <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-widest text-brand-text/60">
                          Browse Products
                        </p>
                        <ul className="grid gap-0.5">
                          {item.children.map((child) => {
                            const Icon = categoryIcons[child.label] ?? Leaf
                            return (
                              <li key={child.label}>
                                <NavLink
                                  className={({ isActive }) =>
                                    clsx(
                                      'group/item flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold normal-case tracking-normal transition-colors duration-150',
                                      isActive
                                        ? 'bg-brand-primary/8 text-brand-primary'
                                        : 'text-brand-title hover:bg-brand-muted hover:text-brand-primary',
                                    )
                                  }
                                  to={child.to}
                                >
                                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-muted text-brand-primary transition-colors group-hover/item:bg-brand-primary group-hover/item:text-white">
                                    <Icon className="h-3.5 w-3.5" />
                                  </span>
                                  {child.label}
                                </NavLink>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact-us"
              className="hidden rounded-lg bg-brand-primary px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-glow-sm transition hover:-translate-y-0.5 hover:shadow-glow-green xl:inline-flex"
            >
              Get in Touch
            </Link>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-brand-title lg:hidden"
              onClick={() =>
                setMobileMenuOpen((prev) => {
                  if (prev) setMobileProductsOpen(false)
                  return !prev
                })
              }
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={mobileMenuOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.18 }}
                >
                  {mobileMenuOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileMenu}
            aria-hidden
          />
        )}
      </AnimatePresence>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.aside
            className="fixed inset-y-0 left-0 z-50 w-[88vw] max-w-[380px] overflow-y-auto border-r border-black/8 bg-white p-5 shadow-[8px_0_40px_rgba(0,0,0,0.12)] lg:hidden"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            aria-label="Mobile navigation"
          >
            {/* Gradient top */}
            <div
              className="absolute inset-x-0 top-0 h-1"
              style={{ background: 'linear-gradient(90deg, #235130, #fbbc34)' }}
            />

            <div className="mt-2 flex items-center justify-between">
              <img src="/images/logo-220x65.webp" alt="S.R Export House" className="h-10 w-auto" width={220} height={65} />
              <button
                type="button"
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 text-brand-title"
                onClick={closeMobileMenu}
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>

            <nav className="mt-6 pb-6" aria-label="Mobile navigation menu">
              <ul className="grid gap-1">
                {navItems.map((item) => (
                  <li key={item.label} className="border-b border-black/5 pb-1">
                    {item.children ? (
                      <>
                        <div className="flex items-center justify-between">
                          <NavLink
                            to={item.to}
                            className={clsx(
                              'block rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide transition hover:bg-brand-muted hover:text-brand-primary',
                              isNavItemActive(item, pathname) ? 'text-brand-primary' : 'text-brand-title',
                            )}
                            onClick={closeMobileMenu}
                          >
                            {item.label}
                          </NavLink>
                          <button
                            type="button"
                            aria-label="Toggle products submenu"
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-brand-title transition hover:bg-brand-muted hover:text-brand-primary"
                            onClick={() => setMobileProductsOpen((prev) => !prev)}
                          >
                            <ChevronDown
                              className={clsx('h-4 w-4 transition-transform', mobileProductsOpen ? 'rotate-180' : '')}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {mobileProductsOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="mb-2 mt-1 grid gap-0.5 pl-3">
                                {productLinks.map((child) => {
                                  const Icon = categoryIcons[child.label] ?? Leaf
                                  return (
                                    <li key={child.label}>
                                      <NavLink
                                        className={({ isActive }) =>
                                          clsx(
                                            'flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition',
                                            isActive
                                              ? 'bg-brand-primary/8 font-semibold text-brand-primary'
                                              : 'text-brand-text hover:bg-brand-muted hover:text-brand-primary',
                                          )
                                        }
                                        to={child.to}
                                        onClick={closeMobileMenu}
                                      >
                                        <Icon className="h-3.5 w-3.5 text-brand-primary" />
                                        {child.label}
                                      </NavLink>
                                    </li>
                                  )
                                })}
                              </div>
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          clsx(
                            'block rounded-lg px-3 py-2.5 text-sm font-bold uppercase tracking-wide transition hover:bg-brand-muted hover:text-brand-primary',
                            isActive ? 'text-brand-primary' : 'text-brand-title',
                          )
                        }
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-2">
                <a
                  href={`https://api.whatsapp.com/send?phone=917042088772&text=Hello%20S.R.%20Export%20House`}
                  target="_blank"
                  rel="noreferrer"
                  className="cta-btn w-full text-center"
                  onClick={closeMobileMenu}
                >
                  WhatsApp Us
                </a>
              </div>
            </nav>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
