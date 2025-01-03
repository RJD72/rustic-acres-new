/* eslint-disable no-undef */
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        deepBurgundy: "#800020",
        softGold: "#FAD02E",
        mutedTeal: "#5CB3A5",
        lightGrey: "#F8F9FA",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
