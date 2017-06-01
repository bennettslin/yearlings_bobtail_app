// Actions for state of this user session.
import { CAROUSEL_ANNOTATION_INDEX,
         IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW } from '../../constants/state'

export const setCarouselAnnotationIndex = (carouselAnnotationIndex = 0) => (
    { type: CAROUSEL_ANNOTATION_INDEX,
      payload: carouselAnnotationIndex }
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
