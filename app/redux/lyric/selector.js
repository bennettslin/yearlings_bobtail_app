import { createSelector } from 'reselect'
import { LYRIC_STORE } from '../../constants/store'

export const mapLyricSongIndex = (
    { [LYRIC_STORE]: { lyricSongIndex } },
) => lyricSongIndex

export const getMapIsSongLyric = songIndex => createSelector(
    mapLyricSongIndex,
    lyricSongIndex => songIndex === lyricSongIndex,
)

export const mapLyricVerseIndex = (
    { [LYRIC_STORE]: { lyricVerseIndex } },
) => lyricVerseIndex

export const mapLyricAnnotationIndex = (
    { [LYRIC_STORE]: { lyricAnnotationIndex } },
) => lyricAnnotationIndex

export const mapIsLyricLogue = (
    { [LYRIC_STORE]: { isLyricLogue } },
) => isLyricLogue

export const getMapIsLyricAnnotation = annotationIndex => (
    createSelector(
        mapLyricAnnotationIndex,
        lyricAnnotationIndex => (
            lyricAnnotationIndex === annotationIndex
        ),
    )
)
