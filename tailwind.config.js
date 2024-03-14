/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        robot: ["Roboto"],
      },
      boxShadow: {
        allAround: "0px 0px 10px 3px rgba(255, 255, 255, 0.8)",
        badge: "0px 0px 10px 3px rgba(4, 120, 87, 0.8)",
      },
    },
  },
  plugins: [require("daisyui")],
};
