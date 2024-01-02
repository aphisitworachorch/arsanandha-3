export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    return await $fetch(`${runtimeConfig.public.API_URL}/insider/configuration/profile`, {
        method: 'get',
        headers: {
            'x-api-key': runtimeConfig.API_KEY,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
        },
        server: true,
        lazy: true
    }).catch(error => console.log(error));
})