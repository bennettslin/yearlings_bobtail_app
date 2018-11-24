// Actions for song state.
import { getSongIsLogue } from '../../helpers/dataHelper'
import { setIndexInStorage } from '../storageHelper'

import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    SONG_STORE,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX
} from '../storeKeys'
import { SONG_DEFAULTS } from '../defaultStates'

export const updateSongStore = (payload = SONG_DEFAULTS) => {

    const {
        selectedSongIndex,
        selectedAnnotationIndex,
        selectedVerseIndex
    } = payload

    if (hasKey(selectedSongIndex)) {
        setIndexInStorage(SELECTED_SONG_INDEX, selectedSongIndex)

        payload.isSelectedLogue = getSongIsLogue(selectedSongIndex)
    }
    if (hasKey(selectedVerseIndex)) {
        setIndexInStorage(SELECTED_VERSE_INDEX, selectedVerseIndex)
    }
    if (hasKey(selectedAnnotationIndex)) {
        setIndexInStorage(SELECTED_ANNOTATION_INDEX, selectedAnnotationIndex)
    }

    return {
        type: SONG_STORE,
        payload: getDefinedOnlyPayload(payload)
    }
}
