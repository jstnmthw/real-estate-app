/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#edf2ff',
          100: '#dee8ff',
          200: '#c3d4ff',
          300: '#9fb7ff',
          400: '#798eff',
          500: '#5f6dfb',
          600: '#3b3df0',
          700: '#2f2ed4',
          800: '#2829ab',
          900: '#282b87',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      letterSpacing: {
        tight: '-.022em',
      },
      dropShadow: {
        md: [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
