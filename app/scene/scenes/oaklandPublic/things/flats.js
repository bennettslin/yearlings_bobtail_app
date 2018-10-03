import {
    PUBLIC_CENTRE,
    PUBLIC_FAR_LEFT,
    PUBLIC_MIDDLE_LEFT,
    PUBLIC_NEAR_LEFT,
    PUBLIC_FAR_RIGHT,
    PUBLIC_MIDDLE_RIGHT,
    PUBLIC_NEAR_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [PUBLIC_CENTRE]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 6,
            zHeight: 3
        }
    },
    [PUBLIC_FAR_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [PUBLIC_FAR_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [PUBLIC_MIDDLE_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 1.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [PUBLIC_MIDDLE_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9.5,
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
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 6
        }
    }
}

export default ARRANGEMENTS_MAP
