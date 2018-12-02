import { getSongVersesCount } from 'helpers/data'

const getInteractivatedVerseForDirection = ({
    selectedSongIndex,
    selectedVerseIndex,
    currentInteractivatedVerseIndex,
    direction
}) => {
    const songVersesCount = getSongVersesCount(selectedSongIndex)

    let interactivatedVerseIndex = currentInteractivatedVerseIndex

    // Ensure modulo.
    if (direction === -1) {
        direction = songVersesCount - 1
    }

    // We are turning on interactivation, so start from selected verse.
    if (interactivatedVerseIndex === -1) {
        interactivatedVerseIndex =
            (selectedVerseIndex + direction) % songVersesCount

    // We already have an interactivated verse.
    } else {
        interactivatedVerseIndex =
            (interactivatedVerseIndex + direction) % songVersesCount
    }

    // If we're returning to the selected verse, turn off interactivation.
    if (interactivatedVerseIndex === selectedVerseIndex) {
        interactivatedVerseIndex = -1
    }

    return interactivatedVerseIndex
}

export {
    getInteractivatedVerseForDirection
}
