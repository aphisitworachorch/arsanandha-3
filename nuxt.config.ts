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
        display: 'auto',
    }],'@nuxt-alt/auth', '@pinia/nuxt',"nuxt-lodash",'nuxt-security'],
    nitro: {
        compressPublicAssets: {
            brotli: true,
        },
    },
    runtimeConfig:{
        public:{
            API_URL: process.env.API_URL
        },
        API_KEY: process.env.API_KEY,
        private:{
            AZ_TENANT_ID: process.env.AZ_TENANT_ID,
            AZ_REDIRECT_URI: process.env.AZ_REDIRECT_URI,
            AZ_AUDIENCE: process.env.AZ_AUDIENCE,
            AZ_CLIENT_ID: process.env.AZ_CLIENT_ID,
            AZ_CLIENT_SECRET: process.env.AZ_CLIENT_SECRET,
        },
    },
    security:{
        nonce: true,
        ssg: {
            hashScripts: true,
            hashStyles: false
        },
        xssValidator:{
            throwError: true
        },
        requestSizeLimiter: {
            maxRequestSizeInBytes: 104857600,
            maxUploadFileRequestInBytes: 20971520,
            throwError: true,
        },
        headers: {
            crossOriginEmbedderPolicy: 'credentialless',
            xXSSProtection: '1; mode=block',
            xDNSPrefetchControl: 'on',
            contentSecurityPolicy: {
                'script-src': [
                    "'self'",
                    "https:",
                    "'unsafe-inline'",
                    "'strict-dynamic'",
                    "'nonce-{{nonce}}'"
                ],
                'style-src': [
                    "'self'",
                    "https:",
                    "'unsafe-inline'"
                ],
                'img-src': ['self','data:','https:','http:', 'https://*.arsanandha.xyz', '*.unsplash.com', 'unsplash.com'],
                'font-src': ["'self'", "https:", "data:"],
                'base-uri': ["'none'"],
                'object-src': ["'none'"],
                'script-src-attr': ["'none'"],
                'form-action': ["'self'"],
                'frame-ancestors': ["'self'"],
                'upgrade-insecure-requests': true
            }
        },
        sri: true
    },
    routeRules:{
        '/weather':{
            security:{
                headers: {
                    permissionsPolicy:{
                        'geolocation':['self','https://arsanandha.xyz','https://*.arsanandha.xyz']
                    }
                }
            }
        }
    },
    auth:{
        strategies: {
            local: {
                token: {
                    property: 'data.accessToken',
                    global: true,
                    required: true,
                    type: 'Bearer',
                },
                user: {
                    property: 'data',
                    autoFetch: true
                },
                endpoints: {
                    login: { url: '/api/auth/login', method: 'post' },
                    logout: { url: '/api/auth/logout', method: 'post' },
                    user: { url: '/api/auth/user', method: 'get' }
                },
            },
            azure_ad: {
                scheme: '~/schemes/azure-ad',
                endpoints: {
                    authorization: `https://login.microsoftonline.com/${process.env.AZ_TENANT_ID}/oauth2/v2.0/authorize`,
                    token: `https://login.microsoftonline.com/${process.env.AZ_TENANT_ID}/oauth2/v2.0/token`,
                    userInfo: `/api/auth/user`,
                    logout: '/'
                },
                redirectUri: process.env.AZ_REDIRECT_URI,
                token: {
                    property: 'access_token',
                    type: 'Bearer',
                    maxAge: 1800
                },
                refreshToken: {
                    property: 'refresh_token',
                    maxAge: 60 * 60 * 24 * 30
                },
                responseType: 'code',
                grantType: 'authorization_code',
                accessType: 'online',
                audience: process.env.AZ_AUDIENCE,
                clientId: process.env.AZ_CLIENT_ID,
                clientSecret: process.env.AZ_CLIENT_SECRET,
                codeChallengeMethod: 'S256',
                scope: [`https://arsanandha.onmicrosoft.com/${process.env.AZ_AUDIENCE}/Insider.All`],
                autoLogout: true
            },
        },
        redirect: {
            login:'/insider/login',
            logout:'/insider/logout',
            callback:'/insider/login',
            home: '/'
        }
    }
})
