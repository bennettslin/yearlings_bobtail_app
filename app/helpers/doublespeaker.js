import { getEarStatusForSong } from '../album/api/songs'
import {
    getIsPhoneWidth,
    getIsTabletWidth,
    getIsMonitorWidth
} from './responsive'

// FIXME: This can just get individual device widths directly.
export const getIsDoublespeakerShown = ({
    deviceWidthIndex,
    songIndex
}) => {
    const {
        hasSideCards,
        isDoublespeaker
    } = getEarStatusForSong(songIndex)

    // Applies to doublespeaker songs, including Grasshoppers Lie Heavy.
    if (isDoublespeaker) {
        /**
         * In tablet width, lyrics section takes up full width of bottom,
         * while in monitor width, the screen is wide enough as well.
         */
        return (
            !getIsMonitorWidth(deviceWidthIndex) &&
            !getIsTabletWidth(deviceWidthIndex)
        )

    // Applies to Uncanny Valley Boy.
    } else if (hasSideCards) {
        return getIsPhoneWidth(deviceWidthIndex)

    // Doesn't apply to other songs.
    } else {
        return false
    }
}
