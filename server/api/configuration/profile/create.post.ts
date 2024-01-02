import {FormData} from "node-fetch-native";
export default defineEventHandler(async (event) => {
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
    const form = new FormData();
    const content = Buffer.from(body?.image_src.split(',')[1],"base64");
    form.append("image_src",new Blob([content],{
        type: body?.image_type
    }), body?.image_name);
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
        body: form
    }).catch(error => console.log(error));
})