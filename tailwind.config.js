/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slategray: {
          "100": "#607b96",
          "200": "#465e77",
          "300": "rgba(96, 123, 150, 0.3)",
        },
        gray: {
          "100": "#0c1616",
          "200": "#011627",
          "300": "#011221",
          "400": "#010c15",
          "500": "#01080e",
          "600": "rgba(1, 22, 39, 0.84)",
          "700": "rgba(1, 20, 35, 0.19)",
        },
        white: "#fff",
        darkslategray: {
          "100": "#1e2d3d",
          "200": "#1c2b3a",
        },
        silver: "rgba(196, 196, 196, 0)",
        sandybrown: "#fea55f",
        royalblue: {
          "100": "#5565e8",
          "200": "#4d5bce",
        },
        plum: {
          "100": "#c98bdf",
          "200": "#c98adf",
        },
        darksalmon: "#e99287",
        mediumaquamarine: "#43d9ad",
        black: "#000",
        aliceblue: "#e5e9f0",
      },
      spacing: {},
      fontFamily: {
        "fira-code": "'Fira Code'",
      },
      borderRadius: {
        mini: "15px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.88rem",
      lg: "1.13rem",
      xs: "0.75rem",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
