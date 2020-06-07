import { createSelector } from "reselect"
import { getCursorIndex } from "../../helpers/verse"
import { mapActivatedVerseIndex } from "../activated/selectors"
import { mapSliderVerseIndex } from "../slider/selectors"

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

export const getMapIsLyricAnnotation = annotationIndex => (
    createSelector(
        mapLyricAnnotationIndex,
        lyricAnnotationIndex => (
            lyricAnnotationIndex === annotationIndex
        )
    )
)

export const mapCursorVerseIndex = createSelector(
    mapSliderVerseIndex,
    mapActivatedVerseIndex,
    mapLyricVerseIndex,
    (
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex
    ) => getCursorIndex(
        sliderVerseIndex,
        activatedVerseIndex,
        lyricVerseIndex
    )
)
