/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      borderGray: "#eaeaea",
      // brand: '#0070f3',
      // brand: '#4875F7',
      // brand: "#8e38ff",
      brand: "#673AB7",
      accent: "#63f49c",
      greyText: "#999999",
      greyBg: "#f1f1f1ab",
      secondary: "#FF5722",
      green: "#25E35F",
      blue: "#4660FC",
      orange: "#FDA714",
      black: "#1D1E23",
      red1: "#FA7E46",
      red2: "#FF4485",
    },
    extend: {},
  },
  plugins: [],
};
