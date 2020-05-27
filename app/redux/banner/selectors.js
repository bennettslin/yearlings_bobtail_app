export const IS_BANNER_HOVERING_SELECTOR = (
    { bannerStore: { isBannerHovering } }
) => isBannerHovering

export const BANNER_HOVER_VERSE_INDEX_SELECTOR = (
    { bannerStore: { bannerHoverVerseIndex } }
) => bannerHoverVerseIndex

export const BANNER_HOVER_TIME_SELECTOR = (
    { bannerStore: { bannerHoverTime } }
) => bannerHoverTime

// import {
//     IS_BANNER_HOVERING_SELECTOR,
//     BANNER_HOVER_VERSE_INDEX_SELECTOR,
//     BANNER_HOVER_TIME_SELECTOR
// } from '../../../redux/banner/selectors'

// isBannerHovering = IS_BANNER_HOVERING_SELECTOR(state),
// bannerHoverVerseIndex = BANNER_HOVER_VERSE_INDEX_SELECTOR(state),
// bannerHoverTime = BANNER_HOVER_TIME_SELECTOR(state)
