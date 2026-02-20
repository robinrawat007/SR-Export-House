/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#235130',
          'primary-light': '#2d6b3f',
          'primary-dark': '#1b3e25',
          dark: '#0a0a0a',
          'dark-2': '#0d1c11',
          gold: '#fbbc34',
          'gold-light': '#fcd968',
          'gold-dark': '#e0a422',
          muted: '#f4f4f2',
          'muted-2': '#eef0ec',
          text: '#5b646f',
          title: '#1a2018',
        },
      },
      fontFamily: {
        sans: ['Lato', 'Inter', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -30px rgba(0,0,0,0.55)',
        card: '0 4px 24px -6px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.06)',
        'card-hover': '0 12px 40px -8px rgba(35,81,48,0.25), 0 2px 8px rgba(0,0,0,0.08)',
        'glow-green': '0 0 30px -4px rgba(35,81,48,0.45)',
        'glow-gold': '0 0 24px -4px rgba(251,188,52,0.55)',
        'glow-sm': '0 0 16px -4px rgba(35,81,48,0.35)',
        glass: '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        nav: '0 1px 0 rgba(0,0,0,0.06), 0 4px 24px rgba(0,0,0,0.04)',
      },
      backgroundImage: {
        'brand-radial':
          'radial-gradient(circle at 8% 10%, rgba(35,81,48,0.14), transparent 35%)',
        'hero-overlay':
          'linear-gradient(105deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.86) 45%, rgba(0,0,0,0.60) 100%)',
        'gradient-green':
          'linear-gradient(135deg, #235130 0%, #2d6b3f 100%)',
        'gradient-gold':
          'linear-gradient(135deg, #e0a422 0%, #fbbc34 60%, #fcd968 100%)',
        'gradient-hero-dark':
          'linear-gradient(180deg, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.4) 100%)',
        'card-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 60%)',
        'grain-overlay':
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'count-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.5s ease both',
        float: 'float 3s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-ring': 'pulse-ring 1.8s ease-out infinite',
        ticker: 'ticker 30s linear infinite',
        'spin-slow': 'spin-slow 12s linear infinite',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'slide-in-right': 'slide-in-right 0.6s cubic-bezier(0.22,1,0.36,1) both',
        'zoom-in': 'zoom-in 0.5s cubic-bezier(0.22,1,0.36,1) both',
        'count-up': 'count-up 0.5s ease both',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
