// Actions for state of this user session.
import {
    APP_MOUNTED,
    CAROUSEL_ANNOTATION_INDEX,
    INTERACTIVATED_VERSE_INDEX,
    IS_VERSE_BAR_ABOVE,
    IS_VERSE_BAR_BELOW,
    SHOWN_BOOK_COLUMN_INDEX
} from 'constants/state'

export const setAppMounted = (appMounted = false) => (
    {
        type: APP_MOUNTED,
        payload: appMounted
    }
)

export const setCarouselAnnotationIndex = (carouselAnnotationIndex = 0) => (
    {
        type: CAROUSEL_ANNOTATION_INDEX,
        payload: carouselAnnotationIndex
    }
)

export const setInteractivatedVerseIndex = (interactivatedVerseIndex = -1) => (
    {
        type: INTERACTIVATED_VERSE_INDEX,
        payload: interactivatedVerseIndex
    }
)

export const setIsVerseBarAbove = (isVerseBarAbove = false) => (
    {
        type: IS_VERSE_BAR_ABOVE,
        payload: isVerseBarAbove
    }
)

export const setIsVerseBarBelow = (isVerseBarBelow = false) => (
    {
        type: IS_VERSE_BAR_BELOW,
        payload: isVerseBarBelow
    }
)

export const setShownBookColumnIndex = (shownBookColumnIndex = -1) => (
    {
        type: SHOWN_BOOK_COLUMN_INDEX,
        payload: shownBookColumnIndex
    }
)
