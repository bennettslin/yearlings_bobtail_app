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

export const getIsOverviewPopupVisible = ({
    inMain,
    isSongChangeDone,
    isLyricLogue,
    isOverlayShown,
    isOverviewShown

}) => (
    isSongChangeDone &&

        // If in song, show in main. Otherwise, show in lyric.
        inMain !== isLyricLogue &&

        (
            isLyricLogue ?

                // If in logue, show when overlay is hidden.
                !isOverlayShown :

                // If in song, show according to overview option.
                isOverviewShown
        )
)
