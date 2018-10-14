import {
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    CAMPFIRE,
    STALACTITES
} from '../../../cutoutKeys'

const ARRANGEMENTS_MAP = {
    [TROLL_SHADOW_LEFT]: {
        yIndex: 5,
        arrangement: {
            xFloat: 1.5,
            xWidth: 3,
            zHeight: 2
        }
    },
    [TROLL_SHADOW_RIGHT]: {
        yIndex: 5,
        arrangement: {
            xFloat: 9,
            xWidth: 4,
            zHeight: 4
        }
    },
    [CAMPFIRE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 4,
            xWidth: 2,
            zHeight: 1.5
        }
    },
    [STALACTITES]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 1.5,
            zOffset: 6.5
        }
    }
}

export default ARRANGEMENTS_MAP
