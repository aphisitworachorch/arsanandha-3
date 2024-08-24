export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    if (runtimeConfig.public.ENABLE_NEXT_V_API == true) {
        const qry = await readBody(event);
        const val = await $fetch(`${runtimeConfig.public.NEXT_V_API_URL}/api/front/thankful/${qry.id}`,{
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
    }
})