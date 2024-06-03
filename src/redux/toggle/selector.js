import { TOGGLE_STORE } from '../../constants/store'
import { createSelector } from 'reselect'

export const mapIsAutoScroll = (
    { [TOGGLE_STORE]: { isAutoScroll } },
) => isAutoScroll

export const mapIsCarouselExpanded = (
    { [TOGGLE_STORE]: { isCarouselExpanded } },
) => isCarouselExpanded

export const mapIsNavExpanded = (
    { [TOGGLE_STORE]: { isNavExpanded } },
) => isNavExpanded

export const mapIsCarouselShown = createSelector(
    mapIsCarouselExpanded,
    mapIsNavExpanded,
    (
        isCarouselExpanded,
        isNavExpanded,
    ) => isCarouselExpanded && !isNavExpanded,
)

export const mapIsDotsSlideShown = (
    { [TOGGLE_STORE]: { isDotsSlideShown } },
) => isDotsSlideShown

export const mapIsLyricExpanded = (
    { [TOGGLE_STORE]: { isLyricExpanded } },
) => isLyricExpanded

export const mapIsScoreShown = (
    { [TOGGLE_STORE]: { isScoreShown } },
) => isScoreShown

export const mapIsPromoShown = (
    { [TOGGLE_STORE]: { isPromoShown } },
) => isPromoShown

export const mapIsAboutShown = (
    { [TOGGLE_STORE]: { isAboutShown } },
) => isAboutShown

export const mapIsAudioOptionsExpanded = (
    { [TOGGLE_STORE]: { isAudioOptionsExpanded } },
) => isAudioOptionsExpanded

export const mapIsTextJustified = (
    { [TOGGLE_STORE]: { isTextJustified } },
) => isTextJustified
