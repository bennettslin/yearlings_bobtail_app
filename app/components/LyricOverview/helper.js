export const getLyricOverviewHeight = ({
    isLyricExpanded,
    lyricDynamicHeight,
    isLyricLogue,
    isHeightlessLyric,
    menuHeight
}) => {

    // Set to window height minus menu if...
    if (
        // It's heightless in logue.
        (isLyricLogue && isHeightlessLyric) ||

        // It's expanded in song.
        (!isLyricLogue && isLyricExpanded)
    ) {

        return `calc(100% - ${menuHeight}px)`
    }

    return `${lyricDynamicHeight * 100}%`
}
