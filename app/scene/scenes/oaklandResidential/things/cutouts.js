import {
    TWIN_STREETLAMP_FAR,
    TWIN_STREETLAMP_MIDDLE,
    TWIN_STREETLAMP_NEAR
} from '../../../cutoutKeys'

const ARRANGEMENTS_MAP = {
    [TWIN_STREETLAMP_FAR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1,
            zHeight: 5
        }
    },
    [TWIN_STREETLAMP_MIDDLE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1,
            zHeight: 6
        }
    },
    [TWIN_STREETLAMP_NEAR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1,
            zHeight: 7
        }
    }
}

export default ARRANGEMENTS_MAP
