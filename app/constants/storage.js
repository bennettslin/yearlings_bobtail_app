import {
    getSongIsLogue,
    getBookForSongIndex
} from '../album/api/songs'
import { getColumnIndexForAnnotation } from '../album/api/annotations'
import { getStartTimeForVerse } from '../album/api/time'
import { getSceneIndexForVerse } from '../album/api/verses'
import {
    getIndexFromStorage,
    getOptionFromStorage,
    getSelectedIndicesFromStorage
} from '../helpers/storage'
import { getBoolFromStorage } from '../utils/window'
import {
    IS_ACCESS_ON,
    IS_CAROUSEL_SHOWN,
    SELECTED_AUDIO_OPTION_INDEX,
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from './store'

export const {
    storedSongIndex: STORED_SONG_INDEX,
    storedVerseIndex: STORED_VERSE_INDEX,
    storedAnnotationIndex: STORED_ANNOTATION_INDEX
} = getSelectedIndicesFromStorage()

export const IS_STORED_LOGUE = getSongIsLogue(STORED_SONG_INDEX)

export const STORED_TIME = getStartTimeForVerse(
    STORED_SONG_INDEX,
    STORED_VERSE_INDEX
)

export const STORED_EAR_COLUMN_INDEX = getColumnIndexForAnnotation(
    STORED_SONG_INDEX,
    STORED_ANNOTATION_INDEX
)
export const STORED_SCENE_INDEX = getSceneIndexForVerse(
    STORED_SONG_INDEX,
    STORED_VERSE_INDEX
)

export const IS_STORED_ACCESS_ON = getBoolFromStorage(IS_ACCESS_ON)

export const IS_STORED_CAROUSEL_SHOWN = getBoolFromStorage(IS_CAROUSEL_SHOWN)

export const STORED_NAV_BOOK_INDEX = getBookForSongIndex(STORED_SONG_INDEX)

export const STORED_AUDIO_OPTION_INDEX = getIndexFromStorage(
    SELECTED_AUDIO_OPTION_INDEX
)

export const STORED_OVERVIEW_OPTION = getOptionFromStorage(
    SELECTED_OVERVIEW_OPTION
)

export const STORED_TIPS_OPTION = getOptionFromStorage(SELECTED_TIPS_OPTION)
