// Actions for state based on window size.
import { IS_CAROUSEL_EXPANDABLE,
         IS_HEIGHTLESS_LYRIC_COLUMN,
         IS_HIDDEN_NAV } from '../../constants/state'

export const setIsCarouselExpandable = (isCarouselExpandable = false) => (
    { type: IS_CAROUSEL_EXPANDABLE,
      payload: isCarouselExpandable }
)

export const setIsHeightlessLyricColumn = (isHeightlessLyricColumn = false) => (
    { type: IS_HEIGHTLESS_LYRIC_COLUMN,
      payload: isHeightlessLyricColumn }
)

export const setIsHiddenNav = (isHiddenNav = false) => (
    { type: IS_HIDDEN_NAV,
      payload: isHiddenNav }
)
