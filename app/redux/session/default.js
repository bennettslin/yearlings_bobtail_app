import { getBookForSongIndex } from '../../api/album/songs'
import { getAudioOptionFromStorage } from '../../helpers/storage'
import { INITIAL_SONG_INDEX } from '../selected/default'

const STORED_NAV_BOOK_INDEX = getBookForSongIndex(INITIAL_SONG_INDEX)
const STORED_AUDIO_OPTION_INDEX = getAudioOptionFromStorage()

export const SESSION_WIKI_DEFAULTS = {
    selectedWikiIndex: 0,
    carouselAnnotationIndex: 0
}

export const SESSION_DEFAULTS = {
    ...SESSION_WIKI_DEFAULTS,
    shownNavBookIndex: STORED_NAV_BOOK_INDEX,
    audioOptionIndex: STORED_AUDIO_OPTION_INDEX
}
