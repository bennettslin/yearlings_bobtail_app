import {
    STORED_NAV_BOOK_INDEX,
    STORED_AUDIO_OPTION_INDEX
} from '../../constants/storage'

export const SESSION_WIKI_DEFAULTS = {
    selectedWikiIndex: 0,
    carouselAnnotationIndex: 0,
    selectedWikiUrl: ''
}

export const SESSION_DEFAULTS = {
    ...SESSION_WIKI_DEFAULTS,
    shownNavBookIndex: STORED_NAV_BOOK_INDEX,
    selectedAudioOptionIndex: STORED_AUDIO_OPTION_INDEX
}
