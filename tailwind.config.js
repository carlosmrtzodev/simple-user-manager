module.exports = {
  content: ["./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    screen: {
      sm: "480px",
      lg: "1024px",
    },
    colors: {
      bckg: "#03045e",
      text: "#caf0f8",
      card: "#023e8a",
      input: "#90e0ef",
      btn: "#0096c7",
      hover: "#0077b6",
    },
    extend: {
      animation: {
        fade: "fadeOut 1.5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
};
