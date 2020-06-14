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
