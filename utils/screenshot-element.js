export default screenshotElement = async (element, fileName) => {
    await screenShotUtils.takeScreenshot({
        element : element,
        saveTo: fileName
    })
};
