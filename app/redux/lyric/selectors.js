import { createSelector } from "reselect"
import { getStanzaIndexForVerse } from "../../api/album/verses"
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

export const getMapIsVerseCursor = verseIndex => createSelector(
    mapCursorVerseIndex,
    cursorVerseIndex => verseIndex === cursorVerseIndex
)

export const getMapVerseCursorStatus = verseIndex => createSelector(
    mapCursorVerseIndex,
    cursorVerseIndex => {
        if (verseIndex < cursorVerseIndex) {
            return -1
        } else if (verseIndex > cursorVerseIndex) {
            return 1
        } else {
            return 0
        }
    }
)

export const getMapIsCursorStanza = stanzaIndex => createSelector(
    mapLyricSongIndex,
    mapCursorVerseIndex,
    (
        lyricSongIndex,
        cursorVerseIndex
    ) => (
        stanzaIndex === getStanzaIndexForVerse(
            lyricSongIndex,
            cursorVerseIndex
        )
    )
)
