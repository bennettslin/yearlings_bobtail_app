import {
    getIsPhone,
    getIsMini,
    getIsLyricExpandable
} from '../../../helpers/responsiveHelper'

import {
    HIDDEN_NAV_MIN,
    HEIGHTLESS_LYRIC_MIN,
    HEIGHTLESS_LYRIC_MAX
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
    (getIsMini(deviceIndex) && getIsHeightlessLyricColumn({
        deviceIndex,
        windowHeight,
        windowWidth
    }))

    return isHiddenCarouselNav
}

const getIsHeightlessLyricColumn = ({
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
    getIsHiddenCarouselNav,
    getIsHeightlessLyricColumn
}
