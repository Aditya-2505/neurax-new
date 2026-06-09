/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brandBg: '#f5f7fa',
        brandLight: '#e0edf7',
        brandDark: '#17222B',
        blue: {
          50: '#f1f6fa',
          100: '#e0edf7',
          200: '#b9daf2',
          300: '#8ec4ec',
          400: '#5faee3',
          500: '#3984d7',
          600: '#2561cd',
          700: '#1c4a9d',
          800: '#253441',
          900: '#17222B',
          950: '#0e151b',
        }
      }
    },
  },
  plugins: [],
};
