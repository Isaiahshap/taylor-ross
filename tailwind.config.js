/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'law-red': '#E31837',
        'law-dark': '#0A0A0A',
        'law-light': '#F5F5F5',
        'law-accent': '#CC1631',
        'law-gold': '#D4AF37',
      },
      fontFamily: {
        display: ['Teko', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'sharp': '6px 6px 0px rgba(184, 134, 11, 0.3)',
        'sharp-red': '6px 6px 0px rgba(200, 16, 46, 0.3)',
        'glow': '0 0 30px rgba(200, 16, 46, 0.2)',
        'gold-glow': '0 0 30px rgba(184, 134, 11, 0.2)',
      },
      borderWidth: {
        '3': '3px',
        '6': '6px',
        '12': '12px',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'subtle-zoom': 'subtle-zoom 20s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'subtle-zoom': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1)' },
        }
      },
      transitionProperty: {
        'width': 'width',
        'border': 'border-width',
      },
    },
  },
  plugins: [],
}
