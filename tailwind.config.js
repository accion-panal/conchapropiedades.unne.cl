/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#b98d47',
          opacity: '#b98d47d4',
          ligth: '#dbcfaa',
          300: '#4a8396',
          400: '#3c6a7a',
        },
        secondary: {
          DEFAULT: '#2e535f',
          opacity: '#2e535fd4',
          ligth: '#3f6b7a',
          300: '#392d9d',
          400: '#2d2482',
        },
        tertiary: {
          DEFAULT: '#ed4f44',
          opacity: '#ed4f44d4',
        },
      },
    },
  },
  plugins: [require('daisyui')],
};
