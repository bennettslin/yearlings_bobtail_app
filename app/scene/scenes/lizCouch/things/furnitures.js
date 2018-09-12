import {
    LIZ_BLINDS,
    LIZ_BLINDS_OPEN,
    LIZ_CUSHIONS,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
    LIZ_GATE_INSIDE_OPEN
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [LIZ_BLINDS]: {
        yIndex: 1,
        arrangement: {
            xFloat: 6,
            xWidth: 5,
            zHeight: 3.5
        }
    },
    [LIZ_BLINDS_OPEN]: {
        yIndex: 1,
        arrangement: {
            xFloat: 6,
            xWidth: 5,
            zHeight: 3.5
        }
    },
    [LIZ_CUSHIONS]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 5.5
        }
    },
    [LIZ_DOOR]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 5.5
        }
    },
    [LIZ_DOOR_OPEN]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 5.5
        }
    },
    [LIZ_GATE_INSIDE]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 5.5
        }
    },
    [LIZ_GATE_INSIDE_OPEN]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 2,
            zHeight: 5.5
        }
    }
}

export default ARRANGEMENTS_MAP
