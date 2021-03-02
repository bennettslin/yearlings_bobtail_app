import { createSelector } from 'reselect'
import { mapLyricSongIndex } from '../lyric/selector'
import { mapSelectedSongIndex } from '../selected/selector'
import { AUDIO_STORE } from '../../constants/store'
import { mapPlayerCanPlayThrough } from '../players/selector'

export const mapIsPlaying = (
    { [AUDIO_STORE]: { isPlaying } },
) => isPlaying

export const mapIsPlayButtonEnabled = createSelector(
    mapPlayerCanPlayThrough,
    mapIsPlaying,
    mapSelectedSongIndex,
    mapLyricSongIndex,
    (
        playerCanPlayThrough,
        isPlaying,
        selectedSongIndex,
        lyricSongIndex,
    ) => playerCanPlayThrough && (
        selectedSongIndex === lyricSongIndex ||
        isPlaying
    ),
)
