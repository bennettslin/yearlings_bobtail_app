import { getSongVersesCount } from 'album/api/verses'

export const getActivatedVerseForDirection = ({
    selectedSongIndex,
    selectedVerseIndex,
    currentVerseIndex,
    direction
}) => {
    const songVersesCount = getSongVersesCount(selectedSongIndex)

    let activatedVerseIndex = currentVerseIndex

    // Ensure modulo.
    if (direction === -1) {
        direction = songVersesCount - 1
    }

    // We are turning on interactivation, so start from selected verse.
    if (activatedVerseIndex === -1) {
        activatedVerseIndex =
            (selectedVerseIndex + direction) % songVersesCount

    // We already have an activated verse.
    } else {
        activatedVerseIndex =
            (activatedVerseIndex + direction) % songVersesCount
    }

    // If we're returning to the selected verse, turn off interactivation.
    if (activatedVerseIndex === selectedVerseIndex) {
        activatedVerseIndex = -1
    }

    return activatedVerseIndex
}
