export const getFinalVerseBarsStatus = ({
    rawVerseBarsStatus,
    queuedScrollVerseIndex
}) => {
    // If there is a queued scroll verse index, never show the verse bars.
    if (queuedScrollVerseIndex > -1) {
        return 0
    }

    return rawVerseBarsStatus
}

export const getFinalActivatedVerseIndex = ({
    rawActivatedVerseIndex,
    queuedScrollVerseIndex
}) => {
    // If there is a queued scroll verse index, never show the activated verse.
    if (queuedScrollVerseIndex > -1) {
        return -1
    }

    return rawActivatedVerseIndex
}
