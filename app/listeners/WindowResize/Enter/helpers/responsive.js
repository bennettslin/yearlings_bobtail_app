import {
    getIsPhoneWidth,
    getIsDesktopWidth
} from '../../../../helpers/responsive'

export const getIsScoreShowable = (deviceWidthIndex) => {
    return !getIsPhoneWidth(deviceWidthIndex)
}


export const getIsLyricExpandable = (deviceWidthIndex) => {
    return !getIsDesktopWidth(deviceWidthIndex)
}
