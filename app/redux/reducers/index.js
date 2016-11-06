import { combineReducers } from 'redux'
import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_TIME_PLAYED,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_AUDIO_OPTION_INDEX,
         SELECTED_WIKI_INDEX,
         ACCESSED_ON,
         ACCESSED_SECTION_INDEX } from '../../helpers/constants'
import SessionHelper from '../../helpers/session-helper'

const { getFromSession } = SessionHelper,
    storedSongIndex = getFromSession(SELECTED_SONG_INDEX),
    storedAnnotationIndex = getFromSession(SELECTED_ANNOTATION_INDEX),
    storedVerseIndex = getFromSession(SELECTED_VERSE_INDEX),
    storedTime = getFromSession(SELECTED_TIME_PLAYED),
    storedDotKeys = getFromSession(SELECTED_DOT_KEYS),
    storedOverviewIndex = getFromSession(SELECTED_OVERVIEW_INDEX),
    storedAudioOptionIndex = getFromSession(SELECTED_AUDIO_OPTION_INDEX),
    storedWikiIndex = getFromSession(SELECTED_WIKI_INDEX),
    storedAccessedOn = getFromSession(ACCESSED_ON),
    storedAccessedSectionIndex = getFromSession(ACCESSED_SECTION_INDEX)

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

export const VerseIndexReducer = (state = storedVerseIndex, action) => {
    switch (action.type) {
        case SELECTED_VERSE_INDEX:
            return action.payload
        default:
            return state
    }
}

export const WikiIndexReducer = (state = storedWikiIndex, action) => {
    switch (action.type) {
        case SELECTED_WIKI_INDEX:
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

// Keep in Redux for now, but perhaps scrap later.
export const TimeReducer = (state = storedTime, action) => {
    switch (action.type) {
        case SELECTED_TIME_PLAYED:
            return action.payload
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

export const AudioOptionIndexReducer = (state = storedAudioOptionIndex, action) => {
    switch (action.type) {
        case SELECTED_AUDIO_OPTION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AccessedOnReducer = (state = storedAccessedOn, action) => {
    switch (action.type) {
        case ACCESSED_ON:
            return action.payload
        default:
            return state
    }
}

export const AccessedSectionIndexReducer = (state = storedAccessedSectionIndex, action) => {
    switch (action.type) {
        case ACCESSED_SECTION_INDEX:
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedSongIndex: SongIndexReducer,
    selectedAnnotationIndex: AnnotationIndexReducer,
    selectedVerseIndex: VerseIndexReducer,
    selectedTimePlayed: TimeReducer,
    selectedDotKeys: DotKeysReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedAudioOptionIndex: AudioOptionIndexReducer,
    selectedWikiIndex: WikiIndexReducer,
    accessedOn: AccessedOnReducer,
    accessedSectionIndex: AccessedSectionIndexReducer
})

export default rootReducer
