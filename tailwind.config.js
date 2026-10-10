const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        temple: {
          sky: "#73B5E8",
          skyLight: "#A5D2F6",
          parchment: "#FDF7ED",
          parchmentDark: "#F4E8D3",
          gold: "#C59B27",
          goldDeep: "#9E7812",
          vermilion: "#B3261E",
          terracotta: "#C85A32",
          emerald: "#1B5E20",
          mustard: "#E5A93C",
          charcoal: "#2B2118",
          stone: "#7C6A59",
        },
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        editorial: ["'Cormorant Garamond'", "serif"],
        script: ["'Alex Brush'", "'Great Vibes'", "cursive"],
        devanagari: ["'Rozha One'", "'Cinzel'", "serif"],
        sans: ["'Plus Jakarta Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
