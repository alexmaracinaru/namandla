/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        kameron: ["Kameron", "serif"],
      },
    },
  },
  plugins: [require('tailwindcss-filters'),],
}

