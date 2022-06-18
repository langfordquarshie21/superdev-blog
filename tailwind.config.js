/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      borderGray: '#eaeaea',
      brand: '#0070f3',
      accent: '#63f49c',
      greyText: '#999999',
      greyBg: '#f1f1f1ab',
    },
    extend: {},
  },
  plugins: [],
}
