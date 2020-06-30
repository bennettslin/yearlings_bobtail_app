import { getSongIsLogue } from '../../api/album/songs'
import { getStartTimeForVerse } from '../../api/album/time'
import { getInitialIndicesFromRoutingOrStorage } from '../../helpers/storage'

export const [
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX
] = getInitialIndicesFromRoutingOrStorage()

export const SELECTED_DEFAULTS = {
    selectedSongIndex: INITIAL_SONG_INDEX,
    selectedVerseIndex: INITIAL_VERSE_INDEX,
    selectedAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    selectedTime: getStartTimeForVerse(
        INITIAL_SONG_INDEX,
        INITIAL_VERSE_INDEX
    ),
    isSelectedLogue: getSongIsLogue(INITIAL_SONG_INDEX)
}
