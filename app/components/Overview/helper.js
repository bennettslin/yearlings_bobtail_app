import { getSongObject } from '../../helpers/data'
import { getIsPhone } from '../../helpers/responsive'

export const getSongOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song ? song.overview : ''
}

export const getIsToggleInOverview = (deviceIndex) => {
    return getIsPhone(deviceIndex)
}
