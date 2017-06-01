// Actions for state of this user session.
import { APP_MOUNTED,
         CAROUSEL_ANNOTATION_INDEX,
         INTERACTIVATED_VERSE_INDEX,
         IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW,
         POPUP_LOGUE_OVERVIEW,
         POPUP_SONG_OVERVIEW,
         SHOWN_BOOK_COLUMN_INDEX } from '../../constants/state'

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

export const setPopupLogueOverview = (popupLogueOverview = '') => (
    { type: POPUP_LOGUE_OVERVIEW,
      payload: popupLogueOverview }
)

export const setPopupSongOverview = (popupSongOverview = '') => (
    { type: POPUP_SONG_OVERVIEW,
      payload: popupSongOverview }
)

export const setShownBookColumnIndex = (shownBookColumnIndex = 0) => (
    { type: SHOWN_BOOK_COLUMN_INDEX,
      payload: shownBookColumnIndex }
)
