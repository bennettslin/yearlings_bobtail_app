// Actions for song state.
import { getSongIsLogue } from '../../album/api/songs'
import { setInStorage } from '../../utils/window'

import {
    hasKey,
    getDefinedOnlyPayload
} from '../actionHelper'

import {
    SELECTED_STORE,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX
} from '../../constants/store/keys'
import { SELECTED_DEFAULTS } from '../defaultStates'

export const updateSelectedStore = (payload = SELECTED_DEFAULTS) => {

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
        type: SELECTED_STORE,
        payload: getDefinedOnlyPayload(payload)
    }
}
