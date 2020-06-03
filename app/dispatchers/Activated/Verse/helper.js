import { getVerseCountForSong } from '../../../api/album/verses'

export const getActivatedVerseForDirection = ({
    selectedSongIndex,
    selectedVerseIndex,
    activatedVerseIndex,
    direction
}) => {
    const songVersesCount = getVerseCountForSong(selectedSongIndex)

    let nextVerseIndex = activatedVerseIndex

    // Ensure modulo.
    if (direction === -1) {
        direction = songVersesCount - 1
    }

    // We are turning on interactivation, so start from selected verse.
    if (nextVerseIndex === -1) {
        nextVerseIndex =
            (selectedVerseIndex + direction) % songVersesCount

    // We already have an activated verse.
    } else {
        nextVerseIndex =
            (nextVerseIndex + direction) % songVersesCount
    }

    // If we're returning to the selected verse, turn off interactivation.
    if (nextVerseIndex === selectedVerseIndex) {
        nextVerseIndex = -1
    }

    return nextVerseIndex
}
