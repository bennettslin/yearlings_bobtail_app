export const QUEUED_SCROLL_LYRIC_LOG_SELECTOR = (
    { scrollLyricStore: { queuedScrollLyricLog } }
) => queuedScrollLyricLog

export const QUEUED_SCROLL_LYRIC_BY_VERSE_SELECTOR = (
    { scrollLyricStore: { queuedScrollLyricByVerse } }
) => queuedScrollLyricByVerse

export const QUEUED_SCROLL_LYRIC_INDEX_SELECTOR = (
    { scrollLyricStore: { queuedScrollLyricIndex } }
) => queuedScrollLyricIndex

export const QUEUED_SCROLL_LYRIC_ALWAYS_SELECTOR = (
    { scrollLyricStore: { queuedScrollLyricAlways } }
) => queuedScrollLyricAlways

export const QUEUED_SCROLL_LYRIC_NO_DURATION_SELECTOR = (
    { scrollLyricStore: { queuedScrollLyricNoDuration } }
) => queuedScrollLyricNoDuration

export const QUEUED_SCROLL_LYRIC_FROM_AUTO_SCROLL_SELECTOR = (
    { scrollLyricStore: { queuedScrollLyricFromAutoScroll } }
) => queuedScrollLyricFromAutoScroll

export const QUEUED_SCENE_CHANGE_EXIT_SCROLL_CALLBACK_SELECTOR = (
    { scrollLyricStore: { queuedSceneChangeExitScrollCallback } }
) => queuedSceneChangeExitScrollCallback

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
