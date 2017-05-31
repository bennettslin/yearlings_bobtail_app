import { combineReducers } from 'redux'
import { SELECTED_ACCESS_INDEX, SELECTED_ADMIN_INDEX, SELECTED_ANNOTATION_INDEX, SELECTED_AUDIO_OPTION_INDEX, SELECTED_CAROUSEL_INDEX, SELECTED_DOT_KEYS, SELECTED_DOTS_INDEX, SELECTED_LYRIC_COLUMN_INDEX, SELECTED_NAV_INDEX, SELECTED_OVERVIEW_INDEX, SELECTED_SCORE_INDEX, SELECTED_SONG_INDEX, SELECTED_TIME_PLAYED, SELECTED_TIPS_INDEX, SELECTED_TITLE_INDEX, SELECTED_VERSE_INDEX, SELECTED_WIKI_INDEX } from '../../constants/state'
import SessionHelper from '../../helpers/session-helper'

const { getFromSession } = SessionHelper,
    storedAccessIndex = getFromSession(SELECTED_ACCESS_INDEX),
    storedAdminIndex = getFromSession(SELECTED_ADMIN_INDEX),
    storedAnnotationIndex = getFromSession(SELECTED_ANNOTATION_INDEX),
    storedAudioOptionIndex = getFromSession(SELECTED_AUDIO_OPTION_INDEX),
    storedCarouselIndex = getFromSession(SELECTED_CAROUSEL_INDEX),
    storedDotKeys = getFromSession(SELECTED_DOT_KEYS),
    storedDotsIndex = getFromSession(SELECTED_DOTS_INDEX),
    storedLyricColumnIndex = getFromSession(SELECTED_LYRIC_COLUMN_INDEX),
    storedNavIndex = getFromSession(SELECTED_NAV_INDEX),
    storedOverviewIndex = getFromSession(SELECTED_OVERVIEW_INDEX),
    storedScoreIndex = getFromSession(SELECTED_SCORE_INDEX),
    storedSongIndex = getFromSession(SELECTED_SONG_INDEX),
    storedTime = getFromSession(SELECTED_TIME_PLAYED),
    storedTipsIndex = getFromSession(SELECTED_TIPS_INDEX),
    storedTitleIndex = getFromSession(SELECTED_TITLE_INDEX),
    storedVerseIndex = getFromSession(SELECTED_VERSE_INDEX),
    storedWikiIndex = getFromSession(SELECTED_WIKI_INDEX)

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

export const AnnotationIndexReducer = (state = storedAnnotationIndex, action) => {
    switch (action.type) {
        case SELECTED_ANNOTATION_INDEX:
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

export const CarouselIndexReducer = (state = storedCarouselIndex, action) => {
    switch (action.type) {
        case SELECTED_CAROUSEL_INDEX:
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


export const NavIndexReducer = (state = storedNavIndex, action) => {
    switch (action.type) {
        case SELECTED_NAV_INDEX:
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

export const SongIndexReducer = (state = storedSongIndex, action) => {
    switch (action.type) {
        case SELECTED_SONG_INDEX:
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

const rootReducer = combineReducers({
    selectedAccessIndex: AccessIndexReducer,
    selectedAdminIndex: AdminIndexReducer,
    selectedAnnotationIndex: AnnotationIndexReducer,
    selectedAudioOptionIndex: AudioOptionIndexReducer,
    selectedCarouselIndex: CarouselIndexReducer,
    selectedDotKeys: DotKeysReducer,
    selectedDotsIndex: DotsIndexReducer,
    selectedLyricColumnIndex: LyricColumnIndexReducer,
    selectedNavIndex: NavIndexReducer,
    selectedOverviewIndex: OverviewIndexReducer,
    selectedScoreIndex: ScoreIndexReducer,
    selectedSongIndex: SongIndexReducer,
    selectedTimePlayed: TimeReducer,
    selectedTipsIndex: TipsIndexReducer,
    selectedTitleIndex: TitleIndexReducer,
    selectedVerseIndex: VerseIndexReducer,
    selectedWikiIndex: WikiIndexReducer
})

export default rootReducer
