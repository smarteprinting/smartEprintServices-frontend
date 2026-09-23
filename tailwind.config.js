/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ebff',
          500: '#024AD8',
          700: '#0137a7',
          900: '#01235b',
        },
      },
      boxShadow: {
        soft: '0 12px 35px rgba(2, 74, 216, 0.14)',
      },
    },
  },
  plugins: [],
};
