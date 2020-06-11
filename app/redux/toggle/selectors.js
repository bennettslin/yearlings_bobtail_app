import { createSelector } from "reselect"
import { mapIsLyricExpandable } from "../responsive/selectors"
import { mapIsHeightlessLyric } from "../viewport/selectors"

export const mapIsAutoScroll = (
    { toggleStore: { isAutoScroll } }
) => isAutoScroll

export const mapIsCarouselShown = (
    { toggleStore: { isCarouselShown } }
) => isCarouselShown

export const mapIsNavShown = (
    { toggleStore: { isNavShown } }
) => isNavShown

export const mapIsDotsSlideShown = (
    { toggleStore: { isDotsSlideShown } }
) => isDotsSlideShown

export const mapIsLyricExpanded = (
    { toggleStore: { isLyricExpanded } }
) => isLyricExpanded

export const mapIsScoreShown = (
    { toggleStore: { isScoreShown } }
) => isScoreShown

export const mapIsAboutShown = (
    { toggleStore: { isAboutShown } }
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
