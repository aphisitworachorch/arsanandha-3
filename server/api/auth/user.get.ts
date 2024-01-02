export default defineEventHandler(async (event) => {
    const authorization = event.headers.get('authorization');
    if (!authorization) {
        return {
            statusCode: 403,
            message: "Unauthorized",
            data: ""
        }
    }
    /**
     * Login
     */
    const runtimeConfig = useRuntimeConfig();
    return await $fetch(`${runtimeConfig.public.API_URL}/insider/me`, {
        headers: {
            'Authorization': authorization,
            'x-api-key': runtimeConfig.API_KEY,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
        },
        server: true,
        lazy: true
    }).catch(error => console.log(error));
})