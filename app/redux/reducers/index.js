import { combineReducers } from 'redux'
import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_TIME,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX,
         SELECTED_WIKI_URL } from '../../helpers/constants'
import SessionHelper from '../../helpers/session-helper'

const storedSongIndex = SessionHelper.getFromSession(SELECTED_SONG_INDEX)
const storedAnnotationIndex = SessionHelper.getFromSession(SELECTED_ANNOTATION_INDEX)
const storedTime = SessionHelper.getFromSession(SELECTED_TIME)
const storedDotKeys = SessionHelper.getFromSession(SELECTED_DOT_KEYS)
const storedOverviewIndex = SessionHelper.getFromSession(SELECTED_OVERVIEW_INDEX)

export const SongIndexReducer = (state = storedSongIndex, action) => {
    switch (action.type) {
        case SELECTED_SONG_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AnnotationIndexReducer = (state = storedAnnotationIndex, action) => {
    switch (action.type) {
        case SELECTED_ANNOTATION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const TimeReducer = (state = storedTime, action) => {
    switch (action.type) {
        case SELECTED_TIME:
            return action.payload
        default:
            return state
    }
}

export const DotKeysReducer = (state = storedDotKeys, action) => {
    switch (action.type) {
        case SELECTED_DOT_KEYS:
            const { selectedDotKey,
                    isSelected } = action.payload,
                // Copy state object.
                newState = Object.assign({}, state)
            newState[selectedDotKey] = isSelected
            return newState
        default:
            return state
    }
}

export const OverviewIndexReducer = (state = storedOverviewIndex, action) => {
    switch (action.type) {
        case SELECTED_OVERVIEW_INDEX:
            return action.payload
        default:
            return state
    }
}

export const WikiUrlReducer = (state = null, action) => {
    switch (action.type) {
        case SELECTED_WIKI_URL:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedSongIndex: SongIndexReducer,
    selectedAnnotationIndex: AnnotationIndexReducer,
    selectedTime: TimeReducer,
    selectedDotKeys: DotKeysReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedWikiUrl: WikiUrlReducer
})

export default rootReducer
