import { DEVICE_WIDTH_CONFIGS } from '../../../../constants/responsive'

export const resizeWindow = ({
    innerHeight,
    innerWidth
} = window) => {

    let deviceWidthIndex = 0

    while (
        deviceWidthIndex < DEVICE_WIDTH_CONFIGS.length - 1 &&
        innerWidth > DEVICE_WIDTH_CONFIGS[deviceWidthIndex].maxWidth
    ) {
        deviceWidthIndex++
    }

    return {
        deviceWidthIndex,
        windowHeight: innerHeight,
        windowWidth: innerWidth
    }
}
