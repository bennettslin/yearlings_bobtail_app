import {
    OCEAN_DEPTHS_FRONT,
    OCEAN_DEPTHS_BACK
} from 'scene/flatKeys'

const ARRANGEMENTS_MAP = {
    [OCEAN_DEPTHS_FRONT]: {
        yIndex: 0,
        arrangement: {
            xFloat: 5.5,
            xWidth: 12,
            zHeight: 4
        }
    },
    [OCEAN_DEPTHS_BACK]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
