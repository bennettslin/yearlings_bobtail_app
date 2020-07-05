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

export const mapQueuedPromisePlay = (
    { [AUDIO_STORE]: { queuedPromisePlay } }
) => queuedPromisePlay

const mapCanPlayAfterSongTransition = createSelector(
    mapLyricSongIndex,
    mapSelectedSongIndex,
    (
        lyricSongIndex,
        selectedSongIndex
    ) => lyricSongIndex === selectedSongIndex
)

export const mapIsReadyToPromisePlay = createSelector(
    mapCanPlayAfterSongTransition,
    mapQueuedPromisePlay,
    (
        canPlayAfterSongTransition,
        queuedPromisePlay
    ) => canPlayAfterSongTransition && queuedPromisePlay
)

export const mapIsPlayButtonEnabled = createSelector(
    mapPlayerCanPlayThrough,
    mapIsPlaying,
    mapCanPlayAfterSongTransition,
    (
        playerCanPlayThrough,
        isPlaying,
        canPlayAfterSongTransition
    ) => playerCanPlayThrough && (canPlayAfterSongTransition || isPlaying)
)
