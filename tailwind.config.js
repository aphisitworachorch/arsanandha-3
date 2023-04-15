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
        "primary": "#4CAF50",
        "secondary": "#00BCD4",
        "accent": "#FFC107",
        "neutral": "#2ECC71",
        "base-100": "#3498DB",
        "info": "#9B59B6",
        "success": "#E74C3C",
        "warning": "#1ABC9C",
        "error": "#8BC34A"
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