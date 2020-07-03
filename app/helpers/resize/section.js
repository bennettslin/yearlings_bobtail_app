import { getIsDesktopWidth } from '../responsive'
import {
    HEIGHT_LYRIC_COLLAPSED,
    CSS_HEIGHT_MENU
} from '../../constants/responsive'

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

export const getLyricOverviewHeightStyle = ({
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

export const getMainHeight = ({
    canCarouselMount,
    lyricDynamicHeight,
    isHeightlessLyric,
    menuHeight,
    isDesktopWidth

}) => {
    let basePercentage

    // If desktop or heightless lyric, begin with full window height.
    if (isDesktopWidth || isHeightlessLyric) {
        basePercentage = 100

    // Otherwise, if carousel can mount, subtract collapsed lyric height.
    } else if (canCarouselMount) {
        basePercentage = 100 * (1 - HEIGHT_LYRIC_COLLAPSED)

    // Otherwise, subtract dynamic lyric height.
    } else {
        basePercentage = 100 * (1 - lyricDynamicHeight)
    }

    return `calc(${basePercentage}% - ${menuHeight}px)`
}

export const getLyricSectionRect = ({
    isLyricExpandable,
    canSliderMount,
    isDesktopWidth,
    windowHeight,
    isLyricExpanded,
    lyricDynamicHeight,
    menuHeight
}) => {
    const lyricSectionBottom = windowHeight
    let lyricSectionTop =
        isDesktopWidth ?
            CSS_HEIGHT_MENU :
            menuHeight

    if (!isLyricExpandable && !canSliderMount) {
        /**
         * If lyric is not expandable and there is no slider, then the lyric
         * section is just the entire window height. Otherwise, the top is the
         * menu height to accommodate the slider.
         */
        lyricSectionTop = 0

    } else if (isLyricExpandable && !isLyricExpanded) {
        /**
         * If lyric is expandable and it's collapsed, then use the stored
         * dynamic height. Otherwise, it's expanded and so the top is the menu
         * height.
         */
        lyricSectionTop = windowHeight * (1 - lyricDynamicHeight)
    }

    return JSON.stringify({
        lyricSectionTop,
        lyricSectionBottom
    })
}
