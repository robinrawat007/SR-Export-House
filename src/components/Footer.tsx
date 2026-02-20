import { Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companyInfo } from '../data/siteData'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-black/10 bg-brand-muted pb-14 pt-12">
      <div className="section-wrap text-center">
        <img
          src="/images/logo-220x65.webp"
          alt="S.R Export House"
          width={220}
          height={65}
          className="mx-auto h-auto w-[210px]"
          loading="lazy"
        />

        <p className="mx-auto mt-5 max-w-4xl text-xl leading-relaxed text-brand-text sm:text-2xl">{companyInfo.tagline}</p>

        <nav className="mt-7" aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold uppercase tracking-wide text-brand-title">
            <li>
              <Link to="/" className="transition hover:text-brand-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="transition hover:text-brand-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/our-products" className="transition hover:text-brand-primary">
                Our Products
              </Link>
            </li>
            <li>
              <Link to="/our-certifications" className="transition hover:text-brand-primary">
                Our Certifications
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="transition hover:text-brand-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        <div className="mt-6 flex items-center justify-center gap-3">
          <a
            href={companyInfo.social.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href={companyInfo.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 transition hover:border-brand-primary hover:bg-brand-primary hover:text-white"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>

        <p className="mt-6 text-sm text-brand-text">
          Designed and Promoted by{' '}
          <a className="font-bold text-brand-primary hover:text-brand-dark" href="https://www.24digitalindia.com">
            24 Digital India
          </a>{' '}
          - (c) {year} {companyInfo.name}
        </p>
      </div>
    </footer>
  )
}
