import { LS_HEIGHT_LYRIC_COLLAPSED } from '../../constants/responsive'

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
        basePercentage = 100 * (1 - LS_HEIGHT_LYRIC_COLLAPSED)

    // Otherwise, subtract dynamic lyric height.
    } else {
        basePercentage = 100 * (1 - lyricDynamicHeight)
    }

    return `calc(${basePercentage}% - ${menuHeight}px)`
}
