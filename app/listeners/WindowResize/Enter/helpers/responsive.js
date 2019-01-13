import {
    getIsPhoneWidth,
    getIsDesktopWidth
} from '../../../../helpers/responsive'

export const getHasRoomForScore = (deviceWidthIndex) => {
    return !getIsPhoneWidth(deviceWidthIndex)
}

export const getIsLyricExpandable = (deviceWidthIndex) => {
    return !getIsDesktopWidth(deviceWidthIndex)
}
