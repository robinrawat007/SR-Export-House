/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#235130',
          dark: '#0a0a0a',
          gold: '#fbbc34',
          muted: '#f4f4f2',
          text: '#5b646f',
          title: '#222222',
        },
      },
      fontFamily: {
        sans: ['Lato', 'Arial', 'Helvetica', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 40px -30px rgba(0, 0, 0, 0.55)',
      },
      backgroundImage: {
        'brand-radial':
          'radial-gradient(circle at 8% 10%, rgba(35,81,48,0.14), transparent 35%)',
        'hero-overlay':
          'linear-gradient(90deg, rgba(0,0,0,0.96) 0%, rgba(0,0,0,0.86) 45%, rgba(0,0,0,0.66) 100%)',
      },
    },
  },
  plugins: [],
}
