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

export const mapQueuedSongIndex = (
    { [AUDIO_STORE]: { queuedSongIndex } }
) => queuedSongIndex

export const mapCanPromisePlay = createSelector(
    mapQueuedSongIndex,
    mapLyricSongIndex,
    (
        queuedSongIndex,
        lyricSongIndex
    ) => queuedSongIndex === lyricSongIndex
)

export const mapIsPlayButtonEnabled = createSelector(
    mapPlayerCanPlayThrough,
    mapIsPlaying,
    mapSelectedSongIndex,
    mapLyricSongIndex,
    (
        playerCanPlayThrough,
        isPlaying,
        selectedSongIndex,
        lyricSongIndex
    ) => playerCanPlayThrough && (
        selectedSongIndex === lyricSongIndex || isPlaying
    )
)
