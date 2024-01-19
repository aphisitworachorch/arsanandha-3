module.exports = {
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
  plugins: [require("daisyui"),require('tailwindcss-animatecss'),require('tailwind-scrollbar-hide')],
  daisyui: {
    styled: true,
    themes: [{
      "ap":{
        "primary": "#0d60c2",
        "secondary": "#072a7d",
        "accent": "#1993be",
        "neutral": "#3c66bc",
        "base-100": "#019eff",
        "info": "#27a963",
        "success": "#8da90f",
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