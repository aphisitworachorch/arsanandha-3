
export default defineNuxtConfig({
    app:{
        head:{
            viewport: 'initial-scale=1, width=device-width, height=device-height, viewport-fit=cover',
            charset: 'UTF-8',
            htmlAttrs: {
                lang: 'en'
            }
        },
    },
    css: ['animate.css/animate.min.css'],
    modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge','@kevinmarrec/nuxt-pwa',['@nuxtjs/google-fonts',{
        families: {
            'Space Grotesk': true,
            'Space Mono': true,
        },
        download: true,
        display: 'auto',
    }]],
    nitro: {
        compressPublicAssets: true,
    },
})
