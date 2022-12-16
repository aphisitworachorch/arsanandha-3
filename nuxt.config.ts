
export default defineNuxtConfig({
    app:{
        head:{
            viewport: 'width=device-width, initial-scale=1',
            charset: 'UTF-8',
            htmlAttrs: {
                lang: 'en'
            }
        },
    },
    css: ['animate.css/animate.min.css'],
    modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge',['@nuxtjs/google-fonts',{
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
