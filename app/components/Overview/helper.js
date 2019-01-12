import { getSong } from 'album/api/songs'
import { getIsPhoneWidth } from '../../helpers/responsive'

export const getSongOverview = (songIndex) => {
    const song = getSong(songIndex)
    return song ? song.overview : ''
}

export const getIsToggleInOverview = (deviceWidthIndex) => {
    return getIsPhoneWidth(deviceWidthIndex)
}
