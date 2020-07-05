import { createSelector } from 'reselect'
import { mapLyricSongIndex } from '../lyric/selector'
import { mapSelectedSongIndex } from '../selected/selector'
import { AUDIO_STORE } from '../../constants/store'
import { mapPlayerCanPlayThrough } from '../players/selector'

export const mapQueuedPlayFromLogue = (
    { [AUDIO_STORE]: { queuedPlayFromLogue } }
) => queuedPlayFromLogue

export const mapIsPlaying = (
    { [AUDIO_STORE]: { isPlaying } }
) => isPlaying

export const mapQueuedTogglePlay = (
    { [AUDIO_STORE]: { queuedTogglePlay } }
) => queuedTogglePlay

export const mapIsReadyToPlay = createSelector(
    mapLyricSongIndex,
    mapSelectedSongIndex,
    (
        lyricSongIndex,
        selectedSongIndex
    ) => lyricSongIndex === selectedSongIndex
)

export const mapIsPlayButtonEnabled = createSelector(
    mapPlayerCanPlayThrough,
    mapIsPlaying,
    mapIsReadyToPlay,
    (
        playerCanPlayThrough,
        isPlaying,
        isReadyToPlay
    ) => playerCanPlayThrough && (isReadyToPlay || isPlaying)
)
