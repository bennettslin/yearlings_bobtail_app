import {
    PUBLIC_FAR_LEFT,
    PUBLIC_MIDDLE_LEFT,
    PUBLIC_NEAR_LEFT,
    PUBLIC_FAR_RIGHT,
    PUBLIC_MIDDLE_RIGHT,
    PUBLIC_NEAR_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [PUBLIC_FAR_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 1.5,
            xWidth: 4,
            zHeight: 3
        }
    },
    [PUBLIC_FAR_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9.5,
            xWidth: 4,
            zHeight: 3
        }
    },
    [PUBLIC_MIDDLE_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 1,
            xWidth: 3,
            zHeight: 4
        }
    },
    [PUBLIC_MIDDLE_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 10,
            xWidth: 3,
            zHeight: 4
        }
    },
    [PUBLIC_NEAR_LEFT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [PUBLIC_NEAR_RIGHT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
