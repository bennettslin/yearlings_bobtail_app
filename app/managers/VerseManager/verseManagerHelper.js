import { getLyricSectionRect } from 'helpers/responsiveHelper'

export const getVerseBarStatus = ({
    deviceIndex,
    windowWidth,
    windowHeight,
    isLyricExpanded,
    isHeightlessLyricColumn,
    verseElement
}) => {

    if (!verseElement) {
        return null
    }

    // If lyric is collapsed and heightless, verse bars should never show.
    if (isHeightlessLyricColumn && !isLyricExpanded) {
        return {
            isVerseBarAbove: false,
            isVerseBarBelow: false
        }
    }

    const lyricSectionRect = getLyricSectionRect({
            deviceIndex,
            windowWidth,
            windowHeight,
            isLyricExpanded
        }),

        selectedVerseRect = verseElement.getBoundingClientRect(),

        isVerseBarAbove = selectedVerseRect.top < lyricSectionRect.top,
        isVerseBarBelow = selectedVerseRect.bottom > lyricSectionRect.bottom

        return {
            isVerseBarAbove,
            isVerseBarBelow
        }
}
