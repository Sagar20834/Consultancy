import flowbite from "flowbite-react/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#111880",
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
  plugins: [flowbite.plugin()],
};
