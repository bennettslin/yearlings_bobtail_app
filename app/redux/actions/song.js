// Actions for song and player state.
import { is } from './actionsHelper'

import {
    SONG_STORE,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX
} from 'constants/state'

import { SONG_DEFAULTS } from '../defaultConstants'

import {
    setInStorage
} from '../storageHelper'

export const updateSongStore = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTime

} = SONG_DEFAULTS) => {

    if (is(selectedSongIndex)) {
        setInStorage(SELECTED_SONG_INDEX, selectedSongIndex)
    }
    if (is(selectedVerseIndex)) {
        setInStorage(SELECTED_VERSE_INDEX, selectedVerseIndex)
    }
    if (is(selectedAnnotationIndex)) {
        setInStorage(SELECTED_ANNOTATION_INDEX, selectedAnnotationIndex)
    }

    return {
        type: SONG_STORE,
        payload: {
            ...is(selectedSongIndex) && { selectedSongIndex },
            ...is(selectedVerseIndex) && { selectedVerseIndex },
            ...is(selectedAnnotationIndex) && { selectedAnnotationIndex },
            ...is(selectedTime) && { selectedTime }
        }
    }
}
