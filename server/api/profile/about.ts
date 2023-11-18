export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const val = await $fetch(`${runtimeConfig.public.API_URL}/profile`,{
        headers:{
            'x-api-key': runtimeConfig.API_KEY,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
        },
        server: true,
        lazy: true,
    }).catch(error => console.log(error));
    return val;
})