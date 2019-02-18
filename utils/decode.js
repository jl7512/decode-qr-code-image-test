import JSQR from 'jsqr';
import JIMP from 'jimp';

export default decode = async (imageFile) => {
    const image = await JIMP.read(imageFile);
    const value = await JSQR(image.bitmap.data, image.bitmap.width, image.bitmap.height);
    return value.data;
};
