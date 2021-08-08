export const getVerseBarsStatus = ({
    isLyricExpanded,
    isHeightlessLyric,
    lyricSectionRect,
    verseElement,
}) => {

    if (!verseElement) {
        return 0
    }

    // If lyric is collapsed and heightless, verse bars should never show.
    if (isHeightlessLyric && !isLyricExpanded) {
        return 0
    }

    const {
            lyricSectionTop,
            lyricSectionBottom,
        } = JSON.parse(lyricSectionRect),
        {
            top,
            bottom,
        } = verseElement.getBoundingClientRect()

    // Show verse bar above.
    if (top < lyricSectionTop) {
        return 1

    // Show verse bar below.
    } else if (
        // There won't be a lyric section bottom upon initial mount.
        lyricSectionBottom &&
        bottom > lyricSectionBottom
    ) {
        return -1

    } else {
        return 0
    }
}
