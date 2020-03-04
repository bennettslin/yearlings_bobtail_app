import {
    getIsPhoneWidth,
    getIsMiniWidth,
    getIsDesktopWidth
} from 'helpers/responsive'

import {
    MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV,
    LS_HEIGHT_LYRIC_COLLAPSED
} from 'constants/responsive'

export const getCanScoreMount = ({
    deviceWidthIndex,
    isUserAgentMobile
}) => {
    // Score can mount if higher processor and not phone width.
    return isUserAgentMobile && !getIsPhoneWidth(deviceWidthIndex)
}

export const getCanSliderMount = ({
    deviceWidthIndex,
    isUserAgentMobile
}) => {
    // Slider can mount if higher processor and desktop width.
    return isUserAgentMobile && getIsDesktopWidth(deviceWidthIndex)
}

export const getCanCarouselMount = ({
    isUserAgentMobile,
    deviceWidthIndex,
    windowHeight,
    isHeightlessLyric

}) => {

    // Carousel can mount if higher processor...
    return isUserAgentMobile &&

        // and not heightless lyric...
        !isHeightlessLyric &&

        // and not phone or mini width...
        !(
            getIsPhoneWidth(deviceWidthIndex) ||
            getIsMiniWidth(deviceWidthIndex)
        ) &&

        // and if window height is above minimum.
        windowHeight >= MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV
}

export const getLyricDynamicHeight = ({
    canCarouselMount,
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    isHeightlessLyric,
    menuHeight

}) => {

    // Desktop is always 100%.
    if (getIsDesktopWidth(deviceWidthIndex)) {
        return 1

    // Heightless lyric is 0%, obviously.
    } else if (isHeightlessLyric) {
        return 0

    /**
     * If carousel is mounted, then stage will sit right above lyric to give it
     * room. In which case, set the lyric to this constant value.
     */
    } else if (canCarouselMount) {
        return LS_HEIGHT_LYRIC_COLLAPSED
    }

    const lyricDynamicHeight = (
        windowHeight
        - menuHeight
        - stageHeight
    ) / windowHeight

    return Number(lyricDynamicHeight.toFixed(2))
}
