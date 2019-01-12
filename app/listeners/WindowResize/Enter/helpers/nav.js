import {
    getIsPhoneWidth,
    getIsMiniWidth,
    getIsTabletWidth,
    getIsMonitorWidth
} from '../../../../helpers/responsive'

import {
    DEVICE_OBJECTS,
    MINI_OBJECT
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
    deviceIndex,
    windowWidth
}) => {
    const
        deviceObject = DEVICE_OBJECTS[deviceIndex],
        isPhoneOrMini =
            getIsPhoneWidth(deviceIndex) ||
            getIsMiniWidth(deviceIndex)

    return _getShowShrunkNavIconForDeviceObject(
        windowWidth,
        isPhoneOrMini ? MINI_OBJECT : deviceObject
    )
}

export const getShowSingleNavBook = ({
    deviceIndex, windowWidth
}) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (!getIsMonitorWidth(deviceIndex) && !getIsTabletWidth(deviceIndex)) {
        // Value for phone doesn't matter. Just keeps it from breaking.
        return true

    } else {
        return windowWidth < deviceObject.doubleColumnShrinkBreakpoint
    }
}
