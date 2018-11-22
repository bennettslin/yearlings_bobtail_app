// Reducers for state persisted in user's local storage.
import {
    SELECTED_AUDIO_OPTION_INDEX, SELECTED_CAROUSEL_NAV_INDEX, SELECTED_DOT_KEYS, SELECTED_LYRIC_COLUMN_INDEX, SELECTED_OVERVIEW_INDEX, SELECTED_TIPS_INDEX, SELECTED_WIKI_INDEX
} from 'constants/state'

import { getFromStorage } from '../storageHelper'

const
    storedAudioOptionIndex = getFromStorage(SELECTED_AUDIO_OPTION_INDEX),
    storedCarouselNavIndex = getFromStorage(SELECTED_CAROUSEL_NAV_INDEX),
    storedDotKeys = getFromStorage(SELECTED_DOT_KEYS),
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

export const CarouselNavIndexReducer = (state = storedCarouselNavIndex, action) => {
    switch (action.type) {
        case SELECTED_CAROUSEL_NAV_INDEX:
            return action.payload
        default:
            return state
    }
}

export const DotKeysReducer = (state = storedDotKeys, action) => {
    switch (action.type) {
        case SELECTED_DOT_KEYS: {
            const {
                    selectedDotKey,
                    isSelected
                } = action.payload,
                // Copy state object.
                newState = Object.assign({}, state)
            newState[selectedDotKey] = isSelected
            return newState
        }
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
