import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { AlignJustify, ChevronDown, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { navItems, type NavItem } from '../data/siteData'

function isNavItemActive(item: NavItem, pathname: string) {
  if (item.to === '/') {
    return pathname === '/'
  }

  if (pathname === item.to) {
    return true
  }

  if (item.label === 'Our Products' && pathname.startsWith('/products/')) {
    return true
  }

  return false
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
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const productLinks = useMemo(() => navItems.find((item) => item.label === 'Our Products')?.children ?? [], [])

  return (
    <>
      <header
        className={clsx(
          'fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm transition-all duration-300',
          showHeader ? 'translate-y-0' : '-translate-y-full',
          isScrolled ? 'py-3 shadow-soft' : 'py-5',
        )}
      >
        <div className="section-wrap flex items-center justify-between">
          <Link className="inline-flex items-center gap-3" to="/" aria-label="S.R Export House home">
            <img
              src="/images/logo.webp"
              alt="S.R Export House logo"
              className="h-12 w-auto sm:h-14"
              width={212}
              height={72}
            />
          </Link>

          <nav aria-label="Main navigation" className="hidden lg:block">
            <ul className="flex items-center gap-9 text-sm font-bold uppercase tracking-wide text-[#1c241e]">
              {navItems.map((item) => (
                <li key={item.label} className="group relative">
                  <NavLink
                    to={item.to}
                    className={clsx(
                      'inline-flex items-center gap-1.5 transition-colors hover:text-brand-primary',
                      isNavItemActive(item, pathname) ? 'text-brand-primary' : '',
                    )}
                  >
                    <span>{item.label}</span>
                    {item.children ? <ChevronDown className="h-4 w-4" /> : null}
                  </NavLink>

                  {item.children ? (
                    <div className="pointer-events-none invisible absolute left-0 top-full mt-4 min-w-[280px] rounded-md border border-black/10 bg-white p-4 opacity-0 shadow-soft transition-all duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100">
                      <ul className="grid gap-2 text-left text-xs font-semibold normal-case tracking-normal text-brand-title">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <NavLink
                              className={({ isActive }) =>
                                clsx(
                                  'block rounded-sm px-3 py-2 transition hover:bg-brand-muted hover:text-brand-primary',
                                  isActive ? 'bg-brand-muted text-brand-primary' : '',
                                )
                              }
                              to={child.to}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            className="inline-flex items-center rounded-md border border-black/10 p-2 text-brand-title lg:hidden"
            onClick={() =>
              setMobileMenuOpen((prev) => {
                if (prev) {
                  setMobileProductsOpen(false)
                }
                return !prev
              })
            }
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <AlignJustify className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <div
        className={clsx(
          'fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 lg:hidden',
          mobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={closeMobileMenu}
        aria-hidden={!mobileMenuOpen}
      />

      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-50 w-[86vw] max-w-[360px] border-r border-black/10 bg-white p-5 shadow-soft transition-transform duration-300 lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-label="Mobile navigation drawer"
      >
        <div className="mb-4 flex items-center justify-between">
          <img src="/images/logo-220x65.webp" alt="S.R Export House" className="h-10 w-auto" width={220} height={65} />
          <button
            type="button"
            aria-label="Close mobile menu"
            className="rounded-md border border-black/10 p-2 text-brand-title"
            onClick={closeMobileMenu}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav aria-label="Mobile navigation" className="overflow-y-auto pb-6">
          <ul className="grid gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="border-b border-black/5 pb-1">
                {item.children ? (
                  <>
                    <div className="flex items-center justify-between">
                      <NavLink
                        to={item.to}
                        className={clsx(
                          'block rounded-sm px-3 py-2 text-sm font-semibold text-brand-title transition hover:bg-brand-muted hover:text-brand-primary',
                          isNavItemActive(item, pathname) ? 'text-brand-primary' : '',
                        )}
                        onClick={closeMobileMenu}
                      >
                        {item.label}
                      </NavLink>
                      <button
                        type="button"
                        aria-label="Toggle products submenu"
                        className="rounded-sm p-2 text-brand-title"
                        onClick={() => setMobileProductsOpen((prev) => !prev)}
                      >
                        <ChevronDown
                          className={clsx('h-4 w-4 transition-transform', mobileProductsOpen ? 'rotate-180' : '')}
                        />
                      </button>
                    </div>
                    {mobileProductsOpen ? (
                      <ul className="mb-2 mt-1 grid gap-1 pl-4">
                        {productLinks.map((child) => (
                          <li key={child.label}>
                            <NavLink
                              className={({ isActive }) =>
                                clsx(
                                  'block rounded-sm px-3 py-1.5 text-sm text-brand-text transition hover:bg-brand-muted hover:text-brand-primary',
                                  isActive ? 'bg-brand-muted text-brand-primary' : '',
                                )
                              }
                              to={child.to}
                              onClick={closeMobileMenu}
                            >
                              {child.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      clsx(
                        'block rounded-sm px-3 py-2 text-sm font-semibold text-brand-title transition hover:bg-brand-muted hover:text-brand-primary',
                        isActive ? 'text-brand-primary' : '',
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
        </nav>
      </aside>
    </>
  )
}
