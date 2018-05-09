// Actions for state of this user session.
import { APP_MOUNTED,
         IS_HEAVY_RENDER_READY,
         RENDER_READY_SONG_INDEX,
         RENDER_READY_ANNOTATION_INDEX,
         CAROUSEL_ANNOTATION_INDEX,
         INTERACTIVATED_VERSE_INDEX,
         CURRENT_SCENE_INDEX,
         IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW,
         IS_MANUAL_SCROLL,
         SELECTED_VERSE_ELEMENT,
         SHOWN_BOOK_COLUMN_INDEX } from '../../constants/state'

export const setAppMounted = (appMounted = false) => (
    { type: APP_MOUNTED,
      payload: appMounted }
)

export const setIsHeavyRenderReady = (isHeavyRenderReady = false) => (
    { type: IS_HEAVY_RENDER_READY,
      payload: isHeavyRenderReady }
)

export const setRenderReadySongIndex = (renderReadySongIndex = -1) => (
    { type: RENDER_READY_SONG_INDEX,
      payload: renderReadySongIndex }
)

export const setRenderReadyAnnotationIndex = (renderReadyAnnotationIndex = 0) => (
    { type: RENDER_READY_ANNOTATION_INDEX,
      payload: renderReadyAnnotationIndex }
)

export const setCarouselAnnotationIndex = (carouselAnnotationIndex = 0) => (
    { type: CAROUSEL_ANNOTATION_INDEX,
      payload: carouselAnnotationIndex }
)

export const setInteractivatedVerseIndex = (interactivatedVerseIndex = -1) => (
    { type: INTERACTIVATED_VERSE_INDEX,
      payload: interactivatedVerseIndex }
)

export const setCurrentSceneIndex = (currentSceneIndex = -1) => (
    { type: CURRENT_SCENE_INDEX,
      payload: currentSceneIndex }
)

export const setIsLyricExpanded = (isLyricExpanded = false) => (
    { type: IS_LYRIC_EXPANDED,
      payload: isLyricExpanded }
)

export const setIsVerseBarAbove = (isVerseBarAbove = false) => (
    { type: IS_VERSE_BAR_ABOVE,
      payload: isVerseBarAbove }
)

export const setIsVerseBarBelow = (isVerseBarBelow = false) => (
    { type: IS_VERSE_BAR_BELOW,
      payload: isVerseBarBelow }
)

export const setIsManualScroll = (isManualScroll = false) => (
    { type: IS_MANUAL_SCROLL,
      payload: isManualScroll }
)

export const setSelectedVerseElement = (selectedVerseElement = null) => (
    { type: SELECTED_VERSE_ELEMENT,
      payload: selectedVerseElement }
)

export const setShownBookColumnIndex = (shownBookColumnIndex = -1) => (
    { type: SHOWN_BOOK_COLUMN_INDEX,
      payload: shownBookColumnIndex }
)
