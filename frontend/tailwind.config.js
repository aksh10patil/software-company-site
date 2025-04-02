/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-skin': '#f6f6f7',
        'dark-blue': '#1660a1',
        'light-blue': '#93caee',


      },
      fontFamily:{
          bad :["Bad Script", "cursive"],
          dm : ["DM Serif Text", "serif"],
      },
    },
  },
  plugins: [],
}