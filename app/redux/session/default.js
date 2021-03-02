import { getColumnIndexForAnnotation } from '../../api/album/annotations'
import { getBookForSongIndex } from '../../api/album/songs'
import { getAudioOptionFromStorage } from '../../utils/storage'

const STORED_AUDIO_OPTION_INDEX = getAudioOptionFromStorage()

export const SESSION_WIKI_DEFAULTS = {
    selectedWikiIndex: 0,
    wikiAnnotationIndex: 0,
}

export const getSessionDefaults = ({
    initialSongIndex,
    initialAnnotationIndex,
}) => ({
    ...SESSION_WIKI_DEFAULTS,
    audioOptionIndex: STORED_AUDIO_OPTION_INDEX,
    shownNavBookIndex: getBookForSongIndex(initialSongIndex),
    earColumnIndex: getColumnIndexForAnnotation(
        initialSongIndex,
        initialAnnotationIndex,
    ) || 0,
})
