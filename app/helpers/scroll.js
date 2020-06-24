import {
    CSS_WIDTH_GOLDEN_CORD,
    CSS_WIDTH_UNCANNY_VALLEY
} from '../constants/responsive/deviceWidth'

const _getCarouselLeftAlign = ({
    windowWidth,
    isDesktopWidth,
    isMonitorWidth
}) => {

    // If mobile, then set halfway, which is the default.
    if (!isDesktopWidth) {
        return null

    } else {
        const
            earColumnWidth =
                isMonitorWidth ?
                    CSS_WIDTH_GOLDEN_CORD :
                    CSS_WIDTH_UNCANNY_VALLEY,

            centreFieldWidth = windowWidth - earColumnWidth,

            // Percentage. It would be 0.5 if not for the lyric column.
            left = (centreFieldWidth * 0.5) / windowWidth

        /**
         * Not sure why this doesn't exactly centre the annotation, but
         * whatever.
         */
        return { left }
    }
}

const _getLyricTopAlign = ({
    isDesktopWidth,
    isLyricExpanded
}) => {

    // If in desktop or lyric column is expanded, set closer to top.
    if (isDesktopWidth || isLyricExpanded) {

        /**
         * This doesn't accommodate menu height with desktop processor, but
         * this is fine for now.
         */
        return { top: 0.33 }

    // Otherwise set halfway, which is the default.
    } else {
        return null
    }
}

export const getAlignForScroll = ({
    isCarousel,
    windowWidth,
    isDesktopWidth,
    isMonitorWidth,
    isLyricExpanded
}) => (
    isCarousel ?
        _getCarouselLeftAlign({
            windowWidth,
            isDesktopWidth,
            isMonitorWidth
        }) :
        _getLyricTopAlign({
            isDesktopWidth,
            isLyricExpanded
        })
)
