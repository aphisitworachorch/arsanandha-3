
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
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
