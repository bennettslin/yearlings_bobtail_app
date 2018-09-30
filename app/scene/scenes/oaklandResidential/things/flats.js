import {
    RESIDENTIAL_CENTRE,
    RESIDENTIAL_FAR_LEFT,
    RESIDENTIAL_MIDDLE_LEFT,
    RESIDENTIAL_NEAR_LEFT,
    RESIDENTIAL_FAR_RIGHT,
    RESIDENTIAL_MIDDLE_RIGHT,
    RESIDENTIAL_NEAR_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [RESIDENTIAL_CENTRE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 5.5,
            xWidth: 6,
            zHeight: 2
        }
    },
    [RESIDENTIAL_FAR_LEFT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [RESIDENTIAL_FAR_RIGHT]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [RESIDENTIAL_MIDDLE_LEFT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 1.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [RESIDENTIAL_MIDDLE_RIGHT]: {
        yIndex: 3,
        arrangement: {
            xFloat: 9.5,
            xWidth: 2,
            zHeight: 4
        }
    },
    [RESIDENTIAL_NEAR_LEFT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 5
        }
    },
    [RESIDENTIAL_NEAR_RIGHT]: {
        yIndex: 4,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
