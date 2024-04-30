import {FormData} from "node-fetch-native";
export default defineEventHandler(async (event) => {
    try{
        const body = await readBody(event);
        /**
         * Login
         */
        const runtimeConfig = useRuntimeConfig();
        return await $fetch(`${runtimeConfig.public.BREWER_API_URL}/applications/list`, {
            method: 'post',
            headers: {
                'x-api-key': runtimeConfig.BREWER_API_KEY,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            server: true,
            lazy: true,
            body: {
                search: body.search,
                pageSize: body.pageSize,
                pageNumber: body.pageNumber,
                competitionRounds: body?.competitionRounds
            }
        }).catch(error => console.log(error.response));
    }catch(error){
        console.log(error);
    }
})