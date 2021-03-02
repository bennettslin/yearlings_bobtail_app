import { createSelector } from 'reselect'
import { mapLyricSongIndex } from '../lyric/selector'
import { mapSelectedSongIndex } from '../selected/selector'
import { AUDIO_STORE } from '../../constants/store'
import { mapSelectedPlayerCanPlayThrough } from '../players/selector'

export const mapIsPlaying = (
    { [AUDIO_STORE]: { isPlaying } },
) => isPlaying

export const mapIsPlayButtonEnabled = createSelector(
    mapSelectedPlayerCanPlayThrough,
    mapIsPlaying,
    mapSelectedSongIndex,
    mapLyricSongIndex,
    (
        selectedPlayerCanPlayThrough,
        isPlaying,
        selectedSongIndex,
        lyricSongIndex,
    ) => selectedPlayerCanPlayThrough && (
        selectedSongIndex === lyricSongIndex ||
        isPlaying
    ),
)
