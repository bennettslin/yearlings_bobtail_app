import {
    getIsPhone
} from '../../../helpers/responsiveHelper'

const getIsScoreShowable = (deviceIndex) => {
    return !getIsPhone(deviceIndex)
}

export {
    getIsScoreShowable
}
