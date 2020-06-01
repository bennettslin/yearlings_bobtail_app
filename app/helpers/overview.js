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
