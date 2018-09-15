import {
    LOS_ANGELES_BACKDROP,
    TARPIT_THOUGHT,
    SIBLING_THOUGHT
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [LOS_ANGELES_BACKDROP]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [TARPIT_THOUGHT]: {
        yIndex: 5,
        arrangement: {
            xFloat: 3,
            xWidth: 4,
            zHeight: 3,
            zOffset: 4.5
        }
    },
    [SIBLING_THOUGHT]: {
        yIndex: 5,
        arrangement: {
            xFloat: 8,
            xWidth: 4,
            zHeight: 3,
            zOffset: 4.5
        }
    }
}

export default ARRANGEMENTS_MAP
