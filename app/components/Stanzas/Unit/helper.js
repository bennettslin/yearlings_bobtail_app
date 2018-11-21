import { getSongObject } from '../../../helpers/dataHelper'

export const getLyricUnitArray = (songIndex, unitIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyricUnits ? songs.lyricUnits[unitIndex] : []
}
