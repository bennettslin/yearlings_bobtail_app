import {
    getIsPhoneWidth,
    getIsMiniWidth,
    getIsDesktopWidth
} from '../responsive'
import {
    MIN_HEIGHT_WINDOW_FOR_CAROUSEL_NAV,
    HEIGHT_LYRIC_COLLAPSED
} from '../../constants/responsive'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'

export const getCanCarouselMount = ({
    deviceWidthIndex,
    windowHeight,
    isHeightlessLyric

}) => {

    // Carousel can mount if higher processor...
    return IS_USER_AGENT_DESKTOP &&

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

export const getCanScoreMount = deviceWidthIndex => (
    // Score can mount if higher processor and not phone width.
    IS_USER_AGENT_DESKTOP && !getIsPhoneWidth(deviceWidthIndex)
)

export const getCanSliderMount = deviceWidthIndex => (
    // Slider can mount if higher processor and desktop width.
    IS_USER_AGENT_DESKTOP && getIsDesktopWidth(deviceWidthIndex)
)

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
        return HEIGHT_LYRIC_COLLAPSED
    }

    const lyricDynamicHeight = (
        windowHeight
        - menuHeight
        - stageHeight
    ) / windowHeight

    return Number(lyricDynamicHeight.toFixed(2))
}

export const getLyricOverviewHeight = ({
    isLyricExpanded,
    lyricDynamicHeight,
    isLyricLogue,
    isHeightlessLyric,
    menuHeight

}) => (
    // Set to window height minus menu if...
    (
        // It's heightless in logue.
        (isLyricLogue && isHeightlessLyric) ||

        // It's expanded in song.
        (!isLyricLogue && isLyricExpanded)
    ) ?
        `calc(100% - ${menuHeight}px)` :
        `${lyricDynamicHeight * 100}%`
)
