import {
    LS_HEIGHT_MENU,
    LS_HEIGHT_TWO_ROW_MENU
} from 'constants/responsive'

export const getLyricOverviewHeight = ({
    isLyricExpanded,
    lyricDynamicHeight,
    isLyricLogue,
    isHeightlessLyric,
    isTwoRowMenu
}) => {

    // Set to window height minus menu if...
    if (
        // It's heightless in logue.
        (isLyricLogue && isHeightlessLyric) ||

        // It's expanded in song.
        (!isLyricLogue && isLyricExpanded)
    ) {
        const menuHeight = isTwoRowMenu ?
            LS_HEIGHT_TWO_ROW_MENU :
            LS_HEIGHT_MENU

        return `calc(100% - ${menuHeight}px)`
    }

    return `${lyricDynamicHeight * 100}%`
}
