import {
    RESIDENTIAL_FAR_LEFT,
    RESIDENTIAL_MIDDLE_LEFT,
    RESIDENTIAL_NEAR_LEFT,
    RESIDENTIAL_FAR_RIGHT,
    RESIDENTIAL_MIDDLE_RIGHT,
    RESIDENTIAL_NEAR_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [RESIDENTIAL_FAR_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 3,
            xWidth: 3,
            zHeight: 4
        }
    },
    [RESIDENTIAL_FAR_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 8,
            xWidth: 3,
            zHeight: 4
        }
    },
    [RESIDENTIAL_MIDDLE_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2,
            xWidth: 3,
            zHeight: 5
        }
    },
    [RESIDENTIAL_MIDDLE_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9,
            xWidth: 3,
            zHeight: 5
        }
    },
    [RESIDENTIAL_NEAR_LEFT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 1,
            xWidth: 3,
            zHeight: 6
        }
    },
    [RESIDENTIAL_NEAR_RIGHT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 10,
            xWidth: 3,
            zHeight: 6
        }
    }
}

export default ARRANGEMENTS_MAP
