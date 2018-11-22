import {
    HAS_SIDE_CARDS,
    IS_DOUBLESPEAKER
} from '../../constants/lyrics'
import { getSongObject } from '../../helpers/dataHelper'
import {
    getIsPhone,
    getIsTablet,
    getIsMonitor
} from '../../helpers/responsiveHelper'

const getIsDoublespeakerShown = ({
    deviceIndex,
    songIndex
}) => {
    const selectedSong = getSongObject(songIndex),
        {
            [HAS_SIDE_CARDS]: hasSideCards,
            [IS_DOUBLESPEAKER]: isDoublespeaker
        } = selectedSong

    // Applies to Uncanny Valley Boy.
    if (hasSideCards && !isDoublespeaker) {
        return getIsPhone(deviceIndex)

    // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
    } else if (isDoublespeaker) {
        /**
         * In tablet width, lyrics section takes up full width of bottom,
         * while in monitor width, the screen is wide enough as well.
         */
        return (
            !getIsMonitor(deviceIndex) &&
            !getIsTablet(deviceIndex)
        )

    // Doesn't apply to other songs.
    } else {
        return false
    }
}

export {
    getIsDoublespeakerShown
}
