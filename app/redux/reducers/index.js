import { combineReducers } from 'redux'
import { ACTIVE_SONG_INDEX,
         ACTIVE_ANNOTATION_INDEX,
         ACTIVE_TIME,
         ACTIVE_DOT_KEYS,
         ACTIVE_OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX,
         ACTIVE_WIKI_URL } from '../../helpers/constants'
import SessionHelper from '../../helpers/session-helper'

const storedSongIndex = SessionHelper.getFromSession(ACTIVE_SONG_INDEX)
const storedAnnotationIndex = SessionHelper.getFromSession(ACTIVE_ANNOTATION_INDEX)
const storedTime = SessionHelper.getFromSession(ACTIVE_TIME)
const storedDotKeys = SessionHelper.getFromSession(ACTIVE_DOT_KEYS)
const storedOverviewIndex = SessionHelper.getFromSession(ACTIVE_OVERVIEW_INDEX)

export const SongIndexReducer = (state = storedSongIndex, action) => {
    switch (action.type) {
        case ACTIVE_SONG_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AnnotationIndexReducer = (state = storedAnnotationIndex, action) => {
    switch (action.type) {
        case ACTIVE_ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const TimeReducer = (state = storedTime, action) => {
    switch (action.type) {
        case ACTIVE_TIME:
            return action.payload
        default:
            return state
    }
}

export const DotKeysReducer = (state = storedDotKeys, action) => {
    switch (action.type) {
        case ACTIVE_DOT_KEYS:
            const { dotKey,
                    isActive } = action.payload,
                // Copy state object.
                newState = Object.assign({}, state)
            newState[dotKey] = isActive
            return newState
        default:
            return state
    }
}

export const OverviewIndexReducer = (state = storedOverviewIndex, action) => {
    switch (action.type) {
        case ACTIVE_OVERVIEW_INDEX:
            return action.payload
        default:
            return state
    }
}

export const WikiUrlReducer = (state = null, action) => {
    switch (action.type) {
        case ACTIVE_WIKI_URL:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    activeSongIndex: SongIndexReducer,
    activeAnnotationIndex: AnnotationIndexReducer,
    activeTime: TimeReducer,
    activeDotKeys: DotKeysReducer,
    activeOverviewIndex: OverviewIndexReducer,
    activeWikiUrl: WikiUrlReducer
})

export default rootReducer
