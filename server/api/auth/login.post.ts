interface ILoginBody {
    username: string;
    password: string;
}

interface IResponse<T> {
    status: number;
    data: T;
    message: string;
}
export default defineEventHandler(async (event) => {
    const body: ILoginBody = await readBody(event);

    /**
     * Login
     */
    const runtimeConfig = useRuntimeConfig();
    const fetchData = await $fetch(`${runtimeConfig.public.API_URL}/insider/login`,{
        method: 'post',
        headers:{
            'x-api-key': runtimeConfig.API_KEY,
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Credentials": "true",
        },
        server: true,
        lazy: true,
        body
    }).catch(error => console.log(error));
    return fetchData;
})