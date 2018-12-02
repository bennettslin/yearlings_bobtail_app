import { getSongObject } from '../../../helpers/data'

export const getLyricUnitArray = (songIndex, unitIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyricUnits ? songs.lyricUnits[unitIndex] : []
}
