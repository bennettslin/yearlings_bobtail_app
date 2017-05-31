// Actions for state based on window size.
import { IS_CAROUSEL_EXPANDABLE,
         IS_HEIGHTLESS_LYRIC_COLUMN,
         IS_HIDDEN_NAV,
         IS_SCORES_TIPS_IN_MAIN,
         IS_TITLE_IN_AUDIO,
         SHOW_ONE_OF_TWO_LYRIC_COLUMNS,
         SHOW_SINGLE_BOOK_COLUMN } from '../../constants/state'

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

export const setIsScoresTipsInMain = (isScoresTipsInMain = false) => (
    { type: IS_SCORES_TIPS_IN_MAIN,
      payload: isScoresTipsInMain }
)

export const setIsTitleInAudio = (isTitleInAudio = false) => (
    { type: IS_TITLE_IN_AUDIO,
      payload: isTitleInAudio }
)

export const setShowOneOfTwoLyricColumns = (showOneOfTwoLyricColumns = false) => (
    { type: SHOW_ONE_OF_TWO_LYRIC_COLUMNS,
      payload: showOneOfTwoLyricColumns }
)

export const setShowSingleBookColumn = (showSingleBookColumn = false) => (
    { type: SHOW_SINGLE_BOOK_COLUMN,
      payload: showSingleBookColumn }
)
