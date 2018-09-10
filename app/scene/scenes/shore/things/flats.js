import {
    SHORE_FRONT,
    SHORE_BACK
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [SHORE_FRONT]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [SHORE_BACK]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
