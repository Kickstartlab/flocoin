/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {

      black: {
        "100": "#0D0D0D",
      },
      white: {
        "50": "#C0C0C0;",
        "100": "#fff",
      },
      blue: {
        "100": "#3A6DF0",
      },
      yellow: {
        "100": "#FFEF5F",
      },
      slate: {
        "400": "#94A3B8",
      }
    },
    fontFamily: {
      'bilbo': ["'Bilbo', cursive"],
      'darker': ["'Darker Grotesque', sans-serif"],
      'mulish': ["'Mulish', sans-serif"]
    }
  },
  plugins: [],
}
