
export default defineNuxtConfig({
    app:{
        head:{
            viewport: 'initial-scale=1, width=device-width, height=device-height, viewport-fit=cover',
            charset: 'UTF-8'
        },
    },
    modules: ['@nuxtjs/tailwindcss'],
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        families: {
            'Space Grotesk': true,
        },
        download: true,
        display: 'auto',
    },
})
