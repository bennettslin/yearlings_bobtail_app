import { SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_LINE_INDEX,
         SELECTED_TIME,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_WIKI_URL,
         DEFAULT_OVERVIEW_INDEX } from '../../helpers/constants'

export const selectSongIndex = (selectedSongIndex = 0) => ({
    type: SELECTED_SONG_INDEX,
    payload: selectedSongIndex
})

export const selectAnnotationIndex = (selectedAnnotationIndex = 0) => ({
    type: SELECTED_ANNOTATION_INDEX,
    payload: selectedAnnotationIndex
})

export const selectLineIndex = (selectedLineIndex = 0) => ({
    type: SELECTED_LINE_INDEX,
    payload: selectedLineIndex
})

export const selectTime = (selectedTime = 0) => ({
    type: SELECTED_TIME,
    payload: selectedTime
})

export const selectDotKey = (selectedDotKey, isSelected = false) => ({
    type: SELECTED_DOT_KEYS,
    payload: { selectedDotKey,
               isSelected }
})

export const selectOverviewIndex = (selectedOverviewIndex = DEFAULT_OVERVIEW_INDEX) => ({
    type: SELECTED_OVERVIEW_INDEX,
    payload: selectedOverviewIndex
})

export const selectWikiUrl = (selectedWikiUrl = null) => ({
    type: SELECTED_WIKI_URL,
    payload: selectedWikiUrl
})
