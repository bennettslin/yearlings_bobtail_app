import {
    getIsPhoneWidth,
    getIsMiniWidth,
    getIsTabletWidth,
    getIsMonitorWidth,
} from '../responsive'
import {
    DEVICE_WIDTH_CONFIGS,
    MINI_WIDTH_CONFIG,
} from '../../constants/responsive/deviceWidth'

const _getShowShrunkNavIconForDeviceObject = (
    windowWidth,
    deviceWidthConfig
) => {
    const {
        doubleColumnStaticBreakpoint,
        doubleColumnShrinkBreakpoint,
        singleColumnStaticBreakpoint,
    } = deviceWidthConfig

    return windowWidth < singleColumnStaticBreakpoint ||
        (
            (
                Boolean(doubleColumnShrinkBreakpoint) &&
                windowWidth >= doubleColumnShrinkBreakpoint
            ) && (
                Boolean(doubleColumnStaticBreakpoint) &&
                windowWidth < doubleColumnStaticBreakpoint
            )
        )
}

export const getShowShrunkNavIcon = ({
    deviceWidthIndex,
    windowWidth,
}) => {
    const
        isPhoneOrMini =
            getIsPhoneWidth(deviceWidthIndex) ||
            getIsMiniWidth(deviceWidthIndex)

    return _getShowShrunkNavIconForDeviceObject(
        windowWidth,
        isPhoneOrMini ?
            MINI_WIDTH_CONFIG :
            DEVICE_WIDTH_CONFIGS[deviceWidthIndex]
    )
}

export const getShowSingleNavBook = ({
    deviceWidthIndex,
    windowWidth,
}) => {
    const deviceWidthConfig = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]

    if (!getIsMonitorWidth(deviceWidthIndex) && !getIsTabletWidth(deviceWidthIndex)) {
        // Value for phone doesn't matter. Just keeps it from breaking.
        return true

    } else {
        return windowWidth < deviceWidthConfig.doubleColumnShrinkBreakpoint
    }
}
