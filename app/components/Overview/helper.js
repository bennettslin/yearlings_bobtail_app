import { getSongObject } from '../../helpers/dataHelper'

export const getSongOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song ? song.overview : ''
}
