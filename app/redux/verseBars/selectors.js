export const IS_VERSE_BAR_ABOVE_SELECTOR = (
    { verseBarsStore: { isVerseBarAbove } }
) => isVerseBarAbove

export const IS_VERSE_BAR_BELOW_SELECTOR = (
    { verseBarsStore: { isVerseBarBelow } }
) => isVerseBarBelow

export const QUEUED_DETERMINE_VERSE_BARS_SELECTOR = (
    { verseBarsStore: { queuedDetermineVerseBars } }
) => queuedDetermineVerseBars

export const QUEUED_VERSE_BARS_TIMEOUT_SELECTOR = (
    { verseBarsStore: { queuedVerseBarsTimeout } }
) => queuedVerseBarsTimeout

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
