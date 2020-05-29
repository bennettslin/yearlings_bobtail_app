export const IS_LOGUE_OVERVIEW_SELECTOR = (
    { optionStore: { isLogueOverviewShown } }
) => isLogueOverviewShown

export const SELECTED_OVERVIEW_OPTION_SELECTOR = (
    { optionStore: { selectedOverviewOption } }
) => selectedOverviewOption

export const SELECTED_TIPS_OPTION_SELECTOR = (
    { optionStore: { selectedTipsOption } }
) => selectedTipsOption

export const IS_FORCED_SHOWN_OVERVIEW_SELECTOR = (
    { optionStore: { isForcedShownOverview } }
) => isForcedShownOverview

export const IS_SONG_SHOWN_OVERVIEW_SELECTOR = (
    { optionStore: { isSongShownOverview } }
) => isSongShownOverview

// TODO: Why is this needed? It's only ever set, never used.
export const IS_SONG_SHOWN_TIPS_SELECTOR = (
    { optionStore: { isSongShownTips } }
) => isSongShownTips

// import {
//     LYRIC_SONG_INDEX_SELECTOR,
//     LYRIC_VERSE_INDEX_SELECTOR,
//     LYRIC_ANNOTATION_INDEX_SELECTOR,
//     IS_LYRIC_LOGUE_SELECTOR
// } from '../../../redux/option/selectors'

// lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
// lyricVerseIndex = LYRIC_VERSE_INDEX_SELECTOR(state),
// lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
// isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)
