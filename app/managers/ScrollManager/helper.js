import {
    getIsDesktop,
    getIsMonitor
} from '../../helpers/responsiveHelper'

import {
    LS_WIDTH_GOLDEN_CORD,
    LS_WIDTH_UNCANNY_VALLEY
} from '../../constants/responsive'

const getLyricTopAlign = (deviceIndex, isLyricExpanded) => {

    // If in desktop or lyric column is expanded, set closer to top.
    if (getIsDesktop(deviceIndex) || isLyricExpanded) {
        return {
            top: 0.33
        }

    // Otherwise set halfway, which is the default.
    } else {
        return null
    }
}

const getCarouselLeftAlign = (
    deviceIndex,
    windowWidth
) => {

    // If mobile, then set halfway, which is the default.
    if (!getIsDesktop(deviceIndex)) {
        return null

    } else {
        const
            lyricColumnWidth =
                getIsMonitor(deviceIndex) ?
                    LS_WIDTH_GOLDEN_CORD :
                    LS_WIDTH_UNCANNY_VALLEY,

            centreFieldWidth = windowWidth - lyricColumnWidth,

            // Percentage. It would be 0.5 if not for the lyric column.
            left = (centreFieldWidth * 0.5) / windowWidth

        /**
         * Not sure why this doesn't exactly centre the annotation, but
         * whatever.
         */
        return {
            left
            // leftOffset
        }
    }
}

export {
    getLyricTopAlign,
    getCarouselLeftAlign
}
