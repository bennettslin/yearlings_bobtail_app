import {
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [COMMERCIAL_FAR_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 1.5,
            xWidth: 4,
            zHeight: 3
        }
    },
    [COMMERCIAL_FAR_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9.5,
            xWidth: 4,
            zHeight: 3
        }
    },
    [COMMERCIAL_MIDDLE_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 1,
            xWidth: 3,
            zHeight: 4
        }
    },
    [COMMERCIAL_MIDDLE_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 10,
            xWidth: 3,
            zHeight: 4
        }
    },
    [COMMERCIAL_NEAR_LEFT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [COMMERCIAL_NEAR_RIGHT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
