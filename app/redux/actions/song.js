// Actions for song state.
import { getSongIsLogue } from '../../helpers/dataHelper'
import { setInStorage } from '../storageHelper'

import {
    hasKey,
    getDefinedOnlyPayload
} from './helper'

import {
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX
} from 'constants/state'

import { SONG_STORE } from '../storeKeys'
import { SONG_DEFAULTS } from '../defaultStates'

export const updateSongStore = (payload = SONG_DEFAULTS) => {

    const {
        selectedSongIndex,
        selectedAnnotationIndex,
        selectedVerseIndex
    } = payload

    if (hasKey(selectedSongIndex)) {
        setInStorage(SELECTED_SONG_INDEX, selectedSongIndex)

        payload.isSelectedLogue = getSongIsLogue(selectedSongIndex)
    }
    if (hasKey(selectedVerseIndex)) {
        setInStorage(SELECTED_VERSE_INDEX, selectedVerseIndex)
    }
    if (hasKey(selectedAnnotationIndex)) {
        setInStorage(SELECTED_ANNOTATION_INDEX, selectedAnnotationIndex)
    }

    return {
        type: SONG_STORE,
        payload: getDefinedOnlyPayload(payload)
    }
}
