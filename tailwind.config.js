module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
      primary: {
        900: "#ff0000",
      },
    },
    extend: {
      fontSize: {
        "1.5xl": "1.375rem", // 22px
        "3xl": "1.75rem", // 28px
      },
      aspectRatio: {
        "10/3": "10 / 3",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};