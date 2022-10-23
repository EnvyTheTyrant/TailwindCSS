/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    opacity: {
      0: "0",
      10: ".1",
      20: ".2",
      30: ".3",
      40: ".4",
      50: ".5",
      60: ".6",
      70: ".7",
      80: ".8",
      90: ".9",
      100: "1",
      5: ".05",
      25: ".25",
      75: ".75",
    },
    extend: {
      colors: {
        "primary-blue": "#1992d4",
      },
      spacing: {
        72: "18rem",
      },
    },
  },
  variants: {
    extend: {
      display: ["responsive", "group-hover"],
      backgroundColor: ["responsive", "hover", "focus", "active"],
      // ...
      borderColor: ["focus-visible", "first"],
      // ...
      textColor: ["visited"],
    },
  },
  plugins: [],
};
