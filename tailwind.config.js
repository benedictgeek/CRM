/** @type {import('tailwindcss').Config} */
console.log(
  "SOMETHING DIFF",
  require("tailwind-component-library/base-config")
);
module.exports = {
  presets: [require("tailwind-component-library/base-config")],
  theme: {
    extend: {
      colors: {
        headerBorderColor: "#373B40",
      },
    },
  },
  plugins: [],
};
