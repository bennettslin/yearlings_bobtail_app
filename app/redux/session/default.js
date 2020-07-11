import { getColumnIndexForAnnotation } from '../../api/album/annotations'
import { getBookForSongIndex } from '../../api/album/songs'
import {
    getAudioOptionFromStorage,
    getInitialIndicesFromRoutingOrStorage
} from '../../helpers/storage'
import {
    INITIAL_SONG_INDEX,
    INITIAL_ANNOTATION_INDEX
} from '../selected/default'

const STORED_NAV_BOOK_INDEX = getBookForSongIndex(INITIAL_SONG_INDEX)
const STORED_AUDIO_OPTION_INDEX = getAudioOptionFromStorage()

export const SESSION_WIKI_DEFAULTS = {
    selectedWikiIndex: 0,
    wikiAnnotationIndex: 0
}

const INITIAL_EAR_COLUMN_INDEX = getColumnIndexForAnnotation(
    INITIAL_SONG_INDEX,
    INITIAL_ANNOTATION_INDEX
)

export const SESSION_DEFAULTS = {
    ...SESSION_WIKI_DEFAULTS,
    shownNavBookIndex: STORED_NAV_BOOK_INDEX,
    audioOptionIndex: STORED_AUDIO_OPTION_INDEX,
    earColumnIndex: INITIAL_EAR_COLUMN_INDEX || 0
}

/** */

export const getSessionDefaults = songIndex => {
    const {
        initialSongIndex,
        initialAnnotationIndex
    } = getInitialIndicesFromRoutingOrStorage(songIndex)

    const initialEarColumnIndex = getColumnIndexForAnnotation(
        initialSongIndex,
        initialAnnotationIndex
    )

    return {
        ...SESSION_WIKI_DEFAULTS,
        shownNavBookIndex: STORED_NAV_BOOK_INDEX,
        audioOptionIndex: STORED_AUDIO_OPTION_INDEX,
        earColumnIndex: initialEarColumnIndex || 0
    }
}
