export const getCursorIndex = (
    scrollLyricVerseIndex,
    sliderIndex,
    activatedIndex,
    defaultIndex
) => {
    if (scrollLyricVerseIndex >= 0) {
        return scrollLyricVerseIndex
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
    scrollLyricTime,
    scrollLyricVerseIndex,
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

    if (scrollLyricVerseIndex > -1) {
        return scrollLyricTime
    }

    return selectedTime
}
