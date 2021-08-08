// Actions for song state.
import { setInStorage } from '../../utils/storage'
import {
    hasKey,
    getDefinedOnlyPayload,
} from '../../helpers/action'
import { getSongIsLogue } from '../../endpoint/album/songs'
import {
    SELECTED_STORE,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_ANNOTATION_INDEX,
} from '../../constants/store'

export const updateSelectedStore = payload => {
    const {
        selectedSongIndex,
        selectedAnnotationIndex,
        selectedVerseIndex,
    } = payload

    if (hasKey(selectedSongIndex)) {
        payload.isSelectedLogue = getSongIsLogue(selectedSongIndex)
        setInStorage(SELECTED_SONG_INDEX, selectedSongIndex)
    }
    if (hasKey(selectedVerseIndex)) {
        setInStorage(SELECTED_VERSE_INDEX, selectedVerseIndex)
    }
    if (hasKey(selectedAnnotationIndex)) {
        setInStorage(SELECTED_ANNOTATION_INDEX, selectedAnnotationIndex)
    }

    return {
        type: SELECTED_STORE,
        payload: getDefinedOnlyPayload(payload, SELECTED_STORE),
    }
}
