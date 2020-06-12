import { createSelector } from 'reselect'
import { mapIsLyricExpandable } from '../responsive/selectors'
import { mapIsHeightlessLyric } from '../viewport/selectors'
import { TOGGLE_STORE } from '../../constants/store'

export const mapIsAutoScroll = (
    { [TOGGLE_STORE]: { isAutoScroll } }
) => isAutoScroll

export const mapIsCarouselShown = (
    { [TOGGLE_STORE]: { isCarouselShown } }
) => isCarouselShown

export const mapIsNavShown = (
    { [TOGGLE_STORE]: { isNavShown } }
) => isNavShown

export const mapIsDotsSlideShown = (
    { [TOGGLE_STORE]: { isDotsSlideShown } }
) => isDotsSlideShown

export const mapIsLyricExpanded = (
    { [TOGGLE_STORE]: { isLyricExpanded } }
) => isLyricExpanded

export const mapIsScoreShown = (
    { [TOGGLE_STORE]: { isScoreShown } }
) => isScoreShown

export const mapIsAboutShown = (
    { [TOGGLE_STORE]: { isAboutShown } }
) => isAboutShown

export const getMapIsExpandToggleShown = inMain => createSelector(
    mapIsLyricExpandable,
    mapIsHeightlessLyric,
    mapIsLyricExpanded,
    (
        isLyricExpandable,
        isHeightlessLyric,
        isLyricExpanded
    ) => (
        isLyricExpandable &&

        // Render button in main if lyric column is heightless.
        Boolean(inMain) === (isHeightlessLyric && !isLyricExpanded)
    )
)
