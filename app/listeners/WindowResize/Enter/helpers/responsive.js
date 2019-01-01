import {
    getIsPhone,
    getIsDesktop
} from '../../../../helpers/responsive'

export const getIsScoreShowable = (deviceIndex) => {
    return !getIsPhone(deviceIndex)
}


export const getIsLyricExpandable = (deviceIndex) => {
    return !getIsDesktop(deviceIndex)
}
