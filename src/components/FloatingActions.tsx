import { useEffect, useState } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { companyInfo } from '../data/siteData'

export function FloatingActions() {
  const [showTopButton, setShowTopButton] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <a
        href={`https://api.whatsapp.com/send?phone=${companyInfo.whatsappNumber}&text=Hello%20S.R.%20Export%20House`}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp chat"
        className="fixed bottom-5 left-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-soft transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {showTopButton ? (
        <button
          type="button"
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-brand-title shadow-soft transition hover:bg-brand-primary hover:text-white"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}
    </>
  )
}
