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
          50: '#f4f4fa',
          100: '#dee8ff',
          200: '#c3d4ff',
          300: '#9fb7ff',
          400: '#798eff',
          500: '#5f5feb',
          600: '#5759de',
          700: '#5050b9',
          800: '#404094',
          900: '#303162',
          1000: '#161723',
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
      backgroundImage: {
        main: "url('/img/main-bg.jpg')",
        main_dark: "url('/img/main-bg_dark.jpg')",
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
