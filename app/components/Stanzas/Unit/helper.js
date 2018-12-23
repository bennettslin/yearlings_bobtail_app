import { getSongObject } from 'album/api/songs'

export const getUnit = (songIndex, unitIndex) => {
    const songs = getSongObject(songIndex)

    return songs.lyricUnits ? songs.lyricUnits[unitIndex] : []
}
