import { SONG_INDEX,
         ANNOTATION_INDEX,
         ACTIVE_DOT_KEYS,
         OVERVIEW_INDEX,
         WIKI_URL,
         DEFAULT_OVERVIEW_INDEX } from '../../helpers/constants'

export const selectSongIndex = (activeSongIndex = 0) => ({
    type: SONG_INDEX,
    payload: activeSongIndex
})

export const selectAnnotationIndex = (activeAnnotationIndex = 0) => ({
    type: ANNOTATION_INDEX,
    payload: activeAnnotationIndex
})

export const toggleDotKey = (dotKey, isActive = false) => ({
    type: ACTIVE_DOT_KEYS,
    payload: { dotKey,
               isActive }
})

export const selectOverviewIndex = (activeOverviewIndex = DEFAULT_OVERVIEW_INDEX) => ({
    type: OVERVIEW_INDEX,
    payload: activeOverviewIndex
})

export const selectWikiUrl = (activeWikiUrl = null) => ({
    type: WIKI_URL,
    payload: activeWikiUrl
})
