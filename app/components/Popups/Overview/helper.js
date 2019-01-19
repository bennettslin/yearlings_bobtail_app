import { SHOWN } from 'constants/options'

export const getIsOverviewVisibleBySection = ({
    inMain,
    isLyricLogue,
    isHeightlessLyric

}) => {
    // If in song or heightless logue, show in main. Otherwise, show in lyric.
    const showInMain = !isLyricLogue || (isLyricLogue && isHeightlessLyric)

    return inMain === showInMain
}

export const getIsOverviewVisibleBySong = ({
    isLyricLogue,
    isOverlayShown,
    isLogueOverviewShown,
    selectedTipsOption,
    selectedOverviewOption

}) => {
    // If in logue, hide when overlay is shown.
    if (isLyricLogue) {
        return (
            !isOverlayShown &&
            isLogueOverviewShown
        )

    // If in song, hide when tip is shown.
    } else {
        return (
            selectedTipsOption !== SHOWN &&
            selectedOverviewOption === SHOWN
        )
    }
}
