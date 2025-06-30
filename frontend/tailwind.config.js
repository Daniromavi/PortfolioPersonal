/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Asegúrate de que se adapta a tu estructura
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1s step-end infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],

};
