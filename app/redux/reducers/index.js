import { combineReducers } from 'redux'
import { SONG_INDEX,
         ANNOTATION_INDEX,
         DOT_KEYS,
         OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX,
         WIKI_URL } from '../../helpers/constants'
import SessionHelper from '../../helpers/session-helper'

const storedSongIndex = SessionHelper.getFromSession(SONG_INDEX)
const storedAnnotationIndex = SessionHelper.getFromSession(ANNOTATION_INDEX)
const storedDotKeys = SessionHelper.getFromSession(DOT_KEYS)
const storedOverviewIndex = SessionHelper.getFromSession(OVERVIEW_INDEX)

export const SongIndexReducer = (state = storedSongIndex, action) => {
    switch (action.type) {
        case SONG_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AnnotationIndexReducer = (state = storedAnnotationIndex, action) => {
    switch (action.type) {
        case ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const DotKeysReducer = (state = storedDotKeys, action) => {
    switch (action.type) {
        case DOT_KEYS:
            return action.payload
        default:
            return state
    }
}

export const OverviewIndexReducer = (state = storedOverviewIndex, action) => {
    switch (action.type) {
        case OVERVIEW_INDEX:
            return action.payload
        default:
            return state
    }
}

export const WikiUrlReducer = (state = null, action) => {
    switch (action.type) {
        case WIKI_URL:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    activeSongIndex: SongIndexReducer,
    activeAnnotationIndex: AnnotationIndexReducer,
    activeDotKeys: DotKeysReducer,
    activeOverviewIndex: OverviewIndexReducer,
    activeWikiUrl: WikiUrlReducer
})

export default rootReducer
