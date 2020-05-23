import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'

export const getWindowDimensions = rootElement => {
    const
        windowHeight = rootElement.getBoundingClientRect().height,
        windowWidth = window.innerWidth

    return {
        windowHeight,
        windowWidth
    }
}

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
