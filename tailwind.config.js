module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1024px",
    },
    colors: {
      dark: "#2b2d42",
      light: "#edf2f4",
      theme: "#4361ee",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
    },
    extend: {
      fontSize: {
        title: "24px",
        subtitle: "20px",
        small: "16px",
      },
    },
  },
  plugins: [],
};
