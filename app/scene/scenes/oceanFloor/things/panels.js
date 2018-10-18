import {
    OCEAN_CAVE_INTERIOR,
    OCEAN_CAVE_EXTERIOR
} from '../../../panelKeys'

const ARRANGEMENTS_MAP = {
    [OCEAN_CAVE_INTERIOR]: {
        yIndex: 1,
        arrangement: {
            xFloat: 2,
            xWidth: 5,
            zHeight: 3
        }
    },
    [OCEAN_CAVE_EXTERIOR]: {
        yIndex: 3,
        arrangement: {
            xFloat: 3,
            xWidth: 5,
            zHeight: 3
        }
    }
}

export default ARRANGEMENTS_MAP
