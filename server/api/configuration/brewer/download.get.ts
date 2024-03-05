import {FormData} from "node-fetch-native";
export default defineEventHandler(async (event) => {
    try{
        /**
         * Login
         */

        console.log("Download file");
        const runtimeConfig = useRuntimeConfig();
        return await $fetch(`${runtimeConfig.public.BREWER_API_URL}/applications/export`, {
            method: 'get',
            headers: {
                'x-api-key': runtimeConfig.BREWER_API_KEY,
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Credentials": "true"
            },
            server: true,
            lazy: true
        }).catch(error => console.log(error.response));
    }catch(error){
        console.log(error);
    }
})