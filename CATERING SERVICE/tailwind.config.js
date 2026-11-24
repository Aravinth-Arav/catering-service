/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#2b2520', soft: '#4a4138', light: '#6b6056' },
        cream: { DEFAULT: '#faf8f4', deep: '#f1ece2', dark: '#e7ddc9' },
        saffron: {
          50: '#fbf6ec',
          100: '#f5e9cf',
          200: '#ecd6a3',
          300: '#e0bd6f',
          400: '#d4a64a',
          500: '#c9a55a',
          600: '#b58a36',
          700: '#8f6a2a',
          800: '#6a4f22',
          900: '#4a381a',
        },
        sage: {
          50: '#f3f5f1',
          100: '#e3e8df',
          200: '#c7d1bf',
          300: '#a3b298',
          400: '#7d8e72',
          500: '#5e6f55',
          600: '#4a5843',
          700: '#3a4636',
          800: '#2c3529',
          900: '#1d231b',
        },
        terracotta: {
          400: '#d98e6b',
          500: '#c47250',
          600: '#a45a3c',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.25em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
