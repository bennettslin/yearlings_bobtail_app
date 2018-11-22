import {
    HAS_SIDE_CARDS,
    IS_DOUBLESPEAKER
} from 'constants/lyrics'
import {
    PHONE_CLASS,
    LS_MINI_CLASS,
    TABLET_CLASS,
    LS_LAPTOP_CLASS,
    MONITOR_CLASS,
    DEVICE_OBJECTS
} from 'constants/responsive'

import { getSongObject } from './dataHelper'

export const getIsDesktop = (deviceIndex) => {
    const deviceClassName = DEVICE_OBJECTS[deviceIndex].className

    return deviceClassName === LS_LAPTOP_CLASS || deviceClassName === MONITOR_CLASS
}

export const getIsPhone = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === PHONE_CLASS
}

export const getIsMini = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === LS_MINI_CLASS
}

export const getIsTablet = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === TABLET_CLASS
}

export const getIsMonitor = (deviceIndex) => {
    return DEVICE_OBJECTS[deviceIndex].className === MONITOR_CLASS
}

export const getIsTabletOrMini = (deviceIndex) => {
    return getIsTablet(deviceIndex) || getIsMini(deviceIndex)
}

export const getShowOneOfTwoLyricColumns = (songIndex, deviceIndex) => {
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
        return !getIsMonitor(deviceIndex) && !getIsTablet(deviceIndex)

    // Doesn't apply to other songs.
    } else {
        return false
    }
}

export const getIsOverlayingAnnotation = ({
    deviceIndex,
    isLyricExpanded
}) => {
    return (
        // Annotation is always in overlay if lyric is expanded...
        isLyricExpanded ||

        // Or if we are in phone.
        getIsPhone(deviceIndex)
    )
}
