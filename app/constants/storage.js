import {
    getSongIsLogue,
    getBookForSongIndex
} from '../album/api/songs'
import { getColumnIndexForAnnotation } from '../album/api/annotations'
import { getStartTimeForVerse } from '../album/api/time'
import { getSceneIndexForVerse } from '../album/api/verses'
import {
    getBoolFromStorage,
    getDotsBitNumberFromStorage,
    getOptionFromStorage,
    getInitialIndicesFromRoutingOrStorage,
    getAudioOptionFromStorage
} from '../helpers/storage'
import {
    IS_ACCESS_ON,
    IS_CAROUSEL_SHOWN,
    SELECTED_OVERVIEW_OPTION,
    SELECTED_TIPS_OPTION
} from './store'

export const {
    initialSongIndex: INITIAL_SONG_INDEX,
    initialVerseIndex: INITIAL_VERSE_INDEX,
    initialAnnotationIndex: INITIAL_ANNOTATION_INDEX
} = getInitialIndicesFromRoutingOrStorage()

export const IS_INITIAL_LOGUE = getSongIsLogue(INITIAL_SONG_INDEX)

export const INITIAL_SCENE_INDEX = getSceneIndexForVerse(
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX
)

export const INITIAL_TIME = getStartTimeForVerse(
    INITIAL_SONG_INDEX,
    INITIAL_VERSE_INDEX
)

export const STORED_DOTS_BIT_NUMBER =
    getDotsBitNumberFromStorage(INITIAL_ANNOTATION_INDEX)

export const INITIAL_EAR_COLUMN_INDEX = getColumnIndexForAnnotation(
    INITIAL_SONG_INDEX,
    INITIAL_ANNOTATION_INDEX
)

export const IS_STORED_ACCESS_ON = getBoolFromStorage(IS_ACCESS_ON)

export const IS_STORED_CAROUSEL_SHOWN = getBoolFromStorage(IS_CAROUSEL_SHOWN)

export const STORED_NAV_BOOK_INDEX = getBookForSongIndex(INITIAL_SONG_INDEX)

export const STORED_AUDIO_OPTION_INDEX = getAudioOptionFromStorage()

export const STORED_OVERVIEW_OPTION =
    getOptionFromStorage(SELECTED_OVERVIEW_OPTION)

export const STORED_TIPS_OPTION = getOptionFromStorage(SELECTED_TIPS_OPTION)
