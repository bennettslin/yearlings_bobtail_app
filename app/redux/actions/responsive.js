// Actions for state based on window size.
import { IS_HEIGHTLESS_LYRIC_COLUMN,
         IS_HIDDEN_NAV,
         IS_MOBILE_WIKI,
         IS_SCORES_TIPS_IN_MAIN,
         IS_TWO_ROW_MENU,
         SHOW_ONE_OF_TWO_LYRIC_COLUMNS,
         SHOW_SHRUNK_NAV_ICON,
         SHOW_SINGLE_BOOK_COLUMN } from 'constants/state'

export const setIsHeightlessLyricColumn = (isHeightlessLyricColumn = false) => (
    { type: IS_HEIGHTLESS_LYRIC_COLUMN,
      payload: isHeightlessLyricColumn }
)

export const setIsHiddenCarouselNav = (isHiddenCarouselNav = false) => (
    { type: IS_HIDDEN_NAV,
      payload: isHiddenCarouselNav }
)

export const setIsMobileWiki = (isMobileWiki = false) => (
    { type: IS_MOBILE_WIKI,
      payload: isMobileWiki }
)

export const setIsScoresTipsInMain = (isScoresTipsInMain = false) => (
    { type: IS_SCORES_TIPS_IN_MAIN,
      payload: isScoresTipsInMain }
)

export const setIsTwoRowMenu = (isTwoRowMenu = false) => (
    { type: IS_TWO_ROW_MENU,
      payload: isTwoRowMenu }
)

export const setShowOneOfTwoLyricColumns = (showOneOfTwoLyricColumns = false) => (
    { type: SHOW_ONE_OF_TWO_LYRIC_COLUMNS,
      payload: showOneOfTwoLyricColumns }
)

export const setShowShrunkNavIcon = (showShrunkNavIcon = false) => (
    { type: SHOW_SHRUNK_NAV_ICON,
      payload: showShrunkNavIcon }
)

export const setShowSingleBookColumn = (showSingleBookColumn = false) => (
    { type: SHOW_SINGLE_BOOK_COLUMN,
      payload: showSingleBookColumn }
)
