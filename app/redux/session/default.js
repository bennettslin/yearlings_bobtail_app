import { getColumnIndexForAnnotation } from '../../api/album/annotations'
import { getBookForSongIndex } from '../../api/album/songs'
import { getSongRepeatFromStorage } from '../../utils/storage'

const IS_STORED_SONG_REPEAT_ON = getSongRepeatFromStorage()

export const SESSION_WIKI_DEFAULTS = {
    selectedWikiIndex: 0,
    wikiAnnotationIndex: 0,
}

export const getSessionDefaults = ({
    initialSongIndex,
    initialAnnotationIndex,
}) => ({
    ...SESSION_WIKI_DEFAULTS,
    isSongRepeatOn: IS_STORED_SONG_REPEAT_ON,
    shownNavBookIndex: getBookForSongIndex(initialSongIndex),
    earColumnIndex: getColumnIndexForAnnotation(
        initialSongIndex,
        initialAnnotationIndex,
    ) || 0,
})
