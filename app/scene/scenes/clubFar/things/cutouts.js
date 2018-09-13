import {
    CROWD_BACK_FAR,
    CROWD_BACK_NEAR
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [CROWD_BACK_FAR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    },
    [CROWD_BACK_NEAR]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 10,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
