import { getStartTimeForVerse } from '../api/album/time'

export const getCursorIndex = (
    sliderIndex,
    activatedIndex,
    defaultIndex
) => {
    if (sliderIndex >= 0) {
        return sliderIndex
    } else if (activatedIndex >= 0) {
        return activatedIndex
    } else {
        return defaultIndex
    }
}

export const getBeforeOnOrAfter = (
    cursorIndex,
    index,
    isCursorShown = true

) => {
    if (index < cursorIndex) {
        return -1
    } else if (index > cursorIndex) {
        return 1
    } else {
        return isCursorShown ? 0 : null
    }
}

export const getCursorTime = ({
    lyricSongIndex,
    verseCursorIndex,
    isActivated,
    isSliderMoving,
    selectedTime

}) => {
    if (isActivated || isSliderMoving) {
        return getStartTimeForVerse(lyricSongIndex, verseCursorIndex)
    }

    return selectedTime
}

export const getIsVerseCursor = ({
    verseIndex,
    verseCursorIndex,
    inSlider,
    inVerseBar,
    isEitherVerseBarShown
}) => {
    const isVerseCursorShown = (
        inSlider ||

        // Verse in verse bar is always the cursor verse.
        inVerseBar ||
        (
            !inVerseBar && !isEitherVerseBarShown
        )
    )

    return verseIndex === verseCursorIndex && isVerseCursorShown
}
