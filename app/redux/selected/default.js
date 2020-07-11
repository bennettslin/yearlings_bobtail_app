import { getSongIsLogue } from '../../api/album/songs'
import { getInitialIndicesFromRoutingOrStorage } from '../../helpers/storage'

export const {
    initialSongIndex: INITIAL_SONG_INDEX,
    initialVerseIndex: INITIAL_VERSE_INDEX,
    initialAnnotationIndex: INITIAL_ANNOTATION_INDEX
} = getInitialIndicesFromRoutingOrStorage()

export const INITIAL_IS_SELECTED_LOGUE = getSongIsLogue(INITIAL_SONG_INDEX)

export const getSelectedDefaults = songIndex => {
    const {
        initialSongIndex,
        initialVerseIndex,
        initialAnnotationIndex
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    return {
        selectedSongIndex: initialSongIndex,
        selectedVerseIndex: initialVerseIndex,
        selectedAnnotationIndex: initialAnnotationIndex,
        isSelectedLogue: getSongIsLogue(initialSongIndex)
    }
}
