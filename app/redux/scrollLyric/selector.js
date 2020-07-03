import { createSelector } from 'reselect'
import { getStartTimeForVerse } from '../../api/album/time'
import { getSceneIndexForVerse } from '../../api/album/verses'
import { mapSelectedSongIndex } from '../selected/selector'
import { SCROLL_LYRIC_STORE } from '../../constants/store'

export const mapScrollLyricLog = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricLog } }
) => scrollLyricLog

export const mapScrollLyricByVerse = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricByVerse } }
) => scrollLyricByVerse

export const mapScrollLyricIndex = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricIndex } }
) => scrollLyricIndex

export const mapScrollLyricAlways = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricAlways } }
) => scrollLyricAlways

export const mapScrollLyricNoDuration = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricNoDuration } }
) => scrollLyricNoDuration

export const mapScrollLyricFromAutoScroll = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricFromAutoScroll } }
) => scrollLyricFromAutoScroll

export const mapScrollLyricWithVerseCallback = (
    { [SCROLL_LYRIC_STORE]: { scrollLyricWithVerseCallback } }
) => scrollLyricWithVerseCallback

export const mapQueuedScrollVerseIndex = createSelector(
    mapScrollLyricIndex,
    mapScrollLyricWithVerseCallback,
    (
        scrollLyricIndex,
        scrollLyricWithVerseCallback
    ) => (
        scrollLyricWithVerseCallback ? scrollLyricIndex : -1
    )
)

export const mapQueuedScrollSceneIndex = createSelector(
    mapSelectedSongIndex,
    mapQueuedScrollVerseIndex,
    (
        selectedSongIndex,
        queuedScrollVerseIndex
    ) => getSceneIndexForVerse(
        selectedSongIndex,
        queuedScrollVerseIndex
    )
)

export const mapQueuedScrollTime = createSelector(
    mapSelectedSongIndex,
    mapQueuedScrollVerseIndex,
    (
        selectedSongIndex,
        queuedScrollVerseIndex
    ) => getStartTimeForVerse(
        selectedSongIndex,
        queuedScrollVerseIndex
    )
)
