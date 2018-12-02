import {
    getIsPhone,
    getIsDesktop
} from '../../../helpers/responsive'

const getIsScoreShowable = (deviceIndex) => {
    return !getIsPhone(deviceIndex)
}


const getIsLyricExpandable = (deviceIndex) => {
    return !getIsDesktop(deviceIndex)
}

export {
    getIsScoreShowable,
    getIsLyricExpandable
}
