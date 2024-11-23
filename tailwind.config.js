/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ebeef2",
        accent: "#e8f0f5",
        primary: "#1fa45b",
      },
      fontFamily: {
        'geist-sans': ['var(--font-geist-sans)'],
        'geist-mono': ['var(--font-geist-mono)'],
        'inter': ['var(--font-inter)'],
        'merriweather': ['var(--font-merriweather)'],
        'opensans': ['var(--font-opensans)'],
        'playfair': ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
};