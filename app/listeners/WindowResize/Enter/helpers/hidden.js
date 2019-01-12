import {
    getIsPhoneWidth,
    getIsMiniWidth
} from '../../../../helpers/responsive'

import { getIsLyricExpandable } from './responsive'

import {
    UNRENDERABLE_NAV_MIN,
    HEIGHTLESS_LYRIC_MIN,
    HEIGHTLESS_LYRIC_PHONE_MIN,
    HEIGHTLESS_LYRIC_MAX
} from '../../../../constants/responsive'

export const getIsUnrenderableCarouselNav = ({
    deviceIndex,
    windowHeight,
    windowWidth,
    isHeightlessLyric
}) => {
    const isUnrenderableCarouselNav =
        // Don't render carousel nav if it's heightless lyric...
        isHeightlessLyric ||

        // Or if it's a phone...
        getIsPhoneWidth(deviceIndex) ||

        // If the height is below a minimum...
        windowHeight < UNRENDERABLE_NAV_MIN ||

        // Or if it's a heightless mini.
        (getIsMiniWidth(deviceIndex) && getIsHeightlessLyric({
            deviceIndex,
            windowHeight,
            windowWidth
        }))

    return isUnrenderableCarouselNav
}

export const getIsHeightlessLyric = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {

    // Can't be heightless if it isn't expandable.
    if (!getIsLyricExpandable(deviceIndex)) {
        return false
    }

    // It is never heightless when above the maximum.
    if (windowHeight > HEIGHTLESS_LYRIC_MAX) {
        return false
    }

    const minimumHeight = getIsPhoneWidth(deviceIndex) ?
        HEIGHTLESS_LYRIC_PHONE_MIN :
        HEIGHTLESS_LYRIC_MIN

    // It is always heightless when below the minimum.
    if (windowHeight < minimumHeight) {
        return true
    }

    // Otherwise, it is heightless when width exceeds height.
    return windowWidth > windowHeight
}
