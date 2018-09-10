import {
    TROLL_SHADOW_LEFT,
    TROLL_SHADOW_RIGHT,
    CAMPFIRE
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
    }
}

export default ARRANGEMENTS_MAP
