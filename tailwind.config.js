/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      sm: '600px',
      md: '728px',
      lg: '984px',
      xl: '1200px',
      '2xl': '1200px',
    },
    extend: {
      fontFamily: {
        primary: ['var(--league-spartan-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
