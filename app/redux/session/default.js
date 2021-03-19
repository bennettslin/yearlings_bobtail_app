import { getColumnIndexForAnnotation } from '../../api/album/annotations'
import { getBookForSongIndex } from '../../api/album/songs'
import { getBoolFromStorage } from '../../utils/storage'
import { IS_SONG_REPEAT_ON } from '../../constants/store'

const IS_STORED_SONG_REPEAT_ON = getBoolFromStorage(IS_SONG_REPEAT_ON)

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
