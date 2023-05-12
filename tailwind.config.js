
const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      }
    },
    colors: {
      mainpurple: '#9747FF',
      buttonpurple: '#F26CCD',
      backgroundgrey: '#D9D9D9',
      placeholdergrey: '#737373',
      textgreyblack: '#1A1A1A',

    }
  },
  plugins: [],
})