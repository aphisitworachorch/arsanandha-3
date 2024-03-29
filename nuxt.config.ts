export default defineNuxtConfig({
    app:{
        head:{
            viewport: 'width=device-width, initial-scale=1',
            charset: 'UTF-8',
            htmlAttrs: {
                lang: 'en'
            },
            link: [
                { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '../icon/apple-touch-icon-57x57.png' },
                { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: '../icon/apple-touch-icon-114x114.png' },
                { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: '../icon/apple-touch-icon-72x72.png' },
                { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: '../icon/apple-touch-icon-144x144.png' },
                { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: '../icon/apple-touch-icon-60x60.png' },
                { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: '../icon/apple-touch-icon-120x120.png' },
                { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: '../icon/apple-touch-icon-76x76.png' },
                { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: '../icon/apple-touch-icon-152x152.png' },
                { rel: 'icon', type: 'image/png', href: '../icon/favicon-196x196.png', sizes: '196x196' },
                { rel: 'icon', type: 'image/png', href: '../icon/favicon-96x96.png', sizes: '96x96' },
                { rel: 'icon', type: 'image/png', href: '../icon/favicon-32x32.png', sizes: '32x32' },
                { rel: 'icon', type: 'image/png', href: '../icon/favicon-16x16.png', sizes: '16x16' },
                { rel: 'icon', type: 'image/png', href: '../icon/favicon-128.png', sizes: '128x128' }
            ],
            meta: [
                { name: 'application-name', content: 'ARSANANDHA.XYZ' },
                { name: 'theme-color', content: '#043295' },
                { name: 'msapplication-TileColor', content: '#043295' },
                { name: 'msapplication-TileImage', content: '../icon/mstile-144x144.png' },
                { name: 'msapplication-square70x70logo', content: '../icon/mstile-70x70.png' },
                { name: 'msapplication-square150x150logo', content: '../icon/mstile-150x150.png' },
                { name: 'msapplication-wide310x150logo', content: '../icon/mstile-310x150.png' },
                { name: 'msapplication-square310x310logo', content: '../icon/mstile-310x310.png' }
            ]
        },
    },
    css: ['animate.css/animate.min.css'],
    modules: ['@nuxtjs/tailwindcss','@nuxt/image-edge','@vueuse/nuxt',['@nuxtjs/google-fonts',{
        families: {
            'Space Grotesk': true,
            'Space Mono': true,
            'IBM Plex Sans Thai': true,
        },
        download: true,
        base64: true,
        display: 'auto',
    }],'@nuxt-alt/auth', '@pinia/nuxt',"nuxt-lodash"],
    nitro: {
        compressPublicAssets: true,
    },
    runtimeConfig:{
        public:{
            API_URL: process.env.API_URL
        },
        API_KEY: process.env.API_KEY
    },
    auth:{
        token: {
            prefix: '_token.',
            global: true,
        }
    },
    vite: {
        optimizeDeps: { exclude: ["@colour-extractor/colour-extractor"] },
    }
})
