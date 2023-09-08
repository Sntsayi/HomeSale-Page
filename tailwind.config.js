/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./input/*.{html,js}"],
  theme: {
    extend: {
      translate: {
        "400%": "400%",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
        1500: "1500ms",
      },
      colors: {
        bestBlue: "#263b5e",
      },
      boxShadow: {
        mysize: "0 3px 4px -1px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
