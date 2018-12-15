import {
    getIsPhone,
    getIsMini
} from '../../../helpers/responsive'

import { getIsLyricExpandable } from './responsive'

import {
    UNRENDERABLE_NAV_MIN,
    HEIGHTLESS_LYRIC_MIN,
    HEIGHTLESS_LYRIC_MAX
} from '../../../constants/responsive'

const getIsUnrenderableCarouselNav = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {
    // Don't render carousel nav if it's a phone...
    const isUnrenderableCarouselNav = getIsPhone(deviceIndex) ||

    // If the height is below a minimum...
    windowHeight < UNRENDERABLE_NAV_MIN ||

    // Or if it's a heightless mini.
    (getIsMini(deviceIndex) && getIsHeightlessLyric({
        deviceIndex,
        windowHeight,
        windowWidth
    }))

    return isUnrenderableCarouselNav
}

const getIsHeightlessLyric = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {

    // It is only ever heightless in mobile.
    return getIsLyricExpandable(deviceIndex) &&

        // It is never heightless when above the max of 720...
        windowHeight < HEIGHTLESS_LYRIC_MAX &&

        // It is always heightless when below the min of 540...
        (windowHeight < HEIGHTLESS_LYRIC_MIN ||

        // Otherwise, it is heightless when width exceeds height.
        windowWidth > windowHeight)
}

export {
    getIsUnrenderableCarouselNav,
    getIsHeightlessLyric
}
