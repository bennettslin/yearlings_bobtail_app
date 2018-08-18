// Actions for song and player state.
import { is } from './actionsHelper'

import { SONG_STORE } from 'constants/state'
import { SONG_DEFAULTS } from '../defaultConstants'

export const updateSongStore = ({
    selectedSongIndex,
    selectedAnnotationIndex,
    selectedVerseIndex,
    selectedTime

} = SONG_DEFAULTS) => {

    return {
        type: SONG_STORE,
        payload: {
            ...is(selectedSongIndex) && { selectedSongIndex },
            ...is(selectedAnnotationIndex) && { selectedAnnotationIndex },
            ...is(selectedVerseIndex) && { selectedVerseIndex },
            ...is(selectedTime) && { selectedTime }
        }
    }
}
