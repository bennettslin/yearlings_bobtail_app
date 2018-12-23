import { getSongObject } from 'album/api/songs'
import { getIsPhone } from '../../helpers/responsive'

export const getSongOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song ? song.overview : ''
}

export const getIsToggleInOverview = (deviceIndex) => {
    return getIsPhone(deviceIndex)
}
