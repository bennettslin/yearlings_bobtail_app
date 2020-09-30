import { TOGGLE_STORE } from '../../constants/store'

export const mapIsAutoScroll = (
    { [TOGGLE_STORE]: { isAutoScroll } }
) => isAutoScroll

export const mapIsCarouselExpanded = (
    { [TOGGLE_STORE]: { isCarouselExpanded } }
) => isCarouselExpanded

export const mapIsNavExpanded = (
    { [TOGGLE_STORE]: { isNavExpanded } }
) => isNavExpanded

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
