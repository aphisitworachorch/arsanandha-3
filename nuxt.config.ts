export default defineNuxtConfig({
    app:{
        pageTransition: { name: 'page', mode: 'out-in' },
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
    }],'@nuxt-alt/auth', '@pinia/nuxt',"nuxt-lodash",'nuxt-security',['nuxt-particles',{
        particles: {
            mode: 'slim',
            lazy: true
        }
    }]],
    nitro: {
        compressPublicAssets: {
            brotli: true,
        },
        storage: {
            redis: {
                driver: "redis",
                url: "",
            },
        },
    },
    auth:{
        stores:{
            state: {
                namespace: 'auth'
            },
            cookie: {
                enabled: true,
                prefix: 'auth.',
                options: {
                    path: '/',
                    domain: 'arsanandha.xyz',
                    sameSite: 'lax',
                    maxAge: 604800,
                    secure: true,
                },
            },
        },
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
                    userInfo: `/api/auth/user`,
                    logout: '/'
                },
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
                codeChallengeMethod: 'S256',
                autoLogout: true
            }
        },
        redirect: {
            login:'/insider/login',
            logout:'/insider/logout',
            callback:'/insider/login',
            home: '/'
        }
    },
    runtimeConfig:{
        public:{
            API_URL: process.env.API_URL,
            BREWER_API_URL: process.env.BREWER_API_URL,
            NEXT_V_API_URL: process.env.NEXT_V_API_URL,
            ENABLE_NEXT_V_API: true,
            auth:{
                strategies:{
                    azure_ad: {
                        endpoints: {
                            authorization: '',
                            token: '',
                        },
                        redirectUri: '',
                        audience: '',
                        clientId: '',
                        clientSecret: '',
                        scope: [''],
                    }
                }
            },
        },
        API_KEY: process.env.API_KEY,
        BREWER_API_KEY: process.env.BREWER_API_KEY
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
                'script-src-attr': [
                    "'none'"
                ],
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
                        'geolocation':['self','https://arsanandha.xyz','https://*.arsanandha.xyz'],
                    }
                }
            }
        },
        '/viewprofile':{
            security:{
                headers: {
                    contentSecurityPolicy:{
                        'script-src-attr': ["'unsafe-inline'"],
                    }
                }
            }
        },
        "/": {
            cache: {
                maxAge: 5
            }
        },
        "/about": {
            cache: {
                maxAge: 60
            }
        },
        "/skills": {
            cache: {
                maxAge: 60
            }
        },
    },
    particles: {
        mode: 'slim'
    }
})
