export const getVerseAudioIconText = ({
    isPlaying,
    isOnCursor,
    isAfterCursor
}) => {
    let iconText

    if (isOnCursor) {
        iconText = isPlaying ? `\u23F8` : `\u25BA`
    } else {
        iconText = isAfterCursor ? `\u23E9` : `\u23EA`
    }

    return iconText
}

export const getVerseAudioIndicatorText = ({
    isPlaying,
    isOnCursor
}) => {
    let indicatorText

    if (isOnCursor) {
        indicatorText = isPlaying ? `\u23F8` : `\u25BA`
    } else {
        indicatorText = `\u25E6`
    }

    return indicatorText
}
