/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    container:{
      center: true
    },
    extend: {
      colors:{
        primary : "#f0f5f1",
        secondary : "#36c75c",
        customgreen: "#b0de6f",
        customgray : "#696865"
      },
      fontFamily :{
        kanit: ['Kanit', "sans-serif"],
        open : ['Open Sans', "sans-serif"]
      },
      spacing:{
        128 : "32rem",
        116 : "29rem",
        84: "21rem",
        58 : "14.5rem"
      }
    },
  },
  plugins: [],
}
