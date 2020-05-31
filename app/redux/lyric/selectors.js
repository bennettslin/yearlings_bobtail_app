import { createSelector } from "reselect"

export const LYRIC_SONG_INDEX_SELECTOR = (
    { lyricStore: { lyricSongIndex } }
) => lyricSongIndex

export const LYRIC_VERSE_INDEX_SELECTOR = (
    { lyricStore: { lyricVerseIndex } }
) => lyricVerseIndex

export const LYRIC_ANNOTATION_INDEX_SELECTOR = (
    { lyricStore: { lyricAnnotationIndex } }
) => lyricAnnotationIndex

export const IS_LYRIC_LOGUE_SELECTOR = (
    { lyricStore: { isLyricLogue } }
) => isLyricLogue

export const IS_SELECTED_LYRIC_ANNOTATION = annotationIndex => (
    createSelector(
        LYRIC_ANNOTATION_INDEX_SELECTOR,
        (
            lyricAnnotationIndex
        ) => (
            lyricAnnotationIndex === annotationIndex
        )
    )
)
