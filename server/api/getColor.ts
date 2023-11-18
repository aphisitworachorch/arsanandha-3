import {topColoursHex} from "@colour-extractor/colour-extractor";

export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    if (query.image) {
        const getImageColorDir = await topColoursHex(`public/${query.image.toString()}`);
        return {
            values: getImageColorDir
        };
    }
})