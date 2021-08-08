import { createSelector } from 'reselect'
import { mapLyricSongIndex } from '../lyric/selector'
import { mapSelectedSongIndex } from '../selected/selector'
import { AUDIO_STORE } from '../../constants/store'
import { mapCanPlayThrough } from '../players/selector'

export const mapIsPlaying = (
    { [AUDIO_STORE]: { isPlaying } },
) => isPlaying

export const mapIsPlayButtonEnabled = createSelector(
    mapCanPlayThrough,
    mapIsPlaying,
    mapSelectedSongIndex,
    mapLyricSongIndex,
    (
        canPlayThrough,
        isPlaying,
        selectedSongIndex,
        lyricSongIndex,
    ) => canPlayThrough && (
        selectedSongIndex === lyricSongIndex ||
        isPlaying
    ),
)
