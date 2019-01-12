import {
    getIsPhoneWidth,
    getIsDesktopWidth
} from '../../../../helpers/responsive'

export const getIsScoreShowable = (deviceIndex) => {
    return !getIsPhoneWidth(deviceIndex)
}


export const getIsLyricExpandable = (deviceIndex) => {
    return !getIsDesktopWidth(deviceIndex)
}
