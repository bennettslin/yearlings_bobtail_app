import { getSong } from 'album/api/songs'
import { getIsPhone } from '../../helpers/responsive'

export const getSongOverview = (songIndex) => {
    const song = getSong(songIndex)
    return song ? song.overview : ''
}

export const getIsToggleInOverview = (deviceIndex) => {
    return getIsPhone(deviceIndex)
}
