import {
    getIsPhoneWidth,
    getIsMiniWidth,
    getIsTabletWidth,
    getIsMonitorWidth
} from '../../../../helpers/responsive'

import {
    DEVICE_WIDTH_CONFIGS,
    MINI_WIDTH_CONFIG
} from '../../../../constants/responsive'

const _getShowShrunkNavIconForDeviceObject = (
    windowWidth,
    deviceObject
) => {
    const {
        doubleColumnStaticBreakpoint,
        doubleColumnShrinkBreakpoint,
        singleColumnStaticBreakpoint
    } = deviceObject

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
    windowWidth
}) => {
    const
        deviceObject = DEVICE_WIDTH_CONFIGS[deviceWidthIndex],
        isPhoneOrMini =
            getIsPhoneWidth(deviceWidthIndex) ||
            getIsMiniWidth(deviceWidthIndex)

    return _getShowShrunkNavIconForDeviceObject(
        windowWidth,
        isPhoneOrMini ? MINI_WIDTH_CONFIG : deviceObject
    )
}

export const getShowSingleNavBook = ({
    deviceWidthIndex, windowWidth
}) => {
    const deviceObject = DEVICE_WIDTH_CONFIGS[deviceWidthIndex]

    if (!getIsMonitorWidth(deviceWidthIndex) && !getIsTabletWidth(deviceWidthIndex)) {
        // Value for phone doesn't matter. Just keeps it from breaking.
        return true

    } else {
        return windowWidth < deviceObject.doubleColumnShrinkBreakpoint
    }
}
