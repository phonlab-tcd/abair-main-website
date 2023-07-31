/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
import {
  themeColors,
  themeTransitionDelay,
  themeHeight,
  themeWidth,
} from "./src/theme";

export default {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "/home/john/Documents/abair/ABAIR-web-components/src/**/*.tsx", // needed to add this to import the tailwind css classes from the component library
    "/home/john/johnsHDD/work/Irish/abairWebsite/ABAIR-web-components/src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors: themeColors,
      transitionDelay: themeTransitionDelay,
      transitionDuration: {
        2000: "2000ms",
      },
      fontFamily: {
        sans: ['"Helvetica Neue"', "system-ui"],
        serif: ["ui-serif", "Georgia"],
      },
      width: themeWidth,
      height: themeHeight,
      dropShadow: {
        ABAIR: "0px 0px 10px rgba(0, 0, 0, 0.75)",
        applications: "0px 5px 5px rgba(0, 0, 0, 0.4)",
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
