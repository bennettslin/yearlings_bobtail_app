import { getDocument } from '../utils/browser'
import {
    CSS_WIDTH_GOLDEN_CORD,
    CSS_WIDTH_UNCANNY_VALLEY,
} from '../constants/responsive/deviceWidth'

const getCarouselLeftAlign = ({
    windowWidth,
    isDesktopWidth,
    isMonitorWidth,
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

const getLyricTopAlign = ({
    isDesktopWidth,
    isLyricExpanded,
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
    isLyricExpanded,
}) => (
    isCarousel ?
        getCarouselLeftAlign({
            windowWidth,
            isDesktopWidth,
            isMonitorWidth,
        }) :
        getLyricTopAlign({
            isDesktopWidth,
            isLyricExpanded,
        })
)

export const getSafeScrollChild = ({
    log,
    scrollClass,
    index,

}) => {
    logError(
        `${log}\nNo ref found, scrolled by selector: ${selector}`,
        {
            action: 'scroll',
            label: `class: ${scrollClass}, index: ${index}`,
        },
    )

    /**
     * This is a fallback. As long as all refs have been set, it should
     * never get called.
     */
    const selector = Number.isFinite(index) ?
        `${scrollClass}__${index}` :
        scrollClass

    return getDocument().getElementsByClassName(selector)[0]
}

export const getCanCarouselAccessShow = ({
    inLyric,
    isCarouselShown,
    selectedDotsBit,
    isLyricLogue,
    lyricAnnotationIndex,
    isDotsSlideShown,
    isLyricExpanded,

}) => Boolean(
    /**
     * Must have at least one selected dot, and no selected
     * annotation.
     */
    selectedDotsBit &&
    !isLyricLogue,
    !lyricAnnotationIndex &&

    // Don't show in carousel if carousel is not shown.
    (inLyric || isCarouselShown) && (
        (
            // Must not have dots section open...
            !isDotsSlideShown
        ) || (
            // ... or else have lyric expanded.
            isLyricExpanded
        )
    ),
)

export const getCanLyricScroll = ({
    isPlaying,
    isLyricLogue,
    scrollLyricAlways,
    isAutoScrollLyricForPlay,
    isAutoScroll,
    isLyricExpanded,
    isHeightlessLyric,

}) => (
    !isLyricLogue && (
        !isHeightlessLyric ||
        isLyricExpanded
    ) && (
        // If paused, always scroll.
        !isPlaying ||

        // If selecting a new song or verse, always scroll.
        scrollLyricAlways ||

        /**
         * If autoScroll is on, only scroll from autoScroll, or else if
         * autoScroll is off, scroll from everything *but* autoScroll.
         */
        isAutoScrollLyricForPlay === isAutoScroll
    )
)
