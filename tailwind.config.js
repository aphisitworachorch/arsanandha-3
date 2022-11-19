module.exports = {
  mode: "jit",
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'apFont': ['"Space Grotesk"', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"),require('tailwindcss-animatecss'),require('tailwind-scrollbar-hide')],
  daisyui: {
    styled: true,
    themes: ["cyberpunk","black","dark","coffee","synthwave"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "black",
  },
};