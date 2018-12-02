import {
    getIsPhone,
    getIsMini,
    getIsTablet,
    getIsMonitor
} from '../../../helpers/responsive'

import {
    DEVICE_OBJECTS,
    MINI_OBJECT
} from '../../../constants/responsive'

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
        ((doubleColumnShrinkBreakpoint && windowWidth >= doubleColumnShrinkBreakpoint) &&
        (doubleColumnStaticBreakpoint && windowWidth < doubleColumnStaticBreakpoint))
}

const getShowShrunkNavIcon = ({
    deviceIndex, windowWidth
}) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex],
        isPhoneOrMini = getIsPhone(deviceIndex) || getIsMini(deviceIndex)

    return _getShowShrunkNavIconForDeviceObject(
        windowWidth,
        isPhoneOrMini ? MINI_OBJECT : deviceObject
    )
}

const getShowSingleNavBook = ({
    deviceIndex, windowWidth
}) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex]

    if (!getIsMonitor(deviceIndex) && !getIsTablet(deviceIndex)) {
        // Value for phone doesn't matter. Just keeps it from breaking.
        return true

    } else {
        return windowWidth < deviceObject.doubleColumnShrinkBreakpoint
    }
}

export {
    getShowShrunkNavIcon,
    getShowSingleNavBook
}
