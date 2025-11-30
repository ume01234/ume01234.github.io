/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          cream: '#f5e6d3',
          latte: '#e8d5c4',
          beige: '#d4c4b0',
          brown: '#8b6f47',
          dark: '#5d4e37',
          espresso: '#3e2723',
        },
      },
      backgroundImage: {
        'coffee-gradient': 'linear-gradient(to bottom, #5d4e37, #3e2723, #2c1810)',
        'coffee-liquid': 'linear-gradient(180deg, #5d4e37 0%, #3e2723 50%, #2c1810 100%)',
      },
      fontFamily: {
        serif: ['"Noto Serif JP"', 'serif'],
      },
    },
  },
  plugins: [],
};

