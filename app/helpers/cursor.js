export const getCursorIndex = (
    queuedScrollVerseIndex,
    sliderIndex,
    activatedIndex,
    defaultIndex
) => {
    if (queuedScrollVerseIndex >= 0) {
        return queuedScrollVerseIndex
    } else if (sliderIndex >= 0) {
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
    queuedScrollTime,
    queuedScrollVerseIndex,
    selectedTime,
    isActivated,
    activatedTime,
    isSliderMoving,
    sliderTime

}) => {
    if (isSliderMoving) {
        return sliderTime
    }

    if (isActivated) {
        return activatedTime
    }

    if (queuedScrollVerseIndex > -1) {
        return queuedScrollTime
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
        Boolean(inVerseBar) === isEitherVerseBarShown
    )

    return verseIndex === verseCursorIndex && isVerseCursorShown
}
