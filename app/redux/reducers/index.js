import { combineReducers } from 'redux'
import { SONG_INDEX,
         ANNOTATION_INDEX,
         OVERVIEW_INDEX,
         DEFAULT_OVERVIEW_INDEX,
         WIKI_URL } from '../../helpers/constants'
import SessionHelper from '../../helpers/session-helper'

const storedSongIndex = SessionHelper.getFromSession(SONG_INDEX)
const storedAnnotationIndex = SessionHelper.getFromSession(ANNOTATION_INDEX)
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
    activeOverviewIndex: OverviewIndexReducer,
    activeWikiUrl: WikiUrlReducer
})

export default rootReducer
