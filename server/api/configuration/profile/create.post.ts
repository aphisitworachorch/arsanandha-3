import {FormData} from "node-fetch-native";
export default defineEventHandler(async (event) => {
    try{
        const authorization = event.headers.get('authorization');
        if (!authorization) {
            return {
                statusCode: 403,
                message: "Unauthorized",
                data: ""
            }
        }
        const body = await readBody(event);
        /**
         * Login
         */
        const runtimeConfig = useRuntimeConfig();
        return await $fetch(`${runtimeConfig.public.API_URL}/insider/configuration/profile`, {
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
            body: {
                image_payload: body?.image_src.split(',')[1],
                image_mimetype: body?.image_type,
                image_filename: body?.image_name
            }
        }).catch(error => console.log(error.response));
    }catch(error){
        console.log(error);
    }
})