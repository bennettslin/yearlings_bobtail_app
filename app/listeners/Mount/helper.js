import { getIsPhoneWidth } from 'helpers/responsive'

export const getHasRoomForScore = (deviceWidthIndex) => {
    return !getIsPhoneWidth(deviceWidthIndex)
}

export const getHasRoomForSlider = (isDesktopWidth) => {
    return isDesktopWidth
}
