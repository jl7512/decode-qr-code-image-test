import screenshotElement from './screenshot-element';
import decodeQRCode from './decode';

export default decodeQRCodeElement = async(qrCodeElement) => {
    const fileName = './qr-code.png';
    await screenshotElement(qrCodeElement, fileName);
    return decodeQRCode(fileName);
};
