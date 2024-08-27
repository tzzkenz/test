/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        lightcoral: "#Fdf7c4",
      },
    },
  },
  plugins: [],
};
