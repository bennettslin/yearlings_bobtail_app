export const getIsToggleInOverview = ({
    isPhoneWidth,
    isHeightlessLyric,
    isLyricLogue

}) => {
    // If in logue, show toggle in overview if heightless.
    if (isLyricLogue) {
        return isHeightlessLyric

    // If in song, show toggle in overview if it's a phone.
    } else {
        return isPhoneWidth
    }
}

export const getIsOverviewVisibleBySection = ({
    inMain,
    isLyricLogue

}) => (
    // If in song, show in main. Otherwise, show in lyric.
    inMain !== isLyricLogue
)

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
