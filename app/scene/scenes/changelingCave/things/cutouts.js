import {
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    CAMPFIRE,
    STALACTITES
} from 'scene/cutoutKeys'

const ARRANGEMENTS_MAP = {
    [TROLL_SHADOW_LEFT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 0.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [TROLL_SHADOW_RIGHT]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [CAMPFIRE]: {
        yIndex: 1,
        arrangement: {
            xFloat: 10.5,
            xWidth: 2,
            zHeight: 3
        }
    },
    [STALACTITES]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8,
            xWidth: 5,
            zHeight: 5
        }
    }
}

export default ARRANGEMENTS_MAP
