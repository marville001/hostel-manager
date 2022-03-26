module.exports = {
  important: true,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        lavender: "#e5e8e8",
        whitesmoke: "#edf0f0",
        tomato: "#f34060",
        blueviolet: "#853dfc",
        goldenrod: "#e5932a",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
