// Actions for state of this user session.
import { IS_LYRIC_EXPANDED,
         IS_VERSE_BAR_ABOVE,
         IS_VERSE_BAR_BELOW } from '../../constants/state'

export const setIsLyricExpanded = (isLyricExpanded = 0) => (
    { type: IS_LYRIC_EXPANDED,
      payload: isLyricExpanded }
)

export const setIsVerseBarAbove = (isVerseBarAbove = 0) => (
    { type: IS_VERSE_BAR_ABOVE,
      payload: isVerseBarAbove }
)

export const setIsVerseBarBelow = (isVerseBarBelow = 0) => (
    { type: IS_VERSE_BAR_BELOW,
      payload: isVerseBarBelow }
)
