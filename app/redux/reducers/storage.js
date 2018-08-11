// Reducers for state persisted in user's local storage.
import { SELECTED_STORE, SELECTED_ACCESS_INDEX, SELECTED_ADMIN_INDEX, SELECTED_AUDIO_OPTION_INDEX, SELECTED_CAROUSEL_NAV_INDEX, SELECTED_DOT_KEYS, SELECTED_DOTS_INDEX, SELECTED_LYRIC_COLUMN_INDEX, SELECTED_OVERVIEW_INDEX, SELECTED_SCORE_INDEX, SELECTED_TIME_PLAYED, SELECTED_TIPS_INDEX, SELECTED_TITLE_INDEX, SELECTED_WIKI_INDEX } from 'constants/state'
import StorageHelper from '../storageHelper'

import { SELECTED_DEFAULTS } from '../defaultConstants'

const { getFromStorage } = StorageHelper,
    storedAccessIndex = getFromStorage(SELECTED_ACCESS_INDEX),
    storedAdminIndex = getFromStorage(SELECTED_ADMIN_INDEX),
    storedAudioOptionIndex = getFromStorage(SELECTED_AUDIO_OPTION_INDEX),
    storedCarouselNavIndex = getFromStorage(SELECTED_CAROUSEL_NAV_INDEX),
    storedDotKeys = getFromStorage(SELECTED_DOT_KEYS),
    storedDotsIndex = getFromStorage(SELECTED_DOTS_INDEX),
    storedLyricColumnIndex = getFromStorage(SELECTED_LYRIC_COLUMN_INDEX),
    storedOverviewIndex = getFromStorage(SELECTED_OVERVIEW_INDEX),
    storedScoreIndex = getFromStorage(SELECTED_SCORE_INDEX),
    storedTime = getFromStorage(SELECTED_TIME_PLAYED),
    storedTipsIndex = getFromStorage(SELECTED_TIPS_INDEX),
    storedTitleIndex = getFromStorage(SELECTED_TITLE_INDEX),
    storedWikiIndex = getFromStorage(SELECTED_WIKI_INDEX)

export const SelectedStoreReducer = (
    state = SELECTED_DEFAULTS,
    action
) => {
    switch (action.type) {
        case SELECTED_STORE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const AccessIndexReducer = (state = storedAccessIndex, action) => {
    switch (action.type) {
        case SELECTED_ACCESS_INDEX:
            return action.payload
        default:
            return state
    }
}

export const AdminIndexReducer = (state = storedAdminIndex, action) => {
    switch (action.type) {
        case SELECTED_ADMIN_INDEX:
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
            const { selectedDotKey,
                    isSelected } = action.payload,
                // Copy state object.
                newState = Object.assign({}, state)
            newState[selectedDotKey] = isSelected
            return newState
        }
        default:
            return state
    }
}

export const DotsIndexReducer = (state = storedDotsIndex, action) => {
    switch (action.type) {
        case SELECTED_DOTS_INDEX:
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

export const ScoreIndexReducer = (state = storedScoreIndex, action) => {
    switch (action.type) {
        case SELECTED_SCORE_INDEX:
            return action.payload
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

export const TipsIndexReducer = (state = storedTipsIndex, action) => {
    switch (action.type) {
        case SELECTED_TIPS_INDEX:
            return action.payload
        default:
            return state
    }
}

export const TitleIndexReducer = (state = storedTitleIndex, action) => {
    switch (action.type) {
        case SELECTED_TITLE_INDEX:
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
