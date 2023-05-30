module.exports = {
  mode: "jit",
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'apFont': ['"Space Grotesk"', 'sans-serif'],
        'apMonoFont': ['"Space Mono"', 'monospace'],
        'apThai': ['"IBM Plex Sans Thai"', 'sans-serif']
      },
      backgroundImage: {
        'profile': "url('/pics/arsanandhaOG.png')"
      },
      spacing: {
        '128': '32rem',
      }
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
        "primary": "#042c5a",
        "secondary": "#072a7d",
        "accent": "#1993be",
        "neutral": "#3c66bc",
        "base-100": "#002c48",
        "info": "#9B59B6",
        "success": "#E74C3C",
        "warning": "#f3730a",
        "error": "#bc0808"
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