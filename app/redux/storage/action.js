// Actions for state persisted in user's local storage.
import { setInStorage } from '../storageHelper'

import {
    SELECTED_AUDIO_OPTION_INDEX, SELECTED_LYRIC_COLUMN_INDEX, SELECTED_OVERVIEW_INDEX, SELECTED_TIPS_INDEX, SELECTED_WIKI_INDEX
} from 'constants/state'

export const selectAudioOptionIndex = (selectedAudioOptionIndex = 0) => {
    setInStorage(SELECTED_AUDIO_OPTION_INDEX, selectedAudioOptionIndex)
    return {
        type: SELECTED_AUDIO_OPTION_INDEX,
        payload: selectedAudioOptionIndex
    }
}

export const selectLyricColumnIndex = (selectedLyricColumnIndex = 0) => {
    setInStorage(SELECTED_LYRIC_COLUMN_INDEX, selectedLyricColumnIndex)
    return {
        type: SELECTED_LYRIC_COLUMN_INDEX,
        payload: selectedLyricColumnIndex
    }
}

export const selectOverviewIndex = (selectedOverviewIndex = 0) => {
    setInStorage(SELECTED_OVERVIEW_INDEX, selectedOverviewIndex)
    return {
        type: SELECTED_OVERVIEW_INDEX,
        payload: selectedOverviewIndex
    }
}

export const selectTipsIndex = (selectedTipsIndex = 0) => {
    setInStorage(SELECTED_TIPS_INDEX, selectedTipsIndex)
    return {
        type: SELECTED_TIPS_INDEX,
        payload: selectedTipsIndex
    }
}

export const selectWikiIndex = (selectedWikiIndex = 0) => {
    setInStorage(SELECTED_WIKI_INDEX, selectedWikiIndex)
    return {
        type: SELECTED_WIKI_INDEX,
        payload: selectedWikiIndex
    }
}
