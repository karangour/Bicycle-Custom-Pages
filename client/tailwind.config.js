/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        red: "#f8485d",
        green: "#3ac672",
        blue: "#21252F",
        "dark-white": "#F4F4F4",
        "light-blue": "#d7dfe1",
        "dark-grey": "#514b60"
      },
      fontFamily: {
        "lexend": ["Lexend", "sans-serif"],
        "lexend-d": ["Lexend Deca", "sans-serif"],
        helvetica: ['HelveticaNeue', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        ultralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 800,
        heavy: 900,

      },

    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
