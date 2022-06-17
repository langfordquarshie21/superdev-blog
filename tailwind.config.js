/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      borderGray: '#eaeaea',
      brand: '#0070f3'
    },
    extend: {},
  },
  plugins: [],
}
