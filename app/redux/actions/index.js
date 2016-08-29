import { ACTIVE_SONG_INDEX,
         ACTIVE_ANNOTATION_INDEX,
         ACTIVE_DOT_KEYS,
         ACTIVE_OVERVIEW_INDEX,
         ACTIVE_WIKI_URL,
         DEFAULT_OVERVIEW_INDEX } from '../../helpers/constants'

export const selectSongIndex = (activeSongIndex = 0) => ({
    type: ACTIVE_SONG_INDEX,
    payload: activeSongIndex
})

export const selectAnnotationIndex = (activeAnnotationIndex = 0) => ({
    type: ACTIVE_ANNOTATION_INDEX,
    payload: activeAnnotationIndex
})

export const toggleDotKey = (dotKey, isActive = false) => ({
    type: ACTIVE_DOT_KEYS,
    payload: { dotKey,
               isActive }
})

export const selectOverviewIndex = (activeOverviewIndex = DEFAULT_OVERVIEW_INDEX) => ({
    type: ACTIVE_OVERVIEW_INDEX,
    payload: activeOverviewIndex
})

export const selectWikiUrl = (activeWikiUrl = null) => ({
    type: ACTIVE_WIKI_URL,
    payload: activeWikiUrl
})
