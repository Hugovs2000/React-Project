/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Roboto"],
      },
      boxShadow: {
        around: "0px 0px 8px 2px rgba(255, 255, 255, 0.3)",
        fab: "0px 0px 10px 2px rgba(255, 255, 255, 0.2)",
      },
    },
  },
  plugins: [require("daisyui")],
};
