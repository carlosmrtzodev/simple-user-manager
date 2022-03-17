module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
    },
    colors: {
      dark: "#2b2d42",
      light: "#edf2f4",
      theme: "#4361ee",
    },
    extend: {
      animation: {
        fade: "fadeOut 1.4s ease-in-out",
      },

      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
