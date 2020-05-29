export const QUEUED_SCROLL_CAROUSEL_LOG_SELECTOR = (
    { scrollCarouselStore: { queuedScrollCarouselLog } }
) => queuedScrollCarouselLog

export const QUEUED_SCROLL_CAROUSEL_INDEX_SELECTOR = (
    { scrollCarouselStore: { queuedScrollCarouselIndex } }
) => queuedScrollCarouselIndex

export const QUEUED_SCROLL_CAROUSEL_NO_DURATION_SELECTOR = (
    { scrollCarouselStore: { queuedScrollCarouselNoDuration } }
) => queuedScrollCarouselNoDuration

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
