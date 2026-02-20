import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyInfo } from '../data/siteData'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Our Products', to: '/our-products' },
  { label: 'Certifications', to: '/our-certifications' },
  { label: 'Contact Us', to: '/contact-us' },
]

const productLinks = [
  { label: 'Rice', to: '/products/rice' },
  { label: 'Spices', to: '/products/spices' },
  { label: 'Mango Pulp', to: '/products/mango-pulp' },
  { label: 'Essential Oils', to: '/products/essential-oils' },
  { label: 'Psyllium Husk', to: '/products/psyllium-husk' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section-dark relative">
      {/* Top gradient divider */}
      <div
        className="h-px w-full"
        style={{ background: 'linear-gradient(90deg, transparent, #235130, #fbbc34, #235130, transparent)' }}
      />

      {/* Main footer content */}
      <div className="section-wrap py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* Brand column */}
          <div>
            <Link to="/" aria-label="S.R Export House home">
              <img
                src="/images/logo-220x65.webp"
                alt="S.R Export House"
                width={220}
                height={65}
                className="h-auto w-[170px] brightness-0 invert"
                loading="lazy"
              />
            </Link>
            <p className="mt-5 text-base leading-relaxed text-white/65">
              {companyInfo.tagline}
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={companyInfo.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on Instagram"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:border-brand-gold/50 hover:bg-brand-gold/10 hover:text-brand-gold hover:shadow-glow-gold"
              >
                <Instagram className="h-4.5 w-4.5" />
              </a>
              <a
                href={companyInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow us on LinkedIn"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 transition-all duration-300 hover:border-brand-gold/50 hover:bg-brand-gold/10 hover:text-brand-gold hover:shadow-glow-gold"
              >
                <Linkedin className="h-4.5 w-4.5" />
              </a>
            </div>

            {/* Made in India badge */}
            <p className="mt-6 text-xs text-white/35">
              🌱 Made with ❤️ in India · Est. 2024
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-gold">
              Quick Links
            </p>
            <ul className="grid gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 rounded-full bg-brand-gold/40 transition-all group-hover:w-6 group-hover:bg-brand-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-gold">
              Our Products
            </p>
            <ul className="grid gap-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="group flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <span className="h-px w-4 rounded-full bg-brand-gold/40 transition-all group-hover:w-6 group-hover:bg-brand-gold" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-brand-gold">
              Contact Us
            </p>
            <ul className="grid gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <span className="text-sm leading-relaxed text-white/65">{companyInfo.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-sm text-white/65 transition-colors hover:text-white"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="break-all text-sm text-white/65 transition-colors hover:text-white"
                >
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/8"
        style={{ background: 'rgba(0,0,0,0.3)' }}
      >
        <div className="section-wrap flex flex-col items-center justify-between gap-3 py-5 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed & promoted by{' '}
            <a
              href="https://www.24digitalindia.com"
              className="font-semibold text-brand-gold/70 transition-colors hover:text-brand-gold"
              target="_blank"
              rel="noreferrer"
            >
              24 Digital India
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
