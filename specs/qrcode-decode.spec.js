import decodeQRCodeElement from '../utils/decode-from-image';

const until = protractor.ExpectedConditions;

const Selectors = {
    YotiSign: {
        LOGIN_BUTTON_SELECTOR: 'a[href="/app/login"]',
        QR_CODE_SELECTOR: 'canvas',
    },
    YotiConnections: {
        LOGIN_BUTTON_SELECTOR: '.login',
        I_HAVE_YOTI_BUTTON_SELECTOR: '.login-intro__login_button',
        QR_CODE_SELECTOR: '#canvas',
    },
};

describe('QR Code - decode URL from QR Code', () => {
    it('Yoti Connections - should return the url from QR Code', async () => {
        browser.baseUrl = 'https://yoticonnections.com/';
        await browser.get(browser.baseUrl);

        const loginButton = element(by.css(Selectors.YotiConnections.LOGIN_BUTTON_SELECTOR));
        await browser.wait(until.presenceOf(loginButton));
        await loginButton.click();

        const iHaveYotiButton = element(by.css(Selectors.YotiConnections.I_HAVE_YOTI_BUTTON_SELECTOR));
        await browser.wait(until.presenceOf(iHaveYotiButton));
        await iHaveYotiButton.click();

        const qrCode = element(by.css(Selectors.YotiConnections.QR_CODE_SELECTOR));
        await browser.wait(until.presenceOf(qrCode));
        await decodeQRCodeElement(qrCode);
    });

    it('Yoti Sign - should return the url from QR Code', async () => {
        browser.baseUrl = 'https://www.yotisign.com';
        await browser.get(browser.baseUrl);

        const loginButton = element(by.css(Selectors.YotiSign.LOGIN_BUTTON_SELECTOR));
        await browser.wait(until.presenceOf(loginButton));
        await loginButton.click();

        const qrCode = element(by.css(Selectors.YotiSign.QR_CODE_SELECTOR));
        await browser.wait(until.presenceOf(qrCode));
        await decodeQRCode(qrCode);
    });
});
