/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-font': ['Poppins', 'sans-serif']
      },
      colors: {
        'color-header': "#f2475f",
      }
    },
  },
  plugins: [],
}

