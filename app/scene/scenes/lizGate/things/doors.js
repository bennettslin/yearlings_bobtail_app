import {
    LIZ_GATE_OUTSIDE,
    LIZ_GATE_OUTSIDE_OPEN
} from 'scene/doorKeys'

const ARRANGEMENTS_MAP = {
    [LIZ_GATE_OUTSIDE]: {
        yIndex: 3,
        arrangement: {
            xFloat: 6,
            xWidth: 3,
            zHeight: 3
        }
    },
    [LIZ_GATE_OUTSIDE_OPEN]: {
        yIndex: 3,
        arrangement: {
            xFloat: 3,
            xWidth: 3,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
