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
        synthesis: colors.sky,
        recognition: colors.rose,
        applications: colors.green,
        grey: colors.gray,
        // "navbar-top": "rgba(0, 0, 0, 0.8)",
        // "navbar-middle": "rgba(0, 0, 0, 0.6)",
        // "navbar-bottom": "rgba(0, 0, 0, 0.001)",
        "navbar-shadow": "rgba(0, 0, 0, 0.15)",
        "popup-shadow": "rgba(128, 128, 128, 0.67)",
        "image-drop-shadow":
          "drop-shadow(0 10px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0 4px 3px rgba(0, 0, 0, 0.4));",
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
        synthRecCard: "340px",
        synthRecCardLarge: "300px",
      },
      dropShadow: {
        ABAIR: "0px 0px 10px rgba(0, 0, 0, 0.75)",
        applications: "0px 10px 10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        marquee: "marquee 120s linear infinite",
        marquee2: "marquee2 120s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
