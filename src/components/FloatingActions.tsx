import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { companyInfo } from '../data/siteData'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.556 4.118 1.528 5.845L.057 23.885l6.214-1.452A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.893a9.869 9.869 0 0 1-5.031-1.378l-.361-.214-3.741.981.998-3.648-.235-.374A9.861 9.861 0 0 1 2.107 12C2.107 6.548 6.548 2.107 12 2.107c5.451 0 9.893 4.441 9.893 9.893 0 5.451-4.442 9.893-9.893 9.893z" />
    </svg>
  )
}

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
      {/* WhatsApp button with animated pulse ring */}
      <div className="fixed bottom-6 left-5 z-40">
        {/* Pulse rings */}
        <span
          className="absolute inset-0 rounded-full bg-[#25d366]"
          style={{
            animation: 'pulse-ring 2s ease-out infinite',
          }}
        />
        <span
          className="absolute inset-0 rounded-full bg-[#25d366]"
          style={{
            animation: 'pulse-ring 2s ease-out 0.6s infinite',
          }}
        />

        <motion.a
          href={`https://api.whatsapp.com/send?phone=${companyInfo.whatsappNumber}&text=Hello%20S.R.%20Export%20House`}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white"
          style={{ boxShadow: '0 4px 20px rgba(37,211,102,0.45)' }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <WhatsAppIcon />
        </motion.a>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            type="button"
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            style={{
              background: 'linear-gradient(135deg, #235130, #2d6b3f)',
              boxShadow: '0 4px 15px rgba(35,81,48,0.4)',
            }}
            initial={{ opacity: 0, scale: 0.6, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 16 }}
            whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(35,81,48,0.55)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 22 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
