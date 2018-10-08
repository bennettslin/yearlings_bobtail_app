import {
    PUBLIC_FAR_LEFT,
    PUBLIC_NEAR_LEFT,
    PUBLIC_FAR_RIGHT,
    PUBLIC_NEAR_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [PUBLIC_FAR_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 1,
            xWidth: 3,
            zHeight: 5
        }
    },
    [PUBLIC_FAR_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [PUBLIC_NEAR_LEFT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 6
        }
    },
    [PUBLIC_NEAR_RIGHT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 11,
            xWidth: 1,
            zHeight: 6
        }
    }
}

export default ARRANGEMENTS_MAP
