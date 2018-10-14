import {
    OVERPASS_SIGN_BACK,
    OVERPASS_SIGN_FRONT
} from '../../../cutoutKeys'

const ARRANGEMENTS_MAP = {
    [OVERPASS_SIGN_BACK]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 4,
            zHeight: 3
        }
    },
    [OVERPASS_SIGN_FRONT]: {
        yIndex: 5,
        arrangement: {
            xFloat: 9,
            xWidth: 4,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
