export const IS_AUTO_SCROLL_SELECTOR = (
    { toggleStore: { isAutoScroll } }
) => isAutoScroll

export const IS_CAROUSEL_SHOWN_SELECTOR = (
    { toggleStore: { isCarouselShown } }
) => isCarouselShown

export const IS_NAV_SHOWN_SELECTOR = (
    { toggleStore: { isNavShown } }
) => isNavShown

export const IS_DOTS_SLIDE_SHOWN_SELECTOR = (
    { toggleStore: { isDotsSlideShown } }
) => isDotsSlideShown

export const IS_LYRIC_EXPANDED_SELECTOR = (
    { toggleStore: { isLyricExpanded } }
) => isLyricExpanded

export const IS_SCORE_SHOWN_SELECTOR = (
    { toggleStore: { isScoreShown } }
) => isScoreShown

export const IS_ABOUT_SHOWN_SELECTOR = (
    { toggleStore: { isAboutShown } }
) => isAboutShown

// import {
//     LYRIC_SONG_INDEX_SELECTOR,
//     LYRIC_VERSE_INDEX_SELECTOR,
//     LYRIC_ANNOTATION_INDEX_SELECTOR,
//     IS_LYRIC_LOGUE_SELECTOR
// } from '../../../redux/players/selectors'

// lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
// lyricVerseIndex = LYRIC_VERSE_INDEX_SELECTOR(state),
// lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
// isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)
