/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "10rem",
    },
    extend: {
      colors: {
        primary: {
          200: "#9DD6EC",
          300: "#64A5C8",
          400: "#366D91",
          DEFAULT: "#0C2D48",
          600: "#08233D",
          700: "#061A33",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
