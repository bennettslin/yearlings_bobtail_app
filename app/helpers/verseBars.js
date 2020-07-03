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

export const getIsVerseBarShown = ({
    isAbove,
    verseBarsStatus
}) => (
    verseBarsStatus === (isAbove ? 1 : -1)
)
