/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        InriaSans: ["Inria Sans", "sans-serif"],
        NotoSerif: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
