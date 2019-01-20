export const getMainDynamicHeight = ({
    canCarouselMount,
    lyricDynamicHeight,
    menuHeight,
    isDesktopWidth

}) => {
    if (isDesktopWidth || canCarouselMount) {
        return false
    }

    return `calc(${100 * (1 - lyricDynamicHeight)}% - ${menuHeight}px)`
}
