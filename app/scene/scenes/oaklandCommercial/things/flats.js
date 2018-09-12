import {
    COMMERCIAL_BACKDROP,
    COMMERCIAL_LEFT,
    COMMERCIAL_RIGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [COMMERCIAL_BACKDROP]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [COMMERCIAL_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    },
    [COMMERCIAL_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 9,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
