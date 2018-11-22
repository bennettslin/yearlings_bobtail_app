// Reducers for state persisted in user's local storage.
import {
    SELECTED_AUDIO_OPTION_INDEX, SELECTED_LYRIC_COLUMN_INDEX, SELECTED_OVERVIEW_INDEX, SELECTED_TIPS_INDEX, SELECTED_WIKI_INDEX
} from 'constants/state'

import { getFromStorage } from '../storageHelper'

const
    storedAudioOptionIndex = getFromStorage(SELECTED_AUDIO_OPTION_INDEX),
    storedLyricColumnIndex = getFromStorage(SELECTED_LYRIC_COLUMN_INDEX),
    storedOverviewIndex = getFromStorage(SELECTED_OVERVIEW_INDEX),
    storedTipsIndex = getFromStorage(SELECTED_TIPS_INDEX),
    storedWikiIndex = getFromStorage(SELECTED_WIKI_INDEX)

export const AudioOptionIndexReducer = (state = storedAudioOptionIndex, action) => {
    switch (action.type) {
        case SELECTED_AUDIO_OPTION_INDEX:
            return action.payload
        default:
            return state
    }
}

export const LyricColumnIndexReducer = (state = storedLyricColumnIndex, action) => {
    switch (action.type) {
        case SELECTED_LYRIC_COLUMN_INDEX:
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

export const TipsIndexReducer = (state = storedTipsIndex, action) => {
    switch (action.type) {
        case SELECTED_TIPS_INDEX:
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
