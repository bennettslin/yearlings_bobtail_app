import { getSong } from 'album/api/songs'

export const getUnit = (songIndex, unitIndex) => {
    const songs = getSong(songIndex)

    return songs.lyricUnits ? songs.lyricUnits[unitIndex] : []
}
