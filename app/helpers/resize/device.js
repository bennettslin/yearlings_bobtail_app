import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'

export const getWindowHeightAndWidth = (rootElement) => ({
    windowHeight: rootElement.getBoundingClientRect().height,
    windowWidth: window.innerWidth
})

export const getDeviceWidthIndex = () => {
    let deviceWidthIndex = 0

    while (
        deviceWidthIndex < DEVICE_WIDTH_CONFIGS.length - 1 &&
        window.innerWidth > DEVICE_WIDTH_CONFIGS[deviceWidthIndex].maxWidth
    ) {
        deviceWidthIndex++
    }

    return deviceWidthIndex
}
