import {
    getIsPhoneWidth,
    getIsDesktopWidth
} from 'helpers/responsive'

import {
    UNRENDERABLE_NAV_MIN,
    LS_HEIGHT_MENU,
    LS_HEIGHT_TWO_ROW_MENU,
    LS_HEIGHT_LYRIC_COLLAPSED
} from 'constants/responsive'

export const getCanScoreMount = ({
    deviceWidthIndex,
    isHigherProcessor
}) => {
    // Score can mount if higher processor and not phone width.
    return isHigherProcessor && !getIsPhoneWidth(deviceWidthIndex)
}

export const getCanSliderMount = ({
    deviceWidthIndex,
    isHigherProcessor
}) => {
    // Slider can mount if higher processor and desktop width.
    return isHigherProcessor && getIsDesktopWidth(deviceWidthIndex)
}

export const getCanCarouselMount = ({
    isHigherProcessor,
    deviceWidthIndex,
    windowHeight,
    isHeightlessLyric

}) => {

    // Carousel can mount if higher processor...
    return isHigherProcessor &&

        // and not heightless lyric...
        !isHeightlessLyric &&

        // and not phone...
        !getIsPhoneWidth(deviceWidthIndex) &&

        // and if window height is above minimum.
        windowHeight >= UNRENDERABLE_NAV_MIN
}

export const getLyricDynamicHeight = ({
    canCarouselMount,
    deviceWidthIndex,
    windowHeight,
    stageHeight,
    isHeightlessLyric

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

    const
        // This is a dynamic value.
        menuHeight = getIsPhoneWidth(deviceWidthIndex) ?
            LS_HEIGHT_TWO_ROW_MENU :
            LS_HEIGHT_MENU,

        rawHeight = (
            windowHeight
            - menuHeight
            - stageHeight
        ) / windowHeight

    return Number(rawHeight.toFixed(2))
}
