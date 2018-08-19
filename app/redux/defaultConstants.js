import { getFromStorage } from './storageHelper'

import {
    getSceneIndexForVerseIndex,
    getTimeForVerseIndex
} from 'helpers/dataHelper'

import {

    DEVICE_INDEX,
    WINDOW_HEIGHT,
    WINDOW_WIDTH,
    STAGE_COORDINATES,
    STAGE_COORDINATES_DEFAULT,

    IS_HEIGHTLESS_LYRIC_COLUMN,
    IS_HIDDEN_NAV,
    IS_MOBILE_WIKI,
    IS_SCORES_TIPS_IN_MAIN,
    IS_TWO_ROW_MENU,
    SHOW_ONE_OF_TWO_LYRIC_COLUMNS,
    SHOW_SHRUNK_NAV_ICON,
    SHOW_SINGLE_BOOK_COLUMN,

    IS_SCENE_CHANGE_RENDERABLE,
    IS_SONG_CHANGE_RENDERABLE,
    IS_WINDOW_RESIZE_RENDERABLE,

    CAN_THEATRE_RENDER,
    CAN_MAIN_RENDER,
    CAN_VERSE_RENDER,
    CAN_LYRIC_RENDER,
    CAN_CAROUSEL_RENDER,
    CAN_SCENE_RENDER,

    RENDERED_SONG_INDEX,
    RENDERED_ANNOTATION_INDEX,
    RENDERED_VERSE_INDEX,
    RENDERED_SCENE_INDEX,

    SELECTED_ANNOTATION_INDEX,
    SELECTED_SONG_INDEX,
    SELECTED_VERSE_INDEX,
    SELECTED_TIME,

    IS_SLIDER_MOVING,
    IS_SLIDER_TOUCHED,
    SLIDER_LEFT,
    SLIDER_RATIO,
    SLIDER_WIDTH,
    SLIDER_VERSE_INDEX

} from 'constants/state'

const
    storedAnnotationIndex = getFromStorage(SELECTED_ANNOTATION_INDEX),
    storedSongIndex = getFromStorage(SELECTED_SONG_INDEX),
    storedVerseIndex = getFromStorage(SELECTED_VERSE_INDEX),
    selectedTime = getTimeForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    )

export const DEVICE_DEFAULTS = {
    [DEVICE_INDEX]: 0,
    [WINDOW_HEIGHT]: 0,
    [WINDOW_WIDTH]: 0,
    [STAGE_COORDINATES]: STAGE_COORDINATES_DEFAULT
}

export const RESPONSIVE_DEFAULTS = {
    [IS_HEIGHTLESS_LYRIC_COLUMN]: false,
    [IS_HIDDEN_NAV]: false,
    [IS_MOBILE_WIKI]: false,
    [IS_SCORES_TIPS_IN_MAIN]: false,
    [IS_TWO_ROW_MENU]: false,
    [SHOW_ONE_OF_TWO_LYRIC_COLUMNS]: false,
    [SHOW_SHRUNK_NAV_ICON]: false,
    [SHOW_SINGLE_BOOK_COLUMN]: false
}

export const RENDERABLE_DEFAULTS = {
    [IS_SCENE_CHANGE_RENDERABLE]: true,
    [IS_SONG_CHANGE_RENDERABLE]: false,
    [IS_WINDOW_RESIZE_RENDERABLE]: false
}

export const RENDER_DEFAULTS = {
    [CAN_THEATRE_RENDER]: false,
    [CAN_MAIN_RENDER]: false,
    [CAN_VERSE_RENDER]: false,
    [CAN_LYRIC_RENDER]: false,
    [CAN_CAROUSEL_RENDER]: false,
    [CAN_SCENE_RENDER]: false
}

export const RENDERED_DEFAULTS = {
    [RENDERED_SONG_INDEX]: storedSongIndex,
    [RENDERED_ANNOTATION_INDEX]: storedAnnotationIndex,
    [RENDERED_VERSE_INDEX]: storedVerseIndex,
    [RENDERED_SCENE_INDEX]: getSceneIndexForVerseIndex(
        storedSongIndex,
        storedVerseIndex
    )
}

export const SONG_DEFAULTS = {
    [SELECTED_SONG_INDEX]: storedSongIndex,
    [SELECTED_ANNOTATION_INDEX]: storedAnnotationIndex,
    [SELECTED_VERSE_INDEX]: storedVerseIndex,
    [SELECTED_TIME]: selectedTime
}

export const SLIDER_DEFAULTS = {
    [IS_SLIDER_MOVING]: false,
    [IS_SLIDER_TOUCHED]: false,
    [SLIDER_LEFT]: 0,
    [SLIDER_RATIO]: 0,
    [SLIDER_WIDTH]: 0,
    [SLIDER_VERSE_INDEX]: -1
}
