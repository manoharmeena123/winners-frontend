/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blinkColor: {
          "0%": { opacity: "1", color: "red" },  // Start with red
          "50%": { opacity: "1", color: "blue" }, // Halfway, change to blue
          "100%": { opacity: "1", color: "red" }, // End with red
        },
      },
      animation: {
        blinkColor: "blinkColor 1s linear infinite", // Repeat the color change infinitely
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
