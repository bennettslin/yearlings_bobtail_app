import { getIsPhoneWidth } from '../responsive'
import { getIsLyricExpandable } from './responsive'

import {
    HEIGHTLESS_LYRIC_MIN,
    HEIGHTLESS_LYRIC_PHONE_MIN,
    HEIGHTLESS_LYRIC_MAX
} from '../../constants/responsive'

export const getIsHeightlessLyric = ({
    deviceWidthIndex,
    windowHeight,
    windowWidth
}) => {

    // Can't be heightless if it isn't expandable.
    if (!getIsLyricExpandable(deviceWidthIndex)) {
        return false
    }

    // It is never heightless when above the maximum.
    if (windowHeight > HEIGHTLESS_LYRIC_MAX) {
        return false
    }

    const minimumHeight = getIsPhoneWidth(deviceWidthIndex) ?
        HEIGHTLESS_LYRIC_PHONE_MIN :
        HEIGHTLESS_LYRIC_MIN

    // It is always heightless when below the minimum.
    if (windowHeight < minimumHeight) {
        return true
    }

    // Otherwise, it is heightless when width exceeds height.
    return windowWidth > windowHeight
}
