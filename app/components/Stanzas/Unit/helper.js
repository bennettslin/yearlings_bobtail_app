import { getSongObject } from 'album/api/songs'

export const getLyricUnitArray = (songIndex, unitIndex) => {
    const songs = getSongObject(songIndex)
    return songs.lyricUnits ? songs.lyricUnits[unitIndex] : []
}
