import * as ColorThief from 'colorthief';
import sharp from "sharp";
function componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(color: number[]) {
    return "#" + componentToHex(color[0]) + componentToHex(color[1]) + componentToHex(color[2]);
}

interface IQueryImage {
    image: string;
}
export default defineEventHandler(async (event) => {
    const query:IQueryImage = await readBody(event);
    if (query.image) {
        const getcolor = await ColorThief.getPalette(query.image,11);
        return {
            values: [rgbToHex(getcolor[0]),rgbToHex(getcolor[3]),rgbToHex(getcolor[4])]
        };
    }
})