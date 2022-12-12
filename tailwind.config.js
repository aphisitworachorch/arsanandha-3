module.exports = {
  mode: "jit",
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'apFont': ['"Space Grotesk"', 'sans-serif']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui"),require('tailwindcss-animatecss'),require('tailwind-scrollbar-hide')],
  daisyui: {
    styled: true,
    themes: [{
      "ap":{
        "primary": "#f4d28d",
        "secondary": "#1ca583",
        "accent": "#704cbf",
        "neutral": "#2B232F",
        "base-100": "#2C2D58",
        "info": "#6F9AD3",
        "success": "#117843",
        "warning": "#ECB44B",
        "error": "#F14B4E",
      }
    }],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "black",
  },
};