import { SELECTED_ADMIN_INDEX,
         SELECTED_SONG_INDEX,
         SELECTED_ANNOTATION_INDEX,
         SELECTED_VERSE_INDEX,
         SELECTED_TIME_PLAYED,
         SELECTED_DOT_KEYS,
         SELECTED_OVERVIEW_INDEX,
         SELECTED_AUDIO_OPTION_INDEX,
         SELECTED_LYRIC_COLUMN_INDEX,
         SELECTED_TIPS_INDEX,
         SELECTED_WIKI_INDEX,
         SELECTED_SCORE_INDEX,
         SELECTED_NAV_INDEX,
         SELECTED_DOTS_INDEX,
         SELECTED_CAROUSEL_INDEX,
         SELECTED_TITLE_INDEX,
         SELECTED_ACCESS_INDEX } from '../../helpers/constants'
 import SessionHelper from '../../helpers/session-helper'

 const { setInSession, setDotInSession } = SessionHelper

 export const selectAdminIndex = (selectedAdminIndex = 0) => {
     setInSession(SELECTED_ADMIN_INDEX, selectedAdminIndex)
     return {
         type: SELECTED_ADMIN_INDEX,
         payload: selectedAdminIndex
     }
 }

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

export const selectWikiIndex = (selectedWikiIndex = 0) => {
    setInSession(SELECTED_WIKI_INDEX, selectedWikiIndex)
    return {
        type: SELECTED_WIKI_INDEX,
        payload: selectedWikiIndex
    }
}

export const selectScoreIndex = (selectedScoreIndex = 0) => {
    setInSession(SELECTED_SCORE_INDEX, selectedScoreIndex)
    return {
        type: SELECTED_SCORE_INDEX,
        payload: selectedScoreIndex
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

export const selectTipsIndex = (selectedTipsIndex = 0) => {
    setInSession(SELECTED_TIPS_INDEX, selectedTipsIndex)
    return {
        type: SELECTED_TIPS_INDEX,
        payload: selectedTipsIndex
    }
}

export const selectNavIndex = (selectedNavIndex = 0) => {
    setInSession(SELECTED_NAV_INDEX, selectedNavIndex)
    return {
        type: SELECTED_NAV_INDEX,
        payload: selectedNavIndex
    }
}

export const selectDotsIndex = (selectedDotsIndex = 0) => {
    setInSession(SELECTED_DOTS_INDEX, selectedDotsIndex)
    return {
        type: SELECTED_DOTS_INDEX,
        payload: selectedDotsIndex
    }
}

export const selectCarouselIndex = (selectedCarouselIndex = 0) => {
    setInSession(SELECTED_CAROUSEL_INDEX, selectedCarouselIndex)
    return {
        type: SELECTED_CAROUSEL_INDEX,
        payload: selectedCarouselIndex
    }
}

export const selectTitleIndex = (selectedTitleIndex = 0) => {
    setInSession(SELECTED_TITLE_INDEX, selectedTitleIndex)
    return {
        type: SELECTED_TITLE_INDEX,
        payload: selectedTitleIndex
    }
}

export const accessOn = (selectedAccessIndex = 0) => {
    setInSession(SELECTED_ACCESS_INDEX, selectedAccessIndex)
    return {
        type: SELECTED_ACCESS_INDEX,
        payload: selectedAccessIndex
    }
}
