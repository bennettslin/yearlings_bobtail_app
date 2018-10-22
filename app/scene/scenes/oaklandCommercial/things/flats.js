import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT
} from '../../../flatKeys'

const ARRANGEMENTS_MAP = {
    [COMMERCIAL_CENTRE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 6,
            zHeight: 3
        }
    },
    [COMMERCIAL_FAR_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [COMMERCIAL_FAR_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [COMMERCIAL_MIDDLE_LEFT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 1.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [COMMERCIAL_MIDDLE_RIGHT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 9.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [COMMERCIAL_NEAR_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 6
        }
    },
    [COMMERCIAL_NEAR_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 6
        }
    }
}

export default ARRANGEMENTS_MAP
