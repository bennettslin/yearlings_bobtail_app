// Actions for state of this user session.
import {
    CAROUSEL_ANNOTATION_INDEX,
    INTERACTIVATED_VERSE_INDEX,
    SHOWN_BOOK_COLUMN_INDEX
} from 'constants/state'

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

export const setShownBookColumnIndex = (shownBookColumnIndex = -1) => (
    {
        type: SHOWN_BOOK_COLUMN_INDEX,
        payload: shownBookColumnIndex
    }
)
