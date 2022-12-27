/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0973FF',
          50: '#C1DBFF',
          100: '#ACD0FF',
          200: '#83B9FF',
          300: '#5BA1FF',
          400: '#328AFF',
          500: '#0063E6',
          600: '#005EDB',
          700: '#004DB3',
          800: '#002960',
          900: '#001128',
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
