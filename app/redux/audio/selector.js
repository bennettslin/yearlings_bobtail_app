import { createSelector } from 'reselect'
import { mapLyricSongIndex } from '../lyric/selector'
import { AUDIO_STORE } from '../../constants/store'

export const mapQueuedPlayFromLogue = (
    { [AUDIO_STORE]: { queuedPlayFromLogue } }
) => queuedPlayFromLogue

export const mapQueuedPlaySongIndex = (
    { [AUDIO_STORE]: { queuedPlaySongIndex } }
) => queuedPlaySongIndex

export const mapIsPlaying = (
    { [AUDIO_STORE]: { isPlaying } }
) => isPlaying

export const mapQueuedTogglePlay = (
    { [AUDIO_STORE]: { queuedTogglePlay } }
) => queuedTogglePlay

export const mapIsSelectPlayReady = createSelector(
    mapLyricSongIndex,
    mapQueuedPlaySongIndex,
    (
        lyricSongIndex,
        queuedPlaySongIndex
    ) => lyricSongIndex === queuedPlaySongIndex
)
