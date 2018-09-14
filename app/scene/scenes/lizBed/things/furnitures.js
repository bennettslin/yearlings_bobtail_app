import {
    LIZ_MATTRESS,
    LIZ_PILLOWS,
    LIZ_MATTRESS_REFLECTION,
    LIZ_PILLOWS_REFLECTION
} from 'scene/furnitureKeys'

const ARRANGEMENTS_MAP = {
    [LIZ_MATTRESS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5,
            xWidth: 5,
            zHeight: 0.5
        }
    },
    [LIZ_PILLOWS]: {
        yIndex: 4,
        arrangement: {
            xFloat: 5,
            xWidth: 5,
            zHeight: 0.5
        }
    },
    [LIZ_MATTRESS_REFLECTION]: {
        yIndex: 2,
        arrangement: {
            xFloat: 5,
            xWidth: 5,
            zHeight: 6,
            zOffset: 0.5
        }
    },
    [LIZ_PILLOWS_REFLECTION]: {
        yIndex: 2,
        arrangement: {
            xFloat: 5,
            xWidth: 5,
            zHeight: 1,
            zOffset: 5.5
        }
    }
}

export default ARRANGEMENTS_MAP
