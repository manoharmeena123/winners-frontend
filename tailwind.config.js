/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blinkColor: {
          "0%": { opacity: "1", color: "red" },
          "50%": { opacity: "1", color: "blue" },
          "100%": { opacity: "1", color: "red" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        blinkColor: "blinkColor 1s linear infinite", // Repeat the color change infinitely
        slideUp: "slideUp 0.5s ease-in-out", // Slide up animation for modal
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
