/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'law-navy': '#0B1426',      // Deeper, richer navy
        'law-accent': '#C8102E',    // Bold crimson red
        'law-accent-hover': '#A50D25',
        'law-gold': '#B8860B',      // Deeper, regal gold
        'law-gold-light': '#D4AF37', // Lighter gold for accents
        'law-white': '#FFFFFF',     
        'law-gray': '#1A1A1A',      // Darker gray
        'law-slate': '#1F2937',
        'law-gradient-start': '#0B1426',
        'law-gradient-end': '#1F2937',
      },
      fontFamily: {
        'display': ['Cormorant Garamond', 'serif'], // More sophisticated serif
        'body': ['Montserrat', 'sans-serif'],       // Modern, clean sans-serif
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
      }
    },
  },
  plugins: [],
}
