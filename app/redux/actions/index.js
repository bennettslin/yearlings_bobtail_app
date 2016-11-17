import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_TIME_PLAYED,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_AUDIO_OPTION_INDEX,
         SELECTED_LYRIC_COLUMN_INDEX,
         SELECTED_WIKI_INDEX,
         ACCESSED_ON,
         ACCESSED_SECTION_INDEX } from '../../helpers/constants'
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

export const selectWikiIndex = (selectedWikiIndex = '') => {
    setInSession(SELECTED_WIKI_INDEX, selectedWikiIndex)
    return {
        type: SELECTED_WIKI_INDEX,
        payload: selectedWikiIndex
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

// Keep in Redux for now, but perhaps scrap later.
export const selectTimePlayed = (selectedTimePlayed = 0) => {
    setInSession(SELECTED_TIME_PLAYED, selectedTimePlayed)
    return {
        type: SELECTED_TIME_PLAYED,
        payload: selectedTimePlayed
    }
}

export const selectOverviewIndex = (selectedOverviewIndex = 0) => {
    setInSession(SELECTED_OVERVIEW_INDEX, selectedOverviewIndex)
    return {
        type: SELECTED_OVERVIEW_INDEX,
        payload: selectedOverviewIndex
    }
}

export const selectAudioOptionIndex = (selectedAudioOptionIndex = 0) => {
    setInSession(SELECTED_AUDIO_OPTION_INDEX, selectedAudioOptionIndex)
    return {
        type: SELECTED_AUDIO_OPTION_INDEX,
        payload: selectedAudioOptionIndex
    }
}

export const selectLyricColumnIndex = (selectedLyricColumnIndex = 0) => {
    setInSession(SELECTED_LYRIC_COLUMN_INDEX, selectedLyricColumnIndex)
    return {
        type: SELECTED_LYRIC_COLUMN_INDEX,
        payload: selectedLyricColumnIndex
    }
}

export const accessOn = (accessedOn = 0) => {
    setInSession(ACCESSED_ON, accessedOn)
    return {
        type: ACCESSED_ON,
        payload: accessedOn
    }
}

export const accessSectionIndex = (accessedSectionIndex = 0) => {
    setInSession(ACCESSED_SECTION_INDEX, accessedSectionIndex)
    return {
        type: ACCESSED_SECTION_INDEX,
        payload: accessedSectionIndex
    }
}
