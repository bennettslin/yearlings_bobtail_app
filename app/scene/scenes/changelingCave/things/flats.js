import {
    FAMILY_HOUSE,
    CAVE_SHADOWS,
    STALACTITES
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [FAMILY_HOUSE]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [CAVE_SHADOWS]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
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
