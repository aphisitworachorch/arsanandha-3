export default defineNuxtPlugin(({ $auth, $config }) => {
    $auth.strategies.azure_ad.options.endpoints.authorization = `https://login.microsoftonline.com/${$config.AZ_TENANT_ID}/oauth2/v2.0/authorize`;
    $auth.strategies.azure_ad.options.endpoints.token = `https://login.microsoftonline.com/${$config.AZ_TENANT_ID}/oauth2/v2.0/token`
    $auth.strategies.azure_ad.options.redirectUri = $config.AZ_REDIRECT_URI
    $auth.strategies.azure_ad.options.audience = $config.AZ_AUDIENCE
    $auth.strategies.azure_ad.options.clientId = $config.AZ_CLIENT_ID
    $auth.strategies.azure_ad.options.clientSecret = $config.AZ_CLIENT_SECRET
    $auth.strategies.azure_ad.options.scope = [`https://arsanandha.onmicrosoft.com/${$config.AZ_AUDIENCE}/Insider.All`]
})