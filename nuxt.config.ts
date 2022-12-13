
export default defineNuxtConfig({
    app:{
        head:{
            viewport: 'initial-scale=1, width=device-width, height=device-height, viewport-fit=cover',
            charset: 'UTF-8'
        },
    },
    css: ['animate.css/animate.min.css'],
    modules: ['@nuxtjs/tailwindcss',['@nuxtjs/google-fonts',{
        families: {
            'Space Grotesk': true,
        },
        download: true,
        display: 'auto',
    }]],
})
