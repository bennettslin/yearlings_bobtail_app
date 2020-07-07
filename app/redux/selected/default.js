import { getSongIsLogue } from '../../api/album/songs'
import { getInitialIndicesFromRoutingOrStorage } from '../../helpers/storage'

export const [
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX,
    INITIAL_ANNOTATION_INDEX
] = getInitialIndicesFromRoutingOrStorage()

export const INITIAL_IS_SELECTED_LOGUE = getSongIsLogue(INITIAL_SONG_INDEX)

export const SELECTED_DEFAULTS = {
    selectedSongIndex: INITIAL_SONG_INDEX,
    selectedVerseIndex: INITIAL_VERSE_INDEX,
    selectedAnnotationIndex: INITIAL_ANNOTATION_INDEX,
    isSelectedLogue: INITIAL_IS_SELECTED_LOGUE
}
