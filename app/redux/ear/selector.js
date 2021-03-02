import { createSelector } from 'reselect'
import { getIsDoublespeakerShown } from '../../helpers/doublespeaker'
import { mapLyricSongIndex } from '../lyric/selector'
import { mapDeviceWidthIndex } from '../viewport/selector'

export const mapIsEarShown = createSelector(
    mapLyricSongIndex,
    mapDeviceWidthIndex,
    (
        lyricSongIndex,
        deviceWidthIndex,
    ) => getIsDoublespeakerShown({
        songIndex: lyricSongIndex,
        deviceWidthIndex,
    }),
)
