/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 7px 8px rgba(0,0,0,0.20), 0 9px 7px rgba(0,0,0,0.17);'
      },
      colors: {
        'red': '#9B2226'
      },
    },
  },
  plugins: [],
};
