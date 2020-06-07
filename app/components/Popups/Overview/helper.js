export const getIsOverviewVisibleBySection = ({
    inMain,
    isLyricLogue

}) => {
    // If in song, show in main. Otherwise, show in lyric.
    return inMain !== isLyricLogue
}

export const getIsOverviewVisibleBySong = ({
    isLyricLogue,
    isOverlayShown,
    isLogueOverviewShown,
    isOverviewShown,
    isTipsShown

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
            !isTipsShown &&
            isOverviewShown
        )
    }
}
