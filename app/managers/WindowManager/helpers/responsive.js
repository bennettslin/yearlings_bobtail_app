import {
    getIsPhone,
    getIsMini
} from '../../../helpers/responsiveHelper'

import {
    DEVICE_OBJECTS,
    MINI_OBJECT,
    WIKI_SIDE_PADDING_TOTAL
} from '../../../constants/responsive'

const getIsMobileWiki = ({
    deviceIndex,
    windowWidth
}) => {

    // If phone or mini, show mobile wiki.
    if (getIsPhone(deviceIndex) || getIsMini(deviceIndex)) {
        return true

    } else {
        // Wikipedia in mobile seems to max out at 892px.
        const isMobileWiki = windowWidth - WIKI_SIDE_PADDING_TOTAL < 892

        return isMobileWiki
    }
}

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

export const getShowShrunkNavIcon = ({
    deviceIndex, windowWidth
}) => {
    const deviceObject = DEVICE_OBJECTS[deviceIndex],
        isPhoneOrMini = getIsPhone(deviceIndex) || getIsMini(deviceIndex)

    return _getShowShrunkNavIconForDeviceObject(
        windowWidth,
        isPhoneOrMini ? MINI_OBJECT : deviceObject
    )
}

export {
    getIsMobileWiki
}
