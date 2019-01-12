import { getSong } from 'album/api/songs'
import {
    getIsPhoneWidth,
    getIsTabletWidth,
    getIsMonitorWidth
} from '../../helpers/responsive'

export const getIsDoublespeakerShown = ({
    deviceIndex,
    songIndex
}) => {
    const selectedSong = getSong(songIndex),
        {
            hasSideCards,
            isDoublespeaker
        } = selectedSong

    // Applies to Uncanny Valley Boy.
    if (hasSideCards && !isDoublespeaker) {
        return getIsPhoneWidth(deviceIndex)

    // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
    } else if (isDoublespeaker) {
        /**
         * In tablet width, lyrics section takes up full width of bottom,
         * while in monitor width, the screen is wide enough as well.
         */
        return (
            !getIsMonitorWidth(deviceIndex) &&
            !getIsTabletWidth(deviceIndex)
        )

    // Doesn't apply to other songs.
    } else {
        return false
    }
}
