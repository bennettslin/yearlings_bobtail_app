// Actions for state of this user session.
import { POPUP_ANNOTATION_SONG_INDEX,
         POPUP_ANNOTATION_INDEX,
         APP_MOUNTED,
         CAROUSEL_ANNOTATION_INDEX,
         INTERACTIVATED_VERSE_INDEX,
         IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW,
         OVERVIEW_LOGUE_INDEX,
         OVERVIEW_SONG_INDEX,
         SELECTED_VERSE_ELEMENT,
         SHOWN_BOOK_COLUMN_INDEX } from '../../constants/state'

export const setPopupAnnotationSongIndex = (popupAnnotationSongIndex = null) => (
    { type: POPUP_ANNOTATION_SONG_INDEX,
      payload: popupAnnotationSongIndex }
)

export const setPopupAnnotationIndex = (popupAnnotationIndex = null) => (
    { type: POPUP_ANNOTATION_INDEX,
      payload: popupAnnotationIndex }
)

export const setAppMounted = (appMounted = false) => (
    { type: APP_MOUNTED,
      payload: appMounted }
)

export const setCarouselAnnotationIndex = (carouselAnnotationIndex = 0) => (
    { type: CAROUSEL_ANNOTATION_INDEX,
      payload: carouselAnnotationIndex }
)

export const setInteractivatedVerseIndex = (interactivatedVerseIndex = -1) => (
    { type: INTERACTIVATED_VERSE_INDEX,
      payload: interactivatedVerseIndex }
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

export const setOverviewLogueIndex = (overviewLogueIndex = -1) => (
    { type: OVERVIEW_LOGUE_INDEX,
      payload: overviewLogueIndex }
)

export const setOverviewSongIndex = (overviewSongIndex = -1) => (
    { type: OVERVIEW_SONG_INDEX,
      payload: overviewSongIndex }
)

export const setSelectedVerseElement = (selectedVerseElement = null) => (
    { type: SELECTED_VERSE_ELEMENT,
      payload: selectedVerseElement }
)

export const setShownBookColumnIndex = (shownBookColumnIndex = -1) => (
    { type: SHOWN_BOOK_COLUMN_INDEX,
      payload: shownBookColumnIndex }
)
