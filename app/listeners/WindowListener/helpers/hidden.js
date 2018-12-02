import {
    getIsPhone,
    getIsMini
} from '../../../helpers/responsive'

import { getIsLyricExpandable } from './responsive'

import {
    HIDDEN_NAV_MIN,
    HIDDEN_LYRIC_MIN,
    HIDDEN_LYRIC_MAX
} from '../../../constants/responsive'

const getIsHiddenCarouselNav = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {
    // Hide carousel nav if it's a phone...
    const isHiddenCarouselNav = getIsPhone(deviceIndex) ||

    // If the height is below a minimum...
    windowHeight < HIDDEN_NAV_MIN ||

    // Or if it's a heightless mini.
    (getIsMini(deviceIndex) && getIsHiddenLyric({
        deviceIndex,
        windowHeight,
        windowWidth
    }))

    return isHiddenCarouselNav
}

const getIsHiddenLyric = ({
    deviceIndex,
    windowHeight,
    windowWidth
}) => {

    // It is only ever heightless in mobile.
    return getIsLyricExpandable(deviceIndex) &&

        // It is never heightless when above the max of 720...
        windowHeight < HIDDEN_LYRIC_MAX &&

        // It is always heightless when below the min of 540...
        (windowHeight < HIDDEN_LYRIC_MIN ||

        // Otherwise, it is heightless when width exceeds height.
        windowWidth > windowHeight)
}

export {
    getIsHiddenCarouselNav,
    getIsHiddenLyric
}
