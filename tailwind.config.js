/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#111890",
          DEFAULT: "black",
          dark: "#110053",
        },
        secondary: {
          light: "#your-light-secondary-color",
          DEFAULT: "#your-secondary-color",
          dark: "#your-dark-secondary-color",
        },
        buttoncolor: {
          light: "#8679F6",
          DEFAULT: "#8679F6",
          dark: "#110053",
        },
      },
    },
  },
  plugins: [],
};
