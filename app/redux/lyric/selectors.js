import { createSelector } from "reselect"

export const mapLyricSongIndex = (
    { lyricStore: { lyricSongIndex } }
) => lyricSongIndex

export const mapLyricVerseIndex = (
    { lyricStore: { lyricVerseIndex } }
) => lyricVerseIndex

export const mapLyricAnnotationIndex = (
    { lyricStore: { lyricAnnotationIndex } }
) => lyricAnnotationIndex

export const mapIsLyricLogue = (
    { lyricStore: { isLyricLogue } }
) => isLyricLogue

export const mapIsSelectedLyricAnnotation = annotationIndex => (
    createSelector(
        mapLyricAnnotationIndex,
        (
            lyricAnnotationIndex
        ) => (
            lyricAnnotationIndex === annotationIndex
        )
    )
)
