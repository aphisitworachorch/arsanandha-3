interface IWeatherConfigurationCreate {
    enableWeatherScrape: boolean;
    enableLINENotify: boolean;
    cronJob: string;
}
export default defineEventHandler(async (event) => {
    const authorization = event.headers.get('authorization');
    if (!authorization) {
        return {
            statusCode: 403,
            message: "Unauthorized",
            data: ""
        }
    }
    const body: IWeatherConfigurationCreate = await readBody(event);
    /**
     * Login
     */
    const runtimeConfig = useRuntimeConfig();
    return await $fetch(`${runtimeConfig.public.API_URL}/insider/configuration/weather`, {
        method: 'post',
        headers: {
            'Authorization': authorization,
            'x-api-key': runtimeConfig.API_KEY,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true"
        },
        server: true,
        lazy: true,
        body
    }).catch(error => console.log(error));
})