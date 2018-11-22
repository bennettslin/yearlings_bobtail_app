import { getSongObject } from '../../helpers/dataHelper'
import { getIsPhone } from '../../helpers/responsiveHelper'

export const getSongOverview = (songIndex) => {
    const song = getSongObject(songIndex)
    return song ? song.overview : ''
}

export const getIsToggleInOverview = (deviceIndex) => {
    return getIsPhone(deviceIndex)
}
