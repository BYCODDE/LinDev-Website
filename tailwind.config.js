/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ["Gilroy GEO Heavy", "sans-serif"],
        nino: ["BPG Nino Mtavruli", "sans-serif"],
      },
    },
  },
  plugins: [],
};
