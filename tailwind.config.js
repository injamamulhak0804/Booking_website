/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], 
        poppins: ["Poppins", "sans-serif"],
        Volkhov:["Volkhov", "serif"],
        lato:["Lato", "sans-serif"],
        serifs:["Source Serif 4"]
      },
    },
  },
  plugins: [],
}
