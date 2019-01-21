import { DEVICE_WIDTH_CONFIGS } from 'constants/responsive/deviceWidth'

export const getWindowHeightAndWidth = (rootElement) => {
    const { innerWidth } = window,

        rootHeight = rootElement.getBoundingClientRect().height

    return {
        windowHeight: rootHeight,
        windowWidth: innerWidth
    }
}

export const getDeviceWidthIndex = () => {
    const { innerWidth } = window
    let deviceWidthIndex = 0

    while (
        deviceWidthIndex < DEVICE_WIDTH_CONFIGS.length - 1 &&
        innerWidth > DEVICE_WIDTH_CONFIGS[deviceWidthIndex].maxWidth
    ) {
        deviceWidthIndex++
    }

    return deviceWidthIndex
}
