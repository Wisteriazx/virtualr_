/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
         'desktop': '1280px',
         'phone': '400px',
        // => @media (min-width: 992px) { ... }
      },
      colors:{
        primary: "#ff8901",
        secondary:"#fb923c",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: '1rem',
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          '2xl':"6rem",
        }
      }
    },
  },
  plugins: [],
};
