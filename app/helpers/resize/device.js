import { getWindow } from '../../utils/browser'
import { DEVICE_WIDTH_CONFIGS } from '../../constants/responsive/deviceWidth'

export const getWindowDimensions = rootElement => {
    const
        windowHeight =
            rootElement ?
                rootElement.getBoundingClientRect().height :
                getWindow().innerHeight,
        windowWidth = getWindow().innerWidth

    return {
        windowHeight,
        windowWidth,
    }
}

export const getDeviceWidthIndex = windowWidth => {
    let deviceWidthIndex = 0

    while (
        deviceWidthIndex < DEVICE_WIDTH_CONFIGS.length - 1 &&
        windowWidth > DEVICE_WIDTH_CONFIGS[deviceWidthIndex].maxWidth
    ) {
        deviceWidthIndex++
    }

    return deviceWidthIndex
}
