require('babel-register');

let screenShotUtils = require("protractor-screenshot-utils").ProtractorScreenShotUtils;

exports.config = {
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--headless',
            ],
        },
    },
    framework: 'mocha',
    specs: [
        './specs/*.spec.js'
    ],
    mochaOpts: {
        reporter: 'spec',
        timeout: 10000
    },
    onPrepare: async () => {
        browser.waitForAngularEnabled(false);
        browser.baseUrl = 'https://yoticonnections.com/';
        global.screenShotUtils = new screenShotUtils({
            browserInstance : browser
        });
    },
    onComplete: async () => {
        await browser.close();
    },
};
