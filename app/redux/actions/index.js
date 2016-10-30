import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_TIME,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_WIKI_URL,
         DEFAULT_OVERVIEW_INDEX } from '../../helpers/constants'
 import SessionHelper from '../../helpers/session-helper'

 const { setInSession, setDotInSession } = SessionHelper

export const selectSongIndex = (selectedSongIndex = 0) => {
    setInSession(SELECTED_SONG_INDEX, selectedSongIndex)
    return {
        type: SELECTED_SONG_INDEX,
        payload: selectedSongIndex
    }
}

export const selectAnnotationIndex = (selectedAnnotationIndex = 0) => {
    setInSession(SELECTED_ANNOTATION_INDEX, selectedAnnotationIndex)
    return {
        type: SELECTED_ANNOTATION_INDEX,
        payload: selectedAnnotationIndex
    }
}

export const selectVerseIndex = (selectedVerseIndex = 0) => {
    setInSession(SELECTED_VERSE_INDEX, selectedVerseIndex)
    return {
        type: SELECTED_VERSE_INDEX,
        payload: selectedVerseIndex
    }
}

export const selectTime = (selectedTime = 0) => {
    setInSession(SELECTED_TIME, selectedTime)
    return {
        type: SELECTED_TIME,
        payload: selectedTime
    }
}

export const selectOverviewIndex = (selectedOverviewIndex = DEFAULT_OVERVIEW_INDEX) => {
    setInSession(SELECTED_OVERVIEW_INDEX, selectedOverviewIndex)
    return {
        type: SELECTED_OVERVIEW_INDEX,
        payload: selectedOverviewIndex
    }
}

export const selectWikiUrl = (selectedWikiUrl = '') => {
    setInSession(SELECTED_WIKI_URL, selectedWikiUrl)
    return {
        type: SELECTED_WIKI_URL,
        payload: selectedWikiUrl
    }
}

export const selectDotKey = (selectedDotKey, isSelected = false) => {
    setDotInSession(selectedDotKey, isSelected)
    return {
        type: SELECTED_DOT_KEYS,
        payload: { selectedDotKey,
                   isSelected }
    }
}
