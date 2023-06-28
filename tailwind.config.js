/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

module.exports = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "/home/john/Documents/abair/ABAIR-web-components/src/**/*.tsx", // needed to add this to import the tailwind css classes from the component library
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.green,
        secondary: colors.blue,
        warning: colors.red,
        grey: colors.gray,
        "navbar-top": "rgba(0, 0, 0, 0.8)",
        "navbar-middle": "rgba(0, 0, 0, 0.6)",
        "navbar-bottom": "rgba(0, 0, 0, 0.001)",
      },
      transitionDelay: {
        1500: "1500ms",
        2000: "2000ms",
        2800: "2800ms",
        3000: "3000ms",
        3500: "3500ms",
        4200: "4200ms",
        15000: "15000ms",
      },
      transitionDuration: {
        2000: "2000ms",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "system-ui"],
        serif: ["ui-serif", "Georgia"],
      },
      width: {
        synthRecCard: "350px",
        synthRecCardLarge: "470px",
      },
      height: {
        synthRecCard: "450px",
        synthRecCardLarge: "550px",
      },
    },
  },
  plugins: [],
};
