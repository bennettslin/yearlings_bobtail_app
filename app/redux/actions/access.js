// Actions for accessed state.
import { ACCESSED_ANNOTATION_INDEX,
         ACCESSED_ANNOTATION_ANCHOR_INDEX,
         ACCESSED_DOT_INDEX,
         ACCESSED_NAV_SONG_INDEX } from 'constants/state'

export const accessAnnotationIndex = (accessedAnnotationIndex = 0) => (
    { type: ACCESSED_ANNOTATION_INDEX,
      payload: accessedAnnotationIndex }
)

export const accessAnnotationAnchorIndex = (accessedAnnotationAnchorIndex = 0) => (
    { type: ACCESSED_ANNOTATION_ANCHOR_INDEX,
      payload: accessedAnnotationAnchorIndex }
)

export const accessDotIndex = (accessedDotIndex = 0) => (
    { type: ACCESSED_DOT_INDEX,
      payload: accessedDotIndex }
)

export const accessNavSongIndex = (accessedNavSongIndex = 0) => (
    { type: ACCESSED_NAV_SONG_INDEX,
      payload: accessedNavSongIndex }
)
