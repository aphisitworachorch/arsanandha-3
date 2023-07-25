import {RenderResponse} from "nitropack";
import {NuxtRenderResponse} from "nuxt/dist/core/runtime/nitro/renderer";

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:response', (response: Partial<NuxtRenderResponse>) => {
        delete response.headers['x-powered-by'];
    })
})