import { createSelector } from 'reselect'
import {
    mapLyricSongIndex,
    mapLyricVerseIndex
} from '../lyric/selectors'
import { AUDIO_STORE } from '../../constants/store'

export const mapQueuedPlayFromLogue = (
    { [AUDIO_STORE]: { queuedPlayFromLogue } }
) => queuedPlayFromLogue

export const mapQueuedPlaySongIndex = (
    { [AUDIO_STORE]: { queuedPlaySongIndex } }
) => queuedPlaySongIndex

export const mapQueuedPlayVerseIndex = (
    { [AUDIO_STORE]: { queuedPlayVerseIndex } }
) => queuedPlayVerseIndex

export const mapIsPlaying = (
    { [AUDIO_STORE]: { isPlaying } }
) => isPlaying

export const mapQueuedTogglePlay = (
    { [AUDIO_STORE]: { queuedTogglePlay } }
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
