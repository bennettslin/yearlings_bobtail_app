import {
    LS_HEIGHT_MENU,
    LS_HEIGHT_TWO_ROW_MENU
} from 'constants/responsive'

export const getMainDynamicHeight = ({
    canCarouselMount,
    lyricHeightRatio,
    isTwoRowMenu,
    isDesktopWidth

}) => {
    if (isDesktopWidth || canCarouselMount) {
        return false
    }

    const menuHeight =
        isTwoRowMenu ?
            LS_HEIGHT_TWO_ROW_MENU :
            LS_HEIGHT_MENU

    return `calc(${100 * (1 - lyricHeightRatio)}% - ${menuHeight}px)`
}
