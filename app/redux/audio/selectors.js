import { createSelector } from "reselect"
import {
    mapLyricSongIndex,
    mapLyricVerseIndex
} from "../lyric/selectors"

export const mapQueuedPlayFromLogue = (
    { audioStore: { queuedPlayFromLogue } }
) => queuedPlayFromLogue

export const mapQueuedPlaySongIndex = (
    { audioStore: { queuedPlaySongIndex } }
) => queuedPlaySongIndex

export const mapQueuedPlayVerseIndex = (
    { audioStore: { queuedPlayVerseIndex } }
) => queuedPlayVerseIndex

export const mapIsPlaying = (
    { audioStore: { isPlaying } }
) => isPlaying

export const mapQueuedTogglePlay = (
    { audioStore: { queuedTogglePlay } }
) => queuedTogglePlay

export const mapIsSelectPlayReady = createSelector(
    mapLyricSongIndex,
    mapLyricVerseIndex,
    mapQueuedPlaySongIndex,
    mapQueuedPlayVerseIndex,
    (
        lyricSongIndex,
        lyricVerseIndex,
        queuedPlaySongIndex,
        queuedPlayVerseIndex
    ) => (
        lyricSongIndex === queuedPlaySongIndex &&
        lyricVerseIndex === queuedPlayVerseIndex
    )
)
